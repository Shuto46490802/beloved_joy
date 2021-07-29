import React, { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "../PageLayouts/Link";

import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles, doImageParallax } from "../PageLayouts/animation";
import { useRouter } from "next/router";

const HomeAbout = ({ getScrollProxy }) => {

    useEffect(() => {
        // getScrollProxy()
        gsap.registerPlugin(ScrollTrigger)
    }, []);

    const sectionRef = useRef();

    //animation screen width >= 768

    //parallax animation
    //desktop
    const headingWrapperRef = useRef();
    const image2WrapperRef = useRef();
    const image3WrapperRef = useRef();
    const doodleWrapperRef = useRef();
    const illustrationWrapperRef = useRef();
    const image1ParallaxRef = useRef();

    //mobile
    const image2WrapperMobileRef = useRef();
    const doodleWrapperMobileRef = useRef();

    useEffect(() => {

        saveStyles([
            headingWrapperRef.current,
            image2WrapperRef.current,
            image3WrapperRef.current,
            doodleWrapperRef.current,
            image2WrapperMobileRef.current,
            doodleWrapperMobileRef.current
        ])

        ScrollTrigger.matchMedia({
            "(min-width: 768px)": () => {

                const trigger = {
                    trigger: sectionRef.current,
                    scrub: true,
                    start: "top bottom",
                    end: `bottom top`,
                    ease: "none",
                };

                if (headingWrapperRef.current) {

                    gsap.fromTo(headingWrapperRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-100px",
                            scrollTrigger: trigger
                        })

                }

                if (image2WrapperRef.current) {

                    gsap.fromTo(image2WrapperRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-100px",
                            scrollTrigger: trigger
                        })

                }

                if (image3WrapperRef.current) {

                    gsap.fromTo(image3WrapperRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-200px",
                            scrollTrigger: trigger
                        })

                }

                if (doodleWrapperRef.current) {

                    gsap.fromTo(doodleWrapperRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-140px",
                            scrollTrigger: trigger
                        })

                }

                if (illustrationWrapperRef.current) {

                    gsap.fromTo(illustrationWrapperRef.current,
                        {
                            x: 0
                        },
                        {
                            x: "-130px",//rotate
                            scrollTrigger: trigger
                        })

                }
            },

            "(max-width: 767.98px)": () => {

                const trigger = {
                    trigger: sectionRef.current,
                    scrub: true,
                    start: "top bottom",
                    end: `bottom top`,
                    ease: "none",
                };

                if (image2WrapperMobileRef.current) {

                    gsap.fromTo(image2WrapperMobileRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-160px",
                            scrub: 1,
                            scrollTrigger: trigger
                        })

                }

                if (doodleWrapperMobileRef.current) {

                    gsap.fromTo(doodleWrapperMobileRef.current,
                        {
                            y: 0
                        },
                        {
                            y: "-100px",
                            scrub: 1,
                            scrollTrigger: trigger
                        })

                }

                if (illustrationWrapperRef.current) {

                    gsap.fromTo(illustrationWrapperRef.current,
                        {
                            x: 0
                        },
                        {
                            x: "-130px",//rotate
                            scrollTrigger: trigger
                        })

                }

            },

            "all": () => {

                if (image1ParallaxRef.current) {

                    doImageParallax(imageWrapperRef.current, image1ParallaxRef.current)

                }
            }
        })



    }, [])

    //individual els animation
    //desktop
    const imageWrapperRef = useRef()
    const image1Ref = useRef();
    const headingRefs = useRef([]);
    const addToHeadingRefs = (_el) => {
        if (_el && !headingRefs.current.includes(_el)) {
            headingRefs.current.push(_el)
        } else {
            headingRefs.current = [];
        }
    }

    const sublineRefs = useRef([]);
    const addToSublineRefs = (_el) => {
        if (_el && !sublineRefs.current.includes(_el)) {
            sublineRefs.current.push(_el)
        } else {
            sublineRefs.current = [];
        }
    }

    const imageRefs = useRef([]);
    const addToImageRefs = (_el) => {
        if (_el && !imageRefs.current.includes(_el)) {
            imageRefs.current.push(_el)
        } else {
            imageRefs.current = [];
        }
    }

    //mobile
    const headingWrapperMobileRef = useRef()
    const headingMobileRefs = useRef([]);
    const addToHeadingMobileRefs = (_el) => {
        if (_el && !headingMobileRefs.current.includes(_el)) {
            headingMobileRefs.current.push(_el)
        } else {
            headingMobileRefs.current = [];
        }
    }
    const sublineWrapperMobileRef = useRef();

    useEffect(() => {

        saveStyles([
            image1Ref.current,
        ],
            headingRefs.current,
            sublineRefs.current,
            imageRefs.current,
            headingMobileRefs.current
        )

        ScrollTrigger.matchMedia({

            "(min-width: 768px)": () => {

                let trigger1 = {
                    trigger: imageWrapperRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset",
                }

                let trigger2 = {
                    trigger: imageWrapperRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset",
                }

                gsap.timeline({
                    paused: false,
                    scrollTrigger: trigger1,
                    ease: "Power2.easeOut",
                })
                    .fromTo(image1Ref.current,
                        {
                            y: "150px",
                            opacity: 0
                        },
                        {
                            y: 0,
                            duration: 1,
                            opacity: 1,

                        }, 0.1)

                gsap.timeline({
                    paused: false,
                    scrollTrigger: trigger2,
                    ease: "Power2.easeOut",
                })
                    .fromTo(headingRefs.current,
                        {
                            y: 200,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: 0.1
                        })
                    .fromTo(sublineRefs.current,
                        {
                            y: "150px",
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                        }, 0.1)
                    .fromTo(imageRefs.current,
                        {
                            y: "150px",
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                        }, 0.2)
            },

            "(max-width: 767.98px)": () => {

                let trigger1 = {
                    trigger: imageWrapperRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset",
                }

                if (image1Ref.current) {

                    gsap.timeline({
                        paused: false,
                        scrollTrigger: trigger1,
                        ease: "Power2.easeOut",
                    })
                        .fromTo(image1Ref.current,
                            {
                                y: "150px"
                            },
                            {
                                y: 0,
                                duration: 1,
                            }, 0.2)

                }

                let trigger2 = {
                    trigger: headingWrapperMobileRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset",
                }

                if (headingMobileRefs.current) {

                    gsap.timeline({
                        paused: false,
                        scrollTrigger: trigger2,
                        ease: "Power2.easeOut",
                    })
                        .fromTo(headingMobileRefs.current,
                            {
                                y: 200,
                                opacity: 0
                            },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                                stagger: 0.1
                            })

                }


                let trigger3 = {
                    trigger: sublineWrapperMobileRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reset",
                }

                if (sublineRefs.current.length > 0) {

                    gsap.timeline({
                        paused: false,
                        scrollTrigger: trigger3,
                        ease: "Power2.easeOut",
                    })
                        .fromTo([sublineRefs.current[2], sublineRefs.current[0], sublineRefs.current[1]],
                            {
                                y: "150px",
                                opacity: 0
                            },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                                stagger: 0.2
                            })

                }
            }


        })

    }, [])

    return (
        <section ref={sectionRef} className="c-home-about pb-md-5 px-xl-1 px-1 pt-5 pb-3 overflow-hidden">

            <div className="background pink" />

            <div className="c-home_about__inner d-flex flex-md-row flex-column position-relative">

                <div className="c-home-about__heading__wrapper col-md-4 order-md-1 order-3 ">

                    <div ref={headingWrapperRef} className="parallax" >

                        <div className="c-home-about__heading__inner h-100 d-md-block d-flex flex-column align-items-center position-relative">

                            <div className="c-home-about__heading__container d-md-flex justify-content-end d-none mt-md-2">

                                <h2 className="c-home-about__heading ">

                                    <div className="split-lines">

                                        <div ref={addToHeadingRefs} className="lines line-1 should-animate">Hi, We Are</div>

                                        <div ref={addToHeadingRefs} className="lines line-2 should-animate">Beloved Joy</div>

                                    </div>

                                </h2>

                            </div>

                            <div className="illustration__wrapper dots position-absolute d-md-block d-none">

                                {/* <figure className="fig-wrapper">

                                    <Image alt="" src={dots} layout="fill" />

                                </figure> */}

                            </div>

                            <div ref={addToSublineRefs} className="c-home-about__text mt-lg-4 mt-md-3 ps-md-1 should-animate">
                                Ligulas step drops both. You shall not
                                pass. Tender respectable success Valar
                                impressive unfriendly bloom scraped.
                                Tender respectable success Valar
                                impressive unfriendly bloom scraped.
                            </div>

                            <div ref={addToSublineRefs} className="c-home-about__link ms-xl-3 px-1 mt-xl-4 mt-lg-5 mt-md-3 mt-3 should-animate">

                                <Link ariaLabel="about" href="/about" >

                                    <a className="c-home-about__link__link nav-link ">

                                        <span className="c-home-about__link__text section-small__link text-pink">READ OUR STORY</span>

                                    </a>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={imageWrapperRef} className="c-home-about__image__wrapper col-md-4 col-10 order-md-2 order-1">

                    <div ref={image1Ref} className="c-home-about__image__inner position-relative should-animate">

                        <div className="c-home-about__image1 position-relative">

                            <div className="parallax-wrapper">

                                <div ref={image1ParallaxRef} className="parallax">

                                    <figure className="fig-wrapper should-animate">

                                        <Image priority alt="" src={img2} layout="fill" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                        <div className="c-home-about__image2 position-absolute d-md-none">

                            <div ref={image2WrapperMobileRef} className="parallax">

                                <figure className="fig-wrapper should-animate">

                                    <Image priority alt="" src={img3} layout="fill" />

                                </figure>

                            </div>

                        </div>

                        <div className="illustration__wrapper greygreen position-absolute">

                            <div ref={illustrationWrapperRef} className="parallax">

                                {/* <figure className="fig-wrapper should-animate">

                                    <Image alt="" src={greygreen} layout="fill" />

                                </figure> */}

                            </div>

                        </div>

                        <div className="illustration__wrapper doodle position-absolute d-md-none">

                            <div ref={doodleWrapperMobileRef} className="parallax">

                                {/* <figure className="fig-wrapper should-animate">

                                    <Image alt="" src={doodle} layout="fill" />

                                </figure> */}

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={sublineWrapperMobileRef} className="c-home-about__subline__wrapper col-md-4 col-12 order-md-3 order-2 mt-md-0 mt-4">

                    <div className="c-home-about__subline__inner parallax h-100 position-relative mt-lg-3 mt-md-3">

                        <div ref={addToSublineRefs} className="c-home-about__subline should-animate ">

                            <h3 className="c-home-about__subline__text">
                                Ligulas step drops both. You shall not pass.
                                Tender respectable success Valar impressive.
                                <br />
                                Tender respectable success Valar impressive. Ligulas step drops both
                            </h3>

                        </div>

                        <div className="c-home-about__image2 position-absolute d-md-block d-none">

                            <div ref={image2WrapperRef} className="parallax">

                                <figure ref={addToImageRefs} className="fig-wrapper should-animate">

                                    <Image priority alt="" src={img3} layout="fill" />

                                </figure>

                            </div>

                        </div>

                        <div className="c-home-about__image3 position-absolute d-md-block d-none">

                            <div ref={image3WrapperRef} className="parallax">

                                <figure ref={addToImageRefs} className="fig-wrapper should-animate">

                                    <Image priority alt="" src={img4} layout="fill" />

                                </figure>

                            </div>

                        </div>

                        <div className="illustration__wrapper doodle position-absolute d-md-block d-none">

                            <div ref={doodleWrapperRef} className="parallax">

                                {/* <figure className="fig-wrapper">

                                    <Image alt="" src={doodle} layout="fill" />

                                </figure> */}

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={headingWrapperMobileRef} className="c-home-about__heading__container d-md-flex justify-content-end d-md-none position-absolute">

                    <h2 className="c-home-about__heading ">

                        <div className="split-lines">

                            <div ref={addToHeadingMobileRefs} className="lines line-1 should-animate">Hi, We Are</div>

                            <div ref={addToHeadingMobileRefs} className="lines line-2 should-animate">Beloved Joy</div>

                        </div>

                    </h2>

                </div>

            </div>
        </section>
    );
}

export default HomeAbout;