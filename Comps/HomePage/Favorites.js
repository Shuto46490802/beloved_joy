import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "../PageLayouts/Link";

import img3 from "../../assets/img3.jpg"
import shopall from "../../assets/shopall.jpg";
import newArrivals from "../../assets/newArrivals.jpg";
import clothing from "../../assets/clothing.jpg";
import shoes from "../../assets/shoes.jpg";
import accessories from "../../assets/accessories.jpg";
import homewear from "../../assets/homewear.jpg";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles } from "../PageLayouts/animation";

const Favorites = ({ getScrollProxy }) => {

    useEffect(() => {
        // getScrollProxy()
        gsap.registerPlugin(ScrollTrigger)
    }, []);

    //horizontal scroll

    //gallery
    const sectionRef = useRef();
    const galleryRef = useRef();
    const pinWrapRef = useRef();
    const headingWrapperRef = useRef();
    const headingRefs = useRef([]);
    const addToHeadingRefs = (_el) => {
        if (_el && !headingRefs.current.includes(_el)) {
            headingRefs.current.push(_el)
        } else {
            headingRefs.current = []
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

    //text
    const pinWrap2Ref = useRef();
    const lineRefs = useRef([]);
    const addToLineRefs = (_el) => {
        if (_el && !lineRefs.current.includes(_el)) {
            lineRefs.current.push(_el)
        } else {
            lineRefs.current = []
        }
    }

    useEffect(() => {

        saveStyles(
            sectionRef.current,
            galleryRef.current,
            pinWrapRef.current,
            headingWrapperRef.current,
            headingRefs.current,
            textRefs.current,
            pinWrap2Ref.current,
            lineRefs.current
        )


        ScrollTrigger.matchMedia({

            "(min-width: 768px) and (max-width: 1199.98px)": () => {

                const galleryTrigger = {
                    trigger: sectionRef.current,
                    start: `top top`,
                    end: () => `+=${galleryRef.current.clientWidth}`,
                    scrub: 0.3,
                    pin: pinWrapRef.current,
                    ease: "none",
                    onEnter: () => {
                        gsap.to(pinWrapRef.current,
                            {
                                zIndex: 3
                            })
                    },
                }

                const textTrigger = {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${galleryRef.current.clientWidth}`,
                    pin: pinWrap2Ref.current,
                    scrub: 1,
                    ease: "none",
                }

                if (galleryRef.current
                    && pinWrapRef.current
                    && textRefs.current.length > 0) {

                    gsap.timeline({ paused: false, scrollTrigger: galleryTrigger })
                        .fromTo(galleryRef.current,
                            {
                                xPercent: 0
                            },
                            {
                                xPercent: `-${(1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth)) * 100}`,
                                duration: `${(1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth))}`,
                                onComplete: () => {
                                    gsap.set(pinWrapRef.current,
                                        {
                                            zIndex: 1
                                        })
                                }

                            })
                        .fromTo(pinWrapRef.current,
                            {
                                x: 0
                            },
                            {
                                x: "-85vw",
                                duration: `${((window.innerWidth * 0.8) / galleryRef.current.clientWidth)}`
                            }, `${(1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth))}`)
                        .fromTo(textRefs.current,
                            {
                                yPercent: 0,

                            },
                            {
                                yPercent: -120,
                                duration: `${((window.innerWidth * 0.8) / galleryRef.current.clientWidth)}`
                            }, `${(1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth))}`)

                }

                const headingTrigger = {
                    trigger: sectionRef.current,
                    start: `top top`,
                    end: () => `+=${galleryRef.current.clientWidth * (1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth))}`,
                    scrub: 0.3,
                    ease: "none",
                }

                if (headingRefs.current.length > 0) {

                    gsap.fromTo(headingRefs.current,
                        {
                            yPercent: 0
                        },
                        {
                            yPercent: -500,
                            scrollTrigger: headingTrigger
                        })

                }

                if (pinWrap2Ref.current
                    && lineRefs.current.length > 0) {

                    gsap.timeline({ paused: false, scrollTrigger: textTrigger })
                        .to(pinWrap2Ref.current,
                            {
                                visibility: "visible",
                                duration: 0.85
                            })
                        .fromTo(lineRefs.current,
                            {
                                yPercent: 120
                            },
                            {
                                yPercent: 0,
                                duration: 0.15,
                                stagger: 0.01,
                                onReverseComplete: () => {
                                    gsap.to(pinWrapRef.current,
                                        {
                                            zIndex: 3
                                        })
                                }
                            })

                }

            },

            "(min-width: 1200px)": () => {

                const galleryTrigger = {
                    id: "A1",
                    trigger: sectionRef.current,
                    start: `top top`,
                    end: () => `+=${galleryRef.current.clientWidth}`,
                    scrub: 0.3,
                    pin: pinWrapRef.current,
                    ease: "none",
                    refreshPriority: 1,
                    onEnter: () => {
                        gsap.to(pinWrapRef.current,
                            {
                                zIndex: 3
                            })
                    },
                }

                const textTrigger = {
                    id: "A2",
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${galleryRef.current.clientWidth}`,
                    pin: pinWrap2Ref.current,
                    scrub: 1,
                    ease: "none",
                    refreshPriority: 1,
                }

                if (galleryRef.current
                    && pinWrapRef.current
                    && textRefs.current.length > 0) {

                    gsap.timeline({ paused: false, scrollTrigger: galleryTrigger })
                        .fromTo(galleryRef.current,
                            {
                                xPercent: 0
                            },
                            {
                                xPercent: `-${(1 - ((window.innerWidth * 0.75) / galleryRef.current.clientWidth)) * 100}`,
                                duration: `${(1 - ((window.innerWidth * 0.75) / galleryRef.current.clientWidth))}`,
                                onComplete: () => {
                                    gsap.set(pinWrapRef.current,
                                        {
                                            zIndex: 1
                                        })
                                }
                            })
                        .fromTo(pinWrapRef.current,
                            {
                                x: 0
                            },
                            {
                                x: "-80vw",
                                duration: `${((window.innerWidth * 0.75) / galleryRef.current.clientWidth)}`
                            }, `${(1 - ((window.innerWidth * 0.75) / galleryRef.current.clientWidth))}`)
                        .fromTo(textRefs.current,
                            {
                                yPercent: 0,

                            },
                            {
                                yPercent: -120,
                                duration: `${((window.innerWidth * 0.75) / galleryRef.current.clientWidth)}`,
                            }, `${(1 - ((window.innerWidth * 0.75) / galleryRef.current.clientWidth))}`)

                }


                const headingTrigger = {
                    trigger: sectionRef.current,
                    start: `top top`,
                    end: () => `+=${galleryRef.current.clientWidth * (1 - ((window.innerWidth * 0.75) / galleryRef.current.clientWidth))}`,
                    scrub: 0.3,
                    ease: "none",
                }

                if (headingRefs.current.length > 0) {

                    gsap.fromTo(headingRefs.current,
                        {
                            yPercent: 0
                        },
                        {
                            yPercent: -500,
                            scrollTrigger: headingTrigger
                        })

                }

                if (pinWrap2Ref.current
                    && lineRefs.current.length > 0) {

                    gsap.timeline({ paused: false, scrollTrigger: textTrigger })
                        .to(pinWrap2Ref.current,
                            {
                                visibility: "visible",
                                duration: 0.85,
                            })
                        .fromTo(lineRefs.current,
                            {
                                yPercent: 120
                            },
                            {
                                yPercent: 0,
                                duration: 0.15,
                                stagger: 0.01,
                                onReverseComplete: () => {
                                    gsap.to(pinWrapRef.current,
                                        {
                                            zIndex: 3
                                        })
                                }
                            })

                }
            },

            "(max-width: 767.98px)": () => {

                const galleryTrigger = {
                    trigger: sectionRef.current,
                    start: `top top`,
                    end: () => `+=${galleryRef.current.clientWidth}`,
                    scrub: 0.3,
                    pin: pinWrapRef.current,
                    ease: "none",
                    onEnter: () => {
                        gsap.to(pinWrapRef.current,
                            {
                                zIndex: 3
                            })
                    },
                }

                const textTrigger = {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${galleryRef.current.clientWidth}`,
                    pin: pinWrap2Ref.current,
                    scrub: 1,
                    ease: "none",
                }

                if (galleryRef.current
                    && pinWrapRef.current
                    && textRefs.current.length > 0) {

                    gsap.timeline({ paused: false, scrollTrigger: galleryTrigger })
                        .fromTo(galleryRef.current,
                            {
                                xPercent: 0
                            },
                            {
                                xPercent: `-${(1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth)) * 100}`,
                                duration: `${(1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth))}`,
                                onComplete: () => {
                                    gsap.set(pinWrapRef.current,
                                        {
                                            zIndex: 1
                                        })
                                }
                            })
                        .fromTo(pinWrapRef.current,
                            {
                                x: 0
                            },
                            {
                                x: "-85vw",
                                duration: `${((window.innerWidth * 0.8) / galleryRef.current.clientWidth)}`
                            }, `${(1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth))}`)
                        .fromTo(textRefs.current,
                            {
                                yPercent: 0,

                            },
                            {
                                yPercent: -120,
                                duration: `${((window.innerWidth * 0.8) / galleryRef.current.clientWidth)}`
                            }, `${(1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth))}`)

                }

                const headingTrigger = {
                    trigger: sectionRef.current,
                    start: `top top`,
                    end: () => `+=${galleryRef.current.clientWidth * (1 - ((window.innerWidth * 0.8) / galleryRef.current.clientWidth))}`,
                    scrub: 0.3,
                    ease: "none",
                }

                if (headingRefs.current.length > 0) {

                    gsap.fromTo(headingRefs.current,
                        {
                            yPercent: 0
                        },
                        {
                            yPercent: -500,
                            scrollTrigger: headingTrigger
                        })

                }

                if (pinWrap2Ref.current
                    && lineRefs.current.length > 0) {

                    gsap.timeline({ paused: false, scrollTrigger: textTrigger })
                        .to(pinWrap2Ref.current,
                            {
                                visibility: "visible",
                                duration: 0.85
                            })
                        .fromTo(lineRefs.current,
                            {
                                yPercent: 120
                            },
                            {
                                yPercent: 0,
                                duration: 0.15,
                                stagger: 0.01,
                                onReverseComplete: () => {
                                    gsap.to(pinWrapRef.current,
                                        {
                                            zIndex: 3
                                        })
                                }
                            })

                }

            }

        })

        const trigger = {
            trigger: headingWrapperRef.current,
            start: `top bottom`,
            toggleActions: "play none none reset",
            onRefresh: () => {
                gsap.set(pinWrapRef.current,
                    {
                        marginTop: () => `${(window.innerHeight - galleryRef.current.getBoundingClientRect().height) / 2}px`
                    })
            }
        }

        if (textRefs.current.length > 0) {

            gsap.fromTo(textRefs.current,
                {
                    yPercent: 120
                },
                {
                    yPercent: 0,
                    duration: 1,
                    scrollTrigger: trigger,
                    ease: "Power2.easeOut",
                })

        }

    }, [])

    return (
        <section ref={sectionRef} className="c-favorites overflow-hidden">

            <div className="background pink" />

            <div ref={pinWrapRef} className="c-favorites__gallery__container should-animate">

                <div ref={headingWrapperRef} className="c-favorites__heading__wrapper w-100 overflow-hidden should-animate">

                    <div className="c-favorites__heading position-relative">

                        Favorite Heaidng

                    </div>

                    <div className="c-favorites__heading__items position-absolute w-100 t-0 d-flex flex-column align-items-center">

                        <div ref={addToHeadingRefs} className="c-favorites__heading__item position-relative d-flex py-1 should-animate">

                            <Link href="/collections/shop-all">

                                <a className="text-white overflow-hidden">

                                    <div ref={addToTextRefs} className="c-favorites__heading__title should-animate">

                                        Shop All

                                    </div>

                                </a>

                            </Link>

                        </div>

                        <div ref={addToHeadingRefs} className="c-favorites__heading__item position-relative d-flex py-1 overflow-hidden should-animate">

                            <Link href="/collections/new-arrivals">

                                <a className="text-white">

                                    <div ref={addToTextRefs} className="c-favorites__heading__title should-animate">

                                        New Arrivals

                                    </div>

                                </a>

                            </Link>

                        </div>

                        <div ref={addToHeadingRefs} className="c-favorites__heading__item position-relative d-flex py-1 should-animate">

                            <Link href="/collections/clothing">

                                <a className="text-white overflow-hidden">

                                    <div ref={addToTextRefs} className="c-favorites__heading__title should-animate">

                                        Clothing

                                    </div>

                                </a>

                            </Link>

                        </div>

                        <div ref={addToHeadingRefs} className="c-favorites__heading__item position-relative d-flex py-1 should-animate">

                            <Link href="/collections/shoes">

                                <a className="text-white overflow-hidden">

                                    <div ref={addToTextRefs} className="c-favorites__heading__title should-animate">

                                        Shoes

                                    </div>

                                </a>

                            </Link>

                        </div>

                        <div ref={addToHeadingRefs} className="c-favorites__heading__item position-relative d-flex py-1 should-animate">

                            <Link href="/collections/accessories">

                                <a className="text-white overflow-hidden">

                                    <div ref={addToTextRefs} className="c-favorites__heading__title should-animate">

                                        Accessories

                                    </div>

                                </a>

                            </Link>

                        </div>

                        <div ref={addToHeadingRefs} className="c-favorites__heading__item position-relative d-flex py-1 should-animate">

                            <Link href="/collections/homewear">

                                <a className="text-white overflow-hidden">

                                    <div ref={addToTextRefs} className="c-favorites__heading__title should-animate">

                                        Homewear

                                    </div>

                                </a>

                            </Link>

                        </div>

                    </div>

                </div>

                <div ref={galleryRef} className="c-favorites__gallery__wrapper should-animate">

                    <div className="c-favorites__gallery__media first__media">

                        <figure className="fig-wrapper">

                            <Image alt="" src={img3} layout="fill" />

                        </figure>

                    </div>

                    <Link href="/collections/shop-all">

                        <a className="c-favorites__gallery__media ">

                            <figure className="fig-wrapper">

                                <Image alt="" src={shopall} layout="fill" />

                            </figure>

                        </a>

                    </Link>

                    <Link href="/collections/new-arrivals">

                        <a className="c-favorites__gallery__media">

                            <figure className="fig-wrapper">

                                <Image alt="" src={newArrivals} layout="fill" />

                            </figure>

                        </a>

                    </Link>

                    <Link href="/collections/clothing">

                        <a className="c-favorites__gallery__media">

                            <figure className="fig-wrapper">

                                <Image alt="" src={clothing} layout="fill" />

                            </figure>

                        </a>

                    </Link>

                    <Link href="/collections/shoes">

                        <a className="c-favorites__gallery__media">

                            <figure className="fig-wrapper">

                                <Image alt="" src={shoes} layout="fill" />

                            </figure>

                        </a>

                    </Link>

                    <Link href="/collections/accessories">

                        <a className="c-favorites__gallery__media">

                            <figure className="fig-wrapper">

                                <Image alt="" src={accessories} layout="fill" />

                            </figure>

                        </a>

                    </Link>

                    <Link href="/collections/homewear">

                        <a className="c-favorites__gallery__media">

                            <figure className="fig-wrapper">

                                <Image alt="" src={homewear} layout="fill" />

                            </figure>

                        </a>

                    </Link>

                </div>

            </div>


            <div ref={pinWrap2Ref} className={`c-favorites__text__wrapper position-absolute vh-100 w-100 t-0 l-0 px-1 d-flex justify-content-center`}>

                <div className="c-favorites__text__inner d-flex flex-column flex-center w-100 h-100">

                    <h4 className="c-favorites__text ">

                        <div className="c-favorites__text__line d-inline-block overflow-hidden w-100">

                            <span ref={addToLineRefs} className="should-animate">Ligulas step drops both. You shall not pass tender. </span>

                        </div>

                        <div className="c-favorites__text__line d-inline-block overflow-hidden w-100">

                            <span ref={addToLineRefs} className="should-animate">Tender respectable success Valar impressive.</span>

                        </div>

                        <div className="c-favorites__text__line d-inline-block overflow-hidden w-100">

                            <span ref={addToLineRefs} className="should-animate">respectable success Valar impressive success Valar.</span>

                        </div>

                        <div className="c-favorites__text__line d-inline-block overflow-hidden w-100">

                            <span ref={addToLineRefs} className="should-animate">Tender respectable success Valar impressive.</span>

                        </div>

                    </h4>

                </div>

            </div>

        </section>
    );
}

export default Favorites;
