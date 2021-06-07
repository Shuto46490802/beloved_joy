import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from "./Link";

import shopall from "../../assets/shopall.jpg";
import newArrivals from "../../assets/newArrivals.jpg";
import clothing from "../../assets/clothing.jpg";
import shoes from "../../assets/shoes.jpg";
import accessories from "../../assets/accessories.jpg";
import homewear from "../../assets/homewear.jpg";

import { gsap } from "gsap";
import { saveStyles } from './animation';

const ShopMenu = ({ shopMenuOpen, toggleShopMenu, numOfShopAll, numOfNewArrivals, numOfClothing, numOfShoes, numOfAccessories, numOfHomewear }) => {

    const backgroundRef = useRef();
    const shopMenuRef = useRef();

    const innerRefs = useRef([]);
    const addToInnerRefs = (_el) => {
        if (_el && !innerRefs.current.includes(_el)) {
            innerRefs.current.push(_el)
        } else {
            innerRefs.current = []
        }
    }

    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = []
        }
    }

    const img1Ref = useRef();
    const img2Ref = useRef();
    const img3Ref = useRef();
    const img4Ref = useRef();
    const img5Ref = useRef();
    const img6Ref = useRef();
    const [showImg1, setShowImg1] = useState({ state: true, anim: "anim-in" });
    const [showImg2, setShowImg2] = useState({ state: false, anim: "" });
    const [showImg3, setShowImg3] = useState({ state: false, anim: "" });
    const [showImg4, setShowImg4] = useState({ state: false, anim: "" });
    const [showImg5, setShowImg5] = useState({ state: false, anim: "" });
    const [showImg6, setShowImg6] = useState({ state: false, anim: "" });

    const tlOut = useRef();
    const tlIn = useRef();

    useEffect(() => {
        if (!shopMenuOpen.state && shopMenuOpen.anim === "anim-out") {
            tlOut.current = gsap.timeline({ paused: false })
                .fromTo(textRefs.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 1
                    }, 0.1)
                .fromTo(innerRefs.current,
                    {
                        y: "0%"
                    },
                    {
                        y: "-100%",
                        duration: 1,
                        ease: "Power2.easeInOut",
                        stagger: 0.1
                    }, 0)
                .fromTo(backgroundRef.current,
                    {
                        opacity: 0.6
                    },
                    {
                        opacity: 0,
                        duration: 1
                    }, 0.3)
                .to(shopMenuRef.current,
                    {
                        visibility: "hidden",
                        duration: 0
                    })
        }
    }, [shopMenuOpen, tlOut])

    useEffect(() => {
        if (shopMenuOpen.state && shopMenuOpen.anim === "anim-in") {
            tlIn.current = gsap.timeline({ paused: false })
                .to(shopMenuRef.current,
                    {
                        visibility: "visible",
                        duration: 0
                    })
                .fromTo(innerRefs.current,
                    {
                        y: "-100%"
                    },
                    {
                        y: "0%",
                        duration: 1,
                        ease: "Power2.easeInOut",
                        stagger: 0.1
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
                        duration: 0.8,
                        ease: "Power2.easeOut",
                        stagger: 0.05
                    }, 0.9)
        }
    }, [shopMenuOpen, tlIn])

    //image hover animation
    useEffect(() => {

        if (showImg1.state) {

            gsap.timeline({ paused: false, ease: "Power2.easeInOut" })
                .to(img1Ref.current,
                    {
                        zIndex: 3,
                        duration: 0
                    })
                .fromTo(img1Ref.current,
                    {
                        opacity: 0,
                        scale: 1.1
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8
                    })

        } else if (!showImg1.state && showImg1.anim === "anim-out") {

            gsap.to(img1Ref.current,
                {
                    zIndex: 2,
                    duration: 0
                })

        } else if (!showImg1.state && showImg1.anim === "") {

            gsap.to(img1Ref.current,
                {
                    zIndex: 1,
                    duration: 0
                })

        }

    }, [showImg1])

    useEffect(() => {

        if (showImg2.state) {

            gsap.timeline({ paused: false, ease: "Power2.easeInOut" })
                .to(img2Ref.current,
                    {
                        zIndex: 3,
                        duration: 0
                    })
                .fromTo(img2Ref.current,
                    {
                        opacity: 0,
                        scale: 1.1
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8
                    })

        } else if (!showImg2.state && showImg2.anim === "anim-out") {

            gsap.to(img2Ref.current,
                {
                    zIndex: 2,
                    duration: 0
                })

        } else if (!showImg2.state && showImg2.anim === "") {

            gsap.to(img2Ref.current,
                {
                    zIndex: 1,
                    duration: 0
                })

        }

    }, [showImg2])

    useEffect(() => {

        if (showImg3.state) {

            gsap.timeline({ paused: false, ease: "Power2.easeInOut" })
                .to(img3Ref.current,
                    {
                        zIndex: 3,
                        duration: 0
                    })
                .fromTo(img3Ref.current,
                    {
                        opacity: 0,
                        scale: 1.1
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8
                    })

        } else if (!showImg3.state && showImg3.anim === "anim-out") {

            gsap.to(img3Ref.current,
                {
                    zIndex: 2,
                    duration: 0
                })

        } else if (!showImg3.state && showImg3.anim === "") {

            gsap.to(img3Ref.current,
                {
                    zIndex: 1,
                    duration: 0
                })

        }

    }, [showImg3])

    useEffect(() => {

        if (showImg4.state) {

            gsap.timeline({ paused: false, ease: "Power2.easeInOut" })
                .to(img4Ref.current,
                    {
                        zIndex: 3,
                        duration: 0
                    })
                .fromTo(img4Ref.current,
                    {
                        opacity: 0,
                        scale: 1.1
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8
                    })

        } else if (!showImg4.state && showImg4.anim === "anim-out") {

            gsap.to(img4Ref.current,
                {
                    zIndex: 2,
                    duration: 0
                })

        } else if (!showImg4.state && showImg4.anim === "") {

            gsap.to(img4Ref.current,
                {
                    zIndex: 1,
                    duration: 0
                })

        }

    }, [showImg4])

    useEffect(() => {

        if (showImg5.state) {

            gsap.timeline({ paused: false, ease: "Power2.easeInOut" })
                .to(img5Ref.current,
                    {
                        zIndex: 3,
                        duration: 0
                    })
                .fromTo(img5Ref.current,
                    {
                        opacity: 0,
                        scale: 1.1
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8
                    })

        } else if (!showImg5.state && showImg5.anim === "anim-out") {

            gsap.to(img5Ref.current,
                {
                    zIndex: 2,
                    duration: 0
                })

        } else if (!showImg5.state && showImg5.anim === "") {

            gsap.to(img5Ref.current,
                {
                    zIndex: 1,
                    duration: 0
                })

        }

    }, [showImg5])

    useEffect(() => {

        if (showImg6.state) {

            gsap.timeline({ paused: false, ease: "Power2.easeInOut" })
                .to(img6Ref.current,
                    {
                        zIndex: 3,
                        duration: 0
                    })
                .fromTo(img6Ref.current,
                    {
                        opacity: 0,
                        scale: 1.1
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8
                    })

        } else if (!showImg6.state && showImg6.anim === "anim-out") {

            gsap.to(img6Ref.current,
                {
                    zIndex: 2,
                    duration: 0
                })

        } else if (!showImg6.state && showImg6.anim === "") {

            gsap.to(img6Ref.current,
                {
                    zIndex: 1,
                    duration: 0
                })

        }

    }, [showImg6])

    const toggleImg1 = () => {
        if (shopMenuOpen) {
            if (!showImg1.state) {
                setShowImg1({ state: true, anim: "anim-in" })

                if (showImg2.state) {
                    setShowImg2({ state: false, anim: "anim-out" })
                }
                if (showImg2.anim === "anim-out") {
                    setShowImg2({ state: false, anim: "" })
                }

                if (showImg3.state) {
                    setShowImg3({ state: false, anim: "anim-out" })
                }
                if (showImg3.anim === "anim-out") {
                    setShowImg3({ state: false, anim: "" })
                }

                if (showImg4.state) {
                    setShowImg4({ state: false, anim: "anim-out" })
                }
                if (showImg4.anim === "anim-out") {
                    setShowImg4({ state: false, anim: "" })
                }

                if (showImg5.state) {
                    setShowImg5({ state: false, anim: "anim-out" })
                }
                if (showImg5.anim === "anim-out") {
                    setShowImg5({ state: false, anim: "" })
                }

                if (showImg6.state) {
                    setShowImg6({ state: false, anim: "anim-out" })
                }
                if (showImg6.anim === "anim-out") {
                    setShowImg6({ state: false, anim: "" })
                }
            }
        }
    }

    const toggleImg2 = () => {
        if (shopMenuOpen) {
            if (!showImg2.state) {
                setShowImg2({ state: true, anim: "anim-in" })

                if (showImg1.state) {
                    setShowImg1({ state: false, anim: "anim-out" })
                }
                if (showImg1.anim === "anim-out") {
                    setShowImg1({ state: false, anim: "" })
                }

                if (showImg3.state) {
                    setShowImg3({ state: false, anim: "anim-out" })
                }
                if (showImg3.anim === "anim-out") {
                    setShowImg3({ state: false, anim: "" })
                }

                if (showImg4.state) {
                    setShowImg4({ state: false, anim: "anim-out" })
                }
                if (showImg4.anim === "anim-out") {
                    setShowImg4({ state: false, anim: "" })
                }

                if (showImg5.state) {
                    setShowImg5({ state: false, anim: "anim-out" })
                }
                if (showImg5.anim === "anim-out") {
                    setShowImg5({ state: false, anim: "" })
                }

                if (showImg6.state) {
                    setShowImg6({ state: false, anim: "anim-out" })
                }
                if (showImg6.anim === "anim-out") {
                    setShowImg6({ state: false, anim: "" })
                }
            }
        }
    }

    const toggleImg3 = () => {
        if (shopMenuOpen) {
            if (!showImg3.state) {
                setShowImg3({ state: true, anim: "anim-in" })

                if (showImg1.state) {
                    setShowImg1({ state: false, anim: "anim-out" })
                }
                if (showImg1.anim === "anim-out") {
                    setShowImg1({ state: false, anim: "" })
                }

                if (showImg2.state) {
                    setShowImg2({ state: false, anim: "anim-out" })
                }
                if (showImg2.anim === "anim-out") {
                    setShowImg2({ state: false, anim: "" })
                }

                if (showImg4.state) {
                    setShowImg4({ state: false, anim: "anim-out" })
                }
                if (showImg4.anim === "anim-out") {
                    setShowImg4({ state: false, anim: "" })
                }

                if (showImg5.state) {
                    setShowImg5({ state: false, anim: "anim-out" })
                }
                if (showImg5.anim === "anim-out") {
                    setShowImg5({ state: false, anim: "" })
                }

                if (showImg6.state) {
                    setShowImg6({ state: false, anim: "anim-out" })
                }
                if (showImg6.anim === "anim-out") {
                    setShowImg6({ state: false, anim: "" })
                }
            }
        }
    }

    const toggleImg4 = () => {
        if (shopMenuOpen) {
            if (!showImg4.state) {
                setShowImg4({ state: true, anim: "anim-in" })

                if (showImg1.state) {
                    setShowImg1({ state: false, anim: "anim-out" })
                }
                if (showImg1.anim === "anim-out") {
                    setShowImg1({ state: false, anim: "" })
                }

                if (showImg2.state) {
                    setShowImg2({ state: false, anim: "anim-out" })
                }
                if (showImg2.anim === "anim-out") {
                    setShowImg2({ state: false, anim: "" })
                }

                if (showImg3.state) {
                    setShowImg3({ state: false, anim: "anim-out" })
                }
                if (showImg3.anim === "anim-out") {
                    setShowImg3({ state: false, anim: "" })
                }

                if (showImg5.state) {
                    setShowImg5({ state: false, anim: "anim-out" })
                }
                if (showImg5.anim === "anim-out") {
                    setShowImg5({ state: false, anim: "" })
                }

                if (showImg6.state) {
                    setShowImg6({ state: false, anim: "anim-out" })
                }
                if (showImg6.anim === "anim-out") {
                    setShowImg6({ state: false, anim: "" })
                }
            }
        }
    }

    const toggleImg5 = () => {
        if (shopMenuOpen) {
            if (!showImg5.state) {
                setShowImg5({ state: true, anim: "anim-in" })

                if (showImg1.state) {
                    setShowImg1({ state: false, anim: "anim-out" })
                }
                if (showImg1.anim === "anim-out") {
                    setShowImg1({ state: false, anim: "" })
                }

                if (showImg2.state) {
                    setShowImg2({ state: false, anim: "anim-out" })
                }
                if (showImg2.anim === "anim-out") {
                    setShowImg2({ state: false, anim: "" })
                }

                if (showImg3.state) {
                    setShowImg3({ state: false, anim: "anim-out" })
                }
                if (showImg3.anim === "anim-out") {
                    setShowImg3({ state: false, anim: "" })
                }

                if (showImg4.state) {
                    setShowImg4({ state: false, anim: "anim-out" })
                }
                if (showImg4.anim === "anim-out") {
                    setShowImg4({ state: false, anim: "" })
                }

                if (showImg6.state) {
                    setShowImg6({ state: false, anim: "anim-out" })
                }
                if (showImg6.anim === "anim-out") {
                    setShowImg6({ state: false, anim: "" })
                }
            }
        }
    }

    const toggleImg6 = () => {
        if (shopMenuOpen) {
            if (!showImg6.state) {
                setShowImg6({ state: true, anim: "anim-in" })

                if (showImg1.state) {
                    setShowImg1({ state: false, anim: "anim-out" })
                }
                if (showImg1.anim === "anim-out") {
                    setShowImg1({ state: false, anim: "" })
                }

                if (showImg2.state) {
                    setShowImg2({ state: false, anim: "anim-out" })
                }
                if (showImg2.anim === "anim-out") {
                    setShowImg2({ state: false, anim: "" })
                }

                if (showImg3.state) {
                    setShowImg3({ state: false, anim: "anim-out" })
                }
                if (showImg3.anim === "anim-out") {
                    setShowImg3({ state: false, anim: "" })
                }

                if (showImg4.state) {
                    setShowImg4({ state: false, anim: "anim-out" })
                }
                if (showImg4.anim === "anim-out") {
                    setShowImg4({ state: false, anim: "" })
                }

                if (showImg5.state) {
                    setShowImg5({ state: false, anim: "anim-out" })
                }
                if (showImg5.anim === "anim-out") {
                    setShowImg5({ state: false, anim: "" })
                }
            }
        }
    }

    return (
        <div ref={shopMenuRef} className="c-shop-menu position-fixed t-0 l-0 d-md-flex d-none" >
            <div ref={backgroundRef} className="n-background" />
            <Link href="/">
                <a ref={addToInnerRefs} className="c-shop-menu__images col-6  h-100 position-absolute" onClick={() => toggleShopMenu()}>
                    <div className="c-shop-menu__images__image w-100 h-100 position-absolute t-0 l-0">
                        <figure ref={img1Ref} className="fig-wrapper">
                            <Image layout="fill" src={shopall} alt="" />
                        </figure>
                    </div>
                    <div className="c-shop-menu__images__image w-100 h-100 position-absolute t-0 l-0">
                        <figure ref={img2Ref} className="fig-wrapper">
                            <Image layout="fill" src={newArrivals} alt="" />
                        </figure>
                    </div>
                    <div className="c-shop-menu__images__image w-100 h-100 position-absolute t-0 l-0">
                        <figure ref={img3Ref} className="fig-wrapper">
                            <Image layout="fill" src={clothing} alt="" />
                        </figure>
                    </div>
                    <div className="c-shop-menu__images__image w-100 h-100 position-absolute t-0 l-0">
                        <figure ref={img4Ref} className="fig-wrapper">
                            <Image layout="fill" src={shoes} alt="" />
                        </figure>
                    </div>
                    <div className="c-shop-menu__images__image w-100 h-100 position-absolute t-0 l-0">
                        <figure ref={img5Ref} className="fig-wrapper">
                            <Image layout="fill" src={accessories} alt="" />
                        </figure>
                    </div>
                    <div className="c-shop-menu__images__image w-100 h-100 position-absolute t-0 l-0">
                        <figure ref={img6Ref} className="fig-wrapper">
                            <Image layout="fill" src={homewear} alt="" />
                        </figure>
                    </div>
                </a>
            </Link>

            <div ref={addToInnerRefs} className="c-shop-menu__inner col-6 ms-auto">
                <div className="c-shop-menu__list__wrapper h-100">
                    <ul className="c-shop-menu__list h-100">
                        <li
                            className="c-shop-menu__list__item my-2"
                            onMouseEnter={() => toggleImg1()}
                        >
                            <Link href="/collections/shop-all">
                                <a onClick={() => toggleShopMenu()} className="c-shop-menu__list__link text-white w-100">
                                    <span ref={addToTextRefs} className="c-shop-menu__list__link__text menu-link__text lh-1">
                                        Shop all
                                    <span className="c-shop-menu__list__link__count link__count">{numOfShopAll}</span>
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className="c-shop-menu__list__item my-2"
                            onMouseEnter={() => toggleImg2()}
                        >
                            <Link href="/collections/new-arrivals">
                                <a onClick={() => toggleShopMenu()} className="c-shop-menu__list__link text-white w-100">
                                    <span ref={addToTextRefs} className="c-shop-menu__list__link__text menu-link__text lh-1">
                                        New arrivals
                                    <span className="c-shop-menu__list__link__count link__count">{numOfNewArrivals}</span>
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className="c-shop-menu__list__item my-2"
                            onMouseEnter={() => toggleImg3()}
                        >
                            <Link href="/collections/clothing">
                                <a onClick={() => toggleShopMenu()} className="c-shop-menu__list__link text-white w-100">
                                    <span ref={addToTextRefs} className="c-shop-menu__list__link__text menu-link__text lh-1">
                                        Clothing
                                    <span className="c-shop-menu__list__link__count link__count">{numOfClothing}</span>
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className="c-shop-menu__list__item my-2"
                            onMouseEnter={() => toggleImg4()}
                        >
                            <Link href="/collections/shoes">
                                <a onClick={() => toggleShopMenu()} className="c-shop-menu__list__link text-white w-100">
                                    <span ref={addToTextRefs} className="c-shop-menu__list__link__text menu-link__text lh-1">
                                        Shoes
                                        <span className="c-shop-menu__list__link__count link__count">{numOfShoes}</span>
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className="c-shop-menu__list__item my-2"
                            onMouseEnter={() => toggleImg5()}
                        >
                            <Link href="/collections/accessories">
                                <a onClick={() => toggleShopMenu()} className="c-shop-menu__list__link text-white w-100">
                                    <span ref={addToTextRefs} className="c-shop-menu__list__link__text menu-link__text lh-1">
                                        Accessories
                                        <span className="c-shop-menu__list__link__count link__count">{numOfAccessories}</span>
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className="c-shop-menu__list__item my-2"
                            onMouseEnter={() => toggleImg6()}
                        >
                            <Link href="/collections/homewear">
                                <a onClick={() => toggleShopMenu()} className="c-shop-menu__list__link text-white w-100">
                                    <span ref={addToTextRefs} className="c-shop-menu__list__link__text menu-link__text lh-1">
                                        Homewear
                                        <span className="c-shop-menu__list__link__count link__count">{numOfHomewear}</span>
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ShopMenu;