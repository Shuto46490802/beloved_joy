import Image from "next/image";
import Link from "../PageLayouts/Link";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import { useEffect, useState } from "react";
import { useCheckout } from "../../lib/shopifyCheckout";

SwiperCore.use([Scrollbar]);

const ProductIntro = ({ product, getScrollProxy, setQuantity, quantity }) => {

    const [error, setError] = useState("");
    const { addToCart } = useCheckout();

    useEffect(() => {
        getScrollProxy();
    }, [])

    const handleDecrement = () => {

        if (quantity <= 1) {
            return;
        } else if (quantity > product.inventoryQuantity) {
            setError(`Sorry, ${product.name} is one of a kind.`)
        } else {
            setQuantity(quantity - 1);
            setError("")
        }

    };

    const handleIncrement = () => {

        if (quantity < product.inventoryQuantity) {
            setQuantity(quantity + 1);
            setError("");
        } else {
            setError(`Sorry, ${product.name} is one of a kind.`)
        }
    };

    return (
        <section className="c-product-intro ps-1 pe-1 ps-xl-2 pe-xl-2 pt-5 pb-5">

            <div className="background pink" />

            <div className="c-product-intro__wrapper d-flex flex-wrap justify-content-center">

                <div className="c-product-intro__image__wrapper col-12 col-md-6 col-xl-5 pe-md-2">

                    <div className="c-product-intro__image__inner mb-1">

                        <Swiper
                            scrollbar={{
                                draggable: true,
                                el: ".swiper-scrollbar"
                            }}
                        >

                            {
                                product.images.map(({ src }) => {
                                    return <SwiperSlide>

                                        <figure className="fig-wrapper">

                                            <Image src={src} layout="fill" alt="" priority />

                                        </figure>

                                    </SwiperSlide>
                                })
                            }

                        </Swiper>

                    </div>

                    <div data-v-2bc40b64="" className="swiper-scrollbar" ><div className="swiper-scrollbar-drag" ></div></div>

                </div>

                <div className="c-product-intro__text__wrapper col-md-6 col-xl-4 col-12 pe-xl-4 ms-xl-1 pt-1">

                    <div className="c-product-intro__product__title my-md-3 mt-2">

                        <h4 className="">{product.name}</h4>

                        <span className="price mb-1">${product.price}</span>

                        <div className="category">

                            {
                                product.category.map(category => {
                                    return <Link href={`/collections/${category}`}>

                                        <a className="me-7">
                                            {
                                                product.category.indexOf(category) !== product.category.length - 1
                                                    ? `${category},`
                                                    : `${category}`
                                            }
                                        </a>

                                    </Link>
                                })
                            }

                        </div>

                    </div>

                    <div className="c-product-intro__product__pickup d-md-none">

                        <div className="c-product-intro__product__pickup__inner py-1">

                            <div className="d-flex">

                                <div className="pickup-icon position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                                </div>

                                <div class="c-product-intro__product-information-container">
                                    <p class="store-availability-information__title m-0">
                                        Pickup available at <strong>St. Mary St</strong>
                                    </p>
                                    <p class="store-availability-information__stock m-0">
                                        <small>Usually ready in 24 hours</small>
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="c-product-intro__product__button d-flex flex-wrap col-xl-12 my-2">

                        <div className="add-to-cart col-md-8 col-12 co order-1 order-md-0">

                            <div className="button__wrapper w-100 should-animate">

                                <button
                                    className="button d-inline-block w-100"
                                    onClick={(e) => {
                                        addToCart(e, product, quantity)
                                    }}
                                >

                                    <div className="rectangle-button position-relative on-top">

                                        <span className="button-background position-absolute t-0 l-0 w-100 h-100 behind-1"></span>

                                        <div className="position-relative">
                                            <span style={{ visibility: "hidden" }} className="button-text">add-to-your-order</span>
                                            <span className="button-text position-absolute l-0 text-center w-100 center-y">add-to-your-order</span>
                                            <span className="button-text position-absolute l-0 text-center w-100 center-y">add-to-your-order</span>
                                        </div>

                                    </div>

                                </button>

                            </div>

                        </div>

                        <div className="qty-button small d-flex flex-center ps-1 pe-1 pt-6 pb-6 pt-md-0 pb-md-0 mb-md-0 col-md-4 col-12">

                            <button
                                onClick={() => {
                                    handleDecrement()
                                }}
                            >

                                <span className="decrement cursor-pointer px-6">
                                    -
                                </span>

                            </button>

                            <span className="number qty ml-6 mr-6">
                                {quantity}
                            </span>

                            <button
                                onClick={() => {
                                    handleIncrement()
                                }}
                            >

                                <span className="increment cursor-pointer px-6">
                                    +
                                </span>

                            </button>

                        </div>

                        <small className="c-product-intro-error" style={error ? { visibility: "visible", opacity: 1 } : {}}>
                            {error}
                        </small>

                    </div>


                    <div className="c-product-intro__product__pickup d-md-block d-none">

                        <div className="c-product-intro__product__pickup__inner py-1">

                            <div className="d-flex">

                                <div className="pickup-icon position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                                </div>

                                <div class="c-product-intro__product-information-container">
                                    <p class="store-availability-information__title m-0">
                                        Pickup available at <strong>St. Mary St</strong>
                                    </p>
                                    <p class="store-availability-information__stock m-0">
                                        <small>Usually ready in 24 hours</small>
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProductIntro;