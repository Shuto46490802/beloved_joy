import React, { useEffect, useRef } from "react";
import Link from "../PageLayouts/Link";
import Image from "next/image";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles, doImageParallax } from "../PageLayouts/animation";

const JournalContent = ({ img, heading1, heading2, summary, sectionRef, innerRef, addToImageParallaxWrapperRefs, addToImageWrapperRefs, imageWrapperRefs, summaryRefs, addToSummaryRefs, headingWrapperRefs, addToHeadingWrapperRefs, buttonRefs, addToButtonRefs, addToHeadingWrapperMobileRefs, headingWrapperMobileRefs }) => {

    //parallax

    //desktop
    const imageParallaxRef = useRef();
    const imageTriggerRef = useRef()

    useEffect(() => {

        ScrollTrigger.matchMedia({

            "(min-width: 768px)": () => {

            },

            "(max-width: 767.98px)": () => {


            },

            "all": () => {

                if (imageParallaxRef.current) {

                    doImageParallax(imageTriggerRef.current, imageParallaxRef.current)

                }

            }

        })

    }, [])

    //desktop
    const summaryWrapperRef = useRef();
    const heading1Ref = useRef();
    const heading2Ref = useRef();
    const imageRef = useRef();

    //mobile
    const heading1MobileRef = useRef();
    const heading2MobileRef = useRef();

    useEffect(() => {

        saveStyles([
            heading1Ref.current,
            heading2Ref.current,
            imageRef.current,
        ],
            imageWrapperRefs.current,
            summaryRefs.current,
            buttonRefs.current)

        const summaryTrigger = {
            trigger: summaryWrapperRef.current,
            start: "top bottom",
            toggleActions: "play none none reset"
        }

        if (summaryRefs.current.length > 0
            && buttonRefs.current.length > 0) {

            gsap.timeline({ paused: false, scrollTrigger: summaryTrigger })
                .fromTo(summaryRefs.current,
                    {
                        y: 150,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut",

                    })
                .fromTo(buttonRefs.current,
                    {
                        y: 150,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut",
                    }, 0.3)

        }

        ScrollTrigger.matchMedia({

            "(min-width: 768px)": () => {

                const innerTrigger = {
                    trigger: innerRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset"
                }

                if (imageWrapperRefs.current.length > 0
                    && imageRef.current) {

                    gsap.timeline({
                        paused: false,
                        ease: "Power2.easeOut",
                        scrollTrigger: innerTrigger
                    })
                        .fromTo(imageWrapperRefs.current,
                            {
                                y: 150,
                                rotation: 0,
                            },
                            {
                                y: 0,
                                rotation: -3,
                                duration: 1
                            })
                        .fromTo(imageRef.current,
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

                const headingTrigger = {
                    trigger: headingWrapperRefs.current[0],
                    start: "top bottom",
                    toggleActions: "play none none reset"
                }

                if (heading1Ref.current) {

                    gsap.fromTo(heading1Ref.current,
                        {
                            yPercent: -120
                        },
                        {
                            yPercent: 0,
                            duration: 1,
                            ease: "Power2.easeOut",
                            scrollTrigger: headingTrigger
                        })

                }

                if (heading2Ref.current) {

                    gsap.fromTo(heading2Ref.current,
                        {
                            yPercent: 120
                        },
                        {
                            yPercent: 0,
                            duration: 1,
                            ease: "Power2.easeOut",
                            scrollTrigger: headingTrigger,
                            delay: 0.1
                        })

                }

            },

            "(max-width: 767.98px)": () => {

                gsap.set(imageWrapperRefs.current,
                    {
                        y: 0
                    })

                const innerTrigger = {
                    trigger: imageWrapperRefs.current[0],
                    start: "top bottom",
                    toggleActions: "play none none reset"
                }

                if (imageRef.current) {

                    gsap.timeline({
                        paused: false,
                        ease: "Power2.easeOut",
                        scrollTrigger: innerTrigger
                    })
                        .fromTo(imageRef.current,
                            {
                                scale: 1.35,
                            },
                            {
                                scale: 1,
                                duration: 1.2
                            }, 0.2)

                }

                const headingTrigger = {
                    trigger: headingWrapperMobileRefs.current[0],
                    start: "top bottom",
                    toggleActions: "play none none reset"
                }

                if (heading1MobileRef.current) {

                    gsap.fromTo(heading1MobileRef.current,
                        {
                            yPercent: -120
                        },
                        {
                            yPercent: 0,
                            duration: 1,
                            ease: "Power2.easeOut",
                            scrollTrigger: headingTrigger
                        })

                }

                if (heading2MobileRef.current) {

                    gsap.fromTo(heading2MobileRef.current,
                        {
                            yPercent: 120
                        },
                        {
                            yPercent: 0,
                            duration: 1,
                            ease: "Power2.easeOut",
                            scrollTrigger: headingTrigger,
                            delay: 0.1
                        })

                }


            },

        })

    }, [])

    return (
        <div className="c-journal__content__wrapper col-12 w-100 h-100 d-flex py-3">

            <div ref={imageTriggerRef} className="c-journal__image__wrapper col-xl-4 col-md-4 col-8 d-flex justify-content-md-end">

                <div ref={addToImageWrapperRefs} className="c-journal__image should-animate ">

                    <div ref={addToImageParallaxWrapperRefs} className="parallax-wrapper should-animate">

                        <div ref={imageParallaxRef} className="parallax overflow-hidden ">

                            <figure ref={imageRef} className="fig-wrapper should-animate">

                                <Image src={img} layout="fill" alt="journal image" />

                            </figure>

                        </div>

                    </div>

                </div>

                <h2 ref={addToHeadingWrapperMobileRefs} className="c-journal__text__heading hide d-md-none position-absolute overflow-hidden">

                    <div className="split-lines">

                        <div ref={heading1MobileRef} className="lines lh-1 should-animate">{heading1}</div>
                        <div ref={heading2MobileRef} className="lines lh-1 should-animate">{heading2}</div>

                    </div>

                </h2>

            </div>

            <div className="c-journal__text__wrapper col-md-5 col-11">

                <h2 ref={addToHeadingWrapperRefs} className="c-journal__text__heading mt-xl-2 mt-md-1 overflow-hidden position-relative d-md-block d-none should-animate">

                    <div className="split-lines">

                        <div ref={heading1Ref} className="lines lh-1 should-animate">{heading1}</div>
                        <div ref={heading2Ref} className="lines lh-1 should-animate">{heading2}</div>

                    </div>

                </h2>

                <div ref={summaryWrapperRef} className="c-journal__text__summary mt-xl-3 mt-md-3 ps-md-2 mt-1 should-animate">

                    <p ref={addToSummaryRefs} className="should-animate" >{summary}</p>

                </div>

                <div ref={addToButtonRefs} className="c-journal__text__button position-relative should-animate">

                    <Link href={`/journal/${heading1}-${heading2}`}>

                        <a className="c-journal__text__button__link text-white position-relative">

                            <span className="c-journal__text__button__text text-pink section-small__link">
                                READ MORE
                            </span>

                        </a>

                    </Link>

                </div>

            </div>

        </div>
    );
}

export default JournalContent;