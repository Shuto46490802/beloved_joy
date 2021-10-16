import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";

//Components
import PageLayout from "../Comps/PageLayouts/PageLayout";
import CollectionsLayout from "../Comps/Collections/CollectionsLayout";
import { AuthProvider, useAuth } from "../lib/auth";
import { CheckoutProvider } from "../lib/shopifyCheckout";

//css
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/index.scss";
import "../styles/App.scss";
import 'swiper/swiper.scss';

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Transition, TransitionGroup } from "react-transition-group";

function MyApp({ Component, pageProps, router, products }) {

  //Device
  const [touch, setTouch] = useState(false);
  const [parallax, setParallax] = useState(true);
  const footerRef = useRef();
  const headerRef = useRef();
  const humburgerRef = useRef();
  const pageRef = useRef();
  const [isReady, setIsReady] = useState(false);
  const [isFirstLoaded, setIsFirstLoaded] = useState(false);

  //Menus
  const [menuOpen, setMenuOpen] = useState({ state: false, anim: "" });
  const [searchOpen, setSearchOpen] = useState({ state: false, anim: "" });
  const [shopMenuOpen, setShopMenuOpen] = useState({ state: false, anim: "" });
  const [cartOpen, setCartOpen] = useState({ state: false, anim: "" });
  const [loginOpen, setLoginOpen] = useState({ state: false, anim: "" });
  const [accountOpen, setAccountOpen] = useState({ state: false, anim: "" });
  const [newsletterPopupOpen, setNewsletterPopupOpen] = useState({ state: false, anim: "" });
  const [numOfShopAll, setNumOfShopAll] = useState();
  const [numOfNewArrivals, setNumOfNewArrivals] = useState();
  const [numOfClothing, setNumOfClothing] = useState();
  const [numOfShoes, setNumOfShoes] = useState();
  const [numOfAccessories, setNumOfAccessories] = useState();
  const [numOfHomewear, setNumOfHomewear] = useState();

  //collections
  const [clothingData, setClothingData] = useState("viewall");
  const [shoesData, setShoesData] = useState("viewall");
  const [accessoriesData, setAccessoriesData] = useState("viewall");
  const collectionSideBarRef = useRef();

  //home intro
  const loaderContainerRef = useRef();
  const introHeadingWrapperRef = useRef();
  const headingRefs = useRef([]);
  const addToHeadingRefs = (_el) => {
    if (_el && !headingRefs.current.includes(_el)) {
      headingRefs.current.push(_el)
    } else {
      headingRefs.current = [];
    }
  }
  const captionLeftRefs = useRef([]);
  const addToCaptionLeftRefs = (_el) => {
    if (_el && !captionLeftRefs.current.includes(_el)) {
      captionLeftRefs.current.push(_el)
    } else {
      captionLeftRefs.current = [];
    }
  }
  const captionRightRefs = useRef([]);
  const addToCaptionRightRefs = (_el) => {
    if (_el && !captionRightRefs.current.includes(_el)) {
      captionRightRefs.current.push(_el)
    } else {
      captionRightRefs.current = [];
    }
  }
  const introImageWrapperRef = useRef();

  //about intro
  const aboutIntroImageWrapperRef = useRef();
  const aboutIntroHeadingWrapperRef = useRef();
  const aboutIntroHeadingRef = useRef();
  const aboutIntroCaptionRef = useRef();
  const aboutIntroCaptionWrapperRef = useRef();

  //contact intro
  const contactIntroImageWrapperRef = useRef();
  const contactIntroHeading1WrapperRef = useRef();
  const contactIntroHeading1Ref = useRef();
  const contactIntroHeading2WrapperRef = useRef();
  const contactIntroHeading2Ref = useRef();

  //privacy policy intro
  const privacyIntroImageWrapperRef = useRef();
  const privacyIntroHeadingWrapperRef = useRef();
  const privacyIntroHeadingRef = useRef();

  //terms conditions intro
  const termsIntroImageWrapperRef = useRef();
  const termsIntroHeadingWrapperRef = useRef();
  const termsIntroHeadingRef = useRef();

  useEffect(() => {
    Device.init();
    setTimeout(() => {
      headerRef.current.classList.remove("shrinked", "pull-up")
      humburgerRef.current.classList.remove("shrinked", "pull-up")
    }, 1000)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill(true));
    }
  }, [router.asPath])

  useEffect(() => {
    window.addEventListener('resize', Device.init);
    return () => window.removeEventListener('resize', Device.init);
  }, [router])

  useEffect(() => {
    setNumOfShopAll(pageProps.products.length)
    setNumOfNewArrivals(pageProps.products.filter(({ tags }) => tags.indexOf("new arrival") !== -1).length)
    setNumOfClothing(pageProps.products.filter(({ category }) => category.indexOf("clothing") !== -1).length)
    setNumOfShoes(pageProps.products.filter(({ category }) => category.indexOf("shoes") !== -1).length)
    setNumOfAccessories(pageProps.products.filter(({ category }) => category.indexOf("accessories") !== -1).length)
    setNumOfHomewear(pageProps.products.filter(({ category }) => category.indexOf("homewear") !== -1).length)
  }, [])

  const Device = {
    screenWidth: 0,
    screenHeight: 0,
    pixelRes: 1,
    initScreenHeight: 0,
    salesforce: false,

    init: () => {
      //Detect touch device
      if ('ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
        setTouch(true)
      } else {
        setTouch(false)
      }

      //Get pixel res
      Device.pixelRes = window.devicePixelRatio;
      Device.chrome = navigator.userAgent.indexOf('Chrome') > -1;
      Device.explorer = navigator.userAgent.indexOf('MSIE') > -1;
      Device.firefox = navigator.userAgent.indexOf('Firefox') > -1;
      Device.safari = navigator.userAgent.indexOf("Safari") > -1;
      Device.opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

      if (Device.chrome && Device.safari) {
        Device.safari = false;
      }

      if (Device.chrome && Device.opera) {
        Device.chrome = false;
      }

      if (Device.safari === true || Device.touch === true || Device.salesforce === true) {
        setParallax(false)
      } else {
        setParallax(true)
      }

      Device.refresh();
    },

    refresh: () => {
      if (Device.screenWidth !== window.innerWidth && touch) {
        Device.screenHeight = window.innerHeight;
      } else if (!touch) {
        Device.screenHeight = window.innerHeight;
      }

      if (Device.screenHeight === 0) {
        Device.screenHeight = window.innerHeight;

      }

      Device.screenWidth = window.innerWidth;
      Device.realScreenHeight = window.innerHeight;

      var _vh = Device.screenHeight * 0.01;

      document.documentElement.style.setProperty('--vh', _vh + 'px');

      var _rvh = Device.realScreenHeight * 0.01;

      document.documentElement.style.setProperty('--rvh', _rvh + 'px');
    }
  };

  //Toggle menus
  const toggleMenu = () => {

    if (searchOpen.state) {
      setSearchOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else if (shopMenuOpen.state) {
      setShopMenuOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else if (cartOpen.state) {
      setCartOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else if (menuOpen.state) {
      setMenuOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else if (accountOpen.state) {
      setAccountOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else if (newsletterPopupOpen.state) {
      setNewsletterPopupOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else {
      setMenuOpen({ state: true, anim: "anim-in" });
      document.body.classList.add("state-scroll-lock")
    }
  }

  const toggleShopMenu = () => {

    if (shopMenuOpen.state) {
      setShopMenuOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else {
      setShopMenuOpen({ state: true, anim: "anim-in" });
      document.body.classList.add("state-scroll-lock")
    }
  }

  const toggleSearch = () => {

    if (searchOpen.state) {
      setSearchOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else {
      setSearchOpen({ state: true, anim: "anim-in" });
      document.body.classList.add("state-scroll-lock")
    }
  }

  const toggleCart = () => {

    if (!cartOpen.state) {
      setCartOpen({ state: true, anim: "anim-in" });
      document.body.classList.add("state-scroll-lock")
    } else {
      setCartOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    }
  }

  const toggleLogin = () => {

    if (loginOpen.state) {
      setLoginOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else {
      setLoginOpen({ state: true, anim: "anim-in" });
      document.body.classList.add("state-scroll-lock")
    }
  }

  const toggleAccount = (e) => {

    if (accountOpen.state) {
      setAccountOpen({ state: false, anim: "anim-out" });
      document.body.classList.remove("state-scroll-lock")
    } else {
      setAccountOpen({ state: true, anim: "anim-in" });
      document.body.classList.add("state-scroll-lock")
    }
  }

  const toggleNewsletterPopup = () => {

    if (newsletterPopupOpen.state) {
      setNewsletterPopupOpen({ state: false, anim: "anim-out" })
      document.body.classList.remove("state-scroll-lock")
    } else {
      setNewsletterPopupOpen({ state: true, anim: "anim-in" });
      document.body.classList.add("state-scroll-lock")
    }

  }

  useEffect(() => {
    gsap.registerPlugin(CSSRulePlugin);
  }, [])

  useEffect(() => {

    if (isReady) {
      toggleNewsletterPopup()
    }

  }, [isReady])

  const tl = useRef();

  const onPageEnter = () => {

    const rule = CSSRulePlugin.getRule(".c-preloader__text:before");

    tl.current = gsap.timeline({
      paused: true,
      onStart: () => {
        setTimeout(() => {
          setIsFirstLoaded(true)
        }, 1500)
      }
    })
      .fromTo(rule,
        {
          maxWidth: 0
        },
        {
          maxWidth: "100%",
          duration: 0.75,
          ease: "Power2.easeOut",
        }, 0.65)
      .fromTo(loaderContainerRef.current,
        {
          opacity: 1
        },
        {
          opacity: 0,
          duration: 0.75
        }, 1.35)
      .set(loaderContainerRef.current,
        {
          visibility: "hidden",
          zIndex: -1
        })
      .set(rule,
        {
          maxWidth: 0
        })
      .fromTo(pageRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
        }, 1.35)

    if (router.pathname === "/") {

      tl.current.play()

      gsap.timeline({ paused: false, })
        .fromTo(introImageWrapperRef.current,
          {
            scale: 1.35
          },
          {
            scale: 1,
            duration: 1,
            ease: "Power2.easeOut"
          }, 1.45)
        .fromTo(headingRefs.current,
          {
            yPercent: 120,
            opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "Power2.easeOut"
          }, 1.65)
        .fromTo(introHeadingWrapperRef.current,
          {
            y: 50
          },
          {
            y: 0,
            duration: 1.2,
            ease: "Power2.easeOut"
          }, 1.65)
        .fromTo(captionLeftRefs.current.reverse(),
          {
            x: (index) => `${-30 * index}px`,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "Power2.easeOut"
          }, 2.55)
        .fromTo(captionRightRefs.current,
          {
            x: (index) => `${30 * index}px`,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "Power2.easeOut",
            onComplete: () => setIsReady(true)
          }, 2.55)

    } else if (router.pathname === "/about") {
      tl.current.play()

      gsap.timeline({ paused: false })
        .fromTo(aboutIntroImageWrapperRef.current,
          {
            scale: 1.35
          },
          {
            scale: 1,
            duration: 1,
            ease: "Power2.easeOut"
          }, 1.45)
        .fromTo(aboutIntroHeadingRef.current,
          {
            yPercent: 120,
            opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "Power2.easeOut"
          }, 1.65)
        .fromTo(aboutIntroHeadingWrapperRef.current,
          {
            y: 50
          },
          {
            y: 0,
            duration: 1.2,
            ease: "Power2.easeOut"
          }, 1.65)
        .fromTo(aboutIntroCaptionRef.current,
          {
            yPercent: -120
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "Power2.easeOut"
          }, 2.3)
        .fromTo(aboutIntroCaptionWrapperRef.current,
          {
            y: -25
          },
          {
            y: 0,
            duration: 1.2,
            ease: "Power2.easeOut",
            onComplete: () => setIsReady(true)
          }, 2.3)

    } else if (router.pathname === "/contact") {
      tl.current.play();

      gsap.timeline({ pasued: false })
        .fromTo(contactIntroImageWrapperRef.current,
          {
            scale: 1.35
          },
          {
            scale: 1,
            duration: 1,
            ease: "Power2.easeOut"
          }, 1.45)
        .fromTo(contactIntroHeading1WrapperRef.current,
          {
            y: -25
          },
          {
            y: 0,
            duration: 1.2,
            ease: "Power2.easeOut"
          }, 1.65)
        .fromTo(contactIntroHeading1Ref.current,
          {
            yPercent: -120,
            opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "Power2.easeOut"
          }, 1.65)
        .fromTo(contactIntroHeading2WrapperRef.current,
          {
            y: 25
          },
          {
            y: 0,
            duration: 1.2,
            ease: "Power2.easeOut"
          }, 1.65)
        .fromTo(contactIntroHeading2Ref.current,
          {
            yPercent: 120,
            opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "Power2.easeOut",
            onComplete: () => setIsReady(true)
          }, 1.65)

    } else if (router.pathname.includes("/privacy")) {
      tl.current.play()

      if (router.pathname.includes("/privacy-policy")) {
        gsap.timeline({ paused: false })
          .fromTo(privacyIntroImageWrapperRef.current,
            {
              scale: 1.35
            },
            {
              scale: 1,
              duration: 1,
              ease: "Power2.easeOut"
            }, 1.45)
          .fromTo(privacyIntroHeadingWrapperRef.current,
            {
              y: -25
            },
            {
              y: 0,
              duration: 1.2,
              ease: "Power2.easeOut"
            }, 1.65)
          .fromTo(privacyIntroHeadingRef.current,
            {
              yPercent: -120,
              opacity: 0
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.8,
              ease: "Power2.easeOut",
              onComplete: () => setIsReady(true)
            }, 1.65)
      }

      if (router.pathname.includes("/terms")) {

        gsap.timeline({ paused: false })
          .fromTo(termsIntroImageWrapperRef.current,
            {
              scale: 1.35
            },
            {
              scale: 1,
              duration: 1,
              ease: "Power2.easeOut"
            }, 1.45)
          .fromTo(termsIntroHeadingWrapperRef.current,
            {
              y: -25
            },
            {
              y: 0,
              duration: 1.2,
              ease: "Power2.easeOut"
            }, 1.65)
          .fromTo(termsIntroHeadingRef.current,
            {
              yPercent: -120,
              opacity: 0
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.8,
              ease: "Power2.easeOut",
              onComplete: () => setIsReady(true)
            }, 1.65)

      }
    } else {
      tl.current.play();
    }
  }

  const onPageExit = () => {

    gsap.timeline({ paused: false })
      .fromTo(pageRef.current,
        {
          opacity: 1
        },
        {
          opacity: 0,
          duration: 0.75
        })
      .set(loaderContainerRef.current,
        {
          visibility: "visible",
          zIndex: 9999,
        }, 0)
      .fromTo(loaderContainerRef.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.75
        }, 0)

  }

  const onCollectionsEnter = (node) => {

    gsap.fromTo(node,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.75,
        delay: 0.75,
        onComplete: () => setIsReady(true)
      })

  }

  const onCollectionsExit = (node) => {

    gsap.fromTo(node,
      {
        opacity: 1
      },
      {
        opacity: 0,
        duration: 0.75
      })

  }

  return (
    <AuthProvider>

      <CheckoutProvider>

        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Beloved Joy</title>

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB" />
        </Head>

        {
          router.pathname.includes("collections")
            ? <CollectionsLayout
              clothingData={clothingData}
              setClothingData={setClothingData}
              shoesData={shoesData}
              setShoesData={setShoesData}
              accessoriesData={accessoriesData}
              setAccessoriesData={setAccessoriesData}
              footerRef={footerRef}
              touch={touch}
              toggleMenu={toggleMenu}
              toggleShopMenu={toggleShopMenu}
              toggleSearch={toggleSearch}
              toggleCart={toggleCart}
              toggleLogin={toggleLogin}
              toggleAccount={toggleAccount}
              menuOpen={menuOpen}
              searchOpen={searchOpen}
              shopMenuOpen={shopMenuOpen}
              cartOpen={cartOpen}
              loginOpen={loginOpen}
              accountOpen={accountOpen}
              headerRef={headerRef}
              humburgerRef={humburgerRef}
              toggleNewsletterPopup={toggleNewsletterPopup}
              newsletterPopupOpen={newsletterPopupOpen}
              products={pageProps.products}
              collectionSideBarRef={collectionSideBarRef}
              numOfShopAll={numOfShopAll}
              numOfNewArrivals={numOfNewArrivals}
              numOfClothing={numOfClothing}
              numOfShoes={numOfShoes}
              numOfAccessories={numOfAccessories}
              numOfHomewear={numOfHomewear}
            >

              <TransitionGroup className="position-static">

                <Transition
                  timeout={750}
                  onEnter={onCollectionsEnter}
                  onExit={onCollectionsExit}
                  key={router.pathname}
                  appear={true}
                >

                  <div>

                    {isFirstLoaded
                      ? <Component {...pageProps} key={router.asPath} footerRef={footerRef} clothingData={clothingData} shoesData={shoesData} accessoriesData={accessoriesData} headerRef={headerRef} humburgerRef={humburgerRef} toggleNewsletterPopup={toggleNewsletterPopup} collectionSideBarRef={collectionSideBarRef} />
                      : null
                    }

                  </div>

                </Transition>

              </TransitionGroup>

            </CollectionsLayout>
            : <PageLayout
              touch={touch}
              toggleMenu={toggleMenu}
              toggleShopMenu={toggleShopMenu}
              toggleSearch={toggleSearch}
              toggleCart={toggleCart}
              toggleLogin={toggleLogin}
              toggleAccount={toggleAccount}
              menuOpen={menuOpen}
              searchOpen={searchOpen}
              shopMenuOpen={shopMenuOpen}
              cartOpen={cartOpen}
              loginOpen={loginOpen}
              accountOpen={accountOpen}
              pageRef={pageRef}
              loaderContainerRef={loaderContainerRef}
              headerRef={headerRef}
              humburgerRef={humburgerRef}
              toggleNewsletterPopup={toggleNewsletterPopup}
              newsletterPopupOpen={newsletterPopupOpen}
              numOfShopAll={numOfShopAll}
              numOfNewArrivals={numOfNewArrivals}
              numOfClothing={numOfClothing}
              numOfShoes={numOfShoes}
              numOfAccessories={numOfAccessories}
              numOfHomewear={numOfHomewear}
            >

              <TransitionGroup>

                <Transition
                  timeout={1000}
                  onEnter={onPageEnter}
                  onExit={onPageExit}
                  key={router.asPath}
                  appear={true}
                >

                  <div>

                    {
                      isFirstLoaded
                        ? <Component
                          {...pageProps}
                          addToHeadingRefs={addToHeadingRefs}
                          headingRefs={headingRefs}
                          addToCaptionLeftRefs={addToCaptionLeftRefs}
                          addToCaptionRightRefs={addToCaptionRightRefs}
                          introImageWrapperRef={introImageWrapperRef}
                          captionLeftRefs={captionLeftRefs}
                          captionRightRefs={captionRightRefs}
                          introHeadingWrapperRef={introHeadingWrapperRef}
                          aboutIntroImageWrapperRef={aboutIntroImageWrapperRef}
                          aboutIntroHeadingWrapperRef={aboutIntroHeadingWrapperRef}
                          aboutIntroHeadingRef={aboutIntroHeadingRef}
                          aboutIntroCaptionRef={aboutIntroCaptionRef}
                          aboutIntroCaptionWrapperRef={aboutIntroCaptionWrapperRef}
                          contactIntroImageWrapperRef={contactIntroImageWrapperRef}
                          contactIntroHeading1WrapperRef={contactIntroHeading1WrapperRef}
                          contactIntroHeading1Ref={contactIntroHeading1Ref}
                          contactIntroHeading2WrapperRef={contactIntroHeading2WrapperRef}
                          contactIntroHeading2Ref={contactIntroHeading2Ref}
                          privacyIntroImageWrapperRef={privacyIntroImageWrapperRef}
                          privacyIntroHeadingWrapperRef={privacyIntroHeadingWrapperRef}
                          privacyIntroHeadingRef={privacyIntroHeadingRef}
                          termsIntroImageWrapperRef={termsIntroImageWrapperRef}
                          termsIntroHeadingWrapperRef={termsIntroHeadingWrapperRef}
                          termsIntroHeadingRef={termsIntroHeadingRef}
                          headerRef={headerRef}
                          humburgerRef={humburgerRef}
                          toggleNewsletterPopup={toggleNewsletterPopup}
                        />
                        : null
                    }

                  </div>

                </Transition>

              </TransitionGroup>

            </PageLayout>
        }

      </CheckoutProvider>

    </AuthProvider>
  )
}

export default MyApp;
