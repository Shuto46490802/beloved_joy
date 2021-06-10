import React, { useState, useRef, useEffect } from "react";
import Link from "../PageLayouts/Link";
import firebase from "../../lib/firebaseClient";
import { useRouter } from "next/router";
import { useAuth } from "../../lib/auth";

import { gsap } from "gsap";

const PersonalInfo = () => {

    const { user } = useAuth();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const [emailInputStart, setEmailInputStart] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [firstNameInputStart, setFirstNameInputStart] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);

    const [lastNameInputStart, setLastNameInputStart] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);

    const validateEmail = (email) => {

        var mailformat = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/

        if (email.match(mailformat)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }

    }

    useEffect(() => {

        if (user) {

            if (user.displayName) {

                const arr = user.displayName.split(" ");

                setFirstName(arr[1]);
                setLastName(arr[0])
            }

            if (user.email) {
                setEmail(user.email)
            }

            if (user.phoneNumber) {
                setPhone(user.phoneNumber)
            }

        }

    }, [user])

    return (
        <div className="c-personal-info position-absolute col-10 col-md-8 col-xl-6">

            <div className="d-flex align-items-center mb-3">

                <div className="text-left text-lg-left w-100 pe-2 pe-lg-0">

                    <h4>
                        personal-info
                    </h4>

                </div>

            </div>

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
                        if (lastName === "") {
                            setLastNameError(true)
                        } else {
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

            <div className="c-login-input__wrapper">

                <span className={`c-login-input-label text-uppercase ${emailInputStart || email !== "" ? "input-start" : ""}`}>email</span>

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
                />

                <small style={emailError ? { display: "block" } : { display: "none" }} className="c-login-input-error">

                    The email field must be a valid email.

                </small>

            </div>

            <button
                ariaLabel="button"
                type="button"
                className="button rectangle-button position-relative w-100 onTop"
                onClick={async () => {
                    await user
                        .updateProfile({
                            displayName: `${lastName} ${firstName}`,

                        })
                        .then(() => {
                            user.updateEmail(email)
                        })
                }}
            >

                <div className="button-background position-absolute t-0 l-0 w-100 h-100 behind-1" />

                <span className="button-text text-uppercase">
                    save
                </span>

            </button>

        </div>
    );
}

export default PersonalInfo;