import React, { useEffect, useState, useRef } from 'react';

//Components
import Cursor from "./Cursor";
import PreLoader from "./PreLoader";
import Header from "./Header";
import ShopMenu from "./ShopMenu";
import Menu from "./Menu";
import Search from "./Search";
import Cart from "./Cart";
import Login from './Login';
import { useAuth } from '../../lib/auth';
import MyAccount from './MyAccount';

import { gsap } from "gsap";
import { Transition, TransitionGroup } from "react-transition-group";
import NewsletterPopup from './NewsletterPopup';
import CartNotification from './CartNotification';

const PageLayout = ({ children, touch, toggleMenu, toggleShopMenu, toggleSearch, toggleCart, menuOpen, searchOpen, shopMenuOpen, cartOpen, loaderContainerRef, pageRef, headerRef, humburgerRef, toggleLogin, loginOpen, accountOpen, toggleAccount, toggleNewsletterPopup, newsletterPopupOpen, numOfShopAll, numOfNewArrivals, numOfClothing, numOfShoes, numOfAccessories, numOfHomewear, isFirstLoaded }) => {

    const { user } = useAuth();

    return (
        <>
            <div className="page-background background pink" />
            <Cursor touch={touch} isFirstLoaded={isFirstLoaded} />
            <PreLoader loaderContainerRef={loaderContainerRef} />

            {
                isFirstLoaded
                    ? <>
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
                        <NewsletterPopup humburgerRef={humburgerRef} headerRef={headerRef} toggleNewsletterPopup={toggleNewsletterPopup} newsletterPopupOpen={newsletterPopupOpen} />
                    </>
                    : null
            }


            <TransitionGroup  >

                <Transition
                    key={user}
                    timeout={750}
                    onEnter={(node) => {

                        gsap.set(node, {
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
                            .set(node, {
                                zIndex: 0
                            })

                    }}
                >

                    <div>

                        {
                            isFirstLoaded
                                ? user
                                    ? <MyAccount toggleAccount={toggleAccount} accountOpen={accountOpen} />
                                    : <Login toggleLogin={toggleLogin} loginOpen={loginOpen} />
                                : null
                        }

                    </div>

                </Transition>

            </TransitionGroup>

            <div ref={pageRef} className="page">

                {/* Contents start */}
                {/* {
                    isReady
                        ? children
                        : null
                } */}
                {children}
                {/* Contents end */}

            </div>

        </>
    );
}

export default PageLayout;

