import { useEffect, useRef, useState } from "react";

import Intro from "../../Comps/PrivacyPolicy/Intro";
import Content from "../../Comps/PrivacyPolicy/Content";
import Navigation from "../../Comps/PrivacyPolicy/Navigation";
import Footer from "../../Comps/PageLayouts/Footer";

import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollbarPlugin } from 'smooth-scrollbar';

import apolloClient from "../../lib/apolloClient";
import { gql } from '@apollo/client';

class EdgeEasingPlugin extends ScrollbarPlugin {
    constructor() {
        super(...arguments);
        this._remainMomentum = {
            x: 0,
            y: 0,
        };
    }
    transformDelta(delta) {
        const { limit, offset, } = this.scrollbar;
        const x = this._remainMomentum.x + delta.x;
        const y = this._remainMomentum.y + delta.y;

        // clamps momentum within [-offset, limit - offset]
        this.scrollbar.setMomentum(Math.max(-offset.x, Math.min(x, limit.x - offset.x)), Math.max(-offset.y, Math.min(y, limit.y - offset.y)));
        return { x: 0, y: 0 };
    }
    onRender(remainMomentum) {
        Object.assign(this._remainMomentum, remainMomentum);
    }
}
EdgeEasingPlugin.pluginName = 'edgeEasing';

Scrollbar.use(EdgeEasingPlugin);

export const getStaticProps = async () => {

    const { data } = await apolloClient.query({
        query: gql`
        query  {
          products(first: 250) {
            edges {
              node {
                tags
                productType
                availableForSale
              }
            }
          }
        }
      `
    });

    const availabelProducts = data.products.edges.filter((product) => product.node.availableForSale);

    return {
        props: {
            products: availabelProducts.map((product) => ({
                available: product.node.availableForSale,
                category: product.node.productType.split(", "),
                tags: product.node.tags
            }))
        }
    }
}

const PrivacyPolicy = ({ privacyIntroImageWrapperRef, privacyIntroHeadingWrapperRef, privacyIntroHeadingRef, headerRef, humburgerRef, toggleNewsletterPopup }) => {

    const scrollerRef = useRef();
    const navigationRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        getScrollProxy();
    }, [])

    const getScrollProxy = () => {

        const scroller = scrollerRef.current;
        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: null });
        const navigation = navigationRef.current;
        const scrollThumb = scrollThumbRef.current;

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

        if (document.querySelector('.gsap-marker-scroller-start')) {
            const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

            bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
        }

        var lastOffset = null;

        bodyScrollBar.addListener(({ offset }) => {
            ScrollTrigger.update();

            if (scrollTrackRef.current && contentRef.current) {

                const viewportRatio = scrollTrackRef.current.clientHeight / contentRef.current.clientHeight;

                if (offset.y >= window.innerHeight && offset.y <= contentRef.current.clientHeight) {
                    navigation.style.top = `${offset.y - window.innerHeight}px`;
                    scrollThumb.style.top = `${(offset.y - window.innerHeight) * viewportRatio}px`
                } else if (offset.y < window.innerHeight) {
                    navigation.style.top = "0px";
                    scrollThumb.style.top = "0px";
                } else if (offset.y > contentRef.current.clientHeight) {
                    navigation.style.top = `${contentRef.current.clientHeight - window.innerHeight}px`;
                    scrollThumb.style.top = `${(contentRef.current.clientHeight - window.innerHeight) * viewportRatio}px`;
                }

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

            }

        });

        ScrollTrigger.defaults({ scroller: scroller });

    }

    const sectionRefs = useRef([]);
    const addToSectionRefs = (_el) => {
        if (_el && !sectionRefs.current.includes(_el)) {
            sectionRefs.current.push(_el)
        } else {
            sectionRefs.current = [];
        }
    }
    const [sectionTops, setSectionTops] = useState([]);

    const scrollTo = (offsetX, offsetY) => {

        const scrollbar = Scrollbar.init(scrollerRef.current)
        scrollbar.setPosition(offsetX, offsetY)

    }

    const scrollTrackRef = useRef();
    const scrollThumbRef = useRef();

    useEffect(() => {
        getScrollThumbHeight();
        getSectionTops()
        window.addEventListener("resize", () => {
            getScrollThumbHeight()
            getSectionTops()
        });
        return () => window.removeEventListener("resize", () => {
            getScrollThumbHeight()
            getSectionTops()
        });
    }, [])

    const getScrollThumbHeight = () => {
        if (scrollTrackRef.current && contentRef.current) {
            const viewportRatio = scrollTrackRef.current.clientHeight / contentRef.current.clientHeight;
            const thumbHeight = scrollTrackRef.current.clientHeight * viewportRatio;

            scrollThumbRef.current.style.height = `${thumbHeight + 20}px`
        }

    }

    const getSectionTops = () => {

        if (scrollerRef.current) {

            const scrollBar = Scrollbar.init(scrollerRef.current)

            const tops = sectionRefs.current.map((section) => section.getBoundingClientRect().top + scrollBar.offset.y - headerRef.current.clientHeight)

            setSectionTops(tops)

        }
    }

    return (
        <div ref={scrollerRef} className="page">

            <div className="components-wrapper">

                <div className="c-privacy-policy">

                    <Intro
                        privacyIntroImageWrapperRef={privacyIntroImageWrapperRef}
                        privacyIntroHeadingWrapperRef={privacyIntroHeadingWrapperRef}
                        privacyIntroHeadingRef={privacyIntroHeadingRef}
                        getScrollProxy={getScrollProxy}
                    />

                    <div ref={contentRef} className="c-privacy-policy__content__wrapper position-relative w-100 h-100 py-md-0 px-md-0 py-2 px-1 ">

                        <div className="background pink"></div>

                        <Navigation
                            scrollTo={scrollTo}
                            sectionTops={sectionTops}
                            sectionRefs={sectionRefs}
                            navigationRef={navigationRef}
                            scrollTrackRef={scrollTrackRef}
                            scrollThumbRef={scrollThumbRef}
                        />

                        <Content addToSectionRefs={addToSectionRefs} />

                    </div>

                </div>

            </div>

            <Footer getScrollProxy={getScrollProxy} toggleNewsletterPopup={toggleNewsletterPopup} />

        </div>
    );
}

export default PrivacyPolicy;