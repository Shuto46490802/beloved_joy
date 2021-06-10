import React, { useEffect, useRef, useState } from "react";

import Link from "../PageLayouts/Link";
import { useRouter } from "next/router";

import { gsap } from "gsap";

const SideBar = ({ setClothingData, setShoesData, setAccessoriesData, clothingData, accessoriesData, shoesData, collectionSideBarRef, sideBarInnerRef, products }) => {

    const router = useRouter();

    const [clothingAccordion, setClothingAccordion] = useState({ state: false, anim: "" });
    const clothingAccordionRef = useRef();
    const clothingInTl = useRef();
    const clothingOutTl = useRef();

    const [shoesAccordion, setShoesAccordion] = useState({ state: false, anim: "" });
    const shoesAccordionRef = useRef();
    const shoesInTl = useRef();
    const shoesOutTl = useRef();

    const [accessoriesAccordion, setAccessoriesAccordion] = useState({ state: false, anim: "" });
    const accessoriesAccordionRef = useRef();
    const accessoriesInTl = useRef();
    const accessoriesOutTl = useRef();

    useEffect(() => {

        if (router.pathname.includes("clothing")) {
            setClothingAccordion({ state: true, anim: "anim-in" })
        }

        if (router.pathname.includes("shoes")) {
            setShoesAccordion({ state: true, anim: "anim-in" })
        }

        if (router.pathname.includes("accessories")) {
            setAccessoriesAccordion({ state: true, anim: "anim-in" })
        }

    }, [])

    const toggleAccordion = () => {
        if (clothingAccordion.state) {
            setClothingAccordion({ state: false, anim: "anim-out" })
        } else {
            setClothingAccordion({ state: false, anim: "" })
        }

        if (shoesAccordion.state) {
            setShoesAccordion({ state: false, anim: "anim-out" })
        } else {
            setShoesAccordion({ state: false, anim: "" })
        }

        if (accessoriesAccordion.state) {
            setAccessoriesAccordion({ state: false, anim: "anim-out" })
        } else {
            setAccessoriesAccordion({ state: false, anim: "" })
        }

        setClothingData("viewall")
        setShoesData("viewall")
        setAccessoriesData("viewall")
    }

    const toggleClothing = () => {
        if (!clothingAccordion.state) {
            setClothingAccordion({ state: true, anim: "anim-in" })

            if (shoesAccordion.state) {
                setShoesAccordion({ state: false, anim: "anim-out" })
            } else {
                setShoesAccordion({ state: false, anim: "" })
            }

            if (accessoriesAccordion.state) {
                setAccessoriesAccordion({ state: false, anim: "anim-out" })
            } else {
                setAccessoriesAccordion({ state: false, anim: "" })
            }
        } else {
            return;
        }

        setClothingData("viewall")
        setShoesData("viewall")
        setAccessoriesData("viewall")
    }

    const toggleShoes = () => {
        if (!shoesAccordion.state) {
            setShoesAccordion({ state: true, anim: "anim-in" })

            if (clothingAccordion.state) {
                setClothingAccordion({ state: false, anim: "anim-out" })
            } else {
                setClothingAccordion({ state: false, anim: "" })
            }

            if (accessoriesAccordion.state) {
                setAccessoriesAccordion({ state: false, anim: "anim-out" })
            } else {
                setAccessoriesAccordion({ state: false, anim: "" })
            }
        } else {
            return;
        }

        setClothingData("viewall")
        setShoesData("viewall")
        setAccessoriesData("viewall")
    }

    const toggleAccessories = () => {
        if (!accessoriesAccordion.state) {
            setAccessoriesAccordion({ state: true, anim: "anim-in" })

            if (clothingAccordion.state) {
                setClothingAccordion({ state: false, anim: "anim-out" })
            } else {
                setClothingAccordion({ state: false, anim: "" })
            }

            if (shoesAccordion.state) {
                setShoesAccordion({ state: false, anim: "anim-out" })
            } else {
                setShoesAccordion({ state: false, anim: "" })
            }
        } else {
            return;
        }

        setClothingData("viewall")
        setShoesData("viewall")
        setAccessoriesData("viewall")
    }

    useEffect(() => {

        if (!clothingAccordion.state && clothingAccordion.anim === "anim-out") {

            clothingOutTl.current = gsap.timeline({ paused: false })
                .fromTo(clothingAccordionRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.4
                    })
                .fromTo(clothingAccordionRef.current,
                    {
                        height: `${clothingAccordionRef.current.clientHeight}px`
                    },
                    {
                        height: `0px`,
                        duration: 0.4
                    }, 0.2)
                .to(clothingAccordionRef.current,
                    {
                        visibility: "hidden",
                        duration: 0
                    })
        }

    }, [clothingAccordion, clothingOutTl])

    useEffect(() => {

        if (clothingAccordion.state && clothingAccordion.anim === "anim-in") {

            clothingInTl.current = gsap.timeline({ paused: false })
                .to(clothingAccordionRef.current,
                    {
                        visibility: "visible",
                        duration: 0
                    })
                .fromTo(clothingAccordionRef.current,
                    {
                        height: 0
                    },
                    {
                        height: "auto",
                        duration: 0.4
                    })
                .fromTo(clothingAccordionRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.4
                    }, 0.2)
        }

    }, [clothingAccordion, clothingInTl])

    useEffect(() => {

        if (!shoesAccordion.state && shoesAccordion.anim === "anim-out") {

            shoesOutTl.current = gsap.timeline({ paused: false })
                .fromTo(shoesAccordionRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.4
                    })
                .fromTo(shoesAccordionRef.current,
                    {
                        height: `${shoesAccordionRef.current.clientHeight}px`
                    },
                    {
                        height: `0px`,
                        duration: 0.4
                    }, 0.2)
                .to(shoesAccordionRef.current,
                    {
                        visibility: "hidden",
                        duration: 0
                    })
        }

    }, [shoesAccordion, shoesOutTl])

    useEffect(() => {

        if (shoesAccordion.state && shoesAccordion.anim === "anim-in") {

            shoesInTl.current = gsap.timeline({ paused: false })
                .to(shoesAccordionRef.current,
                    {
                        visibility: "visible",
                        duration: 0
                    })
                .fromTo(shoesAccordionRef.current,
                    {
                        height: 0
                    },
                    {
                        height: "auto",
                        duration: 0.4
                    })
                .fromTo(shoesAccordionRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.4
                    }, 0.2)
        }

    }, [shoesAccordion, shoesInTl])

    useEffect(() => {

        if (!accessoriesAccordion.state && accessoriesAccordion.anim === "anim-out") {

            accessoriesOutTl.current = gsap.timeline({ paused: false })
                .fromTo(accessoriesAccordionRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.4
                    })
                .fromTo(accessoriesAccordionRef.current,
                    {
                        height: `${accessoriesAccordionRef.current.clientHeight}px`
                    },
                    {
                        height: `0px`,
                        duration: 0.4
                    }, 0.2)
                .to(accessoriesAccordionRef.current,
                    {
                        visibility: "hidden",
                        duration: 0
                    })
        }

    }, [accessoriesAccordion, accessoriesOutTl])

    useEffect(() => {

        if (accessoriesAccordion.state && accessoriesAccordion.anim === "anim-in") {

            accessoriesInTl.current = gsap.timeline({ paused: false })
                .to(accessoriesAccordionRef.current,
                    {
                        visibility: "visible",
                        duration: 0
                    })
                .fromTo(accessoriesAccordionRef.current,
                    {
                        height: 0
                    },
                    {
                        height: "auto",
                        duration: 0.4
                    })
                .fromTo(accessoriesAccordionRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.4
                    }, 0.2)
        }

    }, [accessoriesAccordion, accessoriesInTl])

    const [productsData] = useState(products)

    const [newArrivals] = useState(productsData.filter(({tags}) => tags.indexOf("new arrival") !== -1));

    const [clothing] = useState(productsData.filter(({ category }) => category.indexOf("clothing") !== -1));
    const [top] = useState(productsData.filter(({ category }) => category.indexOf("top") !== -1));
    const [bottom] = useState(productsData.filter(({ category }) => category.indexOf("bottom") !== -1));
    const [intimates] = useState(productsData.filter(({ category }) => category.indexOf("intimates") !== -1));

    const [shoes] = useState(productsData.filter(({ category }) => category.indexOf("shoes") !== -1));
    const [sneakers] = useState(productsData.filter(({ category }) => category.indexOf("sneaker") !== -1));
    const [boots] = useState(productsData.filter(({ category }) => category.indexOf("boots") !== -1));
    const [flats] = useState(productsData.filter(({ category }) => category.indexOf("flats") !== -1));
    const [sandals] = useState(productsData.filter(({ category }) => category.indexOf("sandals") !== -1));

    const [accessories] = useState(productsData.filter(({ category }) => category.indexOf("accessories") !== -1));
    const [earings] = useState(productsData.filter(({ category }) => category.indexOf("earing") !== -1));
    const [rings] = useState(productsData.filter(({ category }) => category.indexOf("ring") !== -1));
    const [necklace] = useState(productsData.filter(({ category }) => category.indexOf("necklace") !== -1));

    const [homewear] = useState(productsData.filter(({ category }) => category.indexOf("homewear") !== -1));

    const [filterOpen, setFilterOpen] = useState(true);
    const accordionContainerRef = useRef();
    const accordionRef = useRef();

    useEffect(() => {

        if (filterOpen) {

            gsap.timeline({ paused: false })
                .set(accordionRef.current,
                    {
                        visibility: "visible"
                    })
                .fromTo(accordionRef.current,
                    {
                        height: 0
                    },
                    {
                        height: "auto",
                        duration: 0.4
                    })
                .fromTo(accordionRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.5
                    })

        } else {

            gsap.timeline({ paused: false })
                .fromTo(accordionRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.5
                    })
                .fromTo(accordionRef.current,
                    {
                        height: () => accordionContainerRef.current.clientHeight
                    },
                    {
                        height: 0,
                        duration: 0.4
                    })
                .set(accordionRef.current,
                    {
                        visibility: "hidden"
                    })

        }

    }, [filterOpen])


    return (
        <div ref={collectionSideBarRef} className="collections-side-bar onTop col-xl-3 col-lg-4 col-md-4 column-left ps-md-2 ps-lg-3 col-12">

            <div className="collections-side-bar__list__content h-100">

                <div ref={sideBarInnerRef} className="px-1 px-md-0 overflow-hidden">

                    <div className="filtter__button mt-5 mb-1 d-md-none d-flex justify-content-between align-items-center cursor-pointer">

                        <div className="h1">Filters</div>

                        <div className="d-flex">

                            <span className="me-1">Shop by</span>

                            <div
                                className={`collections-side-bar__list__link__icon position-relative ${filterOpen ? "is-active" : ""} `}
                                onClick={() => {
                                    setFilterOpen(!filterOpen)
                                }}
                            >
                                <svg x="0px" y="0px" viewBox="0 0 24 24">
                                    <polygon style={{ fill: "#FFFFFF" }} points="12,14.71 7.65,10.35 8.35,9.65 12,13.29 15.65,9.65 16.35,10.35 " />
                                </svg>
                            </div>

                        </div>

                    </div>

                    <div ref={accordionContainerRef} className="accordion-item__content__wrapper ">

                        <div ref={accordionRef}>

                            <div className="accordion-item__categories__wrapper position-relative pt-md-4">

                                <div className={`category__filter pt-1 pt-lg-3 pt-md-5 ${router.pathname.includes("shop-all") ? "is-active" : ""}`}>

                                    <div className="category__filter__inner">

                                        <div onClick={() => toggleAccordion()} className="filter__heading mb-1">

                                            <Link ariaLabel="shop all" href="/collections/shop-all">
                                                <a className="filter__heading__text mb-1 h2 line-link grow text-white">
                                                    <span className="line-link">
                                                        Shop All
                                                        <span className="filter-text__count grow">{products.length}</span>
                                                    </span>
                                                </a>
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                                <div className={`category__filter ${router.pathname.includes("new-arrivals") ? "is-active" : ""}`}>

                                    <div className="category__filter__inner">

                                        <div onClick={() => toggleAccordion()} className="filter__heading mb-1">

                                            <Link ariaLabel="new arrivals" href="/collections/new-arrivals">
                                                <a className="filter__heading__text mb-1 h2 line-link grow text-white">
                                                    <span className="line-link">
                                                        New Arrivals
                                                        <span className="filter-text__count grow">{newArrivals.length}</span>
                                                    </span>
                                                </a>
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                                <div className={`category__filter ${router.pathname.includes("clothing") ? "is-active" : ""}`}>

                                    <div className="category__filter__inner">

                                        <div onClick={() => toggleClothing()} className="filter__heading mb-1">

                                            <Link ariaLabel="clothing" href="/collections/clothing">
                                                <a className="filter__heading__text mb-1 h2 line-link grow text-white">
                                                    <span className="line-link">
                                                        Clothing
                                                         <span className="filter-text__count grow">{clothing.length}</span>
                                                    </span>
                                                </a>
                                            </Link>

                                        </div>

                                        <div ref={clothingAccordionRef} className="filter__items d-flex flex-column">

                                            <div onClick={() => setClothingData("viewall")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={clothingData === "viewall" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        View all
                                                        </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setClothingData("top")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={clothingData === "top" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Top
                                                            <span className="filter-text__count">{top.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setClothingData("bottom")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={clothingData === "bottom" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Bottom
                                                            <span className="filter-text__count">{bottom.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setClothingData("intimates")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={clothingData === "intimates" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Intimates
                                                            <span className="filter-text__count">{intimates.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className={`category__filter ${router.pathname.includes("shoes") ? "is-active" : ""}`}>

                                    <div className="category__filter__inner">

                                        <div onClick={() => toggleShoes()} className="filter__heading mb-1">

                                            <Link ariaLabel="shoes" href="/collections/shoes">
                                                <a className="filter__heading__text mb-1 h2 line-link grow text-white">
                                                    <span className="line-link">
                                                        Shoes
                                                        <span className="filter-text__count grow">{shoes.length}</span>
                                                    </span>
                                                </a>
                                            </Link>

                                        </div>

                                        <div ref={shoesAccordionRef} className="filter__items d-flex flex-column">

                                            <div onClick={() => setShoesData("viewall")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={shoesData === "viewall" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        View all
                                                        </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setShoesData("sneakers")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={shoesData === "sneakers" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Sneakers
                                                            <span className="filter-text__count">{sneakers.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setShoesData("boots")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={shoesData === "boots" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Boots
                                                            <span className="filter-text__count">{boots.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setShoesData("flats")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={shoesData === "flats" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Flats
                                                            <span className="filter-text__count">{flats.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setShoesData("sandals")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={shoesData === "sandals" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Sandals
                                                            <span className="filter-text__count">{sandals.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                        </div>

                                    </div>


                                </div>

                                <div className={`category__filter ${router.pathname.includes("accessories") ? "is-active" : ""}`}>

                                    <div className="category__filter__inner">

                                        <div onClick={() => toggleAccessories()} className="filter__heading mb-1">

                                            <Link ariaLabel="accessories" href="/collections/accessories">
                                                <a className="filter__heading__text mb-1 h2 line-link grow text-white">
                                                    <span className="line-link">
                                                        Accessories
                                                        <span className="filter-text__count grow">{accessories.length}</span>
                                                    </span>
                                                </a>
                                            </Link>

                                        </div>

                                        <div ref={accessoriesAccordionRef} className="filter__items d-flex flex-column">

                                            <div onClick={() => setAccessoriesData("viewall")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={accessoriesData === "viewall" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        View all
                                                        </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setAccessoriesData("earings")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={accessoriesData === "earings" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Earings
                                                            <span className="filter-text__count">{earings.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setAccessoriesData("rings")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={accessoriesData === "rings" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Rings
                                                            <span className="filter-text__count">{rings.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                            <div onClick={() => setAccessoriesData("necklace")} className="filter__item d-flex flex-column mb-1 align-items-start">
                                                <button name="side-bar-button" className="filter__item__link d-inline-block">
                                                    <span style={accessoriesData === "necklace" ? { opacity: 1 } : {}} className="filter__item__text h6 position-relative text-white">
                                                        Necklace
                                                            <span className="filter-text__count">{necklace.length}</span>
                                                    </span>
                                                </button>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className={`category__filter ${router.pathname.includes("homewear") ? "is-active" : ""}`}>

                                    <div className="category__filter__inner">

                                        <div onClick={() => toggleAccordion()} className="filter__heading mb-1">


                                            <Link ariaLabel="homewear" href="/collections/homewear">
                                                <a className="filter__heading__text mb-1 h2 line-link grow text-white">
                                                    <span className="line-link">
                                                        Homewear
                                                        <span className="filter-text__count grow">{homewear.length}</span>
                                                    </span>
                                                </a>
                                            </Link>

                                        </div>

                                        {/* <div className="filter__items d-flex flex-column">

                                                        <div className="filter__item">
                                                            <Link><a href="" className="filter__item__link"><span className="filter__item__text"></span></a></Link>
                                                        </div>

                                        </div> */}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default SideBar;