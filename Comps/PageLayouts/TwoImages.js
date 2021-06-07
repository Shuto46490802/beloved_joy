import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { doTwoImages } from "./animation";

const TwoImages = ({ img1, img2, getScrollProxy }) => {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        getScrollProxy()
        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    }, [])

    const image1WrapperRef = useRef();
    const image1Ref = useRef();
    const image2WrapperRef = useRef();
    const image2Ref = useRef();

    useEffect(() => {

        if (isReady) {
            doTwoImages(image1WrapperRef.current, image1Ref.current)
            doTwoImages(image2WrapperRef.current, image2Ref.current)
        }

    }, [isReady])

    return (
        <div className="two-images position-relative ">

            <div className="two-images__inner position-relative d-flex flex-wrap">

                <div ref={image1WrapperRef} className="two-images__image col-12 col-md-6 overflow-hidden">

                    <figure ref={image1Ref} className="fig-wrapper should-animate">

                        <Image priority src={img1} layout="fill" alt="" />

                    </figure>

                </div>

                <div ref={image2WrapperRef} className="two-images__image col-12 col-md-6 overflow-hidden">

                    <figure ref={image2Ref} className="fig-wrapper should-animate">

                        <Image priority src={img2} layout="fill" alt="" />

                    </figure>

                </div>

            </div>

        </div>
    );
}

export default TwoImages;