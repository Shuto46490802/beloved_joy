import React, { useState, useRef, useEffect } from "react";
import Link from "./Link";
import Image from "next/image";
import { gsap } from "gsap";

import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Menu = ({ menuOpen, toggleMenu, numOfShopAll, numOfNewArrivals, numOfClothing, numOfShoes, numOfAccessories, numOfHomewear }) => {

    const menuRef = useRef();
    const [accordion, setAccordion] = useState({ state: false, anim: "" });
    const accordionRef = useRef();

    const imageWrapRefs = useRef([]);
    const addToImageWrapRefs = (_el) => {
        if (_el && !imageWrapRefs.current.includes(_el)) {
            imageWrapRefs.current.push(_el)
        } else {
            imageWrapRefs.current = []
        }
    }

    const imageRefs = useRef([]);
    const addToImageRefs = (_el) => {
        if (_el && !imageRefs.current.includes(_el)) {
            imageRefs.current.push(_el)
        } else {
            imageRefs.current = [];
        }
    }

    const accordionTextRefs = useRef([]);
    const addToAccordionTextRefs = (_el) => {
        if (_el && !accordionTextRefs.current.includes(_el)) {
            accordionTextRefs.current.push(_el)
        } else {
            accordionTextRefs.current = [];
        }
    }

    const tlInAccordion = useRef();
    const tlOutAccordion = useRef();

    useEffect(() => {
        if (!accordion.state && accordion.anim === "anim-out") {
            tlOutAccordion.current = gsap.timeline({ paused: false })
                .fromTo(imageWrapRefs.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.6
                    }, 0)
                .fromTo(accordionTextRefs.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.6
                    }, 0)
                .fromTo(accordionRef.current,
                    {
                        height: `${accordionRef.current.clientHeight}px`,
                    },
                    {
                        height: "0",
                        duration: 0.6,
                        ease: "Power2.easeOut",
                    }, 0.3)
                .to(accordionRef.current,
                    {
                        visibility: "hidden"
                    })
        }

    }, [accordion, tlOutAccordion])

    useEffect(() => {
        if (accordion.state && accordion.anim === "anim-in") {
            tlInAccordion.current = gsap.timeline({ paused: false })
                .to(accordionRef.current,
                    {
                        visibility: "visible",
                        duration: 0
                    })
                .fromTo(accordionRef.current,
                    {
                        height: "0"
                    },
                    {
                        height: "auto",
                        duration: 1,
                        ease: "Power2.easeOut",
                    })
                .fromTo(imageWrapRefs.current,
                    {
                        x: "40%",
                        transform: "rotate(-10deg)",
                        opacity: 0
                    },
                    {
                        x: "0%",
                        transform: "rotate(0deg)",
                        opacity: 1,
                        transformOrigin: "left bottom",
                        duration: 1
                    }, 0.3)
                .fromTo(imageRefs.current,
                    {
                        transform: "rotate(4deg) scale(1.35, 1.35)",
                    },
                    {
                        transform: "rotate(0deg) scale(1, 1)",
                        duration: 1,
                    }, 0.3)
                .fromTo(accordionTextRefs.current,
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.75
                    }, 0.6)
        }
    }, [accordion, tlInAccordion])

    useEffect(() => {
        if (!menuOpen.state) {
            setAccordion({ state: false, anim: "anim-out" })
        }
    }, [menuOpen])

    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = []
        }
    }

    const borderRefs = useRef([]);
    const addToBorderRefs = (_el) => {
        if (_el && !borderRefs.current.includes(_el)) {
            borderRefs.current.push(_el)
        } else {
            borderRefs.current = []
        }
    }

    const innerRef = useRef();
    const backgroundRef = useRef();
    const formRef = useRef();
    const tlIn = useRef();
    const tlOut = useRef();

    useEffect(() => {
        if (!menuOpen.state && menuOpen.anim === "anim-out") {
            tlOut.current = gsap.timeline({ paused: false })
                .fromTo(textRefs.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 1
                    })
                .fromTo(formRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 1
                    }, 0)
                .fromTo(innerRef.current,
                    {
                        y: "0%"
                    },
                    {
                        y: "-100%",
                        duration: 1,
                        ease: "Power2.easeInOut"
                    }, 0)
                .fromTo(backgroundRef.current,
                    {
                        opacity: 0.6
                    },
                    {
                        opacity: 0,
                        duration: 1
                    }, 0.3)
                .to(menuRef.current,
                    {
                        visibility: "hidden",
                        duration: 0
                    })
        }
    }, [menuOpen, tlOut])

    useEffect(() => {
        if (menuOpen.state && menuOpen.anim === "anim-in") {
            tlIn.current = gsap.timeline({ paused: false })
                .to(menuRef.current,
                    {
                        visibility: "visible",
                        duration: 0
                    })
                .fromTo(innerRef.current,
                    {
                        y: "-100%"
                    },
                    {
                        y: "0%",
                        duration: 1,
                        ease: "Power2.easeInOut"
                    })
                .fromTo(backgroundRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 0.6,
                        duration: 1
                    }, 0.1)
                .fromTo(textRefs.current,
                    {
                        y: "-100%",
                        transform: "rotate(-15deg)",
                        opacity: 0
                    },
                    {
                        y: "0%",
                        transform: "rotate(0deg)",
                        opacity: 1,
                        transformOrigin: "left bottom",
                        duration: 1,
                        stagger: 0.05,
                        ease: "Power2.easeInOut"
                    }, 0.9)
                .fromTo(formRef.current,
                    {
                        y: 100,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1
                    }, 0.9)
                .fromTo(borderRefs.current,
                    {
                        transform: "scaleX(0)"
                    },
                    {
                        transform: "scaleX(1)",
                        transformOrigin: "center center",
                        duration: 0.4,
                        stagger: 0.1
                    })
        }
    }, [menuOpen, tlIn])

    return (
        <div ref={menuRef} className={`c-menu position-fixed t-0 l-0 w-100 d-flex justify-content-end ${accordion.state ? "state-accordion-open" : ""}`}>
            <div ref={backgroundRef} className="n-background" />
            <div ref={innerRef} className={"c-menu__inner"}>
                <div className="c-menu__panel">
                    <div className="c-menu__inner__forcer position-relative d-flex flex-wrap align-items-between">
                        <div className={"c-menu__wrapper d-flex flex-wrap w-100"}>
                            <ul className={"c-menu__list w-100"}>
                                <li className="c-menu__list__item w-100 my-1 ms-1">
                                    <button name="button" onClick={() => setAccordion({ state: !accordion.state, anim: !accordion.state ? "anim-in" : "anim-out" })} className="c-menu__list__link js-accordion__trigger position-relative">
                                        <span ref={addToTextRefs} className={"c-menu__list__link__text lh-1"}>
                                            Shop
                                            </span>
                                        <div className={"c-menu__list__link__icon"}>
                                            <svg x="0px" y="0px" viewBox="0 0 24 24">
                                                <polygon style={{ fill: "#FFFFFF" }} points="12,14.71 7.65,10.35 8.35,9.65 12,13.29 15.65,9.65 16.35,10.35 " />
                                            </svg>
                                        </div>
                                    </button>

                                    <div ref={accordionRef} className={"js-accordion__body"} >
                                        <ul className={"c-menu__shop-list js-accordion__inner w-100 d-flex flex-wrap pt-1"} >
                                            <li className={"c-menu__shop-list__item"}>
                                                <Link href="/collections/shop-all">
                                                    <a onClick={() => toggleMenu()} className={"c-menu__shop-list__link w-100 h-100"}>
                                                        <div ref={addToImageWrapRefs} className={"c-menu__shop-list__link__thumb "}>
                                                            <div className={"c-menu__shop-list__link__thumb__inner u-illustration-parent"}>
                                                                <figure ref={addToImageRefs} className={"fig-wrapper overlay"} >
                                                                    <Image src={img2} layout="fill" alt="" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <div ref={addToAccordionTextRefs} className={"c-menu__shop-list__link__text mt-1 lh-1"}>
                                                                Shop all
                                                            <span className={"c-menu__shop-list__link__text__count"}>{numOfShopAll}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={"c-menu__shop-list__item"}>
                                                <Link href="/collections/new-arrivals" >
                                                    <a onClick={() => toggleMenu()} className={"c-menu__shop-list__link w-100 h-100"}>
                                                        <div ref={addToImageWrapRefs} className={"c-menu__shop-list__link__thumb "}>
                                                            <div className={"c-menu__shop-list__link__thumb__inner u-illustration-parent"}>
                                                                <figure ref={addToImageRefs} className={"fig-wrapper overlay"} >
                                                                    <Image src={img3} layout="fill" alt="" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <div ref={addToAccordionTextRefs} className={"c-menu__shop-list__link__text mt-1 lh-1"}>
                                                                New Arrivals
                                                            <span className={"c-menu__shop-list__link__text__count"}>{numOfNewArrivals}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={"c-menu__shop-list__item"}>
                                                <Link href="/collections/clothing"  >
                                                    <a onClick={() => toggleMenu()} className={"c-menu__shop-list__link w-100 h-100"}>
                                                        <div ref={addToImageWrapRefs} className={"c-menu__shop-list__link__thumb "}>
                                                            <div className={"c-menu__shop-list__link__thumb__inner u-illustration-parent"}>
                                                                <figure ref={addToImageRefs} className={"fig-wrapper overlay"} >
                                                                    <Image src={img2} layout="fill" alt="" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <div ref={addToAccordionTextRefs} className={"c-menu__shop-list__link__text mt-1 lh-1"}>
                                                                Clothing
                                                            <span className={"c-menu__shop-list__link__text__count"}>{numOfClothing}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={"c-menu__shop-list__item"}>
                                                <Link href="/collections/shoes">
                                                    <a onClick={() => toggleMenu()} className={"c-menu__shop-list__link w-100 h-100"}>
                                                        <div ref={addToImageWrapRefs} className={"c-menu__shop-list__link__thumb "}>
                                                            <div className={"c-menu__shop-list__link__thumb__inner u-illustration-parent"}>
                                                                <figure ref={addToImageRefs} className={"fig-wrapper overlay"} >
                                                                    <Image src={img3} layout="fill" alt="" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <div ref={addToAccordionTextRefs} className={"c-menu__shop-list__link__text mt-1 lh-1"}>
                                                                Shoes
                                                            <span className={"c-menu__shop-list__link__text__count"}>{numOfShoes}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={"c-menu__shop-list__item"}>
                                                <Link href="/collections/accessories" >
                                                    <a onClick={() => toggleMenu()} className={"c-menu__shop-list__link w-100 h-100"}>
                                                        <div ref={addToImageWrapRefs} className={"c-menu__shop-list__link__thumb "}>
                                                            <div className={"c-menu__shop-list__link__thumb__inner u-illustration-parent"}>
                                                                <figure ref={addToImageRefs} className={"fig-wrapper overlay"} >
                                                                    <Image src={img2} layout="fill" alt="" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <div ref={addToAccordionTextRefs} className={"c-menu__shop-list__link__text mt-1 lh-1"}>
                                                                Accessories
                                                            <span className={"c-menu__shop-list__link__text__count"}>{numOfAccessories}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={"c-menu__shop-list__item"}>
                                                <Link href="/collections/homewear">
                                                    <a onClick={() => toggleMenu()} className={"c-menu__shop-list__link w-100 h-100"}>
                                                        <div ref={addToImageWrapRefs} className={"c-menu__shop-list__link__thumb "}>
                                                            <div className={"c-menu__shop-list__link__thumb__inner u-illustration-parent"}>
                                                                <figure ref={addToImageRefs} className={"fig-wrapper overlay"} >
                                                                    <Image src={img3} layout="fill" alt="" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <div ref={addToAccordionTextRefs} className={"c-menu__shop-list__link__text mt-1 lh-1"}>
                                                                Homewear
                                                            <span className={"c-menu__shop-list__link__text__count"}>{numOfHomewear}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <div ref={addToBorderRefs} className="c-menu__list__border" />

                                <li className={"c-menu__list__item my-1 ms-1"}>
                                    <Link href="/journal">
                                        <a onClick={() => toggleMenu()} className={"c-menu__list__link d-block w-100 h-100"}>
                                            <span ref={addToTextRefs} className={"c-menu__list__link__text lh-1"}>
                                                Journal
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <div ref={addToBorderRefs} className="c-menu__list__border" />

                                <li className={"c-menu__list__item my-1  ms-1"}>
                                    <Link href="/about">
                                        <a onClick={() => toggleMenu()} className={"c-menu__list__link d-block w-100 h-100"}>
                                            <span ref={addToTextRefs} className={"c-menu__list__link__text lh-1"}>
                                                About
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <div ref={addToBorderRefs} className="c-menu__list__border" />
                            </ul>

                            <ul className={"c-menu__list c-menu__list--secondary w-50 py-2"}>
                                <li className={"c-menu__list__item c-menu__list__item--secondary mx-1 my-1"}>
                                    <Link href="/contact">
                                        <a onClick={() => toggleMenu()} className={"c-menu__list__link c-menu__list__link--secondary "}>
                                            <span ref={addToTextRefs} className={"c-menu__list__link__text c-menu__list__link__text--secondary lh-1"}>
                                                Contact
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={"c-menu__list__item c-menu__list__item--secondary  mx-1 my-1"}>
                                    <Link href="/privacy/privacy-policy">
                                        <a onClick={() => toggleMenu()} className={"c-menu__list__link c-menu__list__link--secondary "}>
                                            <span ref={addToTextRefs} className={"c-menu__list__link__text c-menu__list__link__text--secondary lh-1"}>
                                                Privacy
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={"c-menu__list__item c-menu__list__item--secondary  mx-1 my-1"}>
                                    <Link href="/privacy/terms-conditions">
                                        <a onClick={() => toggleMenu()} className={"c-menu__list__link c-menu__list__link--secondary "}>
                                            <span ref={addToTextRefs} className={"c-menu__list__link__text c-menu__list__link__text--secondary  lh-1"}>
                                                Terms & Conditions
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                            <ul className={"c-menu__list c-menu__list--secondary  w-50 py-2"}>
                                <li className={"c-menu__list__item c-menu__list__item--secondary  mx-1 my-1"}>
                                    <Link href="/">
                                        <a onClick={() => toggleMenu()} className={"c-menu__list__link c-menu__list__link--secondary"}>
                                            <span ref={addToTextRefs} className={"c-menu__list__link__text c-menu__list__link__text--secondary  lh-1"}>
                                                Instagram
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={"c-menu__list__item c-menu__list__item--secondary  mx-1 my-1"}>
                                    <Link href="/">
                                        <a onClick={() => toggleMenu()} className={"c-menu__list__link c-menu__list__link--secondary "}>
                                            <span ref={addToTextRefs} className={"c-menu__list__link__text c-menu__list__link__text--secondary  lh-1"}>
                                                Poshmark
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div ref={formRef} className={"c-subscribe w-100"}>
                            <form className={"mc-embedded-subscribe-form c-subscribe__form"} name="mc-embedded-subscribe-form">
                                <h4 className={"c-subscribe__heading"}>Newsletter</h4>
                                <input className={"c-subscribe__input js-input js-email"} name="EMAIL" type="text" placeholder="Email Address" />
                                <div style={{ position: "absolute", left: "-5000px" }}>
                                    <input type="text" />
                                </div>
                                <button name="button" onClick={() => toggleMenu()} className={"c-hoz-arrow c-hoz-arrow--right js-submit"}>
                                    Subscribe
                                         <svg x="0px" y="0px" viewBox="0 0 22 10">
                                        <polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />
                                    </svg>
                                    <svg x="0px" y="0px" viewBox="0 0 22 10">
                                        <polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />
                                    </svg>
                                </button>
                                <p className="c-subscribe__offer pt-1">
                                    Sign up to our newsletter for special things and receive 10% off your next order.
                                </p>
                            </form>
                            {/* when subscribe */}
                            <p className={"c-subscribe__thanks pt-2 d-none"}>
                                Thank you for subscribing! Please use code 10percent at checkout to receive 10% off your first order.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;