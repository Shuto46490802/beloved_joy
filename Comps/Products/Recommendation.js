import React, { useEffect, useState, useRef } from "react";
import Link from "../PageLayouts/Link";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import gsap from "gsap/gsap-core";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRouter } from "next/router";
SwiperCore.use([Navigation]);

const Recommendation = ({ products, getScrollProxy }) => {

    const recommendation = products.filter(({ category }) => category.indexOf("top") !== -1);
    const [isReady, setIsReady] = useState(false);
    const router = useRouter()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    }, [])

    const textWrapperRef = useRef();
    const sublineRef = useRef();
    const headingRef = useRef();

    const galleryWrapperRef = useRef();
    const imageRefs = useRef([]);
    const addToImageRefs = (_el) => {
        if (_el && !imageRefs.current.includes(_el)) {
            imageRefs.current.push(_el)
        } else {
            imageRefs.current = [];
        }
    }
    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = [];
        }
    }

    useEffect(() => {

        if (isReady) {

            const textTrigger = {
                trigger: textWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (sublineRef.current
                && headingRef.current) {

                gsap.timeline({ paused: false, scrollTrigger: textTrigger })
                    .fromTo(sublineRef.current,
                        {
                            yPercent: 120,
                            opacity: 0
                        },
                        {
                            yPercent: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut"
                        })
                    .fromTo(headingRef.current,
                        {
                            yPercent: 120,
                            opacity: 0
                        },
                        {

                            yPercent: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut"
                        }, 0.1)

            }

            const galleryTrigger = {
                trigger: galleryWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (imageRefs.current.length > 0) {

                gsap.fromTo(imageRefs.current,
                    {
                        xPercent: (index) => index === 0 ? 100 : 100 * (index + 0.3),
                        opacity: 0
                    },
                    {
                        xPercent: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "Power2.easeOut",
                        scrollTrigger: galleryTrigger
                    })

            }

            if (textRefs.current.length > 0) {

                gsap.fromTo(textRefs.current,
                    {
                        xPercent: (index) => index === 0 ? 100 : 100 * (index + 0.5),
                        opacity: 0
                    },
                    {
                        xPercent: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "Power2.easeOut",
                        scrollTrigger: galleryTrigger
                    })

            }

        }

    }, [isReady])

    return (
        <section className="c-recommendation pt-3 pb-3 pt-xl-4 pb-xl-5">

            <div className="background pink" />

            <div ref={textWrapperRef} className="c-recommendation__heading__wrapper d-flex justify-content-center mb-5 px-1 px-md-0">

                <div className="text-center">

                    <div className="c-recommendation__sub-heading small ls-1 mb-1 mb-md-2 overflow-hidden">
                        <span ref={sublineRef} className="lh-1 d-inline-block should-animate">CHECK - ALSO</span>
                    </div>

                    <h3 className="c-recommendation__headline h1 mb-1 overflow-hidden">
                        <span ref={headingRef} className="lh-1 d-inline-block should-animate">complement with</span>
                    </h3>

                </div>

            </div>

            <div ref={galleryWrapperRef} className="c-recommendation__gallery position-relative ps-2 ps-xl-5 overflow-hidden">

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
                            slidesPerView: 4.1,
                            spaceBetween: 0
                        },
                        1200: {
                            slidesPerView: 4.1,
                            spaceBetween: 0
                        }
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                >

                    {
                        recommendation.map((data, i) => {
                            return <SwiperSlide key={i}>

                                <Link href={`/products/[slug]`} as={`/products/${data.slug}`}>

                                    <a
                                        className={`c-product__thumb w-100 h-100`}
                                    >

                                        <div ref={addToImageRefs} className="c-recommendation__image__wrapper mb-1">

                                            <figure className="fig-wrapper">

                                                <Image src={data.images[0].src} layout="fill" alt="" />

                                            </figure>

                                            <figure className="fig-wrapper c-product-thumb__overlay">

                                                <Image src={data.images[1].src} layout="fill" alt="" />

                                            </figure>

                                        </div>

                                        <div ref={addToTextRefs} className="c-product__caption text-white">
                                            <h4 className="c-product__caption__text">
                                                {data.name}
                                            </h4>
                                            <h5 className="price">
                                                ${data.price}
                                            </h5>
                                        </div>

                                    </a>

                                </Link>

                            </SwiperSlide>
                        })
                    }

                    <Link href="/" scroll={false}><a className="swiper-button-prev"></a></Link>
                    <Link href="/" scroll={false}><a className="swiper-button-next"></a></Link>

                </Swiper>

            </div>

        </section>
    );
}

export default Recommendation;