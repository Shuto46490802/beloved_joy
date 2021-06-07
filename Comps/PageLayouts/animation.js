import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export const doIntroImage = (trigger, ..._el) => {

    gsap.fromTo([_el],
        {
            y: 0,
            scale: 1
        },
        {
            y: "493px",
            scale: 1.3,
            ease: "none",
            scrollTrigger: {
                trigger: trigger,
                scrub: true,
                start: "top top",
                end: () => `bottom+=100%`,
            }
        })
}

export const doImageParallax = (parent, ..._el) => {

    gsap.fromTo([_el],
        {
            y: 0
        },
        {
            y: () => Math.floor((parent.clientHeight * 1.15) / 7.67),
            scrollTrigger: {
                trigger: parent,
                scrub: true,
                start: "top bottom",
                end: () => `+=${parent.clientHeight} top`,
                invalidateOnRefresh: true,
                refreshPriority: -1,
                onRefresh: () => {

                    const _height = parent.clientHeight * 1.15;
                    const _top = `-${_height / 7.67}`

                    gsap.set([_el],
                        {
                            height: _height,
                            top: _top
                        })
                }
            }
        })

}

export const doTwoImages = (trigger, _el) => {

    gsap.fromTo([_el],
        {
            scale: 1.35
        },
        {
            scale: 1,
            duration: 1.2,
            ease: "Power2.easeOut",
            transformOrigin: "bottom",
            scrollTrigger: {
                trigger: trigger,
                start: "top bottom",
                toggleActions: "play none none reset"
            }
        })

}

export const textHiddenAnimation = (trigger, ..._el) => {

    gsap.fromTo([_el],
        {
            yPercent: 120,
            opacity: 0
        },
        {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "POwer2.easeOut",
            scrollTrigger: {
                trigger: trigger,
                start: "top bottom",
                toggleActions: "play none none reset"
            },
            stagger: 0.1
        })

}

export const textWrapperAnimation = (trigger, ..._el) => {

    gsap.fromTo([_el],
        {
            y: 50
        },
        {
            y: 0,
            duration: 1.2,
            ease: "Power2.easeOut",
            scrollTrigger: {
                trigger: trigger,
                start: "top bottom",
                toggleActions: "play none none reset"
            },
        })

}

export const saveStyles = (elements) => {
    let styles, matchedMedia;
    elements = gsap.utils.toArray(elements);
    ScrollTrigger.saveStyles(elements);
    ScrollTrigger.addEventListener("refreshInit", () => {
        matchedMedia = false;
        styles = elements.map(el => el.style.cssText);
    });
    ScrollTrigger.addEventListener("matchMedia", () => {
        matchedMedia = true;
    })
    ScrollTrigger.addEventListener("refresh", () => matchedMedia || elements.forEach((el, i) => el.style.cssText = styles[i]));
}
