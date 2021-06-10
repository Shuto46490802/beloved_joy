import React, { useEffect } from "react";
import Image from "next/image";
import Link from "../PageLayouts/Link";

const InstagramFigure = ({ img, index, addToImageRefs }) => {

    return (
        <div ref={addToImageRefs} className={`c-instagram__figure should-animate`}>

            <div className={`c-instagram__figure__block__${index}`}>

                <figure className="fig-wrapper">

                    <Image priority src={img} layout="fill" alt="instagram image" />

                </figure>

            </div>

        </div>
    );
}

export default InstagramFigure;