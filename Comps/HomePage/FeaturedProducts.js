import React, { useState, useEffect, useRef } from "react";
import Link from "../PageLayouts/Link";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles } from "../PageLayouts/animation";

SwiperCore.use([Navigation]);

const FeaturedProducts = ({ getScrollProxy, products }) => {

    const newArrivals = products.filter(({ tags }) => tags.indexOf("new arrival") !== -1).filter((product, i) =>  i < 10);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    }, []);

    //desktop
    const headingWrapperRef = useRef();
    const galleryWrapperRef = useRef()
    const headingRef = useRef();
    const sublineRef = useRef();
    const galleryButtonRef = useRef()
    const imageWrapperRefs = useRef([]);
    const addToImageWrapperRefs = (_el) => {
        if (_el && !imageWrapperRefs.current.includes(_el)) {
            imageWrapperRefs.current.push(_el)
        } else {
            imageWrapperRefs.current = [];
        }
    }
    const detailRefs = useRef([]);
    const addToDetailRefs = (_el) => {
        if (_el && !detailRefs.current.includes(_el)) {
            detailRefs.current.push(_el)
        } else {
            detailRefs.current = [];
        }
    }
    const illustrationRefs = useRef([]);
    const addToIllustrationRefs = (_el) => {
        if (_el && !illustrationRefs.current.includes(_el)) {
            illustrationRefs.current.push(_el)
        } else {
            illustrationRefs.current = [];
        }
    }

    //mobile
    const buttonWrapperRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {

        let trigger1 = {
            trigger: headingWrapperRef.current,
            start: "top bottom",
            toggleActions: "play none none reset",
            ease: "Power2.easeInOut",
        }

        if (headingRef.current
            && sublineRef.current) {

            gsap.timeline({
                paused: false,
                scrollTrigger: trigger1
            })
                .fromTo(headingRef.current,
                    {
                        scale: 1.75
                    },
                    {
                        scale: 1,
                        duration: 1,
                    })
                .fromTo(headingRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 1,
                    }, 0.2)
                .fromTo(sublineRef.current,
                    {
                        opacity: 0,
                        y: "150px"
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                    }, 0.2)

        }

        saveStyles([
            galleryButtonRef.current,
            buttonRef.current,
        ],
            imageWrapperRefs.current,
            illustrationRefs.current,
            detailRefs.current)

        ScrollTrigger.matchMedia({

            "(min-width: 768px)": () => {

                let trigger = {
                    trigger: galleryWrapperRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset",
                    ease: "Power2.easeInOut",
                }

                if (galleryButtonRef.current
                    && imageWrapperRefs.current.length > 0
                    && detailRefs.current.length > 0
                    && illustrationRefs.current.length > 0) {

                    gsap.timeline({
                        paused: false,
                        scrollTrigger: trigger
                    })
                        .fromTo(galleryButtonRef.current,
                            {
                                xPercent: 100
                            },
                            {
                                xPercent: 0,
                                duration: 1
                            })
                        .fromTo(imageWrapperRefs.current,
                            {
                                xPercent: (index) => index === 0 ? 100 : `${100 * (index + 0.3)}`,
                            },
                            {
                                xPercent: 0,
                                duration: 1,
                            }, 0.1)
                        .fromTo(detailRefs.current,
                            {
                                opacity: 0,
                                xPercent: 100
                            },
                            {
                                opacity: 1,
                                xPercent: 0,
                                duration: 1,
                            }, 0.1)
                        .fromTo(illustrationRefs.current,
                            {
                                xPercent: 200
                            },
                            {
                                xPercent: 0,
                                duration: 1.3,

                            }, 0.1)

                }


            },

            "(max-width: 767.98px)": () => {

                let trigger1 = {
                    trigger: buttonWrapperRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset",
                    ease: "Power2.easeInOut",
                }

                let trigger2 = {
                    trigger: galleryWrapperRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset",
                    ease: "Power2.easeInOut",
                }

                if (buttonRef.current) {

                    gsap.fromTo(buttonRef.current,
                        {
                            xPercent: 50
                        },
                        {
                            xPercent: 0,
                            duration: 1,
                            scrollTrigger: trigger1
                        })

                }

                if (imageWrapperRefs.current.length > 0
                    && detailRefs.current.length > 0
                    && illustrationRefs.current.length > 0) {

                    gsap.timeline({
                        paused: false,
                        scrollTrigger: trigger2
                    })
                        .fromTo(imageWrapperRefs.current,
                            {
                                xPercent: (index) => index === 0 ? 100 : `${100 * (index + 0.3)}`,
                            },
                            {
                                xPercent: 0,
                                duration: 1,
                            }, 0.1)
                        .fromTo(detailRefs.current,
                            {
                                opacity: 0,
                                xPercent: 100
                            },
                            {
                                opacity: 1,
                                xPercent: 0,
                                duration: 1,
                            }, 0.1)
                        .fromTo(illustrationRefs.current,
                            {
                                xPercent: 200
                            },
                            {
                                xPercent: 0,
                                duration: 1,
                            }, 0.5)

                }

            }

        })

    }, [])

    return (
        <section className="c-featured-products pt-lg-5 pt-md-4 pt-3 pb-md-3 pb-2 overflow-hidden" >

            <div className={"background green"} />

            <div className="c-featured-products__inner d-flex flex-column">

                <div ref={headingWrapperRef} className="c-featured-products__heading__wrapper align-self-center mb-lg-2 mb-md-1 mb-3">

                    <div className="c-featured-products__heading__inner">

                        <div className="c-featured-products__heading__container mb-xl-2 mb-1">

                            <h2 ref={headingRef} className="c-featured-products__heading should-animate">
                                Explore New Arrivals
                            </h2>

                        </div>

                        <div className="c-featured-products__subline__container should-animate">

                            <p ref={sublineRef} className="should-animate">
                                Morbi in sem quis dui placerat ornare quis dui placerat.
                                <br />
                                Pellentesque odio nisi, euismod in, pharetra a.
                            </p>

                        </div>


                    </div>

                </div>

                <div ref={buttonWrapperRef} className="c-featured-products__link overflow-hidden d-md-none">

                    <Link href="/collections/new-arrivals">

                        <a ref={buttonRef} className="c-featured-products__link nav-link position-relative w-100 h-100 text-white">

                            <span className="c-featured-products__link__text ">
                                Check New
                                <br />
                                Arrivals
                            </span>

                        </a>

                    </Link>

                </div>

                <div ref={galleryWrapperRef} className="c-featured-products__gallery position-relative overflow-hidden pt-md-5 pt-4">

                    <Swiper
                        direction={"horizontal"}
                        loop={false}
                        slidePerView={3}
                        spaceBetween={0}
                        observer={true}
                        observerParent={true}
                        breakpoints={{
                            400: {
                                slidesPerView: 1.8,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 3.8,
                                spaceBetween: 0
                            },
                            992: {
                                slidesPerView: 4.3,
                                spaceBetween: 0
                            },
                            1200: {
                                slidesPerView: 4.3,
                                spaceBetween: 0
                            }
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                    >

                        <SwiperSlide className="c-featured-products__link__wrapper d-md-block d-none position-relative" >
                            <Link href="/collections/new-arrivals">

                                <a ref={galleryButtonRef} className="c-featured-products__link nav-link position-relative w-100 h-100 text-white should-animate ">

                                    <span className="c-featured-products__link__text ">
                                        Check New
                                        <br />
                                        Arrivals
                                    </span>

                                </a>

                            </Link>

                            <div className="illustration__wrapper dots position-abolute d-md-block ">

                                <figure ref={addToIllustrationRefs} className="fig-wrapper should-animate">

                                    {/* <Image alt="" src={dots} layout="fill" /> */}

                                </figure>

                            </div>

                        </SwiperSlide>

                        {
                            newArrivals.map((data, i) => {
                                return <SwiperSlide key={i}>

                                    <Link href={`/products/[slug]`} as={`/products/${data.slug}`}>

                                        <a className={`c-product__thumb w-100 h-100`}>

                                            <div ref={addToImageWrapperRefs} className="c-featured-products__image__wrapper mb-1 should-animate">

                                                <figure className="fig-wrapper should-animate">

                                                    <Image alt="" src={data.images[0].src} layout="fill" />

                                                </figure>

                                                <figure className="fig-wrapper c-product-thumb__overlay should-animate">

                                                    <Image alt="" src={data.images[1].src} layout="fill" />

                                                </figure>

                                            </div>

                                            <div ref={addToDetailRefs} className="c-product__caption text-white should-animate">
                                                <h4 className="c-product__caption__text">
                                                    {data.name}
                                                </h4>
                                                <h4 className="price">
                                                    ${data.price}
                                                </h4>
                                            </div>

                                        </a>

                                    </Link>

                                </SwiperSlide>
                            })
                        }

                        <button className="swiper-button-prev"></button>
                        <button className="swiper-button-next"></button>

                    </Swiper>

                    <div className="illustration__wrapper greydots position-absolute ">

                        <figure ref={addToIllustrationRefs} className="fig-wrapper should-animate">

                            {/* <Image alt="" src={greydots} layout="fill" /> */}

                        </figure>

                    </div>

                    <div className="illustration__wrapper greydots second position-absolute d-md-block d-none">

                        <figure ref={addToIllustrationRefs} className="fig-wrapper should-animate">

                            {/* <Image alt="" src={greydots} layout="fill" /> */}

                        </figure>

                    </div>

                </div>



            </div>

        </section >
    );
}

export default FeaturedProducts;