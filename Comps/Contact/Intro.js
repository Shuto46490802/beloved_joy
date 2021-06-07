import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import img from "../../assets/homeintro.jpg";
import { doIntroImage } from "../PageLayouts/animation";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Intro = ({ getScrollProxy, contactIntroImageWrapperRef, contactIntroHeading1WrapperRef, contactIntroHeading1Ref, contactIntroHeading2WrapperRef, contactIntroHeading2Ref }) => {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        getScrollProxy()
        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    }, [])

    const intoImageRefs = useRef([]);
    const addToIntroImageRefs = (_el) => {
        if (_el && !intoImageRefs.current.includes(_el)) {
            intoImageRefs.current.push(_el)
        } else {
            intoImageRefs.current = [];
        }
    }

    useEffect(() => {

        if (isReady) {

            if (intoImageRefs.current.length > 0) {

                doIntroImage(contactIntroImageWrapperRef.current, intoImageRefs.current)

            }

            if (contactIntroHeading1Ref.current && contactIntroHeading2Ref.current) {

                gsap.fromTo([contactIntroHeading1Ref.current, contactIntroHeading2Ref.current],
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: contactIntroImageWrapperRef.current,
                            scrub: 1,
                            start: "top top",
                            end: `+=70% top`,
                        }
                    })

            }

            if (contactIntroHeading1WrapperRef.current && contactIntroHeading2WrapperRef.current) {

                gsap.fromTo([contactIntroHeading1WrapperRef.current, contactIntroHeading2WrapperRef.current],
                    {
                        y: 0,
                    },
                    {
                        y: "246px",
                        ease: "none",
                        scrollTrigger: {
                            trigger: contactIntroImageWrapperRef.current,
                            scrub: true,
                            start: "top top",
                            end: () => `bottom+=100%`
                        }
                    })

            }

        }

    }, [isReady])

    return (
        <section className="c-contact-intro w-100 vh-100 position-relative d-flex flex-column justify-content-center overflow-hidden">

            <div className="c-contact-intro__image__wrapper position-absolute w-100 h-100 t-0 l-0 overflow-hidden">

                <div ref={contactIntroImageWrapperRef} className="c-contact-intro__image__inner position-absolute w-100 h-100 t-0 l-0 overflow-hidden d-flex justify-content-center align-items-center">

                    <div className="c-contact-intro__image--landdscape d-md-block d-none position-absolute w-100 h-100 t-0 l-0">

                        <div className="parallax-wrapper">

                            <div ref={addToIntroImageRefs} className="parallax">

                                <figure className="fig-wrapper ">

                                    <Image src={img} layout="fill" alt="" priority />

                                </figure>

                            </div>

                        </div>

                    </div>

                    <div className="c-contact-intro__image--portrait position-absolute w-100 h-100 t-0 l-0 d-md-none">

                        <div className="parallax-wrapper">

                            <div ref={addToIntroImageRefs} className="parallax">

                                <figure className="fig-wrapper">

                                    <Image src={img} layout="fill" alt="" priority />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <h1 className="c-contact-intro__heading text-white d-flex flex-column align-items-center">

                <div ref={contactIntroHeading1WrapperRef} className="h1-wrap should-animate">

                    <div ref={contactIntroHeading1Ref} className="h1-inner should-animate">WE <em className="mx-6">WOULD LOVE</em> TO </div>

                </div>

                <div ref={contactIntroHeading2WrapperRef} className="h1-wrap should-animate">

                    <div ref={contactIntroHeading2Ref} className="h1-inner should-animate">HEAR FROM <em className="mx-6">YOU</em></div>

                </div>

            </h1>

        </section>
    );
}

export default Intro;