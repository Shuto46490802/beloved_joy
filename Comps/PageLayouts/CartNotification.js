import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { useCheckout } from "../../lib/shopifyCheckout";

const CartNotification = () => {

    const containerRef = useRef();
    const [animation, setAnimation] = useState(false);
    const { isCartAdded, isCartEmpty, message } = useCheckout();
    const [notification, setNotification] = useState("");

    useEffect(() => {

        if (isCartAdded) {
            setAnimation(true)
        } else {
            setAnimation(false)
        }

    }, [isCartAdded])

    useEffect(() => {

        if (isCartEmpty.state) {

            if (isCartEmpty.anim === "anim-in") {
                setAnimation(true);
                setNotification("Your cart is empty!");
            } else {
                setAnimation(false);
                setNotification("");
            }

        }

    }, [isCartEmpty])

    return (
        <div ref={containerRef} className={`c-cart-notification position-fixed t-0 l-0 w-100 d-flex align-items-center justify-content-end px-2 ${animation ? "open" : ""}`}>

            <h6 className="m-0">

                {message ? message : notification ? notification : null }

            </h6>

        </div>
    );
}

export default CartNotification;