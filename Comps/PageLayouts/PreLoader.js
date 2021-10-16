import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

const PreLoader = ({ loaderContainerRef }) => {

    return (
        <div ref={loaderContainerRef} className="c-preloader d-flex align-items-center justify-content-center flex-column position-fixed w-100 h-100 t-0 l-0">

            <div className="c-preloader__background bg-white w-100 h-100 t-0 l-0 position-fixed" />

            <p className="c-preloader__text mt-1 mb-0">
                Joy
            </p>

        </div>
    );
}

export default PreLoader;