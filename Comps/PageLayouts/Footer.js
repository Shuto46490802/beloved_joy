import React, { useEffect, useRef, useState } from "react";

import Link from "./Link";
import Image from "next/image";

import img2 from "../../assets/img2.jpg";

import { useRouter } from "next/router";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { saveStyles, doImageParallax } from "../PageLayouts/animation";

const Footer = ({ getScrollProxy, footerRef, toggleNewsletterPopup, currentPage }) => {

    const router = useRouter();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
            getScrollProxy()
        }, 3000)
    }, [])

    useEffect(() => {
        return () => setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500)
    }, [currentPage, router])

    //parallax
    const imageWrapperRef = useRef();
    const imageParallaxRef = useRef();
    useEffect(() => {

        if (isReady) {
            doImageParallax(imageWrapperRef.current, imageParallaxRef.current)
        }

    }, [isReady])

    //animation
    const subHeadlineWrapperRef = useRef();
    const subline1Ref = useRef();
    const subline2Ref = useRef();
    const headlineWrapperRef = useRef();
    const headlineRef = useRef();
    const formRef = useRef();
    const footerHeadlineWrapperRef = useRef();
    const footerHeadline1Ref = useRef();
    const footerHeadline2Ref = useRef();
    const socialLinkWrapperRef = useRef();
    const socialLinkRefs = useRef([]);
    const addToSocialLinkRefs = (_el) => {
        if (_el && !socialLinkRefs.current.includes(_el)) {
            socialLinkRefs.current.push(_el)
        } else {
            socialLinkRefs.current = [];
        }
    }
    const privacyLinkWrapperRef = useRef();
    const privacylLinkRefs = useRef([]);
    const addToPrivacyLinkRefs = (_el) => {
        if (_el && !privacylLinkRefs.current.includes(_el)) {
            privacylLinkRefs.current.push(_el)
        } else {
            privacylLinkRefs.current = [];
        }
    }
    const copyRightWrapperRef = useRef();
    const copyRightRef = useRef();

    useEffect(() => {

        if (isReady) {

            const subHeadlineTrigger = {
                trigger: subHeadlineWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset",
            }


            gsap.fromTo([subline1Ref.current, subline2Ref.current],
                {
                    yPercent: 120,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "Power2.easeOut",
                    stagger: 0.1,
                    scrollTrigger: subHeadlineTrigger
                })

            const headingTrigger = {
                trigger: headlineWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset",
            }

            gsap.timeline({ paused: false, scrollTrigger: headingTrigger })
                .fromTo(headlineRef.current,
                    {
                        yPercent: 120,
                        opacity: 0
                    },
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut",
                    })
                .fromTo(formRef.current,
                    {
                        y: 150,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut"
                    }, 0.1)

            const footerHeadlineTrigger = {
                trigger: footerHeadlineWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            gsap.fromTo([footerHeadline1Ref.current, footerHeadline2Ref.current],
                {
                    yPercent: 120,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "Power2.easeOut",
                    stagger: 0.1,
                    scrollTrigger: footerHeadlineTrigger
                })


            const socialLinkTrigger = {
                trigger: socialLinkWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            gsap.fromTo(socialLinkRefs.current,
                {
                    yPercent: 120,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "Power2.easeOut",
                    stagger: 0.1,
                    scrollTrigger: socialLinkTrigger
                })


            const privacyLinkTrigger = {
                trigger: privacyLinkWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            gsap.fromTo(privacylLinkRefs.current,
                {
                    yPercent: 120,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "Power2.easeOut",
                    scrollTrigger: privacyLinkTrigger
                }, 0)

            const copyRightTrigger = {
                trigger: copyRightWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            gsap.fromTo(copyRightRef.current,
                {
                    yPercent: 120,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "Power2.easeOut",
                    scrollTrigger: copyRightTrigger
                }, 0)

        }

    }, [isReady])

    return (
        <section ref={footerRef} className="c-footer overflow-hidden">

            <div>

                <div className="c-footer__newsletter">

                    <div ref={imageWrapperRef} className="c-footer__newsletter__image__wrapper overflow-hidden">

                        <div className="c-footer__newsletter__image ">

                            <div className="parallax-wrapper">

                                <div ref={imageParallaxRef} className="parallax">

                                    <figure className="fig-wrapper should-animate">

                                        <Image src={img2} layout="fill" alt="" />

                                    </figure>

                                </div>

                            </div>

                            <div className="c-footer__newsletter__text__wrapper position-absolute t-0 l-0 h-100 w-100 pb-md-0 pt-md-0 p-1 ps-xl-5 pe-xl-4 d-flex flex-wrap">

                                <div className="c-footer__newsletter__text__inner col-md d-flex flex-column justify-content-between pt-3 pb-3 pt-xl-4 pb-xl-4">

                                    <div ref={subHeadlineWrapperRef} className="c-footer__newsletter__sub-headline__wrapper col-md-5 col-xl-4 pr-2 pr-md-3 ">

                                        <div className="m-0 p-0 c-footer__newsletter__sub-headline">
                                            <div className="overflow-hidden mb-6"><div ref={subline1Ref} className="lh-1_2"><strong className={"text-pink"}>Be the first </strong> to lorem ipsum dolor sit amet,</div></div>
                                            <div className="overflow-hidden"><div ref={subline2Ref} className="lh-1_2">consectetur adipiscing elit.</div></div>
                                        </div>

                                    </div>

                                    <div ref={headlineWrapperRef} className="c-footer__newsletter__headline__wrapper">

                                        <h4 className="c-footer__newsletter__headline overflow-hidden">
                                            <div ref={headlineRef} className="">Join Our Journey</div>
                                        </h4>

                                        <button
                                            ariaLabel="button"
                                            name="button"
                                            onClick={() => toggleNewsletterPopup()}
                                            ref={formRef}
                                            className="c-footer__newsletter__button  mt-1 mt-md-2 h4 position-relative"
                                        >

                                            <div className="button d-inline-block line-link w-100">

                                                <div className="d-flex align-items-center pb-6">

                                                    <p className={"m-0"}>Join Beloved Joy</p>


                                                    <div className="c-hoz-arrow c-hoz-arrow--right ms-1">
                                                        Subscribe
                                                            <svg x="0px" y="0px" viewBox="0 0 22 10">
                                                            <polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />
                                                        </svg>
                                                        <svg x="0px" y="0px" viewBox="0 0 22 10">
                                                            <polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />
                                                        </svg>
                                                    </div>


                                                </div>

                                            </div>

                                        </button>

                                    </div>

                                </div>

                                <div className="c-footer__newsletter__text__inner col-md-3 d-none d-xl-flex flex-column justify-content-between"></div>

                            </div>

                        </div>

                    </div>

                </div>

                <footer className="footer px-1 px-md-3 pt-3 pb-md-2 pb-1 pt-md-3 pb-md-2 px-lg-5 d-flex flex-column color-light-red">

                    <div className="background pink" />

                    <div className="footer__content__wrapper w-100 d-flex justify-content-between flex-md-row flex-column">

                        <div className="footer__content__social__wrapper col-md-8 mb-md-0 mb-2">

                            <h5 ref={footerHeadlineWrapperRef} className="footer__content__social__headline m-0 h4 lh-16">
                                <div className="overflow-hidden mb-6">
                                    <div ref={footerHeadline1Ref} className="lh-1_2">
                                        Wanna be part of our journey?
                                    </div>
                                </div>
                                <div className="overflow-hidden">
                                    <div ref={footerHeadline2Ref} className="lh-1_2">
                                        Follow our socials:
                                    </div>
                                </div>
                            </h5>

                            <div ref={socialLinkWrapperRef} className="footer__content__social__links  d-md-flex flex-column mt-md-4 mt-1 ">

                                <Link ariaLabel="instagram" href="/">

                                    <a className="footer__content__social__link d-flex align-items-center link mr-md-6 mb-6 color-light-red ">

                                        <div className="overflow-hidden">

                                            <div ref={addToSocialLinkRefs} className="line-link small d-inline-block">Instagram</div>

                                        </div>

                                    </a>

                                </Link>

                                <Link ariaLabel="poshmark" href="/">

                                    <a className="footer__content__social__link  d-flex align-items-center link mr-md-6 mb-6 color-light-red ">

                                        <div className="overflow-hidden">

                                            <div ref={addToSocialLinkRefs} className="line-link small d-inline-block">Poshmark</div>

                                        </div>

                                    </a>

                                </Link>



                            </div>

                        </div>

                        <div className="footer__content__policies__wrapper col-md-4 d-flex flex-column justify-content-between">

                            <div ref={privacyLinkWrapperRef} className="footer__content__policies__links d-flex flex-md-row flex-column justify-content-md-between mb-2 mb-md-0 mt-6">

                                <Link ariaLabel="contact" href="/contact" scroll={router.pathname.includes("contact") ? false : true}>

                                    <a className="footer__content__policies__link mb-6 color-light-red" >
                                        <div className="overflow-hidden ">
                                            <div ref={addToPrivacyLinkRefs} className="footer__content__policies__text line-link small color-light-red d-inline-block">CONTACT</div>
                                        </div>
                                    </a>

                                </Link>

                                <Link ariaLabel="privacy policy" href="/privacy/privacy-policy" scroll={router.pathname.includes("privacy-policy") ? false : true}>

                                    <a className="footer__content__policies__link  mb-6">
                                        <div className="overflow-hidden ">
                                            <div ref={addToPrivacyLinkRefs} className="footer__content__policies__text  line-link small d-inline-block color-light-red">PRIVACY</div>
                                        </div>
                                    </a>

                                </Link>

                                <Link ariaLabel="terms conditions" href="/privacy/terms-conditions" scroll={router.pathname.includes("terms-conditions") ? false : true}>

                                    <a className="footer__content__policies__link  mb-6" >
                                        <div className="overflow-hidden ">
                                            <div ref={addToPrivacyLinkRefs} className="footer__content__policies__text  line-link small d-inline-block color-light-red">TERMS & CONDITIONS </div>
                                        </div>
                                    </a>

                                </Link>

                            </div>

                            <div ref={copyRightWrapperRef} className="footer__content__copy__right small overflow-hidden">
                                <div ref={copyRightRef} className="lh-1_2">
                                    © 2021 Beloved Joy ー ALL RIGHTS RESERVED
                                </div>
                            </div>

                        </div>

                    </div>

                </footer>

            </div>

        </section>
    );
}

export default Footer;