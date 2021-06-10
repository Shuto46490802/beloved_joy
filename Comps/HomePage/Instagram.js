import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "../PageLayouts/Link";
import InstagramFigure from "./InstagramFigure";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles } from "../PageLayouts/animation";

const Instagram = ({ instagramData, getScrollProxy }) => {

    useEffect(() => {
        // getScrollProxy()
        gsap.registerPlugin(ScrollTrigger)
    }, [])


    const sectionRef = useRef();
    const innerRef = useRef();
    const pinWrap = useRef();
    const imageRefs = useRef([]);
    const addToImageRefs = (_el) => {
        if (_el && !imageRefs.current.includes(_el)) {
            imageRefs.current.push(_el)
        } else {
            imageRefs.current = []
        }
    }

    //images aimation
    useEffect(() => {

        const images = imageRefs.current.filter((img) => imageRefs.current.indexOf(img) !== 4);
        const centerImage = imageRefs.current[4];

        gsap.set(imageRefs.current,
            {
                transformOrigin: "44.9% 50%"
            })

        const trigger = {
            trigger: pinWrap.current,
            start: () => `-=${(window.innerHeight - pinWrap.current.clientHeight) / 2} top`,
            end: () => `+=${innerRef.current.clientHeight} bottom`,
            scrub: true,
            ease: "none",
            pin: pinWrap.current,
        }

        const trigger2 = {
            trigger: pinWrap.current,
            start: () => `-=${(window.innerHeight - pinWrap.current.clientHeight) / 2} top`,
            end: () => `+=${innerRef.current.clientHeight} bottom`,
            scrub: true,
            ease: "none",
            pin: pinWrap.current,
        }

        if (images.length > 0) {

            gsap.timeline({ paused: false, scrollTrigger: trigger })
                .set(images,
                    {
                        visibility: "visible",
                    })
                .fromTo(images,
                    {
                        scale: 3.333
                    },
                    {
                        scale: 1,

                    })

        }

        if (centerImage) {

            gsap.timeline({ paused: false, scrollTrigger: trigger2 })
                .set(centerImage,
                    {
                        visibility: "visible",
                    })
                .fromTo(centerImage,
                    {
                        scale: 3.333,
                    },
                    {
                        scale: 1,
                    })

        }


    }, [])

    //text animation
    const textWrapperRef = useRef();
    const smallTextRef = useRef();
    const heading1Ref = useRef();
    const heading2Ref = useRef();
    const sublineRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {

        const trigger = {
            trigger: textWrapperRef.current,
            start: "top bottom",
            toggleActions: "play none none reset"
        }

        if (smallTextRef.current && heading1Ref.current && heading2Ref.current && sublineRef.current) {

            gsap.fromTo([smallTextRef.current, heading1Ref.current, heading2Ref.current, sublineRef.current],
                {
                    yPercent: 120,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: trigger,
                    ease: "Power2.easeOut",
                    stagger: 0.1
                })

        }

        if (buttonRef.current) {

            gsap.fromTo(buttonRef.current,
                {
                    y: 150,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: trigger,
                    ease: "Power2.easeOut"
                })

        }

    }, [])

    return (
        <section ref={sectionRef} className="c-instagram overflow-hidden pt-md-5 pt-3 pb-4">

            <div className="background pink" />

            <div ref={innerRef} className="c-instagram__inner mb-xl-2">

                <div ref={pinWrap} className="c-instagram__grid">

                    {
                        instagramData.map((data, i) => (
                            <InstagramFigure
                                img={`${data.mediaURL}`}
                                index={i}
                                addToImageRefs={addToImageRefs}
                                key={i}
                            />
                        ))
                    }

                </div>

            </div>

            <div ref={textWrapperRef} className="c-instagram__text__wrapper ">

                <div className="overflow-hidden">

                    <div ref={smallTextRef} className="c-instagram__text__xs should-animate">
                        INSTAGRAM
                    </div>

                </div>

                <div className="c-instagram__text__follow pt-md-1">

                    <h3 className="c-instagram__follow__us">

                        <div className="split-lines">

                            <div className="lines overflow-hidden"><div ref={heading1Ref} className="lh-1_2 should-animate">Follow us</div></div>
                            <div className="lines overflow-hidden"><div ref={heading2Ref} className="lh-1_2 should-animate">@belovedjoy</div></div>

                        </div>

                    </h3>

                </div>

                <div className="c-instagram__text__sublines pt-md-1 mb-1 overflow-hidden">

                    <div ref={sublineRef} className="lh-1 m-0 should-animate">Become part of our journey</div>

                </div>

                <div ref={buttonRef} className="c-instagram__text__button pt-md-1 ps-md-3">

                    <Link ariaLabel="instagram" href="/">

                        <a className="c-instagram__text__button__link">

                            <span className="c-instagram__text__button__text text-pink section-small__link">

                                FOLLOW US

                            </span>

                        </a>

                    </Link>

                </div>

            </div>

        </section>
    );
}

export default Instagram;

