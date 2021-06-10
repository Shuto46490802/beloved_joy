import React, { useState, useRef, useEffect } from "react";
import Link from "./Link";
import Image from "next/image";

import img2 from "../../assets/img2.jpg";

import { gsap } from "gsap";
import { useCheckout } from "../../lib/shopifyCheckout";
import { useRouter } from "next/router";

const Cart = ({ toggleCart, cartOpen }) => {

    const cartRef = useRef();
    const innerRef = useRef();
    const overlayRef = useRef();

    const tlIn = useRef();
    const tlOut = useRef();

    useEffect(() => {

        if (!cartOpen.state && cartOpen.anim === "anim-out") {
            tlOut.current = gsap.timeline({ paused: false })
                .fromTo(innerRef.current,
                    {
                        x: "0%",
                        opacity: 1
                    },
                    {
                        x: "100%",
                        opacity: 0,
                        duration: 0.6,
                        ease: "Power2.easeInOut"
                    })
                .fromTo(overlayRef.current,
                    {
                        opacity: 0.3
                    },
                    {
                        opacity: 0,
                        duration: 0.6
                    }, 0)
                .to(cartRef.current,
                    {
                        visibility: "hidden",
                        duration: 0
                    })
        }

    }, [cartOpen, tlOut]);

    useEffect(() => {

        if (cartOpen.state && cartOpen.anim === "anim-in") {
            tlIn.current = gsap.timeline({ paused: false })
                .to(cartRef.current,
                    {
                        visibility: "visible",
                        duration: 0
                    })
                .fromTo(innerRef.current,
                    {
                        x: "100%",
                        opacity: 0
                    },
                    {
                        x: "0%",
                        opacity: 1,
                        duration: 0.6,
                        ease: "Power2.easeInOut"
                    })
                .fromTo(overlayRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 0.3,
                        duration: 0.6
                    }, 0)
        }

    }, [cartOpen, tlIn])

    const [lineItems, setLineItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartDetails, deleteProduct, increaseQuantity, decreaseQuantity, redirectToCheckout } = useCheckout();

    useEffect(() => {

        if (cartDetails.length > 0) {

            const _lineItems = cartDetails.map((product) => ({
                variantId: product.variantId,
                quantity: product.quantity
            }));

            setLineItems(_lineItems);

            if (cartDetails.length > 1) {

                const _totalPrice = cartDetails
                    .map((product) => product.quantity * parseInt(product.product.price))
                    .reduce((a, b) => a + b)

                setTotalPrice(_totalPrice + ".00")

            } else {

                setTotalPrice(cartDetails[0].product.price)

            }

        } else {
            setTotalPrice(0);
            setLineItems([]);
        }

    }, [cartDetails])

    return (
        <div ref={cartRef} className="c-cart position-fixed vw-100 h-100 t-0 l-0">

            <div className="c-cart__inner d-flex flex-wrap overflow-hidden h-100 w-100 on-top">

                <div ref={innerRef} className="c-cart__wrapper col-md-7 offset-md-5 col-lg-5 offset-lg-7 col-xl-4 offset-xl-8 col-xmd-4 offset-xmd-8 col-12 on-top h-100">

                    <div className="c-cart__content h-100 pt-3 mt-1 pb-2 pt-md-3 pb-md-3 d-flex flex-column justify-content-between">

                        <div className="c-cart__content__inner d-flex flex-column flex-grow overflow-auto">

                            <div className="d-flex justify-content-between mb-1 px-1 px-md-2">

                                <h3 className="">Your Order</h3>

                                <div className={`c-cart-counter me-1 ${cartDetails.length > 0 && cartOpen.state ? "is-active" : ""}`}>

                                    <div className="c-cart-counter-text">

                                        {cartDetails.length}

                                    </div>

                                </div>

                            </div>


                            <div className="c-cart-items overflow-auto h-100 mt-6 mt-md-0 px-1 px-md-2">

                                {
                                    cartDetails.map((product, i) => (
                                        <div key={i} className="c-cart-item d-flex flex-wrap pb-6 mt-1">

                                            <Link ariaLabel="product" href="/products/[slug]" as={`/products/${product.product.slug}`} >

                                                <a onClick={() => toggleCart()} className="col-6 pe-6">

                                                    <div className="c-cart-image__wrapper">

                                                        <figure className="fig-wrapper">

                                                            <Image alt="" src={product.product.images[0].src} layout="fill" />

                                                        </figure>

                                                    </div>

                                                </a>

                                            </Link>

                                            <div className="c-cart-item-text__wrapper col-6 pl-1 d-flex flex-column justify-content-between align-items-start ps-6">

                                                <div>

                                                    <h4 className="mb-7">
                                                        {product.product.name}
                                                    </h4>

                                                    <p>
                                                        ${product.product.price}
                                                    </p>

                                                </div>

                                                <div className="c-cart-item-form__wrapper d-flex justify-content-between w-100 pb-6">

                                                    <div className="c-cart-item-form-qty">

                                                        <span className="me-6">
                                                            QTY:
                                                        </span>

                                                        <button
                                                            ariaLabel="button"
                                                            name="button"
                                                            onClick={(e) => {
                                                                decreaseQuantity(e, product)
                                                            }}
                                                        >
                                                            <span>-</span>
                                                        </button>

                                                        <span className="mx-7">{product.quantity}</span>

                                                        <button
                                                            ariaLabel="button"
                                                            name="button"
                                                            onClick={(e) => {
                                                                increaseQuantity(e, product)
                                                            }}
                                                        >
                                                            <span>+</span>
                                                        </button>

                                                    </div>

                                                    <button
                                                        ariaLabel="button"
                                                        name="button"
                                                        onClick={(e) => {
                                                            deleteProduct(e, product)
                                                        }}
                                                    >
                                                        <span className="line-link">
                                                            Delete
                                                        </span>
                                                    </button>

                                                    <small style={product.quantity > product.product.inventoryQuantity ? { visibility: "visible" } : { visibility: "hidden" }} className={`c-login-input-error`}>Sorry, this item is one of a kind.</small>

                                                </div>

                                            </div>

                                        </div>
                                    ))
                                }

                            </div>

                        </div>

                        <div className="c-cart-form__wrapper px-1 px-md-2">

                            <div className="c-cart-total__wrapper pb-1">

                                <div className="d-flex justify-content-between align-items-center">

                                    <h5>
                                        total:
                                    </h5>

                                    <span>
                                        {
                                            totalPrice > 0
                                                ? "$" + totalPrice
                                                : "$0"
                                        }
                                    </span>

                                </div>

                            </div>

                            <button
                                ariaLabel="button"
                                name="button"
                                className="mt-1 w-100 button onTop d-flex flex-center flex-grow"
                                onClick={(e) => {
                                    redirectToCheckout(e, lineItems)
                                }}
                            >

                                <div className="rectangle-button position-relative">

                                    <div className="button-background position-absolute t-0 l-0 w-100 h-100 behind-1" />

                                    <span className="button-text uppercase">checkout</span>

                                </div>

                            </button>


                        </div>

                    </div>

                </div>

                <button ariaLabel="button" name="button" ref={overlayRef} onClick={() => { toggleCart() }} className="c-cart__overlay position-absolute h-100 w-100 t-0 l-0" />

            </div>

        </div>
    );
}

export default Cart;