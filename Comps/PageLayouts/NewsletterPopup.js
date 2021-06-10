import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import newsletter from "../../assets/newsletter.jpg";

import firebase from "../../lib/firebaseClient"

const NewsletterPopup = ({ toggleNewsletterPopup, newsletterPopupOpen, humburgerRef, headerRef }) => {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const [firstNameInputStart, setFirstNameInputStart] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);

    const [emailInputStart, setEmailInputStart] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [message, setMessage] = useState("")

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

        toggleNewsletterPopup()
        setMessage('Success! 🎉 You are now subscribed to the newsletter.')
    };

    const validateEmail = (email) => {

        var mailformat = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/

        if(email.match(mailformat)){
            setEmailError(false);
        }else{
            setEmailError(true);
        }

    }

    const containerRef = useRef();

    useEffect(() => {

            if(newsletterPopupOpen.state){

                humburgerRef.current.classList.remove("pull-up")
                headerRef.current.classList.remove("pull-up")

                gsap.timeline({ pasued: false })
                .set(containerRef.current,
                    {
                        visibility: "visible"
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

            }else{

                if(newsletterPopupOpen.anim === "anim-out"){

                    gsap.timeline({ pasued: false })
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
                            visibility: "hidden"
                        })

                }else{
                    return;
                }

            }


    }, [newsletterPopupOpen])

    return (
        <div ref={containerRef} className="c-newsletter-popup position-fixed w-100 h-100 t-0 l-0 onTop">

            <div className="c-newsletter-popup__inner h-100 d-flex flex-center color-white popup-component w-100 on-top">

                <div className="position-relative  h-100 w-100 on-top d-flex flex-center pt-2">

                    <div className="c-newsletter-popup-image__wrapper w-100 h-100 position-absolute t-0 l-0 behind-1">

                        <figure className="fig-wrapper">

                            <Image priority src={newsletter} layout="fill" alt="newsletter-popup-image" />

                        </figure>

                    </div>

                    <div className="col-md-7 px-2 d-flex flex-column">

                        <h1 className="c-newsletter-popup-headline text-center mb-1">
                            Join Beloved Joy
                        </h1>

                        <h6 className="c-newsletter-popup-subheadline mb-6 uppercase small ls-2 lh-16 text-center">
                            <p>
                                Sign up here to be the first to hear about new products, pop-ups, exclusives, and events. Unsubscribe anytime.
                            </p>
                        </h6>

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
                                    if (firstName === "") {
                                        setFirstNameError(true)
                                    } else {
                                        setFirstNameError(false)
                                    }
                                }}
                                onFocus={() => {
                                    setFirstNameInputStart(true)
                                }}
                            />

                            <small style={firstNameError ? { display: "block" } : { display: "none" }} className="c-login-input-error">
        
                                    The field is required.
        
                            </small>



                        </div>

                        <div className="c-login-input__wrapper">

                            <span className={`c-login-input-label text-uppercase ${emailInputStart || email !== "" ? "input-start" : "" }`}>
                                email
                            </span>

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

                        <button
                        ariaLabel="button"
                        name="button"
                        type="button"
                        className="button onTop w-50 align-self-center"
                        onClick={(e) => {
                            subscribe(e)
                        }}    
                            >

                            <div className="rectangle-button position-relative w-100">

                                <div className="button-background position-absolute t-0 l-0 w-100 h-100 behind-1" />

                                <span className="button-text text-uppercase">
                                    Subscribe
                                </span>
                                

                            </div>

                        </button>

                    </div>

                </div>
                
            </div>

        </div>
    );
}

export default NewsletterPopup;