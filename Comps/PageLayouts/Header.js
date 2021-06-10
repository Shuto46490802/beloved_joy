import React, { useEffect, useState } from 'react';
import Link from "./Link";

import { useRouter } from "next/router";
import { useAuth } from '../../lib/auth';
import { useCheckout } from '../../lib/shopifyCheckout';

const Header = ({ headerRef, humburgerRef, toggleMenu, toggleShopMenu, toggleSearch, toggleCart, menuOpen, searchOpen, shopMenuOpen, cartOpen, toggleLogin, toggleAccount, accountOpen, loginOpen, newsletterPopupOpen }) => {

    const router = useRouter();
    const { user } = useAuth();
    const [productsQuantity, setProductsQuantity] = useState(0);
    const { cartDetails, setIsCartEmpty, isCartEmpty } = useCheckout();

    useEffect(() => {
        setProductsQuantity(cartDetails.length)
    }, [cartDetails])

    const handleCartEmpty = () => {

        if (cartDetails.length === 0) {

            setIsCartEmpty({ state: true, anim: "anim-in" });
            setTimeout(() => {
                setIsCartEmpty({ state: true, anim: "" });
            }, 1500)

        } else {

            setIsCartEmpty({ state: false, anim: "" })

        }

    }

    return (
        <>

            <div ref={headerRef} className="c-header onTop w-100">

                <div className="c-header__wrapper d-flex justify-content-between w-100 position-relative">

                    <div className="logo-wrapper col-md-4 ps-1 ps-xl-2 pt-6 pb-6">

                        <div>

                            <Link ariaLabel="home" href="/">

                                <a>

                                    <div className="logo">Beloved Joy</div>

                                </a>

                            </Link>

                        </div>

                    </div>

                    <div className="nav-links__wrapper col-md-4 d-none d-md-flex justify-content-center">

                        <div className="nav-links h-100 d-flex align-items-center">

                            <div>

                                <div className="nav-link d-flex flex-center ml-1 mr-1 no-wrap">

                                    <button
                                        ariaLabel="button"
                                        name="button"
                                        onClick={() => {
                                            toggleShopMenu()
                                        }}
                                    >

                                        <span className="line-link">

                                            Shop

                                        </span>

                                    </button>

                                </div>

                            </div>

                            <div>

                                <div className="nav-link d-flex flex-center ml-1 mr-1 no-wrap">

                                    <Link ariaLabel="about" href="/about">

                                        <a>

                                            <span className="line-link">

                                                Our Story

                                            </span>

                                        </a>

                                    </Link>

                                </div>

                            </div>

                            <div>

                                <div className="nav-link d-flex flex-center ml-1 mr-1 no-wrap">

                                    <Link ariaLabel="journal" href="/journal">

                                        <a>

                                            <span className="line-link">

                                                Journal

                                            </span>

                                        </a>

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="nav-icon-links__wrapper col-md-4 d-flex align-items-center justify-content-end pe-md-1 pe-xl-2">

                        <button ariaLabel="button" name="search-icon" className="search-icon nav-icon" onClick={() => { toggleSearch() }}>

                            <svg x="0px" y="0px" viewBox="0 0 21 21">

                                <path d="M20.85,19.44l-6.4-6.4c1.05-1.36,1.69-3.05,1.69-4.9c0-4.41-3.59-8-8-8s-8,3.59-8,8
		                            c0,4.41,3.59,8,8,8c1.85,0,3.54-0.63,4.9-1.69l6.4,6.4L20.85,19.44z M8.15,14.15c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6s6,2.69,6,6
		                            C14.15,11.45,11.46,14.15,8.15,14.15z"/>

                            </svg>

                        </button>

                        <button
                            ariaLabel="button"
                            name="button"
                            className="nav-icon d-md-block d-none"
                            onClick={() => {
                                if (!isCartEmpty.state) {
                                    toggleCart();
                                    handleCartEmpty();
                                } else {
                                    handleCartEmpty()
                                }
                            }}>

                            <span className="line-link">

                                Cart

                                <span className="ms-7">

                                    <span>
                                        {productsQuantity}
                                    </span>

                                </span>

                            </span>

                        </button>

                        <button
                            ariaLabel="button"
                            name="button"
                            className="nav-icon d-md-none d-block"
                            onClick={() => {
                                if (!isCartEmpty.state) {
                                    toggleCart();
                                    handleCartEmpty();
                                } else {
                                    handleCartEmpty()
                                }
                            }}>

                            <span className="c-header-cart-button">

                                <span className="c-header-cart-counter">
                                    {productsQuantity}
                                </span>

                            </span>

                        </button>

                        {
                            user !== null
                                ? <button ariaLabel="button" name="button" onClick={() => { toggleAccount() }} className="nav-icon ">

                                    <span className="line-link d-md-block d-none">
                                        MyAccount
                                    </span>

                                    <svg
                                        className="d-md-none d-block"
                                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="48" height="48"
                                        viewBox="0 0 172 172"
                                        style={{ fill: "#fff" }}>

                                        <path d="M86,14.33333c-19.72655,0 -35.83333,16.1068 -35.83333,35.83333c0,19.72653 16.10679,35.83333 35.83333,35.83333c19.72655,0 35.83333,-16.1068 35.83333,-35.83333c0,-19.72653 -16.10679,-35.83333 -35.83333,-35.83333zM86,25.08333c13.91682,0 25.08333,11.16652 25.08333,25.08333c0,13.91681 -11.16651,25.08333 -25.08333,25.08333c-13.91682,0 -25.08333,-11.16652 -25.08333,-25.08333c0,-13.91681 11.16651,-25.08333 25.08333,-25.08333zM44.79167,100.33333c-8.84188,0 -16.125,7.28312 -16.125,16.125v4.2972c0,10.53809 6.68189,19.99054 16.87386,26.49007c10.19197,6.49953 24.13682,10.42106 40.45947,10.42106c16.32265,0 30.2675,-3.92153 40.45947,-10.42106c10.19197,-6.49953 16.87386,-15.95198 16.87386,-26.49007v-4.2972c0,-8.84188 -7.28312,-16.125 -16.125,-16.125zM44.79167,111.08333h82.41667c3.03329,0 5.375,2.34171 5.375,5.375v4.2972c0,5.96674 -3.84326,12.28583 -11.90479,17.42676c-8.06153,5.14093 -20.09853,8.73438 -34.67855,8.73438c-14.58001,0 -26.61702,-3.59345 -34.67855,-8.73437c-8.06153,-5.14093 -11.90479,-11.46002 -11.90479,-17.42676v-4.2972c0,-3.03329 2.34171,-5.375 5.375,-5.375z"></path>

                                    </svg>

                                </button>
                                : <button ariaLabel="button" name="button" onClick={() => { toggleLogin() }} className="nav-icon ">

                                    <span className="line-link d-md-block d-none">
                                        Login
                                    </span>

                                    <svg
                                        className="d-md-none d-block"
                                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="50" height="50"
                                        viewBox="0 0 172 172"
                                        style={{ fill: "#fff" }}>

                                        <path d="M86,0c-39.99,0 -73.59069,27.46983 -83.17253,64.5h14.80924c9.159,-29.0465 36.33545,-50.16667 68.36328,-50.16667c39.517,0 71.66667,32.14967 71.66667,71.66667c0,39.517 -32.14967,71.66667 -71.66667,71.66667c-32.02783,0 -59.20428,-21.12017 -68.36328,-50.16667h-14.80924c9.58183,37.03017 43.18253,64.5 83.17253,64.5c47.42183,0 86,-38.57817 86,-86c0,-47.42183 -38.57817,-86 -86,-86zM78.83333,57.33333v21.5h-78.83333v14.33333h78.83333v21.5l40.3125,-28.66667z"></path>

                                    </svg>

                                </button>
                        }

                    </div>

                </div>

            </div>

            <div ref={humburgerRef} style={shopMenuOpen.state || searchOpen.state || cartOpen.state || menuOpen.state || newsletterPopupOpen.state || accountOpen.state || loginOpen.state ? { visibility: "visible", opacity: 1 } : {}} className={`c-humburger__wrapper d-inline-block position-absolute `}>

                <div className={`c-humburger w-100 h-100 py-6 d-flex flex-center ${shopMenuOpen.state || searchOpen.state || cartOpen.state || menuOpen.state || newsletterPopupOpen.state ? "is-active" : accountOpen.state ? "is-account-active" : loginOpen.state ? "is-login-active" : ""}`}>

                    <div className="c-humburger__inner d-inline-block">

                        <button ariaLabel="button" name="humburger" className="px-6 w-100 d-flex flex-center" onClick={() => { toggleMenu() }}>

                            <div className="vertical-lines d-block">

                                <div className="line-top" />

                                <div className="line-bottom" />

                            </div>

                        </button>

                    </div>

                </div>

            </div>

        </>
    );
}

export default Header;