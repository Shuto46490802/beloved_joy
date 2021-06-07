import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import img2 from "../../assets/img2.jpg";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { doImageParallax, saveStyles, textHiddenAnimation } from "../PageLayouts/animation";

const Content = () => {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    }, [])

    const innerRef = useRef();

    const headingWrapperRef = useRef();
    const headingRef = useRef();

    const textTriggerRef = useRef();
    const textRightWrapperRef = useRef();
    const textRightRef = useRef();
    const textLeftWrapperRef = useRef();
    const textLeftRef = useRef();

    const imageWrapperRef = useRef();
    const imageParallaxRef = useRef();

    const hoursWrapperRef = useRef();
    const hoursTextRefs = useRef([]);
    const addToHoursTextRefs = (_el) => {
        if (_el && !hoursTextRefs.current.includes(_el)) {
            hoursTextRefs.current.push(_el)
        } else {
            hoursTextRefs.current = [];
        }
    }

    const addressWrapperRef = useRef();
    const addressTextRefs = useRef([]);
    const addToAddressTextRefs = (_el) => {
        if (_el && !addressTextRefs.current.includes(_el)) {
            addressTextRefs.current.push(_el)
        } else {
            addressTextRefs.current = [];
        }
    }

    const phoneWrapperRef = useRef();
    const phoneTextRefs = useRef([]);
    const addToPhoneTextRefs = (_el) => {
        if (_el && !phoneTextRefs.current.includes(_el)) {
            phoneTextRefs.current.push(_el)
        } else {
            phoneTextRefs.current = [];
        }
    }

    const emailWrapperRef = useRef();
    const emailTextRefs = useRef([]);
    const addToEmailTextRefs = (_el) => {
        if (_el && !emailTextRefs.current.includes(_el)) {
            emailTextRefs.current.push(_el)
        } else {
            emailTextRefs.current = [];
        }
    }

    useEffect(() => {

        if (isReady) {
            if (imageParallaxRef.current) {
                doImageParallax(imageWrapperRef.current, imageParallaxRef.current)
            }
        }

    }, [isReady])

    useEffect(() => {

        if (isReady) {

            const headingTrigger = {
                trigger: innerRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            const textTrigger = {
                trigger: textTriggerRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (headingWrapperRef.current
                && headingRef.current) {

                gsap.timeline({ paused: false, scrollTrigger: headingTrigger })
                    .fromTo(headingWrapperRef.current,
                        {
                            y: 50
                        },
                        {
                            y: 0,
                            duration: 1.2,
                            ease: "Power2.easeOut"
                        })
                    .fromTo(headingRef.current,
                        {
                            yPercent: 120,
                            opacity: 0
                        },
                        {
                            yPercent: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "POwer2.easeOut"
                        }, 0)

            }

            if (textRightWrapperRef.current
                && textLeftWrapperRef.current
                && textRightRef.current
                && textLeftRef.current) {

                gsap.timeline({ paused: false, scrollTrigger: textTrigger })
                    .fromTo(textRightWrapperRef.current,
                        {
                            y: 50
                        },
                        {
                            y: 0,
                            duration: 1.2,
                            ease: "Power2.easeOut"
                        })
                    .fromTo(textLeftWrapperRef.current,
                        {
                            y: 50
                        },
                        {
                            y: 0,
                            duration: 1.2,
                            ease: "Power2.easeOut"
                        }, 0)
                    .fromTo(textRightRef.current,
                        {
                            yPercent: 120,
                            opacity: 0
                        },
                        {
                            yPercent: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "POwer2.easeOut"
                        }, 0)
                    .fromTo(textLeftRef.current,
                        {
                            yPercent: 120,
                            opacity: 0
                        },
                        {
                            yPercent: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "POwer2.easeOut"
                        }, 0)

            }

            if(hoursTextRefs.current.length > 0){
                textHiddenAnimation(hoursWrapperRef.current, hoursTextRefs.current)
            }

            if(addressTextRefs.current.length > 0){
                textHiddenAnimation(addressWrapperRef.current, addressTextRefs.current)
            }
            
            if(phoneTextRefs.current.length > 0){
                textHiddenAnimation(phoneWrapperRef.current, phoneTextRefs.current)
            }
            
            if(emailTextRefs.current.length > 0){
                textHiddenAnimation(emailWrapperRef.current, emailTextRefs.current)
            }
            
        }

    }, [isReady])

    return (
        <div className="c-contact-content py-md-4 py-3 px-md-0 px-1">

            <div className="background pink" />

            <div ref={innerRef} className="c-contact-content__inner w-100 h-100">

                <h2 ref={headingWrapperRef} className="c-contact-content__heading should-animate col text-center mb-3 overflow-hidden">
                    <div ref={headingRef} className="lh-1 should-animate">Contact Us</div>
                </h2>

                <div ref={imageWrapperRef} className="c-contact-content__image__wrapper col d-flex justify-content-around align-items-center flex-wrap position-relative mb-md-5 mb-4">

                    <div ref={textTriggerRef} className="col-md-4 d-md-block d-none ">

                        <div ref={textLeftWrapperRef} className="c-contact-content__image__text left  overflow-hidden text-right should-animate">
                            <div ref={textLeftRef} className="lh-1 should-animate">WE LOOK FORWARD TO</div>
                        </div>

                    </div>

                    <div className="c-contact-content__image">

                        <div className="parallax-wrapper">

                            <div ref={imageParallaxRef} className="parallax">

                                <figure className="fig-wrapper">

                                    <Image priority src={img2} layout="fill" alt="" />

                                </figure>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-4 d-md-block d-none">

                        <div ref={textRightWrapperRef} className="c-contact-content__image__text right overflow-hidden should-animate">
                            <div ref={textRightRef} className="lh-1 should-animate">HEARING FROM YOU</div>
                        </div>

                    </div>

                </div>

                <div className="c-contact-content__info__list d-flex flex-md-row flex-column justify-content-around px-md-5">

                    <div ref={hoursWrapperRef} className="c-contact-content__info__item col-md-2 col mb-2">

                        <h5 className="c-contact-content__info__heading h5 mb-md-2 mb-1 overflow-hidden">
                            <div ref={addToHoursTextRefs} className="c-contact-content__info__heading__text should-animate">Hours of Operation</div>
                        </h5>

                        <div className="c-contact-content__info__detail ">
                            <div ref={addToHoursTextRefs} className="c-contact-content__detail-text should-animate"> Monday - Saturday</div>
                        </div>

                        <div className="c-contact-content__info__detail ">
                            <div ref={addToHoursTextRefs} className="c-contact-content__detail-text should-animate">9AM - 7PM</div>
                        </div>

                    </div>

                    <div ref={addressWrapperRef} className="c-contact-content__info__item col-md-2 col mb-2">

                        <h5 className="c-contact-content__info__heading mb-md-2 mb-1 overflow-hidden">
                            <div ref={addToAddressTextRefs} className="c-contact-content__info__heading__text should-animate">Mailing Address</div>
                        </h5>

                        <div className="c-contact-content__info__detail">
                            <div ref={addToAddressTextRefs} className="c-contact-content__detail-text should-animate">Beloved Joy Co.Ltd</div>
                        </div>

                        <div className="c-contact-content__info__detail">
                            <div ref={addToAddressTextRefs} className="c-contact-content__detail-text should-animate">4123 Galts Ave, Toronto</div>
                        </div>

                        <div className="c-contact-content__info__detail">
                            <div ref={addToAddressTextRefs} className="c-contact-content__detail-text should-animate">Ontarion, T4N 2A6</div>
                        </div>

                    </div>

                    <div ref={phoneWrapperRef} className="c-contact-content__info__item col-md-2 col mb-2">

                        <h5 className="c-contact-content__info__heading mb-md-2 mb-1 overflow-hidden">
                            <div ref={addToPhoneTextRefs} className="c-contact-content__info__heading__text should-animate">Phone</div>
                        </h5>

                        <div className="c-contact-content__info__detail">
                            <div ref={addToPhoneTextRefs} className="c-contact-content__detail-textshould-animate">647-000-0000</div>
                        </div>

                    </div>

                    <div ref={emailWrapperRef} className="c-contact-content__info__item col-md-2 col mb-2">

                        <h5 className="c-contact-content__info__heading mb-md-2 mb-1 overflow-hidden">
                            <div ref={addToEmailTextRefs} className="c-contact-content__info__heading__text should-animate">Email</div>
                        </h5>

                        <div className="c-contact-content__info__detail">
                            <div ref={addToEmailTextRefs} className="c-contact-content__detail-text should-animate">belovedjoy@gmail.com</div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Content;