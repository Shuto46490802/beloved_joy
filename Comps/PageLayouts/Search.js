import React, { useRef, useEffect, useState } from "react";
import Link from "./Link";

import { gsap } from "gsap";
import { useRouter } from "next/router";

const Search = ({ searchOpen, toggleSearch }) => {

    const searchRef = useRef();
    const innerRef = useRef()
    const formRef = useRef();
    const backgroundRef = useRef();

    const tlIn = useRef();
    const tlOut = useRef();

    //animation beggininng
    useEffect(() => {
        if (!searchOpen.state && searchOpen.anim === "anim-out") {
            tlOut.current = gsap.timeline({ paused: false })
                .fromTo(formRef.current,
                    {
                        y: 0,
                        opacity: 1
                    },
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        ease: "Power2.easeOut"
                    })
                .fromTo(innerRef.current,
                    {
                        y: "0%"
                    },
                    {
                        y: "-100%",
                        duration: 1,
                        ease: "Power2.easeInOut"
                    }, 0.6)
                .fromTo(backgroundRef.current,
                    {
                        opacity: 0.6
                    },
                    {
                        opacity: 0,
                        duration: 1
                    }, 0.7)
                .to(searchRef.current,
                    {
                        visibility: "hidden",
                        duration: 0
                    })
        }
    }, [searchOpen, tlOut]);

    useEffect(() => {
        if (searchOpen.state && searchOpen.anim === "anim-in") {
            tlIn.current = gsap.timeline({ paused: false })
                .to(searchRef.current,
                    {
                        visibility: "visible",
                        duration: 0
                    })
                .fromTo(innerRef.current,
                    {
                        y: "-100%"
                    },
                    {
                        y: "0%",
                        duration: 1,
                        ease: "Power2.easeInOut"
                    })
                .fromTo(backgroundRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 0.6,
                        duration: 1
                    }, 0.2)
                .fromTo(formRef.current,
                    {
                        y: 100,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power2.easeOut"
                    }, 0.8)
        }
    }, [searchOpen, tlIn])

    const [input, setInput] = useState();
    const router = useRouter();
    const [isValidated, setIsValidated] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()
        router.push({ pathname: "/search-results", query: { keyword: input } })
        setInput("");
        toggleSearch();

    }

    const validateInput = (_input) => {

        if (_input !== "" && !/^\s+$/.test(_input)) {
            setIsValidated(true);
        } else {
            setIsValidated(false);
        }

    }

    return (
        <div ref={searchRef} className="c-serch position-fixed t-0 l-0">

            <div ref={backgroundRef} className="n-background" />

            <div ref={innerRef} className="c-search-inner position-absolute t-0 l-0 h-100 w-100 d-flex align-items-center justify-content-center">

                <div className="c-search__form__wrapper w-100 d-flex justify-content-center mx-2">

                    <form ref={formRef} action="" className="c-search__form d-flex align-items-center w-100 justify-content-center">

                        <input
                            type="text"
                            id="input"
                            name="input"
                            className="c-search__form__input"
                            placeholder="Search products"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value)
                                validateInput(input)
                            }}
                            onKeyDown={async (e) => {
                                if (e.key === "Enter") {
                                    if (isValidated) {
                                        handleSubmit(e)
                                    } else {
                                        return;
                                    }
                                }
                            }}
                        />

                        <button
                            ariaLabel="button"
                            name="button"
                            type="button"
                            onClick={(e) => {
                                if (isValidated) {
                                    handleSubmit(e)
                                } else {
                                    return;
                                }
                            }}
                            className="c-hoz-arrow c-hoz-arrow--right js-submit c-search__form__button position-absolute r-0"
                        >

                            Subscribe
                                <svg x="0px" y="0px" viewBox="0 0 22 10">


                                <polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />
                            </svg>

                            <svg x="0px" y="0px" viewBox="0 0 22 10">

                                <polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />

                            </svg>

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );
}

export default Search;