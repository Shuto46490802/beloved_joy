import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { doImageParallax, saveStyles } from "../PageLayouts/animation";

const ProductDescription = ({ product, getScrollProxy }) => {

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        getScrollProxy();
        setTimeout(() => {
            setIsReady(true)
        }, 2000)
    }, [])

    const image1WrapperRef = useRef();
    const image1ParallaxRef = useRef();
    const image1Ref = useRef();

    const image2WrapperRef = useRef();
    const image2ParallaxRef = useRef();

    const textWrapperRef = useRef();

    const descriptionHeaderRef = useRef();
    const descriptionRef = useRef();

    const detailRefs = useRef([]);
    const addToDetailRefs = (_el) => {
        if (_el && !detailRefs.current.includes(_el)) {
            detailRefs.current.push(_el)
        } else {
            detailRefs.current = [];
        }
    }

    useEffect(() => {

        if (isReady) {

            if (image1ParallaxRef.current) {

                doImageParallax(image1WrapperRef.current, image1ParallaxRef.current)

            }

            const image2Trigger = {
                trigger: image2WrapperRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                ease: "none",
            }

            if (image2ParallaxRef.current) {

                gsap.fromTo(image2ParallaxRef.current,
                    {
                        y: 0
                    },
                    {
                        y: -130,
                        scrollTrigger: image2Trigger
                    })

            }

        }

    }, [isReady])

    useEffect(() => {

        saveStyles([
            image1Ref.current,
            descriptionHeaderRef.current,
            descriptionRef.current,
        ],
            detailRefs.current,
        )

        if (isReady) {

            const image1Trigger = {
                trigger: image1WrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset",
            }

            if (image1Ref.current) {

                gsap.fromTo(image1Ref.current,
                    {
                        scale: 1.25
                    },
                    {
                        scale: 1,
                        duration: 1.2,
                        transformOrigin: "bottom",
                        scrollTrigger: image1Trigger
                    })

            }

            const textTrigger = {
                trigger: textWrapperRef.current,
                start: "top bottom",
                toggleActions: "play none none reset"
            }

            if (descriptionHeaderRef.current
                && descriptionRef.current
                && detailRefs.current.length > 0) {

                gsap.timeline({ pasued: false, scrollTrigger: textTrigger })
                    .fromTo(descriptionHeaderRef.current,
                        {
                            y: 100,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut",
                        })
                    .fromTo(descriptionRef.current,
                        {
                            y: 100,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut",

                        }, 0.2)
                    .fromTo(detailRefs.current,
                        {
                            y: (index) => index === 0 ? 100 : `${100 + (index * 0.3 * 100)}`,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "Power2.easeOut",
                        }, 0.4)

            }

        }

    }, [isReady])

    return (
        <section className="c-product-description py-5 d-flex flex-wrap ps-1 pe-1 ps-md-0 pe-md-0">

            <div className="background green"></div>

            <div className="c-product-description__text__wrapper col-md-6 col-12 d-flex align-items-center ps-md-2 ps-xl-5 order-1 order-md-0 mt-3 mt-md-1">

                <div ref={textWrapperRef} className="c-product-description__text__inner col-md-8">

                    <div className="c-product-description__text mb-1">

                        <h4 ref={descriptionHeaderRef} className="c-product-description__text__heading mb-2 should-animate">
                            Description
                        </h4>

                        <div ref={descriptionRef} className="should-animate mb-2">

                            <p>
                                {product.description}
                            </p>

                        </div>

                    </div>

                    <div className="c-product-details">

                        <div ref={addToDetailRefs} className="c-product-detail mb-1 d-flex align-items-center justify-content-between should-animate">
                            <h5 className="c-product__detail__header m-0 ">Size : <span className="c-product__detail__text "> {product.size}</span></h5>
                        </div>

                        <div ref={addToDetailRefs} className="c-product-detail mb-1 d-flex align-items-center justify-content-between should-animate">
                            <h5 className="c-product__detail__header  m-0">Brand : <span className="c-product__detail__text"> {product.brand}</span></h5>
                        </div>

                        <div ref={addToDetailRefs} className="c-product-detail mb-1 d-flex align-items-center justify-content-between should-animate">
                            <h5 className="c-product__detail__header  m-0">Color :
                                <span className="ms-7 c-product__detail__text">
                                    {
                                        product.color.join(", ")
                                    }
                                </span>
                            </h5>
                        </div>

                        <div ref={addToDetailRefs} className="c-product-detail mb-1 d-flex align-items-center justify-content-between should-animate">
                            <h5 className="c-product__detail__header  m-0">Materials :
                            <span className="ms-7 c-product__detail__text">
                                    {product.material.join(", ")}
                                </span>
                            </h5>
                        </div>

                    </div>

                </div>

            </div>

            <div className="c-product-description__image__wrapper col-md-6 col-12 position-relative mb-5 mb-md-0">

                <div className="c-product-description__image__inner position-relative">

                    <div ref={image2WrapperRef} className="c-product-description__image2 col-6 col-md-5">

                        <div ref={image2ParallaxRef} className="parallax position-absolute w-100 h-100 t-0 l-0">

                            <figure className="fig-wrapper should-animate">

                                <Image src={product.images[0].src} layout="fill" alt="" />

                            </figure>

                        </div>

                    </div>

                    <div ref={image1WrapperRef} className="c-product-description__image1 overflow-hidden">

                        <div className="c-product-description__image1__inner position-relative should-animate">

                            <div className="parallax-wrapper">

                                <div ref={image1ParallaxRef} className="parallax">

                                    <figure ref={image1Ref} className="fig-wrapper should-animate">

                                        <Image src={product.images[1].src} layout="fill" alt="" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProductDescription;