import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import img from "../../assets/homeintro.jpg";
import { doIntroImage } from "../PageLayouts/animation";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Intro = ({ termsIntroImageWrapperRef, termsIntroHeadingWrapperRef, termsIntroHeadingRef, getScrollProxy }) => {

    const [isReady, setisReady] = useState(false);

    useEffect(() => {
        getScrollProxy()

        setTimeout(() => {
            setisReady(true)
        }, 3000)
    }, [])

    const introImageRefs = useRef([]);
    const addToIntroImageRefs = (_el) => {
        if (_el && !introImageRefs.current.includes(_el)) {
            introImageRefs.current.push(_el)
        } else {
            introImageRefs.current = [];
        }
    }

    useEffect(() => {

        if (isReady) {

            if (introImageRefs.current.length > 0) {

                doIntroImage(termsIntroImageWrapperRef.current, introImageRefs.current)

            }

            if (termsIntroHeadingRef.current) {

                gsap.fromTo(termsIntroHeadingRef.current,
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: termsIntroImageWrapperRef.current,
                            scrub: 1,
                            start: "top top",
                            end: `+=70% top`,
                        }
                    })

            }

            if (termsIntroHeadingWrapperRef.current) {

                gsap.fromTo(termsIntroHeadingWrapperRef.current,
                    {
                        y: 0,
                    },
                    {
                        y: "246px",
                        ease: "none",
                        scrollTrigger: {
                            trigger: termsIntroImageWrapperRef.current,
                            scrub: true,
                            start: "top top",
                            end: () => `bottom+=100%`
                        }
                    })

            }

        }

    }, [isReady])

    return (
        <section className="c-privacy-intro w-100 vh-100 position-relative d-flex flex-column justify-content-center overflow-hidden">

            <div className="c-privacy-intro__image__wrapper position-absolute w-100 h-100 t-0 l-0 overflow-hidden">

                <div ref={termsIntroImageWrapperRef} className="c-privacy-intro__image__inner position-absolute w-100 h-100 t-0 l-0 overflow-hidden d-flex justify-content-center align-items-center">

                    <div className="c-privacy-intro__image--landdscape d-md-block d-none position-absolute w-100 h-100 t-0 l-0">

                        <div className="parallax-wrapper">
                            <div ref={addToIntroImageRefs} className="parallax">

                                <figure className="fig-wrapper ">
                                    <Image loading="eager" src={img} layout="fill" />
                                </figure>

                            </div>

                        </div>

                    </div>
                    <div className="c-privacy-intro__image--portrait position-absolute w-100 h-100 t-0 l-0 d-md-none">

                        <div className="parallax-wrapper">
                            <div ref={addToIntroImageRefs} className="parallax">

                                <figure className="fig-wrapper">
                                    <Image src={img} layout="fill" />
                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <h1 ref={termsIntroHeadingWrapperRef} className="c-privacy-intro__heading text-white ">
                <div className="h1-wrap should-animate">
                    <div ref={termsIntroHeadingRef} className="h1-inner should-animate">
                        <em>
                            TERMS & CONDITIONS
                        </em>
                    </div>
                </div>

            </h1>

        </section>
    );
}

export default Intro;