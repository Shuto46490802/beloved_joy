import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles, doImageParallax } from "../PageLayouts/animation";

const AboutUs = ({ getScrollProxy }) => {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        // getScrollProxy()
        gsap.registerPlugin(ScrollTrigger)
        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    }, [])

    const image1WrapperRef = useRef();
    const image1ParallaxRef = useRef();
    const image1Ref = useRef();

    const image2TriggerRef = useRef();
    const image2WrapperRef = useRef();
    const image2ParallaxRef = useRef();
    const image2TabletTriggerRef = useRef()
    const image2TabletWrapperRef = useRef();
    const image2TabletParallaxRef = useRef();

    const image3WrapperRef = useRef();
    const image3ParallaxRef = useRef()
    const image3Ref = useRef();
    const image3MobileWrapperRef = useRef();
    const image3MobileParallaxRef = useRef();

    const textWrapperRef = useRef();
    const headingRef = useRef();

    const sublineRefs = useRef([]);
    const addToSublineRefs = (_el) => {
        if (_el && !sublineRefs.current.includes(_el)) {
            sublineRefs.current.push(_el)
        } else {
            sublineRefs.current = [];
        }
    }

    useEffect(() => {
        saveStyles([
            image3ParallaxRef.current,
        ])

        if (isReady) {

            if (image1WrapperRef.current && image1ParallaxRef.current) {

                doImageParallax(image1WrapperRef.current, image1ParallaxRef.current)

            }

            const image1Trigger = {
                trigger: image1WrapperRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                ease: "none"
            }

            if (image1ParallaxRef.current) {

                gsap.fromTo(image1ParallaxRef.current,
                    {
                        scale: 1.15
                    },
                    {
                        scale: 1,
                        scrollTrigger: image1Trigger,
                    })

            }

            const image2Trigger = {
                trigger: image2TriggerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                ease: "none"
            }

            if (image2ParallaxRef.current) {

                gsap.fromTo(image2ParallaxRef.current,
                    {
                        y: 0
                    },
                    {
                        y: -200,
                        scrollTrigger: image2Trigger
                    })

            }


            ScrollTrigger.matchMedia({

                "(min-width: 768px)": () => {


                    const image3Trigger = {
                        trigger: image3WrapperRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        ease: "none"
                    }

                    if (image3ParallaxRef.current) {

                        gsap.fromTo(image3ParallaxRef.current,
                            {
                                y: 0
                            },
                            {
                                y: -100,
                                scrollTrigger: image3Trigger
                            })

                    }

                    const image2TabletTrigger = {
                        trigger: image2TabletWrapperRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        ease: "none"
                    }

                    if (image2TabletParallaxRef.current) {

                        gsap.fromTo(image2TabletParallaxRef.current,
                            {
                                y: 0
                            },
                            {
                                y: -200,
                                scrollTrigger: image2TabletTrigger
                            })

                    }

                },


                "(max-width: 767.98px)": () => {

                    const image3Trigger = {
                        trigger: image3MobileWrapperRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        ease: "none"
                    }

                    if (image3MobileParallaxRef.current) {

                        gsap.fromTo(image3MobileParallaxRef.current,
                            {
                                y: 0
                            },
                            {
                                y: -40,
                                scrollTrigger: image3Trigger
                            })

                    }

                }

            })

        }

    }, [isReady])

    useEffect(() => {

        saveStyles([
            image1Ref.current,
            image3Ref.current,
            headingRef.current,
            image2WrapperRef.current,
            image2TabletWrapperRef.current,
            image3MobileWrapperRef.current,
        ],
            sublineRefs.current
        )

        if (isReady) {

            const image1Trigger = {
                trigger: image1WrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (image1Ref.current) {

                gsap.fromTo(image1Ref.current,
                    {
                        scale: 1.2
                    },
                    {
                        scale: 1,
                        duration: 1.2,
                        ease: "Power2.easeOut",
                        scrollTrigger: image1Trigger
                    })

            }

            const image2Trigger = {
                trigger: image2TriggerRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (image2WrapperRef.current) {

                gsap.fromTo(image2WrapperRef.current,
                    {
                        y: 150,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut",
                        scrollTrigger: image2Trigger
                    })

            }

            const image2TabletTrigger = {
                trigger: image2TabletTriggerRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (image2TabletWrapperRef.current) {

                gsap.fromTo(image2TabletWrapperRef.current,
                    {
                        y: 150,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut",
                        scrollTrigger: image2TabletTrigger
                    })

            }

            const image3Trigger = {
                trigger: image3WrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (image3Ref.current) {

                gsap.fromTo(image3Ref.current,
                    {
                        y: 150,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut",
                        scrollTrigger: image3Trigger
                    })

            }

            const image3MobileTrigger = {
                trigger: textWrapperRef.current,
                start: "top+=50% bottom",
                toggleActions: "play none none reset"
            }

            if (image3MobileWrapperRef.current) {

                gsap.fromTo(image3MobileWrapperRef.current,
                    {
                        y: 150,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut",
                        scrollTrigger: image3MobileTrigger
                    })

            }


            const textTrigger = {
                trigger: textWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (headingRef.current
                && sublineRefs.current.length > 0) {

                gsap.timeline({ paused: false, scrollTrigger: textTrigger })
                    .fromTo(headingRef.current,
                        {
                            y: 100,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut"
                        })
                    .fromTo(sublineRefs.current,
                        {
                            y: (index) => index === 0 ? 100 : `${100 * (index + 0.5)}`,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut",
                        }, 0.1)

            }

        }

    }, [isReady])

    return (
        <div className="c-about-us d-flex flex-wrap pt-1 pb-3 pt-md-3 pt-xl-5 pb-xl-5 position-relative">

            <div className="background pink" />

            <div className="c-about-us__image1__wrapper d-flex flex-wrap justify-content-xl-center col-md-5 col ps-xl-4 ps-1 pe-1 pe-md-2 pe-xl-1">

                <div ref={image1WrapperRef} className="c-about-us__image1__inner overflow-hidden col-12">

                    <div className="c-about-us__image1 position-relative should-animate">

                        <div className="parallax-wrapper">

                            <div ref={image1ParallaxRef} className="parallax">

                                <figure ref={image1Ref} className="fig-wrapper should-animate">

                                    <Image src={img2} layout="fill" alt="" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={image2TabletTriggerRef} className="c-about-us__image2__inner hide col-md-7 offset-md-5 pt-1 d-none d-md-block d-xl-none">

                    <div ref={image2TabletWrapperRef} className="c-about-us__image2 position-relative should-animate">

                        <div ref={image2TabletParallaxRef} className="parallax position-absolute h-100 w-100">

                            <figure className="fig-wrapper">

                                <Image src={img3} layout="fill" alt="" />

                            </figure>

                        </div>

                    </div>

                </div>

            </div>

            <div ref={textWrapperRef} className="c-about-us__text__wrapper col-md col-xl-4 ps-md-2 pe-md-2 mt-1 mt-md-0 mt-xl-2 on-top">

                <div className="c-about-us__text__inner ms-1 pe-1 pe-md-0">

                    <h2 ref={headingRef} className="c-about-us__heading mt-md-2 mt-1 mb-2">
                        <div className="lh-1 should-animate">About Us</div>
                    </h2>

                    <div className="c-about-us__subline pe-md-2 should-animate">

                        <p ref={addToSublineRefs}>
                            Ligulas step drops both. You shall not pass. Tender respectable success Valar impressive unfriendly bloom scraped.
                            <span className="d-inline-block text-pink">Beloved Joy</span> Tender respectable success Valar impressive unfriendly bloom scraped.
                        </p>

                        <p ref={addToSublineRefs}>
                            Ligulas step drops both. You shall not pass. Tender respectable success Valar impressive. Tender respectable success Valar impressive. Ligulas step drops both
                        </p>

                        <p ref={addToSublineRefs}>
                            <span className="d-inline-block text-pink">Beloved Joy</span> Ligulas step drops both. You shall not pass. Tender respectable success Valar impressive.
                        </p>

                    </div>

                </div>

            </div>

            <div className="c-about-us__image2__wrapper d-flex d-md-none d-xl-flex flex-column justify-content-end col-6 offset-2 offset-md-0 col-md-3 ps-md-1 mt-2 mt-md-0">

                <div ref={image2TriggerRef} className="c-about-us__image2__inner position-relative me-md-4">

                    <div className="overflow-md-hidden">

                        <div ref={image2WrapperRef} className="c-about-us__image2 position-relative should-animate">

                            <div ref={image2ParallaxRef} className="parallax position-absolute w-100">

                                <figure className="fig-wrapper">

                                    <Image src={img3} layout="fill" alt="" />

                                </figure>

                            </div>

                        </div>

                        <div ref={image3MobileWrapperRef} className="c-about-us__image3 hide position-absolute d-md-none d-block">

                            <div ref={image3MobileParallaxRef} className="parallax position-absolute w-100 h-100">

                                <figure className="fig-wrapper">

                                    <Image src={img4} layout="fill" alt="" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div ref={image3WrapperRef} className="c-about-us__image3__wrapper position-absolute r-0 d-md-block d-none">

                <div ref={image3Ref} className="c-about-us__image3 position-relative ">

                    <div ref={image3ParallaxRef} className="parallax position-absolute t-0 l-0 w-100 h-100">

                        <figure className="fig-wrapper">

                            <Image src={img4} layout="fill" alt="" />

                        </figure>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AboutUs;