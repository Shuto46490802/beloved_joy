import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import img from "../../assets/homeintro.jpg";

import { doIntroImage } from "../PageLayouts/animation";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Intro = ({ getScrollProxy, aboutIntroImageWrapperRef, aboutIntroHeadingWrapperRef, aboutIntroHeadingRef, aboutIntroCaptionRef, aboutIntroCaptionWrapperRef }) => {

    useEffect(() => {
        getScrollProxy()
    }, [])

    const [isReady, setIsReady] = useState(false);
    const intoImageRefs = useRef([]);
    const addToIntroImageRefs = (_el) => {
        if (_el && !intoImageRefs.current.includes(_el)) {
            intoImageRefs.current.push(_el)
        } else {
            intoImageRefs.current = [];
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    }, [])

    useEffect(() => {

        if (isReady) {

            if (intoImageRefs.current.length > 0) {

                doIntroImage(aboutIntroImageWrapperRef.current, intoImageRefs.current)

            }

            if (aboutIntroHeadingRef.current) {

                gsap.fromTo(aboutIntroHeadingRef.current,
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: aboutIntroImageWrapperRef.current,
                            scrub: true,
                            start: "top top",
                            end: `bottom top`,
                            id: "AA"
                        }
                    })

            }

            if (aboutIntroHeadingWrapperRef.current
                && aboutIntroCaptionWrapperRef.current) {

                gsap.fromTo([aboutIntroHeadingWrapperRef.current, aboutIntroCaptionWrapperRef.current],
                    {
                        y: 0,
                    },
                    {
                        y: "246px",
                        ease: "none",
                        scrollTrigger: {
                            trigger: aboutIntroImageWrapperRef.current,
                            scrub: true,
                            start: "top top",
                            end: () => `bottom+=100%`
                        }
                    })

            }

        }

    }, [isReady])

    return (
        <section className="c-about-intro w-100 vh-100 position-relative d-flex flex-column justify-content-center overflow-hidden">

            <div className="c-about-intro__image__wrapper position-absolute w-100 h-100 t-0 l-0 overflow-hidden">

                <div ref={aboutIntroImageWrapperRef} className="c-about-intro__image__inner position-absolute w-100 h-100 t-0 l-0 overflow-hidden d-flex justify-content-center align-items-center should-animate">

                    <div className="c-about-intro__image--landdscape d-md-block d-none position-absolute w-100 h-100 t-0 l-0">
                        <div className="parallax-wrapper">
                            <div ref={addToIntroImageRefs} className="parallax">
                                <figure className="fig-wrapper ">
                                    <Image priority src={img} layout="fill" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="c-about-intro__image--portrait position-absolute w-100 h-100 t-0 l-0 d-md-none">
                        <div className="parallax-wrapper">
                            <div ref={addToIntroImageRefs} className="parallax">
                                <figure className="fig-wrapper">
                                    <Image priority src={img} layout="fill" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div ref={aboutIntroCaptionWrapperRef} className="c-about-intro__subline mb-6">
                <div className="overflow-hidden"><div className="lh-1 should-animate" ref={aboutIntroCaptionRef}>WHO WE ARE AND WHY WE DO WHAT WE DO</div></div>
            </div>

            <h1 ref={aboutIntroHeadingWrapperRef} className="c-about-intro__heading text-white ">
                <span className="h1-wrap"><div ref={aboutIntroHeadingRef} className="h1-inner should-animate">About Beloved Joy</div></span>
            </h1>

        </section>
    );
}

export default Intro;