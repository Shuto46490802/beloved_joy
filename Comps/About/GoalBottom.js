import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles, doImageParallax } from "../PageLayouts/animation";

const GoalBottom = ({ getScrollProxy }) => {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        // getScrollProxy()
        gsap.registerPlugin(ScrollTrigger)
        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    }, [])

    const image1WrapperRef = useRef();
    const image1Ref = useRef();
    const imgae1ParallaxRef = useRef();

    const image2WrapperRef = useRef();
    const image2Ref = useRef();
    const imgae2ParallaxRef = useRef();

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

        if (isReady) {

            const image1Trigger = {
                trigger: image1WrapperRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                ease: "none",
            }

            if (imgae1ParallaxRef.current) {

                gsap.fromTo(imgae1ParallaxRef.current,
                    {
                        y: 0
                    },
                    {
                        y: -60,
                        scrollTrigger: image1Trigger
                    })

            }

            const image2Trigger = {
                trigger: image2WrapperRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                ease: "none"
            }

            if (imgae2ParallaxRef.current) {

                gsap.fromTo(imgae2ParallaxRef.current,
                    {
                        y: 0
                    },
                    {
                        y: -250,
                        scrollTrigger: image2Trigger
                    })

            }

        }

    }, [isReady])

    useEffect(() => {

        saveStyles([
            image1Ref.current,
            image2Ref.current
        ])

        if (isReady) {

            const image1Trigger = {
                trigger: image1WrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset",
            }

            if (image1Ref.current) {

                gsap.fromTo(image1Ref.current,
                    {
                        y: 150,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut",
                        scrollTrigger: image1Trigger
                    })

            }

            const image2Trigger = {
                trigger: image2WrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (image2Ref.current) {

                gsap.fromTo(image2Ref.current,
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
                            ease: "Power2.easeOut",
                        })
                    .fromTo(sublineRefs.current,
                        {
                            y: (index) => index === "0" ? 100 : `${100 * (index + 0.5)}`,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut",
                        }, 0.3)

            }

        }

    }, [isReady])

    return (
        <div className="c-about-gaol-bottom d-flex flex-wrap pb-2 ">

            <div className="background pink" />

            <div className="c-about-gaol-bottom__text__wrapper order-md-0 order-1 col-md-6 col-12 pt-md-2 pt-md-3 pb-md-3 pt-xl-5 pb-xl-5 px-1 px-xl-0">

                <div ref={textWrapperRef} className="c-about-gaol-bottom__text__inner col-xl-8 offset-xl-2">

                    <h3 ref={headingRef} className="h2 mb-2 uppercase pe-4 pe-md-0 lh-14 should-animate">
                        Morbi in sem quis dui placerat ornare quis dui placerat.
                    </h3>

                    <div className="c-about-goal-bottom__subline__wrapper">

                        <div ref={addToSublineRefs} className="should-animate">

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Risus nec feugiat in fermentum posuere urna nec. Vel orci porta non pulvinar.
                                Arcu dictum varius duis at consectetur lorem donec massa. Nulla facilisi morbi tempus iaculis.
                                Ultrices sagittis orci a scelerisque purus semper eget duis.
                            </p>

                        </div>

                        <div ref={addToSublineRefs} className="should-animate">

                            <p>
                                Consequat ac felis donec et odio pellentesque diam volutpat.
                                Ultrices vitae auctor eu augue ut lectus.
                                Quis auctor elit sed vulputate mi sit amet mauris commodo.
                                Viverra nibh cras pulvinar mattis nunc sed. Urna duis convallis convallis tellus.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="c-about-gaol-bottom__images__wrapper order-md-1 order-0 col-md-6 col-12 pt-4 pt-md-5 d-flex justify-content-start justify-content-md-center justify-content-xl-start">

                <div className="c-about-gaol-bottom__images__inner col-12 col-md-6 col-xl-5 position-relative ms-md-4 px-1 px-md-0">

                    <div ref={image1WrapperRef} className="c-about-gaol-bottom__image1__wrapper col-8 col-md-10 col-xl-12">

                        <div ref={image1Ref} className="c-about-gaol-bottom__image1  ">

                            <div ref={imgae1ParallaxRef} className="parallax position-absolute w-100 h-100 t-0 l-0">

                                <figure className="fig-wrapper">

                                    <Image src={img2} layout="fill" alt="" />

                                </figure>

                            </div>

                        </div>

                    </div>

                    <div ref={image2WrapperRef} className="c-about-gaol-bottom__image2__wrapper position-relative col-7 col-md-12">

                        <div ref={image2Ref} className="c-about-gaol-bottom__image2">

                            <div ref={imgae2ParallaxRef} className="parallax position-absolute w-100 h-100 t-0 l-0">

                                <figure className="fig-wrapper">

                                    <Image src={img3} layout="fill" alt="" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default GoalBottom;