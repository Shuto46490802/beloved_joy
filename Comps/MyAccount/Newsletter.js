import React, { useEffect, useRef, useState } from "react";

const Newsletter = ({ status, email, subscribe, unsubscribe }) => {

    return (
        <div className="c-newsletter position-absolute col-10 col-md-6 col-lg-8 col-xl-6">

            <div className="d-flex align-items-center mb-3">

                <div className="text-left text-lg-left w-100 pe-2 pe-lg-0">

                    <h4>newsletter</h4>

                </div>

            </div>

            <div className="d-flex align-items-center justify-content-between">


                <h6>newsletter</h6>

                <form
                    className={`switch ${status === "archived" || status === "unsubscribed" ? "is-disabled" : "is-abled"}`}
                    action=""
                    onSubmit={() => {

                    }}
                >

                    <input type="email" name="email" id="email" value={email} style={{ display: "none" }} />

                    <button
                        className="slider round h-100"
                        type="button"
                        onClick={(e) => {
                            if (status === "unsubscribed" || status === "archived") {
                                subscribe(e)
                            } else if (status === "subscribed") {
                                unsubscribe(e)
                            }
                        }}
                    />

                </form>

            </div>

        </div>
    );
}

export default Newsletter;
