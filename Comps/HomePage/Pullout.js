import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "../PageLayouts/Link";

import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles, doImageParallax } from "../PageLayouts/animation";

const Pullout = ({ getScrollProxy, products }) => {

    const product = products[0]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    }, []);

    //parallax 
    const sectionRef = useRef();
    //desktop
    const featuredRef = useRef();
    const image2WrapperRef = useRef();
    const image3WrapperRef = useRef();
    const illustrationRef = useRef();
    const image1ParallaxRef = useRef();
    //mobile
    const image2WrapperMobileRef = useRef();
    const image3WrapperMobileRef = useRef();
    const illustrationMobileRef = useRef();

    useEffect(() => {

        saveStyles(
            featuredRef.current,
            image2WrapperRef.current,
            image3WrapperRef.current,
            illustrationRef.current,
            image2WrapperMobileRef.current,
            image3WrapperMobileRef.current,
            image1ParallaxRef.current
        )

        ScrollTrigger.matchMedia({
            "(min-width: 768px)": () => {

                const trigger = {
                    trigger: sectionRef.current,
                    scrub: true,
                    start: "top bottom",
                    end: `bottom top`,
                    ease: "none"
                }

                if (featuredRef.current) {

                    gsap.fromTo(featuredRef.current,
                        {
                            y: 0
                        },
                        {
                            y: -120,
                            scrollTrigger: trigger
                        })

                }

                if (image2WrapperRef.current) {

                    gsap.fromTo(image2WrapperRef.current,
                        {
                            y: 0
                        },
                        {
                            y: -100,
                            scrollTrigger: trigger
                        })

                }

                if (image3WrapperRef.current) {

                    gsap.fromTo(image3WrapperRef.current,
                        {
                            y: 0
                        },
                        {
                            y: -200,
                            scrollTrigger: trigger
                        })
                }

                if (illustrationRef.current) {

                    gsap.fromTo(illustrationRef.current,
                        {
                            y: 0
                        },
                        {
                            y: -60,
                            scrollTrigger: trigger
                        })

                }

            },


            "(max-width: 767.98px)": () => {

                const trigger = {
                    trigger: sectionRef.current,
                    scrub: true,
                    start: "top bottom",
                    end: `bottom top`,
                    ease: "none"
                }

                if (featuredRef.current) {

                    gsap.fromTo(featuredRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-120px",
                            scrollTrigger: trigger
                        })

                }

                if (image2WrapperMobileRef.current) {

                    gsap.fromTo(image2WrapperMobileRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-100px",
                            scrollTrigger: trigger
                        })

                }

                if (image3WrapperMobileRef.current) {

                    gsap.fromTo(image3WrapperMobileRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-200px",
                            scrollTrigger: trigger
                        })

                }

                if (illustrationMobileRef.current) {

                    gsap.fromTo(illustrationMobileRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-60px",
                            scrollTrigger: trigger
                        })

                }

            },

            "all": () => {

                if (image1ParallaxRef.current) {

                    doImageParallax(imageTriggerRef.current, image1ParallaxRef.current)

                }
            }
        })


    }, [])


    //animation
    //dexktop
    const imageTriggerRef = useRef();
    const image2TriggerRef = useRef();
    const headingTriggerRef = useRef();
    const image1WrapperRef = useRef();
    const image1Ref = useRef();
    const imageRefs = useRef([]);
    const addToImageRefs = (_el) => {
        if (_el && !imageRefs.current.includes(_el)) {
            imageRefs.current.push(_el)
        } else {
            imageRefs.current = [];
        }
    }
    const headingRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef()

    //mobile
    const imageTriggerMobileRef = useRef();
    const image2MobileRef = useRef();
    const image3MobileRef = useRef();

    useEffect(() => {

        let trigger1 = {
            trigger: imageTriggerRef.current,
            start: "top bottom",
            toggleActions: "play none none reset",
        }

        let trigger2 = {
            trigger: image2TriggerRef.current,
            start: "top bottom",
            toggleActions: "play none none reset",
        }

        let trigger3 = {
            trigger: headingTriggerRef.current,
            start: "top bottom",
            toggleActions: "play none none reset",
        }

        if (image1WrapperRef.current && image1Ref.current) {

            gsap.timeline({
                paused: false,
                ease: "Power2.easeOut",
                scrollTrigger: trigger1
            })
                .fromTo(image1WrapperRef.current,
                    {
                        y: "150px"
                    },
                    {
                        y: 0,
                        duration: 1
                    })
                .fromTo(image1Ref.current,
                    {
                        rotation: 4,
                        scale: 1.35
                    },
                    {
                        rotation: 0,
                        scale: 1,
                        duration: 1.2
                    }, 0.2)

        }

        if (imageRefs.current.length > 0) {

            gsap.fromTo(imageRefs.current,
                {
                    scale: 1.35
                },
                {
                    scale: 1,
                    duration: 1.2,
                    scrollTrigger: trigger2,
                    ease: "Power2.easeOut",
                })

        }

        if (headingRef.current && priceRef.current && descriptionRef.current) {

            gsap.timeline({
                paused: false,
                scrollTrigger: trigger3,
                ease: "Power2.easeOut",
            })
                .fromTo(headingRef.current,
                    {
                        y: "200px",
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1
                    })
                .fromTo(priceRef.current,
                    {
                        y: "150px",
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1
                    }, 0.1)
                .fromTo(descriptionRef.current,
                    {
                        y: "150px",
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1
                    }, 0.2)

        }

        const trigger4 = {
            trigger: imageTriggerMobileRef.current,
            start: "top bottom",
            toggleActions: "play none none reset",
        }

        if (image2MobileRef.current && image3MobileRef.current) {

            gsap.fromTo([image2MobileRef.current, image3MobileRef.current],
                {
                    scale: 1.35
                },
                {
                    scale: 1,
                    duration: 1.2,
                    ease: "Power2.easeOut",
                    scrollTrigger: trigger4
                })

        }


    }, [])


    return (
        <section ref={sectionRef} className="c-pullout pe-md-1 py-md-5 py-3 ">

            <div className="background blue" />

            <div className="c-pullout__inner d-flex flex-md-row flex-column">

                <div ref={imageTriggerRef} className="c-pullout__image__wrapper col-md-5 col-6 position-relative">

                    <div ref={image1WrapperRef} className="c-pullout__image1 overflow-hidden should-animate h-100">

                        <Link href={`/products/[slug]`} as={`/products/${product.slug}`}>

                            <a className="c-pullout__image__link w-100 h-100 position-absolute t-0 l-0">

                                <div className="parallax-wrapper">

                                    <div ref={image1ParallaxRef} className="parallax">

                                        <figure ref={image1Ref} className="fig-wrapper should-animate">

                                            <Image alt="pullout product image" src={product.images[0].src} layout="fill" />

                                        </figure>

                                    </div>

                                </div>

                            </a>

                        </Link>

                    </div>

                    <div className="drawing-heading__wrapper position-absolute">

                        <div ref={featuredRef} className="parallax">

                            <span className={"drawing-heading"}>featured</span>

                        </div>

                    </div>

                </div>

                <div className="c-pullout__heading__wrapper col-md-7 col-12 px-md-0 px-1">

                    <div className="c-pullout__heading__inner h-100 position-relative d-md-b">

                        <div ref={headingTriggerRef} className="c-pullout__heading__link__wrapper w-100 h-100 on-top">

                            <Link href={`/products/[slug]`} as={`/products/${product.slug}`}>

                                <a className="c-pullout__heading__link w-100 h-100 d-md-block d-flex flex-column align-items-center ">

                                    <div className="c-pullout__heading__container mt-md-2 ">

                                        <h2 ref={headingRef} className="c-pullout__heading text-white position-relative should-animate">

                                            <div>
                                                {product.name}
                                            </div>

                                        </h2>

                                        <div ref={priceRef} className="should-animate">

                                            <span className="c-pullout__heading__price ps-lg-2 ps-md-1 ">${product.price}</span>

                                        </div>

                                    </div>

                                    <div ref={descriptionRef} className="c-pullout__description__container position-relative ms-lg-2 ms-md-1 should-animate">

                                        <p className="text-white">
                                            {product.description}
                                        </p>

                                    </div>

                                </a>

                            </Link>

                        </div>

                        <div className="c-pullout__image2 position-absolute d-md-block d-none ">

                            <div ref={image2WrapperRef} className="parallax overflow-hidden">

                                <figure ref={addToImageRefs} className="fig-wrapper should-animate">

                                    <Image alt="" src={img5} layout="fill" />

                                </figure>

                            </div>

                        </div>

                        <div ref={image2TriggerRef} className="c-pullout__image3 position-absolute d-md-block d-none ">

                            <div ref={image3WrapperRef} className="parallax overflow-hidden">

                                <figure ref={addToImageRefs} className="fig-wrapper should-animate">

                                    <Image alt="" src={img6} layout="fill" />

                                </figure>

                            </div>

                        </div>

                        <div className="illustration__wrapper greydots position-absolute d-md-block d-none">

                            <div ref={illustrationRef} className="parallax">

                                <figure className="fig-wrapper">

                                    {/* <Image alt="" src={greydots} layout="fill" /> */}

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={imageTriggerMobileRef} className="c-pullout__illustration__wrapper d-md-none col-12 pt-3 d-flex flex-center position-relative">

                    <div className="c-pullout__image2 ">

                        <div ref={image2WrapperMobileRef} className="parallax overflow-hidden">

                            <figure ref={image2MobileRef} className="fig-wrapper">

                                <Image alt="" src={img5} layout="fill" />

                            </figure>

                        </div>

                    </div>

                    <div className="c-pullout__image3 ">

                        <div ref={image3WrapperMobileRef} className="parallax overflow-hidden">

                            <figure ref={image3MobileRef} className="fig-wrapper">

                                <Image alt="" src={img6} layout="fill" />

                            </figure>

                        </div>

                    </div>

                    <div className="illustration__wrapper greydots position-absolute ">

                        <div ref={illustrationMobileRef} className="parallax">

                            <figure className="fig-wrapper">
{/* 
                                <Image alt="" src={greydots} layout="fill" /> */}

                            </figure>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Pullout;