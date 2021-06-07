import { useEffect, useState, useRef } from "react";

import Image from "next/image";
import img6 from "../../assets/img6.jpg";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles, doImageParallax } from "../PageLayouts/animation";

const GoalTop = ({ getScrollProxy }) => {

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // getScrollProxy()
        gsap.registerPlugin(ScrollTrigger)

        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    }, [])

    const imageWrapperRef = useRef();
    const imageParallaxRef = useRef();
    const imageRef = useRef();

    const headingRef = useRef();
    const sublineRef = useRef();

    useEffect(() => {

        if (isReady) {
            if (imageParallaxRef.current) {
                doImageParallax(imageWrapperRef.current, imageParallaxRef.current)
            }
        }

    }, [isReady])

    useEffect(() => {

        if (isReady) {

            const imageTrigger = {
                trigger: imageWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (imageRef.current) {

                gsap.fromTo(imageRef.current,
                    {
                        scale: 1.25
                    },
                    {
                        scale: 1,
                        duration: 1,
                        ease: "Power2.easeOut",
                        scrollTrigger: imageTrigger,
                        transformOrigin: "bottom"
                    })

            }

            const textTrigger = {
                trigger: headingRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (headingRef.current
                && sublineRef.current) {

                gsap.timeline({ paused: false, scrollTrigger: textTrigger })
                    .fromTo(headingRef.current,
                        {
                            x: 100,
                            opacity: 0
                        },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut"
                        })
                    .fromTo(sublineRef.current,
                        {
                            y: 100,
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
        <div className="c-about-goal-top d-flex flex-wrap overflow-hidden">

            <div className="background lavender" />

            <div className="c-about-goal-top__content__wrapper text col-md-6 d-md-flex flex-wrap align-items-center position-relative order-1">

                <div className="pt-3 pt-md-2 pb-2 pt-xl-3 pt-xlg-5 px-1 px-md-2 pe-xl-0 col-xl-10 ps-xl-5 pb-xl-5">

                    <h3 ref={headingRef} className="h2 mb-2 uppercase should-animate">
                        Our Goal
                    </h3>

                    <div ref={sublineRef} className="should-animate">

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Risus nec feugiat in fermentum posuere urna nec. Vel orci porta non pulvinar. Arcu dictum varius duis at consectetur lorem donec massa.
                            Nulla facilisi morbi tempus iaculis. Ultrices sagittis orci a scelerisque purus semper eget duis. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim.
                            At lectus urna duis convallis. Integer enim neque volutpat ac. Sed cras ornare arcu dui vivamus arcu.
                            Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Consequat ac felis donec et odio pellentesque diam volutpat. Ultrices vitae auctor eu augue ut lectus.
                        </p>

                    </div>

                </div>

            </div>

            <div ref={imageWrapperRef} className="c-about-goal-top__content__wrapper image col-md-6 col">

                <div className="overflow-hidden h-100">

                    <div className="c-about-goal-top__image position-relative should-animate">

                        <div className="parallax-wrapper">

                            <div ref={imageParallaxRef} className="parallax">

                                <figure ref={imageRef} className="fig-wrapper should-animate">

                                    <Image src={img6} layout="fill" alt="" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default GoalTop;