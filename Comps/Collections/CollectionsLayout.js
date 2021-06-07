import React, { useEffect, useRef, useState } from "react";

import SideBar from "./SideBar";

import Cursor from "../PageLayouts/Cursor";
import Header from "../PageLayouts/Header";
import ShopMenu from "../PageLayouts/ShopMenu";
import Search from "../PageLayouts/Search";
import Cart from "../PageLayouts/Cart";
import Menu from "../PageLayouts/Menu";
import PreLoader from "../PageLayouts/PreLoader";
import Login from "../PageLayouts/Login";
import CartNotification from "../PageLayouts/CartNotification";

import { useAuth } from "../../lib/auth";

import { Transition, TransitionGroup } from "react-transition-group";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import MyAccount from "../PageLayouts/MyAccount";
import NewsletterPopup from "../PageLayouts/NewsletterPopup";

import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';



const CollectionsLayout = ({ children, headerRef, humburgerRef, clothingData, setClothingData, shoesData, setShoesData, accessoriesData, setAccessoriesData, touch, toggleMenu, toggleShopMenu, toggleSearch, toggleCart, menuOpen, searchOpen, shopMenuOpen, cartOpen, toggleLogin, loginOpen, toggleAccount, accountOpen, toggleNewsletterPopup, newsletterPopupOpen, products, collectionSideBarRef, numOfShopAll, numOfNewArrivals, numOfClothing, numOfShoes, numOfAccessories, numOfHomewear }) => {

    const componentWrapperRef = useRef();
    const { user } = useAuth();

    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin);
    }, [])

    const loaderContainerRef = useRef();

    useEffect(() => {

        const rule = CSSRulePlugin.getRule(".c-preloader__text:before");

        gsap.timeline({ paused: false })
            .fromTo(rule,
                {
                    maxWidth: 0
                },
                {
                    maxWidth: "100%",
                    duration: 0.75,
                    ease: "Power2.easeOut",
                }, 0.75)
            .to(loaderContainerRef.current,
                {
                    opacity: 0,
                    duration: 0.75
                }, 1.45)
            .set(loaderContainerRef.current, {
                display: "none",
                zIndex: -1
            })

    }, [])

    useEffect(() => {
        getScrollProxy()
    }, [clothingData, shoesData, accessoriesData])

    const scrollerRef = useRef();

    const getScrollProxy = () => {

        const scroller = scrollerRef.current;

        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: null });

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.scrollerProxy(scrollerRef.current, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            }
        });

        var lastOffset = null;

        bodyScrollBar.addListener(({ offset }) => {
            ScrollTrigger.update()

            if (offset.y > 0) {
                headerRef.current.classList.add("shrinked")
                humburgerRef.current.classList.add("shrinked")
            } else {
                headerRef.current.classList.remove("shrinked")
                humburgerRef.current.classList.remove("shrinked")
            }

            if (!lastOffset) {
                lastOffset = offset;
                return;
            }

            if (offset.y < lastOffset.y) {
                headerRef.current.classList.remove("pull-up")
                humburgerRef.current.classList.remove("pull-up")
            } else if (offset.y > lastOffset.y) {
                headerRef.current.classList.add("pull-up")
                humburgerRef.current.classList.add("pull-up")
            } else {
                console.log("still")
            }

            lastOffset = offset;

        });
        ScrollTrigger.defaults({ scroller: scroller });

        if (document.querySelector('.gsap-marker-scroller-start')) {
            const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

            bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
        }

    }

    return (

        <>
            <div className="page-background background pink" />
            <Cursor touch={touch} />
            <PreLoader loaderContainerRef={loaderContainerRef} />
            <Header
                toggleMenu={toggleMenu}
                toggleShopMenu={toggleShopMenu}
                toggleSearch={toggleSearch}
                toggleCart={toggleCart}
                menuOpen={menuOpen}
                searchOpen={searchOpen}
                shopMenuOpen={shopMenuOpen}
                cartOpen={cartOpen}
                headerRef={headerRef}
                humburgerRef={humburgerRef}
                toggleLogin={toggleLogin}
                loginOpen={loginOpen}
                toggleAccount={toggleAccount}
                accountOpen={accountOpen}
                newsletterPopupOpen={newsletterPopupOpen}
            />
            <ShopMenu
                shopMenuOpen={shopMenuOpen}
                toggleShopMenu={toggleShopMenu}
                numOfShopAll={numOfShopAll}
                numOfNewArrivals={numOfNewArrivals}
                numOfClothing={numOfClothing}
                numOfShoes={numOfShoes}
                numOfAccessories={numOfAccessories}
                numOfHomewear={numOfHomewear}
            />
            <Search searchOpen={searchOpen} toggleSearch={toggleSearch} />
            <Cart toggleCart={toggleCart} cartOpen={cartOpen} />
            <CartNotification />
            <Menu
                menuOpen={menuOpen}
                toggleMenu={toggleMenu}
                numOfShopAll={numOfShopAll}
                numOfNewArrivals={numOfNewArrivals}
                numOfClothing={numOfClothing}
                numOfShoes={numOfShoes}
                numOfAccessories={numOfAccessories}
                numOfHomewear={numOfHomewear}
            />
            <NewsletterPopup  humburgerRef={humburgerRef} headerRef={headerRef} toggleNewsletterPopup={toggleNewsletterPopup} newsletterPopupOpen={newsletterPopupOpen} />

            <TransitionGroup>

                <Transition
                    key={user}
                    timeout={750}
                    onEnter={(node) => {

                        gsap.set(node,
                            {
                                zIndex: 5001
                            })

                    }}
                    onExit={(node) => {

                        gsap.timeline({ pasued: false })
                            .fromTo(node,
                                {
                                    opacity: 1
                                },
                                {
                                    opacity: 0,
                                    duration: 0.75,
                                    ease: "Power2.easeOut"
                                })

                    }}
                >

                    {
                        user
                            ? <MyAccount toggleAccount={toggleAccount} accountOpen={accountOpen} />
                            : <Login toggleLogin={toggleLogin} loginOpen={loginOpen} />
                    }

                </Transition>

            </TransitionGroup>

            <div className="page">

                <div ref={scrollerRef} className="page">

                    <div ref={componentWrapperRef} className="components-wrapper">

                        <div className="content__block d-flex flex-wrap h-100">

                            <div className="background blue" />

                            <SideBar
                                clothingData={clothingData}
                                setClothingData={setClothingData}
                                shoesData={shoesData}
                                setShoesData={setShoesData}
                                accessoriesData={accessoriesData}
                                setAccessoriesData={setAccessoriesData}
                                collectionSideBarRef={collectionSideBarRef}
                                products={products}
                            />

                            <div className="collections__content__wrapper col-xl-9 col-md-8 col-12 position-relative">

                                {children}

                            </div>

                        </div>

                    </div>

                </div>

            </div >

        </>
    );
}

export default CollectionsLayout;