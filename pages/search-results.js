import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "../Comps/PageLayouts/Link";
import Image from "next/image";
import Head from 'next/head';

import Footer from "../Comps/PageLayouts/Footer";

import { createClient } from "contentful";

import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollbarPlugin } from 'smooth-scrollbar';
import { Transition, TransitionGroup } from "react-transition-group";

class EdgeEasingPlugin extends ScrollbarPlugin {
    constructor() {
        super(...arguments);
        this._remainMomentum = {
            x: 0,
            y: 0,
        };
    }
    transformDelta(delta) {
        const { limit, offset, } = this.scrollbar;
        const x = this._remainMomentum.x + delta.x;
        const y = this._remainMomentum.y + delta.y;

        // clamps momentum within [-offset, limit - offset]
        this.scrollbar.setMomentum(Math.max(-offset.x, Math.min(x, limit.x - offset.x)), Math.max(-offset.y, Math.min(y, limit.y - offset.y)));
        return { x: 0, y: 0 };
    }
    onRender(remainMomentum) {
        Object.assign(this._remainMomentum, remainMomentum);
    }
}
EdgeEasingPlugin.pluginName = 'edgeEasing';

Scrollbar.use(EdgeEasingPlugin);

const handleDicimal = (_price) => {
    return _price + "0";
}

export const getServerSideProps = async (context) => {

    const productsBody = {
        query: `
        query  {
            products(first: 6, query: "${context.query.keyword}" ) {
              edges {
                cursor
                node {
                  title
                  description
                  handle
                  id
                  tags
                  images(first: 250) {
                    edges {
                      node {
                        transformedSrc
                      }
                    }
                  }
                  totalInventory
                  variants(first: 250) {
                    edges {
                      node {
                        id
                        sku
                        priceV2{
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                  productType
                  options(first: 250) {
                    values
                    name
                  }
                  vendor
                  availableForSale
                }
              }
            }
          }
          `
    };

    const { data } = await fetch("https://beloved-development-test.myshopify.com/api/2021-04/graphql.json",
        {
            method: "POST",
            headers: {
                'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productsBody)
        })
        .then(async (res) => {
            return await res.json()
        })


    const availabelProducts = data.products.edges.filter((product) => product.node.availableForSale);

    const totalBody = {
        query: `
        query {
            products(first: 250, query: "${context.query.keyword}") {
            edges {
                cursor
            }
            }
        }
          `
    };

    const totalResults = await fetch("https://beloved-development-test.myshopify.com/api/2021-04/graphql.json",
        {
            method: "POST",
            headers: {
                'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(totalBody)
        })
        .then(async (res) => {
            return await res.json()
        })

    return {
        props: {
            products: availabelProducts.map((product) => ({
                available: product.node.availableForSale,
                description: product.node.description,
                slug: product.node.handle,
                id: product.node.id,
                images: product.node.images.edges.map((image) => ({
                    src: image.node.transformedSrc
                })),
                size: product.node.options[0].values,
                color: product.node.options[1].values,
                material: product.node.options[2].values,
                category: product.node.productType.split(", "),
                name: product.node.title,
                inventoryQuantity: product.node.totalInventory,
                variantId: product.node.variants.edges[0].node.id,
                sku: product.node.variants.edges[0].node.sku,
                price: handleDicimal(product.node.variants.edges[0].node.priceV2.amount),
                currencyCode: product.node.variants.edges[0].node.priceV2.currencyCode,
                brand: product.node.vendor,
                tags: product.node.tags,
                cursor: product.cursor
            })),
            totalResults: totalResults.data.products.edges.map((product) => ({
                cursor: product.cursor
            }))
        }
    }

}

const SearchResults = ({ products, headerRef, totalResults, humburgerRef, toggleNewsletterPopup }) => {

    const scrollerRef = useRef();
    const router = useRouter();
    const [searchResults, setSearchResults] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getScrollProxy();
    }, [currentPage])

    useEffect(() => {
        getPagination();
    }, [])

    const getScrollProxy = () => {
        headerRef.current.classList.remove("pull-up", "shrinked")
        humburgerRef.current.classList.remove("pull-up", "shrinked")

        const scroller = scrollerRef.current;

        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: null });

        if (bodyScrollBar.offset.y !== 0) {
            bodyScrollBar.scrollTo(0, 0, 500)
        }

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.scrollerProxy(scrollerRef.current, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            }
        });

        var lastOffset = null;

        bodyScrollBar.addListener(({ offset }) => {
            ScrollTrigger.update()

            if (offset.y > 0) {
                headerRef.current.classList.add("shrinked")
                humburgerRef.current.classList.add("shrinked")
            } else {
                headerRef.current.classList.remove("shrinked")
                humburgerRef.current.classList.remove("shrinked")
            }

            if (!lastOffset) {
                lastOffset = offset;
                return;
            }

            if (offset.y < lastOffset.y) {
                headerRef.current.classList.remove("pull-up")
                humburgerRef.current.classList.remove("pull-up")
            } else if (offset.y > lastOffset.y) {
                headerRef.current.classList.add("pull-up")
                humburgerRef.current.classList.add("pull-up")
            } else {
                console.log("still")
            }

            lastOffset = offset;

        });

        ScrollTrigger.defaults({ scroller: scroller });


        if (document.querySelector('.gsap-marker-scroller-start')) {
            const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

            bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
        }

    }

    const getPagination = () => {

        const numberOfPages = totalResults.length % 6 === 0 ? totalResults.length / 6 : Math.floor(totalResults.length / 6) + 1;
        const pagesArr = [];

        for (let i = 1; i <= numberOfPages; i++) {
            pagesArr.push(i);
        };

        if (numberOfPages <= 4) {
            return pagesArr.map((page, i) => {
                return (
                    <button
                        key={i + 1}
                        onClick={() => {
                            getProducts(i + 1)
                            setCurrentPage(i + 1)
                        }}
                        className={`page-num ${currentPage === i + 1 ? "active" : ""}`}
                    >
                        <span className="mx-6">{page}</span>
                    </button>
                )
            })
        } else {

            if (currentPage <= 2) {

                return (
                    <>
                        <button
                            onClick={() => {
                                getProducts(1)
                                setCurrentPage(1)
                            }}
                            className={`page-num ${currentPage === 1 ? "active" : ""}`}
                        >
                            <span className="mx-6">1</span>
                        </button>

                        <button
                            onClick={() => {
                                getProducts(2)
                                setCurrentPage(2)
                            }}
                            className={`page-num ${currentPage === 2 ? "active" : ""}`}
                        >
                            <span className="mx-6">2</span>
                        </button>

                        <button
                            onClick={() => {
                                getProducts(3)
                                setCurrentPage(3)
                            }}
                            className={`page-num ${currentPage === 3 ? "active" : ""}`}
                        >
                            <span className="mx-6">3</span>
                        </button>

                        <span>...</span>

                        <button
                            onClick={() => {
                                getProducts(numberOfPages)
                                setCurrentPage(numberOfPages)
                            }}
                            className={`page-num ${currentPage === numberOfPages ? "active" : ""}`}
                        >
                            <span className="mx-6">{numberOfPages}</span>
                        </button>
                    </>
                )

            } else if (currentPage > 2 || currentPage <= numberOfPages - 2) {

                return (
                    <>
                        <button
                            onClick={() => {
                                getProducts(1)
                                setCurrentPage(1)
                            }}
                            className={`page-num`}
                        >
                            <span className="mx-6">1</span>
                        </button>

                        <span>...</span>

                        <button
                            onClick={() => {
                                getProducts(currentPage - 1)
                                setCurrentPage(currentPage - 1)
                            }}
                            className={`page-num`}
                        >
                            <span className="mx-6">{currentPage - 1}</span>
                        </button>

                        <button
                            onClick={() => {
                                getProducts(currentPage)
                                setCurrentPage(currentPage)
                            }}
                            className={`page-num active`}
                        >
                            <span className="mx-6">{currentPage}</span>
                        </button>

                        <button
                            onClick={() => {
                                getProducts(currentPage + 1)
                                setCurrentPage(currentPage + 1)
                            }}
                            className={`page-num`}
                        >
                            <span className="mx-6">{currentPage + 1}</span>
                        </button>

                        <span>...</span>

                        <button
                            onClick={() => {
                                getProducts(numberOfPages)
                                setCurrentPage(numberOfPages)
                            }}
                            className={`page-num`}
                        >
                            <span className="mx-6">{numberOfPages}</span>
                        </button>
                    </>
                )

            } else if (currentPage > numberOfPages - 2) {

                return (
                    <>
                        <button
                            onClick={() => {
                                getProducts(1)
                                setCurrentPage(1)
                            }}
                            className="page-num"
                        >
                            <span className="mx-6">1</span>
                        </button>

                        <span>...</span>

                        <button
                            onClick={() => {
                                getProducts(numberOfPages - 2)
                                setCurrentPage(numberOfPages - 2)
                            }}
                            className={`page-num ${currentPage === numberOfPages - 2 ? "active" : ""}`}
                        >
                            <span className="mx-6">{numberOfPages - 2}</span>
                        </button>

                        <button
                            onClick={() => {
                                getProducts(numberOfPages - 1)
                                setCurrentPage(numberOfPages - 1)

                            }}
                            className={`page-num ${currentPage === numberOfPages - 1 ? "active" : ""}`}
                        >
                            <span className="mx-6">{numberOfPages - 1}</span>
                        </button>

                        <button
                            onClick={() => {
                                getProducts(numberOfPages)
                                setCurrentPage(numberOfPages)
                            }}
                            className={`page-num ${currentPage === numberOfPages ? "active" : ""}`}
                        >
                            <span className="mx-6">{numberOfPages}</span>
                        </button>
                    </>
                )

            }

        }

    }

    const getProducts = async (_page) => {

        const body = {
            query: `
            query  {
                products(first: 6, query: "${router.query.keyword}", after: "${_page > 1 ? totalResults[(_page - 1) * 6 - 1].cursor : totalResults[0].cursor}" ) {
                  edges {
                    cursor
                    node {
                      title
                      description
                      handle
                      id
                      tags
                      images(first: 250) {
                        edges {
                          node {
                            transformedSrc
                          }
                        }
                      }
                      totalInventory
                      variants(first: 250) {
                        edges {
                          node {
                            id
                            sku
                            priceV2{
                              amount
                              currencyCode
                            }
                          }
                        }
                      }
                      productType
                      options(first: 250) {
                        values
                        name
                      }
                      vendor
                      availableForSale
                    }
                  }
                }
              }
              `
        };

        const { data } = await fetch("https://beloved-development-test.myshopify.com/api/2021-04/graphql.json",
            {
                method: "POST",
                headers: {
                    'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            .then(async (res) => {
                return await res.json()
            })

        const availabelProducts = data.products.edges.filter((product) => product.node.availableForSale);

        setSearchResults(availabelProducts.map((product) => ({
            available: product.node.availableForSale,
            description: product.node.description,
            slug: product.node.handle,
            id: product.node.id,
            images: product.node.images.edges.map((image) => ({
                src: image.node.transformedSrc
            })),
            size: product.node.options[0].values,
            color: product.node.options[1].values,
            material: product.node.options[2].values,
            category: product.node.productType.split(", "),
            name: product.node.title,
            inventoryQuantity: product.node.totalInventory,
            variantId: product.node.variants.edges[0].node.id,
            sku: product.node.variants.edges[0].node.sku,
            price: handleDicimal(product.node.variants.edges[0].node.priceV2.amount),
            currencyCode: product.node.variants.edges[0].node.priceV2.currencyCode,
            brand: product.node.vendor,
            tags: product.node.tags,
            cursor: product.cursor
        })))

    }

    return (

        <>

            <Head>
                <title>Beloved Joy | Search Results</title>
            </Head>

            <div ref={scrollerRef} className="page">

                <div className="components-wrapper">

                    <div className="c-search-results pt-4">

                        <div className="background pink" />

                        <div className="c-search-results__wrapper px-md-1 px-xl-5 py-3 pb-xl-5 w-100">

                            <div className="c-search-results-text__wrapper d-flex align-items-center justify-content-md-start justify-content-center mb-md-4">

                                <div>

                                    <p className="mb-6">

                                        search results for:

                                </p>

                                    <h2 className="position-relative">

                                        {router.query.keyword}

                                        <span className="c-search-results-count">{searchResults.length}</span>

                                    </h2>

                                </div>

                            </div>

                            <TransitionGroup className="c-search-results-content__wrapper">

                                <Transition>

                                    <div className="d-flex flex-wrap">

                                        {
                                            searchResults.map((data) => {
                                                return <div className="c-search-results-content col-md-4 col-12">

                                                    <Link href={`/products/[slug]`} as={`/products/${data.slug}`}>

                                                        <a className="d-block w-100 h-100">

                                                            <div className="c-search-results-image_wrapper position-relative">

                                                                <figure className="fig-wrapper should-animate">

                                                                    <Image alt="" src={data.images[0].src} layout="fill" />

                                                                </figure>

                                                                <figure className="fig-wrapper c-product-thumb__overlay should-animate">

                                                                    <Image alt="" src={data.images[1].src} layout="fill" />

                                                                </figure>

                                                            </div>

                                                            <div className="c-product__caption text-white should-animate mt-1">
                                                                <h4 className="c-product__caption__text">
                                                                    {data.name}
                                                                </h4>
                                                                <h4 className="price">
                                                                    ${data.price}
                                                                </h4>
                                                            </div>

                                                        </a>

                                                    </Link>

                                                </div>
                                            })
                                        }

                                    </div>

                                </Transition>

                            </TransitionGroup>

                            <div className="d-flex justify-content-center">

                                <div className="c-search-results-pagination d-flex align-items-center justify-content-between no-select col-md-6 col-lg-3 mt-3 mt-xl-5">

                                    <button
                                        className="prev p-1 p-xl-0 mr-md-3"
                                        onClick={() => {
                                            if (currentPage > 1) {
                                                getProducts(currentPage - 1);
                                                setCurrentPage(currentPage - 1)
                                            }
                                        }}
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49" className="arrow mirror"><path d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"></path></svg>

                                    </button>

                                    <div>

                                        {getPagination()}

                                    </div>

                                    <button
                                        className="next p-1 p-xl-0 ml-md-3"
                                        onClick={(e) => {
                                            if (totalResults.length % 6 === 0) {
                                                if (currentPage < Math.floor(totalSearchResults.length / 6)) {
                                                    getProducts(currentPage + 1);
                                                    setCurrentPage(currentPage + 1)
                                                }
                                            } else {
                                                if (currentPage < Math.floor(totalResults.length / 6 + 1)) {
                                                    getProducts(currentPage + 1);
                                                    setCurrentPage(currentPage + 1)
                                                }
                                            }
                                        }}
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49" className="arrow"><path d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"></path></svg>

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <Footer currentPage={currentPage} getScrollProxy={getScrollProxy} toggleNewsletterPopup={toggleNewsletterPopup} />

            </div>

        </>
    );
}

export default SearchResults;