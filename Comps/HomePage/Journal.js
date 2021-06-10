import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "../PageLayouts/Link";
import JournalContent from "./JournalContent"

import journal from "../../assets/journal.jpg";
import arrow from "../../assets/arrow.png";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

const Journal = ({ getScrollProxy }) => {

    useEffect(() => {
         // getScrollProxy()
         gsap.registerPlugin(ScrollTrigger)
    }, []);

    const sectionRef = useRef();
    const innerRef = useRef();
    const contentRefs = useRef([]);
    const addToContentRefs = (_el) => {
        if (_el && !contentRefs.current.includes(_el)) {
            contentRefs.current.push(_el)
        } else {
            contentRefs.current = [];
        }
    }

    const imageParallaxWrapperRefs = useRef([]);
    const addToImageParallaxWrapperRefs = (_el) => {
        if (_el && !imageParallaxWrapperRefs.current.includes(_el)) {
            imageParallaxWrapperRefs.current.push(_el)
        } else {
            imageParallaxWrapperRefs.current = [];
        }
    }

    const imageWrapperRefs = useRef([]);
    const addToImageWrapperRefs = (_el) => {
        if (_el && !imageWrapperRefs.current.includes(_el)) {
            imageWrapperRefs.current.push(_el)
        } else {
            imageWrapperRefs.current = [];
        }
    }

    const summaryRefs = useRef([]);
    const addToSummaryRefs = (_el) => {
        if (_el && !summaryRefs.current.includes(_el)) {
            summaryRefs.current.push(_el)
        } else {
            summaryRefs.current = [];
        }
    }

    const headingWrapperRefs = useRef([]);
    const addToHeadingWrapperRefs = (_el) => {
        if (_el && !headingWrapperRefs.current.includes(_el)) {
            headingWrapperRefs.current.push(_el)
        } else {
            headingWrapperRefs.current = [];
        }
    }

    const buttonRefs = useRef([]);
    const addToButtonRefs = (_el) => {
        if (_el && !buttonRefs.current.includes(_el)) {
            buttonRefs.current.push(_el)
        } else {
            buttonRefs.current = [];
        }
    }

    const headingWrapperMobileRefs = useRef([]);
    const addToHeadingWrapperMobileRefs = (_el) => {
        if (_el && !headingWrapperMobileRefs.current.includes(_el)) {
            headingWrapperMobileRefs.current.push(_el)
        } else {
            headingWrapperMobileRefs.current = [];
        }
    }

    return (
        <section ref={sectionRef} className="c-journal py-md-4">

            <div className="background blue" />

            <div ref={innerRef} className="c-journal__inner position-relative" >

                <Swiper
                    direction={"horizontal"}
                    speed={800}
                    loop={false}
                    slidePerView={1}
                    spaceBetween={0}
                    observer={true}
                    observerParent={true}
                    allowTouchMove={false}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    onSlideNextTransitionStart={(swiper) => {

                        function buildConditionalAnimation(mediaQuery) {

                            if (mediaQuery.matches) {

                                gsap.timeline({ paused: false, ease: "Power2.easeOut" })
                                    .fromTo(imageParallaxWrapperRefs.current[swiper.activeIndex],
                                        {
                                            x: `${window.innerWidth}`,
                                            rotationY: 20
                                        },
                                        {
                                            x: 0,
                                            rotationY: 0,
                                            duration: 1,
                                        })
                                    .fromTo(imageWrapperRefs.current[swiper.activeIndex],
                                        {
                                            rotation: 0
                                        },
                                        {
                                            rotation: -3,
                                            duration: 1,
                                        }, 0)
                                    .fromTo([headingWrapperRefs.current[swiper.activeIndex], summaryRefs.current[swiper.activeIndex], buttonRefs.current[swiper.activeIndex],],
                                        {
                                            opacity: 0,
                                            y: 10
                                        },
                                        {
                                            opacity: 1,
                                            y: 0,
                                            duration: 0.5,
                                            stagger: 0.1
                                        }, 0.9)

                            } else {

                                gsap.timeline({ paused: false, ease: "Power2.easeOut" })
                                    .fromTo(imageParallaxWrapperRefs.current[swiper.activeIndex],
                                        {
                                            x: `${window.innerWidth}`,
                                            rotationY: 40
                                        },
                                        {
                                            x: 0,
                                            rotationY: 0,
                                            duration: 1,
                                        })
                                    .fromTo([headingWrapperMobileRefs.current[swiper.activeIndex], summaryRefs.current[swiper.activeIndex], buttonRefs.current[swiper.activeIndex],],
                                        {
                                            opacity: 0,
                                            y: 10
                                        },
                                        {
                                            opacity: 1,
                                            y: 0,
                                            duration: 0.5,
                                            stagger: 0.1
                                        }, 0.9)

                            }

                        }

                        var mediaQuery = window.matchMedia("(min-width: 768px)");

                        // Initialise
                        buildConditionalAnimation(mediaQuery);

                        // Listen to changes
                        mediaQuery.addListener(buildConditionalAnimation);
                    }}
                    onSlidePrevTransitionStart={(swiper) => {



                        function buildConditionalAnimation(mediaQuery) {

                            if (mediaQuery.matches) {

                                gsap.timeline({ paused: false, ease: "Power2.easeOut" })
                                    .fromTo(imageParallaxWrapperRefs.current[swiper.activeIndex],
                                        {
                                            x: `-${window.innerWidth}`,
                                            rotationY: -20
                                        },
                                        {
                                            x: 0,
                                            rotationY: 0,
                                            duration: 1,
                                        })
                                    .fromTo(imageWrapperRefs.current[swiper.activeIndex],
                                        {
                                            rotation: -6
                                        },
                                        {
                                            rotation: -3,
                                            duration: 1,
                                        }, 0)
                                    .fromTo([headingWrapperRefs.current[swiper.activeIndex], summaryRefs.current[swiper.activeIndex], buttonRefs.current[swiper.activeIndex],],
                                        {
                                            opacity: 0,
                                            y: 10
                                        },
                                        {
                                            opacity: 1,
                                            y: 0,
                                            duration: 0.5,
                                            stagger: 0.1
                                        }, 0.9)

                            } else {

                                gsap.timeline({ paused: false, ease: "Power2.easeOut" })
                                    .fromTo(imageParallaxWrapperRefs.current[swiper.activeIndex],
                                        {
                                            x: `-${window.innerWidth}`,
                                            rotationY: -40
                                        },
                                        {
                                            x: 0,
                                            rotationY: 0,
                                            duration: 1,
                                        })
                                    .fromTo([headingWrapperMobileRefs.current[swiper.activeIndex], summaryRefs.current[swiper.activeIndex], buttonRefs.current[swiper.activeIndex],],
                                        {
                                            opacity: 0,
                                            y: 10
                                        },
                                        {
                                            opacity: 1,
                                            y: 0,
                                            duration: 0.5,
                                            stagger: 0.1
                                        }, 0.9)

                            }

                        }

                        var mediaQuery = window.matchMedia("(min-width: 768px)");

                        // Initialise
                        buildConditionalAnimation(mediaQuery);

                        // Listen to changes
                        mediaQuery.addListener(buildConditionalAnimation);

                    }}
                >

                    <SwiperSlide>

                        <div ref={addToContentRefs} className="journal__content__1 journal__content should-animate h-100 " >

                            <JournalContent
                                sectionRef={sectionRef}
                                innerRef={innerRef}
                                addToImageParallaxWrapperRefs={addToImageParallaxWrapperRefs}
                                addToImageWrapperRefs={addToImageWrapperRefs}
                                imageWrapperRefs={imageWrapperRefs}
                                summaryRefs={summaryRefs}
                                addToSummaryRefs={addToSummaryRefs}
                                headingWrapperRefs={headingWrapperRefs}
                                addToHeadingWrapperRefs={addToHeadingWrapperRefs}
                                buttonRefs={buttonRefs}
                                addToButtonRefs={addToButtonRefs}
                                addToHeadingWrapperMobileRefs={addToHeadingWrapperMobileRefs}
                                headingWrapperMobileRefs={headingWrapperMobileRefs}
                                img={journal}
                                heading1={"Afraid smithy fellowship"}
                                heading2={"debt carven hooks"}
                                summary={"I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed. I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed"}
                            />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div ref={addToContentRefs} className="journal__content__2 journal__content should-animate h-100">

                            <JournalContent
                                sectionRef={sectionRef}
                                innerRef={innerRef}
                                addToImageParallaxWrapperRefs={addToImageParallaxWrapperRefs}
                                addToImageWrapperRefs={addToImageWrapperRefs}
                                imageWrapperRefs={imageWrapperRefs}
                                summaryRefs={summaryRefs}
                                addToSummaryRefs={addToSummaryRefs}
                                headingWrapperRefs={headingWrapperRefs}
                                addToHeadingWrapperRefs={addToHeadingWrapperRefs}
                                buttonRefs={buttonRefs}
                                addToButtonRefs={addToButtonRefs}
                                addToHeadingWrapperMobileRefs={addToHeadingWrapperMobileRefs}
                                headingWrapperMobileRefs={headingWrapperMobileRefs}
                                img={journal}
                                heading1={"Afraid smithy fellowship"}
                                heading2={"debt carven hooks"}
                                summary={"I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed.I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed"}
                            />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div ref={addToContentRefs} className="journal__content__3 journal__content should-animate h-100">

                            <JournalContent
                                sectionRef={sectionRef}
                                innerRef={innerRef}
                                addToImageParallaxWrapperRefs={addToImageParallaxWrapperRefs}
                                addToImageWrapperRefs={addToImageWrapperRefs}
                                imageWrapperRefs={imageWrapperRefs}
                                summaryRefs={summaryRefs}
                                addToSummaryRefs={addToSummaryRefs}
                                headingWrapperRefs={headingWrapperRefs}
                                addToHeadingWrapperRefs={addToHeadingWrapperRefs}
                                buttonRefs={buttonRefs}
                                addToButtonRefs={addToButtonRefs}
                                addToHeadingWrapperMobileRefs={addToHeadingWrapperMobileRefs}
                                headingWrapperMobileRefs={headingWrapperMobileRefs}
                                img={journal}
                                heading1={"Afraid smithy fellowship"}
                                heading2={"debt carven hooks"}
                                summary={"I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed. I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed"}
                            />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div ref={addToContentRefs} className="journal__content__4 journal__content should-animate  h-100">

                            <JournalContent
                                sectionRef={sectionRef}
                                innerRef={innerRef}
                                addToImageParallaxWrapperRefs={addToImageParallaxWrapperRefs}
                                addToImageWrapperRefs={addToImageWrapperRefs}
                                imageWrapperRefs={imageWrapperRefs}
                                summaryRefs={summaryRefs}
                                addToSummaryRefs={addToSummaryRefs}
                                headingWrapperRefs={headingWrapperRefs}
                                addToHeadingWrapperRefs={addToHeadingWrapperRefs}
                                buttonRefs={buttonRefs}
                                addToButtonRefs={addToButtonRefs}
                                addToHeadingWrapperMobileRefs={addToHeadingWrapperMobileRefs}
                                headingWrapperMobileRefs={headingWrapperMobileRefs}
                                img={journal}
                                heading1={"Afraid smithy fellowship"}
                                heading2={"debt carven hooks"}
                                summary={"I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed. I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed"}
                            />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div ref={addToContentRefs} className="journal__content__5 journal__content should-animate  h-100">

                            <JournalContent
                                sectionRef={sectionRef}
                                innerRef={innerRef}
                                addToImageParallaxWrapperRefs={addToImageParallaxWrapperRefs}
                                addToImageWrapperRefs={addToImageWrapperRefs}
                                imageWrapperRefs={imageWrapperRefs}
                                summaryRefs={summaryRefs}
                                addToSummaryRefs={addToSummaryRefs}
                                headingWrapperRefs={headingWrapperRefs}
                                addToHeadingWrapperRefs={addToHeadingWrapperRefs}
                                buttonRefs={buttonRefs}
                                addToButtonRefs={addToButtonRefs}
                                addToHeadingWrapperMobileRefs={addToHeadingWrapperMobileRefs}
                                headingWrapperMobileRefs={headingWrapperMobileRefs}
                                img={journal}
                                heading1={"Afraid smithy fellowship"}
                                heading2={"debt carven hooks"}
                                summary={"I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed. I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed"}
                            />

                        </div>

                    </SwiperSlide>

                </Swiper>

            </div>

            <div className="arrow-wrapper right position-absolute swiper-button-next">

                <button name="arrow">

                    <figure className="fig-wrapper">

                        <img src={arrow} alt="" />

                    </figure>

                </button>

            </div>

            <div className="arrow-wrapper left position-absolute swiper-button-prev ">

                <button name="arrow">

                    <figure className="fig-wrapper">

                        <Image src={arrow} alt="" layout="fill" />

                    </figure>

                </button>

            </div>

        </section >
    );
}

export default Journal;