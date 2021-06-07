import { useEffect, useState, useRef } from "react";

import Image from "next/image";
import Link from "../PageLayouts/Link"

import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

import Pickup from "./Pickup";
import ShippingReturn from "./ShippingReturn";
import Promise from "./Promise";

import { Transition, TransitionGroup } from "react-transition-group";
import gsap from "gsap/gsap-core";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

const Policy = ({ getScrollProxy }) => {

    const [shipping, setShipping] = useState({ state: true, anim: "anim-in" });
    const [pickup, setPickup] = useState({ state: false, anim: "" });
    const [promise, setPromise] = useState({ state: false, anim: "" });
    const [key, setKey] = useState("shipping-return")
    const shippingReturnRef = useRef();
    const pickupRef = useRef();
    const promiseRef = useRef();
    const shippingMobileRef = useRef();
    const pickupMobileRef = useRef();
    const promiseMobileRef = useRef();

    const imageRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin, ScrollTrigger)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", getHeight)
        return () => window.removeEventListener("resize", getHeight)
    }, [shipping.state, pickup.state, promise.state])

    useEffect(() => {

        if (shipping.state) {
            gsap.set(".product-policy__text__wrapper",
                {
                    height: () => shippingReturnRef.current.clientHeight,
                    onComplete: () => ScrollTrigger.refresh(),
                })
        }

        if (pickup.state) {
            gsap.set(".product-policy__text__wrapper",
                {
                    height: () => pickupRef.current.clientHeight,
                    onComplete: () => ScrollTrigger.refresh(),
                })
        }

        if (promise.state) {
            gsap.set(".product-policy__text__wrapper",
                {
                    height: () => promiseRef.current.clientHeight,
                    onComplete: () => ScrollTrigger.refresh(),
                })
        }

    }, [shipping.state, pickup.state, promise.state])

    useEffect(() => {

        if (shipping.state) {
            accordionIn(shippingMobileRef.current)
        } else {

            if (shipping.anim === "anim-out") {
                accordionOut(shippingMobileRef.current)
            } else {
                gsap.set(shippingMobileRef.current,
                    {
                        height: 0,
                        opacity: 0
                    })
            }

        }

    }, [shipping])

    useEffect(() => {

        if (pickup.state) {
            accordionIn(pickupMobileRef.current)
        } else {

            if (pickup.anim === "anim-out") {
                accordionOut(pickupMobileRef.current)
            } else {
                gsap.set(pickupMobileRef.current,
                    {
                        height: 0,
                        opacity: 0
                    })
            }

        }

    }, [pickup])

    useEffect(() => {

        if (promise.state) {
            accordionIn(promiseMobileRef.current)
        } else {

            if (promise.anim === "anim-out") {
                accordionOut(promiseMobileRef.current)
            } else {
                gsap.set(promiseMobileRef.current,
                    {
                        height: 0,
                        opacity: 0
                    })
            }

        }

    }, [promise])

    const getHeight = () => {

        if (shippingReturnRef.current) {
            gsap.set(".product-policy__text__wrapper",
                {
                    height: () => shippingReturnRef.current.clientHeight,
                    onComplete: () => ScrollTrigger.refresh(),
                })
        }

        if (pickupRef.current) {
            gsap.set(".product-policy__text__wrapper",
                {
                    height: () => pickupRef.current.clientHeight,
                    onComplete: () => ScrollTrigger.refresh(),
                })
        }

        if (promiseRef.current) {
            gsap.set(".product-policy__text__wrapper",
                {
                    height: () => promiseRef.current.clientHeight,
                    onComplete: () => ScrollTrigger.refresh(),
                })
        }

        if (window.innerWidth >= 768) {
            if (!shipping.state && !pickup.state && !promise.state) {
                setShipping({ state: true, anim: "anim-in" })

            }
        }

    }
    
    const toggleShipping = () => {

        if (!shipping.state) {
            setShipping({ state: true, anim: "anim-in" })
        }
        if (shipping.state) {
            setShipping({ state: false, anim: "anim-out" })
        }

        if (pickup.state) {
            setPickup({ state: false, anim: "anim-out" })
        }
        if (!pickup.state && pickup.anim === "anim-out") {
            setPickup({ state: false, anim: "" })
        }

        if (promise.state) {
            setPromise({ state: false, anim: "anim-out" })
        }
        if (!promise.state && promise.anim === "anim-out") {
            setPromise({ state: false, anim: "" })
        }

    }

    const togglePickup = () => {

        if (!pickup.state) {
            setPickup({ state: true, anim: "anim-in" })
        }
        if (pickup.state) {
            setPickup({ state: false, anim: "anim-out" })
        }

        if (shipping.state) {
            setShipping({ state: false, anim: "anim-out" })
        }
        if (!shipping.state && shipping.anim === "anim-out") {
            setShipping({ state: false, anim: "" })
        }

        if (promise.state) {
            setPromise({ state: false, anim: "anim-out" })
        }
        if (!promise.state && promise.anim === "anim-out") {
            setPromise({ state: false, anim: "" })
        }

    }

    const togglePromise = () => {

        if (!promise.state) {
            setPromise({ state: true, anim: "anim-in" })
        }
        if (promise.state) {
            setPromise({ state: false, anim: "anim-out" })
        }

        if (shipping.state) {
            setShipping({ state: false, anim: "anim-out" })
        }
        if (!shipping.state && shipping.anim === "anim-out") {
            setShipping({ state: false, anim: "" })
        }

        if (pickup.state) {
            setPickup({ state: false, anim: "anim-out" })
        }
        if (!pickup.state && pickup.anim === "anim-out") {
            setPickup({ state: false, anim: "" })
        }

    }

    const onEnter = (node) => {

        gsap.fromTo(node,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.75,
                ease: "Power2.easeOut",
                delay: 0.75
            })

    }

    const onExit = (node) => {

        gsap.fromTo(node,
            {
                opacity: 1
            },
            {
                opacity: 0,
                ease: "Power2.easeOut",
                duration: 0.75
            })

    }

    const imageIn = (node) => {

        gsap.timeline({ paused: false })
            .set(node,
                {
                    zIndex: 10
                })
            .fromTo(node,
                {
                    yPercent: 100
                },
                {
                    yPercent: 0,
                    duration: 1,
                    ease: "Power2.easeOut"
                })
            .fromTo(imageRef.current,
                {
                    scale: 1.2,
                },
                {
                    scale: 1,
                    duration: 1.1
                }, 0)

    }

    const imageOut = (node) => {

        gsap.timeline({ paused: false })
            .set(node,
                {
                    zIndex: 1
                })
            .fromTo(node,
                {
                    scale: 1,
                    yPercent: 0
                },
                {
                    scale: 1.2,
                    yPercent: -30,
                    duration: 1,
                    ease: "Power2.easeOut"
                })

    }

    const accordionIn = (_el) => {

        gsap.timeline({ paused: false })
            .fromTo(_el,
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.75,
                    ease: "Power2.easeOut"
                })
            .fromTo(_el,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.75,
                    ease: "Power2.easeOut",
                    onComplete: () => ScrollTrigger.refresh()
                }, 0.5)

    }

    const accordionOut = (_el) => {

        gsap.timeline({ paused: false })
            .fromTo(_el,
                {
                    opacity: 1
                },
                {
                    opacity: 0,
                    duration: 0.75,
                    ease: "Power2.easeOut"
                })
            .fromTo(_el,
                {
                    height: _el.clientHeight
                },
                {
                    height: 0,
                    duration: 0.75,
                    ease: "Power2.easeOut",
                    onComplete: () => ScrollTrigger.refresh()
                }, 0.5)

    }

    return (
        <section className="product-policy">

            <div className="background blue" />

            <div className="product-policy__inner d-flex flex-wrap px-1 px-xl-5 pt-2 pt-md-4 pb-4 overflow-hidden">

                <div className="product-policy__list col-xl-4 col-12 d-flex px-0 justify-content-between d-xl-block mb-md-3 mb-xl-0">

                    <div className="product-policy__list__inner">

                        <div className="product-policy__list__item">

                            <button
                                onClick={() => {
                                    toggleShipping()
                                    setKey("shipping-return")
                                }}
                                className={`${shipping.state ? "is-active" : ""}`}>

                                <div className="product-policy__list__item__title__wrapper d-flex align-items-center justify-content-between justify-content-md-start should-animate">

                                    <h5 className="product-policy__list__item__title m-0">
                                        Shipping & Return
                                    </h5>

                                    <div className="plus-wrapper ms-1">
                                        <span className="minus"></span>
                                        <span className="vertical-line"></span>
                                    </div>

                                </div>

                            </button>

                            <div className={`position-relative d-md-none ${shipping.state ? "mt-2" : ""}`}>

                                <div ref={shippingMobileRef} className="should-animate">

                                    <ShippingReturn />

                                </div>

                            </div>

                        </div>

                        <div className="product-policy__list__item mt-2 mt-md-3"> {/* active */}

                            <button
                                onClick={() => {
                                    togglePickup()
                                    setKey("pickup")
                                }}
                                className={`${pickup.state ? "is-active" : ""}`}>

                                <div className="product-policy__list__item__title__wrapper d-flex align-items-center justify-content-between justify-content-md-start should-animate">

                                    <h5 className="product-policy__list__item__title m-0">
                                        Pickup
                                    </h5>

                                    <div className="plus-wrapper ms-1">
                                        <span className="minus"></span>
                                        <span className="vertical-line"></span>
                                    </div>

                                </div>

                            </button>

                            <div className={`position-relative d-md-none ${pickup.state ? "mt-2" : ""}`}>

                                <div ref={pickupMobileRef} className="should-animate">

                                    <Pickup />

                                </div>

                            </div>


                        </div>

                        <div className="product-policy__list__item mt-2 mt-md-3"> {/* active */}

                            <button
                                onClick={() => {
                                    togglePromise()
                                    setKey("promise")
                                }}
                                className={`${promise.state ? "is-active" : ""}`}>

                                <div className="product-policy__list__item__title__wrapper d-flex align-items-center justify-content-between justify-content-md-start should-animate">

                                    <h5 className="product-policy__list__item__title m-0">
                                        Our Beloved Joy Promise
                                    </h5>

                                    <div className="plus-wrapper ms-1">
                                        <span className="minus"></span>
                                        <span className="vertical-line"></span>
                                    </div>

                                </div>

                            </button>

                            <div className={`position-relative d-md-none ${promise.state ? "mt-2" : ""}`}>

                                <div ref={promiseMobileRef} className="should-animate">

                                    <Promise />

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="product-policy__image__wrapper mt-xl-4 col-md-3 col-xl-8 d-none d-md-block">

                        <TransitionGroup className="product-policy__image position-relative overflow-hidden">

                            <Transition
                                key={key}
                                timeout={750}
                                onEnter={imageIn}
                                onExit={imageOut}
                            >

                                <div className="parallax-wrapper">

                                    <div ref={imageRef} className="parallax">

                                        <figure className="fig-wrapper">

                                            {
                                                shipping.state
                                                    ? <Image src={img2} layout="fill" />
                                                    : pickup.state
                                                        ? <Image src={img3} layout="fill" alt="" />
                                                        : promise.state
                                                            ? <Image src={img2} layout="fill" alt="" />
                                                            : <div></div>
                                            }

                                        </figure>

                                    </div>

                                </div>

                            </Transition>

                        </TransitionGroup>

                    </div>

                </div>

                <TransitionGroup className={`product-policy__text__wrapper onTop col-xl col-md-12 ms-xl-2 d-none d-md-block position-relative ${promise.state ? "mt-md-4 mt-lg-5 mt-xl-0 " : ""}`}>

                    <Transition
                        key={key}
                        onEnter={onEnter}
                        onExit={onExit}
                        timeout={750}
                    >

                        {
                            shipping.state
                                ? <ShippingReturn shippingReturnRef={shippingReturnRef} />
                                : pickup.state
                                    ? <Pickup pickupRef={pickupRef} />
                                    : promise.state
                                        ? <Promise promiseRef={promiseRef} />
                                        : <div></div>
                        }

                    </Transition>

                </TransitionGroup>

            </div>

        </section >
    );
}

export default Policy;