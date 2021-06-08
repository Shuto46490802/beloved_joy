import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head';

//Components
import HomeIntro from "../Comps/HomePage/HomeIntro";
import HomeAbout from "../Comps/HomePage/HomeAbout";
import FeaturedProducts from "../Comps/HomePage/FeaturedProducts";
import Favorites from "../Comps/HomePage/Favorites";
import Pullout from "../Comps/HomePage/Pullout";
import Journal from "../Comps/HomePage/Journal";
import Instagram from "../Comps/HomePage/Instagram";
import Footer from "../Comps/PageLayouts/Footer";

import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollbarPlugin } from 'smooth-scrollbar';

const handleDate = (_date) => {

  let _year = _date.slice(0, 4);
  let _month = _date.slice(5, 7);
  let _day = _date.slice(8, 10)

  switch (_month) {
    case "01":
      _month = "January";
      break;
    case "02":
      _month = "February";
      break;
    case "03":
      _month = "March";
      break;
    case "04":
      _month = "April";
      break;
    case "05":
      _month = "May";
      break;
    case "06":
      _month = "June";
      break;
    case "07":
      _month = "July"
      break;
    case "08":
      _month = "August"
      break;
    case "09":
      _month = "September"
      break;
    case "10":
      _month = "October"
      break;
    case "11":
      _month = "November"
      break;
    case "12":
      _month = "December"
      break;
    default:
  }

  return _month + " " + _day + "," + " " + _year
};

const handleDicimal = (_price) => {
  return _price + "0";
}

export const getStaticProps = async () => {

  //instagram
  const url = `https://graph.facebook.com/v8.0/${process.env.INSTAGRAM_ACCOUNT_ID}?fields=name%2Cmedia.limit(12)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cusername%7D&access_token=${process.env.INSTAGRAM_ACCESS_KEY}`
  const instagramRes = await fetch(url);
  const instaData = await instagramRes.json();

  const body = {
    query: `
      query  {
        products(first: 250) {
          edges {
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
  }

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

  return {
    props: {
      instagramData: instaData.media.data.map((data) => ({
        caption: data.caption,
        mediaURL: data.media_url,
        time: handleDate(data.timestamp),
        link: data.permalink
      })),
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
      }))
    }
  }
}

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

const HomePage = ({ headerRef, humburgerRef, products, instagramData, addToHeadingRefs, addToCaptionLeftRefs, addToCaptionRightRefs, headingRefs, introImageWrapperRef, captionLeftRefs, captionRightRefs, introHeadingWrapperRef, toggleNewsletterPopup }) => {

  const scrollerRef = useRef();

  useEffect(() => {
    getScrollProxy();
  }, [])

  const getScrollProxy = () => {
    const scroller = scrollerRef.current;

    const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: null });

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

  return (
    <>
      <Head>
        <title>Beloved Joy | Home</title>
      </Head>

      <div ref={scrollerRef} className="page">

        <div className="components-wrapper">

          <HomeIntro
            getScrollProxy={getScrollProxy}
            addToHeadingRefs={addToHeadingRefs}
            addToCaptionLeftRefs={addToCaptionLeftRefs}
            addToCaptionRightRefs={addToCaptionRightRefs}
            headingRefs={headingRefs}
            introImageWrapperRef={introImageWrapperRef}
            captionLeftRefs={captionLeftRefs}
            captionRightRefs={captionRightRefs}
            introHeadingWrapperRef={introHeadingWrapperRef}
          />
          <HomeAbout getScrollProxy={getScrollProxy} products={products} />
          <FeaturedProducts getScrollProxy={getScrollProxy} products={products} />
          <Pullout getScrollProxy={getScrollProxy} products={products} />
          <Favorites getScrollProxy={getScrollProxy} />
          <Journal getScrollProxy={getScrollProxy} />
          <Instagram getScrollProxy={getScrollProxy} instagramData={instagramData} />

        </div>

        <Footer getScrollProxy={getScrollProxy} toggleNewsletterPopup={toggleNewsletterPopup} />

      </div>

    </>
  )
}

export default HomePage;

