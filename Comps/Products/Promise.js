import { useEffect, useRef } from "react";

import Image from "next/image";

import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

import gsap from "gsap/gsap-core";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Promise = ({ promiseRef }) => {

    const image1WrapperRef = useRef();
    const image1ParallaxRef = useRef();
    const image2WrapperRef = useRef();
    const image2ParallaxRef = useRef();

    useEffect(() => {

        const trigger1 = {
            trigger: image1WrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            ease: "none"
        }

        const trigger2 = {
            trigger: image2WrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            ease: "none"
        }

        if (image1ParallaxRef.current) {

            gsap.fromTo(image1ParallaxRef.current,
                {
                    y: 0
                },
                {
                    y: -60,
                    scrollTrigger: trigger1
                })

        }

        if (image2ParallaxRef.current) {

            gsap.fromTo(image2ParallaxRef.current,
                {
                    y: 0
                },
                {
                    y: -120,
                    scrollTrigger: trigger2
                })

        }

    }, [])

    return (
        <div ref={promiseRef} className="product-policy__promise">

            <div className="product-policy__text__content col-md-6 pr-2">

                <p>
                    Due to the nature of pre-loved clothing, sizes aren't always true.
                    We try our best to size things as true to modern sizing as possible.
                    Please use a general size guide, the size guide of the listed brand and/or the size of the model for reference.
                    We always make note in the description if an item is not true to size, or has any defects we are aware of.
                </p>

                <p>
                    We are confident that you will love and want to keep our products.
                    Nevertheless, you have 5 business days to try it out.
                    If it doesn’t work out, email us at @gmail.com and we will sort it out for you.
                    We will refund you for the total cost of the purchase.</p>

            </div>

            <div className="product-policy__promise__gallery row mt-4">

                <div ref={image1WrapperRef} className="product-policy__promise__image1 ms-xl-3 col-md-4 col-xl-6 px-0">

                    <div className="product-policy__promise__image1__inner">

                        <div ref={image1ParallaxRef} className="parallax position-absolute h-100 w-100 t-0 l-0">

                            <figure className="fig-wrapper">
                                <Image src={img2} layout="fill" alt="" />
                            </figure>

                        </div>

                    </div>

                </div>

                <div ref={image2WrapperRef} className="product-policy__promise__image2 col-md-2 col-xl-3 ms-md-3 px-0 col-6">

                    <div className="product-policy__promise__image2__inner">

                        <div ref={image2ParallaxRef} className="parallax position-absolute h-100 w-100 t-0 l-0">

                            <figure className="fig-wrapper">
                                <Image src={img3} layout="fill" alt="" />
                            </figure>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Promise;