import React, { useState } from "react";
import { useAuth } from "../../lib/auth";

import firebase from "../../lib/firebaseClient";

const ChangePassword = () => {

    const { user } = useAuth();

    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [passConfirm, setPassConfirm] = useState("");

    const [oldPassInputStart, setOldPassInputStart] = useState(false);
    const [oldPassError, setOldPassError] = useState(false);

    const [newPassInputStart, setNewPassInputStart] = useState(false);
    const [newPassError, setNewPassError] = useState(false);

    const [passConfirmInputStart, setPassConfirmInputStart] = useState(false);
    const [passConfirmError, setPassConfirmError] = useState(false);

    return (
        <div className="c-change-password position-absolute col-10 col-md-8 col-xl-6">

            <div className="d-flex align-items-center mb-3">

                <div className="text-left text-lg-left w-100 pe-2 pe-lg-0">

                    <h4>change-password</h4>

                </div>

            </div>

            <div className="c-login-input__wrapper">

                <span className={`c-login-input-label text-uppercase ${oldPassInputStart || oldPass !== "" ? "input-start" : ""}`}>
                    old password
                </span>

                <input
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    value={oldPass}
                    onChange={(e) => { setOldPass(e.target.value) }}
                    onBlur={() => {
                        setOldPassInputStart(false)
                        if (oldPass === "") {
                            setOldPassError(true)
                        } else {
                            setOldPassError(false)
                        }
                    }}
                    onFocus={() => {
                        setOldPassInputStart(true)
                    }}
                />


                <small style={oldPassError ? { display: "block" } : { display: "none" }} className="c-login-input-error">

                    The field is required.

                </small>

            </div>

            <div className="c-login-input__wrapper">

                <span className={`c-login-input-label text-uppercase ${newPassInputStart || newPass !== "" ? "input-start" : ""}`}>
                    new password
                </span>

                <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    value={newPass}
                    onChange={(e) => { setNewPass(e.target.value) }}
                    onBlur={() => {
                        setNewPassInputStart(false)
                        if (newPass === "") {
                            setNewPassError(true)
                        } else {
                            setNewPassError(false)
                        }
                    }}
                    onFocus={() => {
                        setNewPassInputStart(true)
                    }}
                />


                <small style={newPassError ? { display: "block" } : { display: "none" }} className="c-login-input-error">

                    The field is required.

                </small>

            </div>

            <div className="c-login-input__wrapper">

                <span className={`c-login-input-label text-uppercase ${passConfirmInputStart || passConfirm !== "" ? "input-start" : ""}`}>
                    password confirm
                </span>

                <input
                    type="password"
                    name="passConfirm"
                    id="passConfirm"
                    value={passConfirm}
                    onChange={(e) => { setPassConfirm(e.target.value) }}
                    onBlur={() => {
                        setPassConfirmInputStart(false)
                        if (passConfirm === "") {
                            setPassConfirmError(true)
                        } else {
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

            <button
                ariaLabel="button"
                name="button"
                type="button"
                className="button rectangle-button position-relative w-100 onTop"
                onClick={async () => {

                    const credential = firebase.auth.EmailAuthProvider.credential(
                        user.email,
                        oldPass
                    );

                    await user
                        .reauthenticateWithCredential(credential)
                        .then(() => {

                            if (newPass === passConfirm) {
                                user.updatePassword(newPass)
                            } else {
                                console.log("error")
                            }

                        })
                        .catch((e) => {
                            console.log(e)
                        })
                }}
            >

                <div className="button-background position-absolute t-0 l-0 w-100 h-100 behind-1" />

                <span className="button-text text-uppercase">
                    change
                </span>

            </button>

        </div>
    );
}

export default ChangePassword;