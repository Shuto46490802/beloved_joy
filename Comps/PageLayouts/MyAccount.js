import React, { useEffect, useState, useRef } from "react";
import firebase from "../../lib/firebaseClient"
import { useAuth } from "../../lib/auth";
import md5 from "md5";

//components
import PersonalInfo from "../MyAccount/PersonalInfo";
import Newsletter from "../MyAccount/Newsletter";
import Orders from "../MyAccount/Orders";
import ChangePassword from "../MyAccount/ChangePassword";
import Logout from "../MyAccount/Logout";

import { gsap } from "gsap";
import { Transition, TransitionGroup } from "react-transition-group";
import { useCheckout } from "../../lib/shopifyCheckout";

const MyAccount = ({ toggleAccount, accountOpen }) => {

    const { user } = useAuth();
    const containerRef = useRef();

    useEffect(() => {

        if (accountOpen.state) {

            gsap.timeline({ paused: false })
                .set(containerRef.current,
                    {
                        visibility: "visible",
                        zIndex: 5001
                    })
                .fromTo(containerRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.75,
                        ease: "Power2.easeOut"
                    })

        } else {

            if (accountOpen.anim === "anim-out") {

                gsap.timeline({ paused: false })
                    .fromTo(containerRef.current,
                        {
                            opacity: 1
                        },
                        {
                            opacity: 0,
                            duration: 0.75,
                            ease: "Power2.easeOut"
                        })
                    .set(containerRef.current,
                        {
                            visibility: "hidden",
                            zIndex: 0
                        })

            } else {
                return;
            }

        }

    }, [accountOpen])

    const [personalInfo, setPersonalInfo] = useState({ state: true, anim: "anim-in" });
    const [orders, setOrders] = useState({ state: false, anim: "" });
    const [newsletter, setNewsletter] = useState({ state: false, anim: "" });
    const [changePass, setChangePass] = useState({ state: false, anim: "" });
    const [logout, setLogout] = useState(false);
    const [isContent, setIsContent] = useState("personal-info")

    const togglePersonalInfo = () => {

        if (!personalInfo.state) {
            setPersonalInfo({ state: true, anim: "anim-in" })
            setIsContent("personal-info")
        }

        if (orders.state) {
            setOrders({ state: false, anim: "anim-out" })
        }
        if (!orders.state && orders.anim === "anim-out") {
            setOrders({ state: false, anim: "" })
        }

        if (newsletter.state) {
            setNewsletter({ state: false, anim: "anim-out" })
        }
        if (!newsletter.state && newsletter.anim === "anim-out") {
            setNewsletter({ state: false, anim: "" })
        }

        if (changePass.state) {
            setChangePass({ state: false, anim: "anim-out" })
        }
        if (!changePass.state && changePass.anim === "anim-out") {
            setChangePass({ state: false, anim: "" })
        }

        if (logout.state) {
            setLogout({ state: false, anim: "anim-out" })
        }
        if (!logout.state && logout.anim === "anim-out") {
            setLogout({ state: false, anim: "" })
        }

    }

    const toggleOrders = () => {

        if (!orders.state) {
            setOrders({ state: true, anim: "anim-in" })
            setIsContent("orders")
        }

        if (personalInfo.state) {
            setPersonalInfo({ state: false, anim: "anim-out" })
        }
        if (!personalInfo.state && personalInfo.anim === "anim-out") {
            setPersonalInfo({ state: false, anim: "" })
        }

        if (newsletter.state) {
            setNewsletter({ state: false, anim: "anim-out" })
        }
        if (!newsletter.state && newsletter.anim === "anim-out") {
            setNewsletter({ state: false, anim: "" })
        }

        if (changePass.state) {
            setChangePass({ state: false, anim: "anim-out" })
        }
        if (!changePass.state && changePass.anim === "anim-out") {
            setChangePass({ state: false, anim: "" })
        }

        if (logout.state) {
            setLogout({ state: false, anim: "anim-out" })
        }
        if (!logout.state && logout.anim === "anim-out") {
            setLogout({ state: false, anim: "" })
        }

    }

    const toggleNewsletter = () => {

        if (!newsletter.state) {
            setNewsletter({ state: true, anim: "anim-in" })
            setIsContent("newsletter")
        }

        if (personalInfo.state) {
            setPersonalInfo({ state: false, anim: "anim-out" })
        }
        if (!personalInfo.state && personalInfo.anim === "anim-out") {
            setPersonalInfo({ state: false, anim: "" })
        }

        if (orders.state) {
            setOrders({ state: false, anim: "anim-out" })
        }
        if (!orders.state && orders.anim === "anim-out") {
            setOrders({ state: false, anim: "" })
        }

        if (changePass.state) {
            setChangePass({ state: false, anim: "anim-out" })
        }
        if (!changePass.state && changePass.anim === "anim-out") {
            setChangePass({ state: false, anim: "" })
        }

        if (logout.state) {
            setLogout({ state: false, anim: "anim-out" })
        }
        if (!logout.state && logout.anim === "anim-out") {
            setLogout({ state: false, anim: "" })
        }

    }

    const toggleChangePass = () => {

        if (!changePass.state) {
            setChangePass({ state: true, anim: "anim-in" })
            setIsContent("pass")
        }

        if (personalInfo.state) {
            setPersonalInfo({ state: false, anim: "anim-out" })
        }
        if (!personalInfo.state && personalInfo.anim === "anim-out") {
            setPersonalInfo({ state: false, anim: "" })
        }

        if (orders.state) {
            setOrders({ state: false, anim: "anim-out" })
        }
        if (!orders.state && orders.anim === "anim-out") {
            setOrders({ state: false, anim: "" })
        }

        if (newsletter.state) {
            setNewsletter({ state: false, anim: "anim-out" })
        }
        if (!newsletter.state && newsletter.anim === "anim-out") {
            setNewsletter({ state: false, anim: "" })
        }

        if (logout.state) {
            setLogout({ state: false, anim: "anim-out" })
        }
        if (!logout.state && logout.anim === "anim-out") {
            setLogout({ state: false, anim: "" })
        }

    }

    const toggleLogout = () => {

        if (!logout) {
            setLogout(true)
        }
        if (logout) {
            setLogout(false)
        }

    }

    //newsletter
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [message, setMessage] = useState("");
    const [userInfo, setUserInfo] = useState({});
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (user) {
            if (user.email) {
                setEmail(user.email)
                getMemberInfo();
            }
            if (user.displayName) {
                const arr = user.displayName.split(" ");
                setFirstName(arr[1])
            }
        } else {
            return;
        }

    }, [user])

    const subscribe = async (e) => {

        e.preventDefault();

        const res = await fetch("/api/subscribe",
            {
                body: JSON.stringify({
                    email: email,
                    firstName: firstName
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

        const { error } = await res.json();

        if (error) {
            setMessage(error);

            return;
        }

        setMessage('Success! 🎉 You are now subscribed to the newsletter.')
        setStatus("subscribed")
    };

    const unsubscribe = async (e) => {

        e.preventDefault();

        const res = await fetch("/api/unsubscribe",
            {
                body: JSON.stringify({
                    subscriber_hash: md5(email)
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

        const { error } = await res.json();

        if (error) {
            setMessage(error);

            return;
        }

        setMessage('Success! 🎉 You are now unsubscribed to the newsletter.')
        setStatus("archived")
    }

    const getMemberInfo = async () => {

        const res = await fetch("/api/getMemberInfo",
            {
                body: JSON.stringify({
                    subscriber_hash: md5(user.email)
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

        const { memberInfo } = await res.json();

        if (memberInfo) {
            setUserInfo(memberInfo);
            return;
        } else {
            setUserInfo(memberInfo);
        }
    };

    useEffect(() => {

        if (!userInfo.status) {
            setStatus("unsubscribed")
        }

        if (userInfo.status === "subscribed") {
            setStatus("subscribed")
        } else if (userInfo.status === "archived") {
            setStatus("archived")
        }

    }, [userInfo])

    const onEnter = (node) => {

        gsap.timeline({ paused: false })
            .set(node,
                {
                    visibility: "visible"
                })
            .fromTo(node,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.75,
                    ease: "Power2.easeOut",
                    delay: 0.5
                })

    };

    const onExit = (node) => {

        gsap.timeline({ paused: false })
            .fromTo(node,
                {
                    opacity: 1
                },
                {
                    opacity: 0,
                    duration: 0.75,
                    ease: "Power2.easeOut",
                })
            .set(node,
                {
                    visibility: "hidden"
                })

    }

    const logoutRef = useRef();
    const logoutOverlayRef = useRef();

    useEffect(() => {

        if (logout) {

            gsap.timeline({ paused: false })
                .set(logoutOverlayRef.current,
                    {
                        visibility: "visible"
                    })
                .fromTo(logoutOverlayRef.current,
                    {
                        background: "transparent"
                    },
                    {
                        background: "rgba(0, 0, 0, 0.5)",
                        duraiton: 0.75,
                        ease: "Power2.easeOut"
                    })
                .fromTo(logoutRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duraiton: 0.75,
                        ease: "Power2.easeOut"
                    }, 0)

        } else {

            gsap.timeline({ paused: false })
                .fromTo(logoutOverlayRef.current,
                    {
                        background: "rgba(0, 0, 0, 0.5)"
                    },
                    {
                        background: "transparent",
                        duration: 0.75,
                        ease: "Power2.easeOut"
                    })
                .fromTo(logoutRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.75,
                        ease: "Power2.easeOut"
                    }, 0)
                .set(logoutOverlayRef.current,
                    {
                        visibility: "hidden"
                    })

        }

    }, [logout])

    const { customer } = useCheckout();
    const [ordersDetail, setOrdersDetail] = useState([]);

    useEffect(() => {

        if (customer.orders) {

            if (customer.orders.edges.length > 0) {
                setOrdersDetail(customer.orders.edges)
            }

        } else {
            return;
        }

    }, [customer])

    return (
        <div ref={containerRef} className="c-my-account position-fixed w-100 h-100 t-0 l-0">

            <div className="c-my-account__inner h-100 pt-md-5 pt-lg-3 popup-component w-100 on-top">

                <div className="c-my-account__wrapper d-flex col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 pt-5">

                    <div className="c-my-account-menu__wrapper col-4 col-lg-3 col-xl-3 d-flex justify-content-md-center justify-content-lg-start px-1 px-md-0">

                        <div>

                            <h4>My Account</h4>

                            <div className="c-my-account-list mt-3 mb-3 d-flex flex-column align-items-start">

                                <button
                                    ariaLabel="button"
                                    name="button"
                                    className={`mt-1 c-my-account-list-button ${personalInfo.state ? "is-active" : ""}`}
                                    onClick={() => {
                                        togglePersonalInfo()
                                    }}
                                >

                                    <h5>
                                        personal-info
                                    </h5>

                                </button>

                                <button
                                    ariaLabel="button"
                                    name="button"
                                    className={`mt-1 c-my-account-list-button ${orders.state ? "is-active" : ""}`}
                                    onClick={() => {
                                        toggleOrders()
                                    }}
                                >

                                    <h5>
                                        orders
                                    </h5>

                                </button>

                                <button
                                    ariaLabel="button"
                                    name="button"
                                    className={`mt-1 c-my-account-list-button ${newsletter.state ? "is-active" : ""}`}
                                    onClick={() => {
                                        toggleNewsletter()
                                    }}
                                >

                                    <h5>
                                        newsletter
                                    </h5>

                                </button>

                                <button
                                    ariaLabel="button"
                                    name="button"
                                    className={`mt-1 c-my-account-list-button ${changePass.state ? "is-active" : ""}`}
                                    onClick={() => {
                                        toggleChangePass()
                                    }}
                                >

                                    <h5>
                                        change-password
                                    </h5>

                                </button>

                                <button
                                    ariaLabel="button"
                                    name="button"
                                    className="mt-3 c-my-account-list-button"
                                    onClick={() => {
                                        toggleLogout()
                                    }}
                                >

                                    <h5>
                                        log-out
                                    </h5>

                                </button>

                            </div>

                        </div>

                    </div>

                    <TransitionGroup className="c-my-account-component__wrapper ms-xl-3 col-7 col-lg-9 d-flex justify-content-md-start px-1 px-md-0">

                        <Transition
                            timeout={750}
                            onEnter={onEnter}
                            onExit={onExit}
                            key={isContent}
                        >

                            {
                                personalInfo.state
                                    ? <PersonalInfo />
                                    : orders.state
                                        ? <Orders ordersDetail={ordersDetail} />
                                        : newsletter.state
                                            ? <Newsletter
                                                status={status}
                                                email={email}
                                                subscribe={subscribe}
                                                unsubscribe={unsubscribe}
                                            />
                                            : changePass.state
                                                ? <ChangePassword />
                                                : null

                            }

                        </Transition>

                    </TransitionGroup>

                    <Logout logoutRef={logoutRef} logoutOverlayRef={logoutOverlayRef} toggleAccount={toggleAccount} toggleLogout={toggleLogout} />

                </div>

            </div>

        </div>
    );
}

export default MyAccount;
