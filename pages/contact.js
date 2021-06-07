import React, { useEffect, useRef } from "react"

import Content from "../Comps/Contact/Content";
import Intro from "../Comps/Contact/Intro";
import Footer from "../Comps/PageLayouts/Footer";

import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollbarPlugin } from 'smooth-scrollbar';

import apolloClient from "../lib/apolloClient";
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

const Contact = ({ contactIntroImageWrapperRef, contactIntroHeading1WrapperRef, contactIntroHeading1Ref, contactIntroHeading2WrapperRef, contactIntroHeading2Ref, headerRef, humburgerRef, toggleNewsletterPopup }) => {

    useEffect(() => {
        getScrollProxy()
    }, [])

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

        if (document.querySelector('.gsap-marker-scroller-start')) {
            const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

            bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
        }

        var lastOffset = null;

        bodyScrollBar.addListener(({ offset }) => {
          ScrollTrigger.update()
    
          if(offset.y > 0){
            headerRef.current.classList.add("shrinked")
            humburgerRef.current.classList.add("shrinked")
          }else{
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

    }

    return (
        <div ref={scrollerRef} className="page">

            <div className="components-wrapper">

                <Intro
                    getScrollProxy={getScrollProxy}
                    contactIntroImageWrapperRef={contactIntroImageWrapperRef}
                    contactIntroHeading1WrapperRef={contactIntroHeading1WrapperRef}
                    contactIntroHeading1Ref={contactIntroHeading1Ref}
                    contactIntroHeading2WrapperRef={contactIntroHeading2WrapperRef}
                    contactIntroHeading2Ref={contactIntroHeading2Ref}
                />

                <Content />


            </div>

            <Footer getScrollProxy={getScrollProxy} toggleNewsletterPopup={toggleNewsletterPopup} />

        </div>
    );
}

export default Contact;