import React, { useState, useRef, useEffect } from "react";
import Link from "./Link";
import firebase from "../../lib/firebaseClient";
import { useRouter } from "next/router";
import { useAuth } from "../../lib/auth";

import { gsap } from "gsap";
import { gql } from '@apollo/client';
import apolloClient from "../../lib/apolloClient";
import { useCheckout } from "../../lib/shopifyCheckout";

const Login = ({ toggleLogin, loginOpen }) => {

    const { user } = useAuth();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isNew, setIsNew] = useState("");
    const [formHeight, setFormHeight] = useState(0);

    const [emailInputStart, setEmailInputStart] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [passInputStart, setPassInputStart] = useState(false)
    const [passError, setPassError] = useState(false);

    const [firstNameInputStart, setFirstNameInputStart] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);

    const [lastNameInputStart, setLastNameInputStart] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);

    const [passConfirmInputStart, setPassConfirmInputStart] = useState(false)
    const [passConfirmError, setPassConfirmError] = useState(false);

    const { createCustomer, getCustomer } = useCheckout();

    const resetInput = () => {

        setEmail("");
        setPass("");
        setPassConfirm("");
        setFirstName("");
        setLastName("");
        setIsNew("");
        setEmailInputStart
        setEmailError(false)
        setPassInputStart(false)
        setPassError(false)
        setFirstNameInputStart(false)
        setFirstNameError(false)
        setLastNameInputStart(false)
        setLastNameError(false)
        setPassConfirmInputStart(false)
        setPassConfirmError(false)

    };

    const handleBack = () => {

        setIsNew("")
        setEmailError(false)
        setPassInputStart(false)
        setPassError(false)
        setFirstNameInputStart(false)
        setFirstNameError(false)
        setLastNameInputStart(false)
        setLastNameError(false)
        setPassConfirmInputStart(false)
        setPassConfirmError(false)
    }

    const containerRef = useRef();
    const boxRef = useRef();
    const expandFormWrapperRef = useRef();
    const expandFormInnerRef = useRef();
    const signupFormRef = useRef();
    const loginFormRef = useRef();

    useEffect(() => {

        if (loginOpen.state) {

            gsap.timeline({ paused: false })
                .set(containerRef.current,
                    {
                        visibility: "visible",
                    })
                .fromTo(containerRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.5
                    })
                .fromTo(boxRef.current,
                    {
                        scale: 0.8
                    },
                    {
                        scale: 1,
                        duration: 0.5
                    }, 0)

        } else {

            if (loginOpen.anim === "anim-out") {

                gsap.timeline({ paused: false })
                    .fromTo(containerRef.current,
                        {
                            opacity: 1
                        },
                        {
                            opacity: 0,
                            duration: 0.5
                        })
                    .fromTo(boxRef.current,
                        {
                            scale: 1
                        },
                        {
                            scale: 0.8,
                            duration: 0.5
                        }, 0)
                    .set(containerRef.current,
                        {
                            visibility: "hidden"
                        })

            } else {
                return;
            }

        }

    }, [loginOpen])

    useEffect(() => {

        const tl = gsap.timeline({ paused: true })
        .set(expandFormWrapperRef.current,
            {
                display: "block"
            })
        .fromTo(expandFormWrapperRef.current,
            {
                height: 0
            },
            {
                height: "auto",
                duration: 0.4,
                ease: "Power2.easeOut"
            })

        if(isNew === ""){

           gsap.timeline({paused: false})
           .fromTo(expandFormWrapperRef.current,
            {
                height: formHeight
            },
            {
                height: 0,
                duration: 0.4,
            })
            .set(expandFormWrapperRef.current,
                {
                    display: "none",
                    onComplete: () => setFormHeight(expandFormWrapperRef.current.clientHeight)
                })
            
        }else if(isNew === "new"){

            tl.play();

            gsap.fromTo(signupFormRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.4,
                    ease: "Power2.easeOut",
                    onComplete: () => setFormHeight(expandFormWrapperRef.current.clientHeight)
                })
            
        }else if (isNew === "registered"){

            tl.play();

            gsap.fromTo(loginFormRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.4,
                    ease: "Power2.easeOut",
                    onComplete: () => setFormHeight(expandFormWrapperRef.current.clientHeight)
                })

        }      

    }, [isNew])

    const validateEmail = (email) => {

        var mailformat = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/

        if(email.match(mailformat)){
            setEmailError(false);
        }else{
            setEmailError(true);
        }

    }

    return (
        <div ref={containerRef} className="c-login position-fixed t-0 l-0 w-100">

            <div className="c-login__inner d-flex justify-content-center w-100 onTop">

                <button onClick={() => { 
                    toggleLogin() 
                    resetInput()
                    }} 
                    className="c-login-overlay position-fixed w-100 h-100 t-0 l-0 d-md-block d-none" />

                <div ref={boxRef} className="c-login__wrapper onTop pt-2 pt-md-1 ps-1 pe-1 ps-md-2 pe-md-2 pb-2">

                    <div className="d-flex justify-content-between align-items-start mb-1">

                        <button 
                        style={isNew === "" ? {visibility: "hidden"} : {}} 
                        className="c-login-back-button"
                        onClick={() => { 
                            handleBack()
                        }}
                        >

                            <svg className="arrow mirror" x="0px" y="0px" viewBox="0 0 22 10">
                                <polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />
                            </svg>

                        </button>

                        <div className="c-login-close-button d-flex flex-center">

                            <button onClick={() => { 
                                toggleLogin() 
                                resetInput()
                            }} 
                            className="c-login-humburger">

                                <div className="vertical-lines">

                                    <div className="line-top" />

                                    <div className="line-bottom" />

                                </div>

                            </button>

                        </div>

                    </div>

                    <div className="c-login-title__wrapper mb-1 mt-2 mt-md-0">

                        <div className="position-relative">

                            <div className="pr-2">

                                <h4 className="mb-6">
                                    Register
                                </h4>

                                <p>It's quick and easy</p>

                            </div>

                        </div>

                    </div>

                    <div className="c-login-form__wrapper">

                        <form action="">

                            <input type="text" name="hidden" style={{ display: "none" }} />

                            <div className="c-login-input__wrapper">

                                <span className={`c-login-input-label text-uppercase ${emailInputStart || email !== "" ? "input-start" : "" }`}>email</span>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    onBlur={() => { 
                                        setEmailInputStart(false)
                                        validateEmail(email)
                                    }}
                                    onFocus={() => { 
                                        setEmailInputStart(true)
                                    }}
                                    onKeyDown={async(e) => {
                                        if(e.key === "Enter"){
                                            if (isNew === "") {

                                                await firebase
                                                    .auth()
                                                    .fetchSignInMethodsForEmail(email)
                                                    .then((method) => {
                                                        if (method.indexOf("password") === -1) {
                                                            setIsNew("new")
                                                        } else {
                                                            setIsNew("registered")
                                                        }
                                                    })
                                                    .catch((error) => {
                                                        console.log("error")
                                                    })
        
                                            }
                                        }
                                    }}
                                />

                                <small style={emailError ? { display: "block" } : { display: "none" }} className="c-login-input-error">

                                    The email field must be a valid email.

                                </small>

                            </div>

                            <div ref={expandFormWrapperRef} className="c-login-expand-form__wrapper">

                                <div ref={expandFormInnerRef} className="pb-6">

                                    {
                                        isNew === "registered"
                                            ? <div ref={loginFormRef} className="c-login-input__wrapper">

                                                <span className={`c-login-input-label text-uppercase ${passInputStart || pass !== "" ? "input-start" : ""}`}>
                                                    password
                                                </span>

                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    value={pass}
                                                    onChange={(e) => { setPass(e.target.value) }}
                                                    onBlur={() => {
                                                        setPassInputStart(false)
                                                        if(pass === ""){
                                                            setPassError(true)
                                                        }else{
                                                            setPassError(false)
                                                        }
                                                    }}
                                                    onFocus={() => {
                                                        setPassInputStart(true)
                                                    }}
                                                    onKeyDown={async(e) => {
                                                        if(e.key === "Enter"){
                                                            
                                                                await firebase
                                                                    .auth()
                                                                    .signInWithEmailAndPassword(email, pass);
                        
                                                                toggleLogin();
                                                        }
                                                    }}
                                                />

                                                <small style={passError ? { display: "block" } : { display: "none" }} className="c-login-input-error">

                                                    The field is required.

                                                </small>

                                                <button
                                                    className="forgot-link__wrapper d-block"
                                                    type="button"
                                                    onClick={async () => {
                                                        firebase
                                                            .auth()
                                                            .sendPasswordResetEmail(email)

                                                        setIsNew("")
                                                    }}
                                                >

                                                    <div className="line-link forgot-link">

                                                        forgot password

                                                    </div>

                                                </button>

                                            </div>
                                            : isNew === "new"
                                                ? <div ref={signupFormRef}>

                                                <div className="d-flex flex-wrap">
        
                                                    <div className="col-md-6 pr-md-6">
        
                                                        <div className="c-login-input__wrapper">
        
                                                            <span className={`c-login-input-label text-uppercase ${firstNameInputStart || firstName !== "" ? "input-start" : ""}`}>
                                                                firstname
                                                            </span>
        
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                id="first_name"
                                                                value={firstName}
                                                                onChange={(e) => { setFirstName(e.target.value) }}
                                                                onBlur={() => {
                                                                    setFirstNameInputStart(false)
                                                                    if(firstName === ""){
                                                                        setFirstNameError(true)
                                                                    }else{
                                                                        setFirstNameError(false)
                                                                    }
                                                                }}
                                                                onFocus={() => {
                                                                    setFirstNameInputStart(true)
                                                                }}
                                                                onKeyDown={async(e) => {
                                                                    if(e.key === "Enter"){
                                                                        if (pass === passConfirm) {
                                                                            await firebase
                                                                                .auth()
                                                                                .createUserWithEmailAndPassword(email, pass)
                                                                                .then((u) => {
                                                                                    u.user.updateProfile({
                                                                                        displayName: `${lastName} ${firstName}`
                                                                                    })
                                                                                })
                                
                                                                            toggleLogin()
                                                                        } else {
                                                                            console.log("error")
                                                                        }
                                                                    }
                                                                }}
                                                            />
        
                                                            <small style={firstNameError ? { display: "block" } : { display: "none" }} className="c-login-input-error">
        
                                                                The field is required.
        
                                                            </small>
        
        
                                                        </div>
        
                                                    </div>
        
                                                    <div className="col-md-6 pr-md-6">
        
                                                        <div className="c-login-input__wrapper">
        
                                                            <span className={`c-login-input-label text-uppercase ${lastNameInputStart || lastName !== "" ? "input-start" : ""}`}>
                                                                lastname
                                                            </span>
        
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                id="last_name"
                                                                value={lastName}
                                                                onChange={(e) => { setLastName(e.target.value) }}
                                                                onBlur={() => {
                                                                    setLastNameInputStart(false)
                                                                    if(lastName === ""){
                                                                        setLastNameError(true)
                                                                    }else{
                                                                        setLastNameError(false)
                                                                    }
                                                                }}
                                                                onFocus={() => {
                                                                    setLastNameInputStart(true)
                                                                }}
                                                            />
        
                                                            <small style={lastNameError ? { display: "block" } : { display: "none" }} className="c-login-input-error">
        
                                                                The field is required.
        
                                                            </small>
        
        
                                                        </div>
        
                                                    </div>
        
                                                </div>
        
                                                <div className="c-login-input__wrapper">
        
                                                    <span className={`c-login-input-label text-uppercase ${passInputStart || pass !== "" ? "input-start" : ""}`}>
                                                        password
                                                    </span>
        
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        value={pass}
                                                        onChange={(e) => { setPass(e.target.value) }}
                                                        onBlur={() => {
                                                            setPassInputStart(false)
                                                            if(pass === ""){
                                                                setPassError(true)
                                                            }else{
                                                                setPassError(false)
                                                            }
                                                        }}
                                                        onFocus={() => {
                                                            setPassInputStart(true)
                                                        }}
                                                    />
        
                                                    <small style={passError ? { display: "block" } : { display: "none" }} className="c-login-input-error">
        
                                                        The field is required.
        
                                                    </small>
        
                                                </div>
        
                                                <div className="c-login-input__wrapper">
        
                                                    <span className={`c-login-input-label text-uppercase ${passConfirmInputStart || passConfirm !== "" ? "input-start" : ""}`}>
                                                        password comfirm
                                                    </span>
        
                                                    <input
                                                        type="password"
                                                        name="passwordConfirm"
                                                        id="confirmed"
                                                        value={passConfirm}
                                                        onChange={(e) => { setPassConfirm(e.target.value) }}
                                                        onBlur={() => {
                                                            setPassConfirmInputStart(false)
                                                            if(passConfirm === ""){
                                                                setPassConfirmError(true)
                                                            }else{
                                                                setPassConfirmError(false)
                                                            }
                                                        }}
                                                        onFocus={() => {
                                                            setPassConfirmInputStart(true)
                                                        }}
                                                    />
        
                                                    <small style={passConfirmError ? { display: "block" } : { display: "none" }} className="c-login-input-error">
        
                                                        The field is required.
        
                                                    </small>
        
                                                </div>
        
                                            </div>
                                            : null
                                    }

                                    </div>
                                    
                            </div>

                            <button
                                type="button"
                                className="button onTop w-100"
                                onClick={async (e) => {

                                    if (isNew === "") {

                                        await firebase
                                            .auth()
                                            .fetchSignInMethodsForEmail(email)
                                            .then((method) => {
                                                if (method.indexOf("password") === -1) {
                                                    setIsNew("new")
                                                } else {
                                                    setIsNew("registered")
                                                }
                                            })
                                            .catch((error) => {
                                                console.log("error")
                                            })

                                    } else if (isNew === "new") {

                                        if (pass === passConfirm) {
                                            await firebase
                                                .auth()
                                                .createUserWithEmailAndPassword(email, pass)
                                                .then((u) => {
                                                    u.user.updateProfile({
                                                        displayName: `${lastName} ${firstName}`
                                                    })
                                                })

                                                createCustomer(e, email, firstName, lastName)

                                            toggleLogin();
                                        } else {
                                            console.log("error")
                                        }

                                    } else if (isNew === "registered") {

                                        await firebase
                                            .auth()
                                            .signInWithEmailAndPassword(email, pass);

                                            getCustomer(e, email)

                                        toggleLogin();

                                    }

                                }}
                            >

                                <div className="rectangle-button position-relative w-100">

                                    <div className="button-background position-absolute t-0 l-0 w-100 h-100 behind-1" />

                                    <span className="button-text text-uppercase">
                                        {
                                            isNew === "new"
                                                ? "sing up"
                                                : isNew === "registered"
                                                    ? "login"
                                                    : "continue"
                                        }
                                    </span>

                                </div>

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;