import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import img from "../../assets/homeintro.jpg";
import { doIntroImage } from "../PageLayouts/animation";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Intro = ({ privacyIntroImageWrapperRef, privacyIntroHeadingWrapperRef, privacyIntroHeadingRef, getScrollProxy }) => {

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

                doIntroImage(privacyIntroImageWrapperRef.current, introImageRefs.current)

            }

            if (privacyIntroHeadingRef.current) {

                gsap.fromTo(privacyIntroHeadingRef.current,
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: privacyIntroImageWrapperRef.current,
                            scrub: 1,
                            start: "top top",
                            end: `+=70% top`,
                        }
                    })

            }

            if (privacyIntroHeadingWrapperRef.current) {

                gsap.fromTo(privacyIntroHeadingWrapperRef.current,
                    {
                        y: 0,
                    },
                    {
                        y: "246px",
                        ease: "none",
                        scrollTrigger: {
                            trigger: privacyIntroImageWrapperRef.current,
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

                <div ref={privacyIntroImageWrapperRef} className="c-privacy-intro__image__inner position-absolute w-100 h-100 t-0 l-0 overflow-hidden d-flex justify-content-center align-items-center">

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

            <h1 ref={privacyIntroHeadingWrapperRef} className="c-privacy-intro__heading text-white ">
                <div className="h1-wrap should-animate">
                    <div ref={privacyIntroHeadingRef} className="h1-inner should-animate">
                        <em>
                            PRIVACY POLICY
                        </em>
                    </div>
                </div>

            </h1>

        </section>
    );
}

export default Intro;