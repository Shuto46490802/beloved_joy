import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import img from "../../assets/homeintro.jpg";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

import { doIntroImage } from "../PageLayouts/animation";

const HomeIntro = ({ getScrollProxy, addToHeadingRefs, addToCaptionLeftRefs, addToCaptionRightRefs, headingRefs, introImageWrapperRef, captionLeftRefs, captionRightRefs, introHeadingWrapperRef }) => {

    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        getScrollProxy()
    }, []);

    const captionWrapperRef = useRef();
    const introImageRefs = useRef([]);
    const addToIntroImageRefs = (_el) => {
        if (_el && !introImageRefs.current.includes(_el)) {
            introImageRefs.current.push(_el)
        } else {
            introImageRefs.current = [];
        }
    }

    useEffect(() => {

        setTimeout(() => {
            setIsDone(true)
        }, 3500)

    }, [])

    useEffect(() => {

        if (isDone) {

            if (introImageRefs.current.length > 0) {

                doIntroImage(introImageWrapperRef.current, introImageRefs.current)

            }

            if (headingRefs.current.length > 0) {

                gsap.fromTo(headingRefs.current,
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: introImageWrapperRef.current,
                            scrub: 1,
                            start: "top top",
                            end: `+=70% top`,
                            id: "AA"
                        }
                    })

            }

            if (introHeadingWrapperRef.current && captionWrapperRef.current) {

                gsap.fromTo([introHeadingWrapperRef.current, captionWrapperRef.current],
                    {
                        y: 0,
                    },
                    {
                        y: "246px",
                        ease: "none",
                        scrollTrigger: {
                            trigger: introImageWrapperRef.current,
                            scrub: true,
                            start: "top top",
                            end: () => `bottom+=100%`
                        }
                    })

            }
        }

    }, [isDone])

    return (
        <section className="c-home-intro w-100 vh-100 position-relative d-flex flex-column justify-content-center overflow-hidden">
            <div className="c-home-intro__image__wrapper position-absolute w-100 h-100 t-0 l-0 overflow-hidden">
                <div ref={introImageWrapperRef} className="c-home-intro__image__inner should-animate position-absolute w-100 h-100 t-0 l-0 overflow-hidden d-flex justify-content-center align-items-center">
                    <div className="c-home-intro__image--landdscape overflow-hidden d-md-block d-none position-absolute w-100 h-100 t-0 l-0">
                        <div className="parallax-wrapper">
                            <div ref={addToIntroImageRefs} className="parallax">
                                <figure className="fig-wrapper should-animate">
                                    <Image priority src={img} layout="fill" alt="beloved joy home image" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="c-home-intro__image--portrait overflow-hidden position-absolute w-100 h-100 t-0 l-0 d-md-none">
                        <div className="parallax-wrapper">
                            <div ref={addToIntroImageRefs} className="parallax">
                                <figure className="fig-wrapper should-animate">
                                    <Image priority src={img} layout="fill" alt="beloved joy home image" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 ref={introHeadingWrapperRef} className="c-home-intro__heading should-animate">
                <span className="h1-wrap"><div ref={addToHeadingRefs} className="h1-inner should-animate">Pre-loved pieces</div></span>
                <span className="h1-wrap"><div ref={addToHeadingRefs} className="h1-inner should-animate">into your everyday wear</div></span>
            </h1>

            <div ref={captionWrapperRef} className="c-home-intro__caption d-flex justify-content-center text-white should-animate">
                <div ref={addToCaptionLeftRefs}>I</div>
                <div ref={addToCaptionLeftRefs}>T</div>
                <div ref={addToCaptionLeftRefs}>'</div>
                <div ref={addToCaptionLeftRefs}>S</div>
                <div ref={addToCaptionLeftRefs}>&nbsp;</div>
                <div ref={addToCaptionLeftRefs}>B</div>
                <div ref={addToCaptionLeftRefs}>E</div>
                <div ref={addToCaptionLeftRefs}>L</div>
                <div ref={addToCaptionRightRefs}>O</div>
                <div ref={addToCaptionRightRefs}>V</div>
                <div ref={addToCaptionRightRefs}>E</div>
                <div ref={addToCaptionRightRefs}>D</div>
                <div ref={addToCaptionRightRefs}>&nbsp;</div>
                <div ref={addToCaptionRightRefs}>J</div>
                <div ref={addToCaptionRightRefs}>O</div>
                <div ref={addToCaptionRightRefs}>Y</div>
            </div>

        </section>
    );
}

export default HomeIntro;