import { useEffect, useRef, useState } from "react";
import Link from "../PageLayouts/Link";
import { gsap } from "gsap";

const PrivacyPolicyContent = ({ addToSectionRefs }) => {

    const textWrapperRefs = useRef([]);
    const addToTextWrapperRefs = (_el) => {
        if (_el && !textWrapperRefs.current.includes(_el)) {
            textWrapperRefs.current.push(_el)
        } else {
            textWrapperRefs.current = [];
        }
    }

    const [isTextWrapperOpen1, setIsTextWrapperOpen1] = useState(false)
    const [isTextWrapperOpen2, setIsTextWrapperOpen2] = useState(false)
    const [isTextWrapperOpen3, setIsTextWrapperOpen3] = useState(false)
    const [isTextWrapperOpen4, setIsTextWrapperOpen4] = useState(false)
    const [isTextWrapperOpen5, setIsTextWrapperOpen5] = useState(false)
    const [isTextWrapperOpen6, setIsTextWrapperOpen6] = useState(false)
    const [isTextWrapperOpen7, setIsTextWrapperOpen7] = useState(false)
    const [isTextWrapperOpen8, setIsTextWrapperOpen8] = useState(false)
    const [isTextWrapperOpen9, setIsTextWrapperOpen9] = useState(false)
    const [isTextWrapperOpen10, setIsTextWrapperOpen10] = useState(false)
    const [isTextWrapperOpen11, setIsTextWrapperOpen11] = useState(false)
    const [isTextWrapperOpen12, setIsTextWrapperOpen12] = useState(false)
    const [isTextWrapperOpen13, setIsTextWrapperOpen13] = useState(false)
    const [isTextWrapperOpen14, setIsTextWrapperOpen14] = useState(false)
    const [isTextWrapperOpen15, setIsTextWrapperOpen15] = useState(false)
    const [isTextWrapperOpen16, setIsTextWrapperOpen16] = useState(false)
    const [isTextWrapperOpen17, setIsTextWrapperOpen17] = useState(false)
    const [isTextWrapperOpen18, setIsTextWrapperOpen18] = useState(false)
    const [isTextWrapperOpen19, setIsTextWrapperOpen19] = useState(false)
    const [isTextWrapperOpen20, setIsTextWrapperOpen20] = useState(false)

    useEffect(() => {

        if (isTextWrapperOpen1) {

            gsap.fromTo(textWrapperRefs.current[0],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[0],
                {
                    height: textWrapperRefs.current[0].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen1])

    useEffect(() => {

        if (isTextWrapperOpen2) {

            gsap.fromTo(textWrapperRefs.current[1],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[1],
                {
                    height: textWrapperRefs.current[1].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen2])

    useEffect(() => {

        if (isTextWrapperOpen3) {

            gsap.fromTo(textWrapperRefs.current[2],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[2],
                {
                    height: textWrapperRefs.current[2].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen3])

    useEffect(() => {

        if (isTextWrapperOpen4) {

            gsap.fromTo(textWrapperRefs.current[3],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[3],
                {
                    height: textWrapperRefs.current[3].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen4])

    useEffect(() => {

        if (isTextWrapperOpen5) {

            gsap.fromTo(textWrapperRefs.current[4],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[4],
                {
                    height: textWrapperRefs.current[4].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen5])

    useEffect(() => {

        if (isTextWrapperOpen6) {

            gsap.fromTo(textWrapperRefs.current[5],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[5],
                {
                    height: textWrapperRefs.current[5].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen6])

    useEffect(() => {

        if (isTextWrapperOpen7) {

            gsap.fromTo(textWrapperRefs.current[6],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[6],
                {
                    height: textWrapperRefs.current[6].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen7])

    useEffect(() => {

        if (isTextWrapperOpen8) {

            gsap.fromTo(textWrapperRefs.current[7],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[7],
                {
                    height: textWrapperRefs.current[7].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen8])

    useEffect(() => {

        if (isTextWrapperOpen9) {

            gsap.fromTo(textWrapperRefs.current[8],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[8],
                {
                    height: textWrapperRefs.current[8].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen9])

    useEffect(() => {

        if (isTextWrapperOpen10) {

            gsap.fromTo(textWrapperRefs.current[9],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[9],
                {
                    height: textWrapperRefs.current[9].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen10])

    useEffect(() => {

        if (isTextWrapperOpen11) {

            gsap.fromTo(textWrapperRefs.current[10],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[10],
                {
                    height: textWrapperRefs.current[10].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen11])

    useEffect(() => {

        if (isTextWrapperOpen12) {

            gsap.fromTo(textWrapperRefs.current[11],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[11],
                {
                    height: textWrapperRefs.current[11].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen12])

    useEffect(() => {

        if (isTextWrapperOpen13) {

            gsap.fromTo(textWrapperRefs.current[12],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[12],
                {
                    height: textWrapperRefs.current[12].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen13])

    useEffect(() => {

        if (isTextWrapperOpen14) {

            gsap.fromTo(textWrapperRefs.current[13],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[13],
                {
                    height: textWrapperRefs.current[13].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen14])

    useEffect(() => {

        if (isTextWrapperOpen15) {

            gsap.fromTo(textWrapperRefs.current[14],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[14],
                {
                    height: textWrapperRefs.current[14].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen15])

    useEffect(() => {

        if (isTextWrapperOpen16) {

            gsap.fromTo(textWrapperRefs.current[15],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[15],
                {
                    height: textWrapperRefs.current[15].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen16])

    useEffect(() => {

        if (isTextWrapperOpen17) {

            gsap.fromTo(textWrapperRefs.current[16],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[16],
                {
                    height: textWrapperRefs.current[16].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen17])

    useEffect(() => {

        if (isTextWrapperOpen18) {

            gsap.fromTo(textWrapperRefs.current[17],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[17],
                {
                    height: textWrapperRefs.current[17].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen18])

    useEffect(() => {

        if (isTextWrapperOpen19) {

            gsap.fromTo(textWrapperRefs.current[18],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[18],
                {
                    height: textWrapperRefs.current[18].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen19])

    useEffect(() => {

        if (isTextWrapperOpen20) {

            gsap.fromTo(textWrapperRefs.current[19],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[19],
                {
                    height: textWrapperRefs.current[19].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen20])

    return (
        <div className="c-privacy-policy__content">

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen1 ? "is-active" : ""}`} >

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Privacy Policy</strong></h3>

                <button onClick={() => { setIsTextWrapperOpen1(!isTextWrapperOpen1) }} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Privacy Policy</strong></h3>
                </button>

                <h6><strong>Last updated: April 11, 2021</strong></h6>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block" >

                    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                    <p >
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from <Link href="/"><a>www.belovedjoy.co</a></Link>
                    </p>

                </div>

                <div className="text-wrapper d-md-block d-none" >

                    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                    <p >
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from <Link href="/"><a>www.belovedjoy.co</a></Link>
                    </p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen2 ? "is-active" : ""}`} >

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Interpretation</strong></h3>

                <button onClick={() => setIsTextWrapperOpen2(!isTextWrapperOpen2)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Interpretation</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p >
                        The words of which the initial letter is capitalized have meanings defined under the following conditions.
                        The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p >
                        The words of which the initial letter is capitalized have meanings defined under the following conditions.
                        The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen3 ? "is-active" : ""}`} >

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Definitions</strong></h3>

                <button onClick={() => setIsTextWrapperOpen3(!isTextWrapperOpen3)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Definitions</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>For the purposes of this Privacy Policy:</p>

                    <ul >
                        <li>
                            <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                        </li>
                        <li>
                            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Beloved Joy Co.Ltd. </p>
                        </li>
                        <li>
                            <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                        </li>
                        <li>
                            <p><strong>Country</strong> refers to: Ontario,  Canada</p>
                        </li>
                        <li>
                            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                        </li>
                        <li>
                            <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                        </li>
                        <li>
                            <p><strong>Service</strong> refers to the Website.</p>
                        </li>
                        <li>
                            <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                        </li>
                        <li>
                            <p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
                        </li>
                        <li>
                            <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refers to My Site, accessible from <Link href="/"><a rel="external nofollow noopener" target="_blank">http://belovedjoy.com</a></Link></p>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        </li>
                    </ul>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>For the purposes of this Privacy Policy:</p>

                    <ul >
                        <li>
                            <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                        </li>
                        <li>
                            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Beloved Joy Co.Ltd. </p>
                        </li>
                        <li>
                            <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                        </li>
                        <li>
                            <p><strong>Country</strong> refers to: Ontario,  Canada</p>
                        </li>
                        <li>
                            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                        </li>
                        <li>
                            <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                        </li>
                        <li>
                            <p><strong>Service</strong> refers to the Website.</p>
                        </li>
                        <li>
                            <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                        </li>
                        <li>
                            <p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
                        </li>
                        <li>
                            <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refers to My Site, accessible from <Link href="/"><a rel="external nofollow noopener" target="_blank">http://belovedjoy.com</a></Link></p>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        </li>
                    </ul>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen4 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Information Collected and Use</strong></h3>

                <button onClick={() => setIsTextWrapperOpen4(!isTextWrapperOpen4)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Information Collected and Use</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p >We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p >We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                </div>

            </div>

            <h2 className="mb-md-2 mb-1 mt-md-0 mt-2"><strong>Types of Data Collected</strong></h2>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen5 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Personal Data</strong></h3>

                <button onClick={() => setIsTextWrapperOpen5(!isTextWrapperOpen5)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Personal Data</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.
                        Personally identifiable information may include, but is not limited to:
                    </p>

                    <ul>
                        <li>
                            <p>Email address</p>
                        </li>
                        <li>
                            <p>First name and last name</p>
                        </li>
                        <li>
                            <p>Phone number</p>
                        </li>
                        <li>
                            <p>Address, State, Province, ZIP/Postal code, City</p>
                        </li>
                        <li>
                            <p>Usage Data</p>
                        </li>
                    </ul>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.
                        Personally identifiable information may include, but is not limited to:
                    </p>

                    <ul>
                        <li>
                            <p>Email address</p>
                        </li>
                        <li>
                            <p>First name and last name</p>
                        </li>
                        <li>
                            <p>Phone number</p>
                        </li>
                        <li>
                            <p>Address, State, Province, ZIP/Postal code, City</p>
                        </li>
                        <li>
                            <p>Usage Data</p>
                        </li>
                    </ul>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen6 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Usage Data</strong></h3>

                <button onClick={() => setIsTextWrapperOpen6(!isTextWrapperOpen6)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Usage Data</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>Usage Data is collected automatically when using the Service.</p>

                    <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

                    <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>

                    <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>Usage Data is collected automatically when using the Service.</p>

                    <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

                    <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>

                    <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen7 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Tracking Technologies and Cookies</strong></h3>

                <button onClick={() => setIsTextWrapperOpen7(!isTextWrapperOpen7)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Tracking Technologies and Cookies</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>
                        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
                        Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                    </p>

                    <p>
                        Cookies are files with small amount of data which may include an anonymous unique identifier.
                        Cookies are sent to your browser from a website and stored on your device.
                        Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                    </p>

                    <p>
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>

                    <p>Examples of Cookies we use:</p>

                    <ul >
                        <li><p><strong>Session Cookies</strong>. We use Session Cookies to operate our Service.</p></li>
                        <li><p><strong>Preference Cookies</strong>. We use Preference Cookies to remember your preferences and various settings.</p></li>
                        <li><p><strong>Security Cookies</strong>. We use Security Cookies for security purposes.</p></li>
                    </ul>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>
                        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
                        Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                    </p>

                    <p>
                        Cookies are files with small amount of data which may include an anonymous unique identifier.
                        Cookies are sent to your browser from a website and stored on your device.
                        Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                    </p>

                    <p>
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>

                    <p>Examples of Cookies we use:</p>

                    <ul >
                        <li><p><strong>Session Cookies</strong>. We use Session Cookies to operate our Service.</p></li>
                        <li><p><strong>Preference Cookies</strong>. We use Preference Cookies to remember your preferences and various settings.</p></li>
                        <li><p><strong>Security Cookies</strong>. We use Security Cookies for security purposes.</p></li>
                    </ul>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen8 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Use of Your Personal Data</strong></h3>

                <button onClick={() => setIsTextWrapperOpen8(!isTextWrapperOpen8)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Use of Your Personal Data</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>Beloved Joy Co.Ltd. may use Personal Data for the following purposes:</p>

                    <ul>
                        <li>
                            <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
                        </li>
                        <li>
                            <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                        </li>
                        <li>
                            <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                        </li>
                        <li>
                            <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                        </li>
                        <li>
                            <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                        </li>
                        <li>
                            <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                        </li>
                        <li>
                            <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                        </li>
                        <li>
                            <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                        </li>
                    </ul>

                    <p>We may share Your personal information in the following situations:</p>

                    <ul >
                        <li><p><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</p></li>
                        <li><p><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</p></li>
                        <li><p><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</p></li>
                        <li><p><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</p></li>
                        <li><p><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</p></li>
                        <li><p><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</p></li>
                    </ul>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>Beloved Joy Co.Ltd. may use Personal Data for the following purposes:</p>

                    <ul>
                        <li>
                            <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
                        </li>
                        <li>
                            <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                        </li>
                        <li>
                            <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                        </li>
                        <li>
                            <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                        </li>
                        <li>
                            <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                        </li>
                        <li>
                            <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                        </li>
                        <li>
                            <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                        </li>
                        <li>
                            <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                        </li>
                    </ul>

                    <p>We may share Your personal information in the following situations:</p>

                    <ul >
                        <li><p><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</p></li>
                        <li><p><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</p></li>
                        <li><p><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</p></li>
                        <li><p><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</p></li>
                        <li><p><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</p></li>
                        <li><p><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</p></li>
                    </ul>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen9 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Retention of Your Personal Data</strong></h3>

                <button onClick={() => setIsTextWrapperOpen9(!isTextWrapperOpen9)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Retention of Your Personal Data</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>Beloved Joy Co.Ltd. will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>

                    <p >Beloved Joy Co.Ltd. will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>Beloved Joy Co.Ltd. will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>

                    <p >Beloved Joy Co.Ltd. will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen10 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Transfer of Your Personal Data</strong></h3>

                <button onClick={() => setIsTextWrapperOpen10(!isTextWrapperOpen10)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Transfer of Your Personal Data</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>

                    <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>

                    <p>Beloved Joy Co.Ltd. will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>

                    <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>

                    <p>Beloved Joy Co.Ltd. will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>

                </div>

            </div>

            <h2 className="mb-md-2 mb-1 mt-md-0 mt-2"><strong>Disclosure of Your Personal Data</strong></h2>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen11 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Business Transactions</strong></h3>

                <button onClick={() => setIsTextWrapperOpen11(!isTextWrapperOpen11)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Business Transactions</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p >If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p >If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen12 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Law enforcement</strong></h3>

                <button onClick={() => setIsTextWrapperOpen12(!isTextWrapperOpen12)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Law enforcement</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen13 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Other legal requirements</strong></h3>

                <button onClick={() => setIsTextWrapperOpen13(!isTextWrapperOpen13)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Other legal requirements</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>

                    <ul>
                        <li><p>Comply with a legal obligation</p></li>
                        <li><p>Protect and defend the rights or property of the Company</p></li>
                        <li><p>Prevent or investigate possible wrongdoing in connection with the Service</p></li>
                        <li><p>Protect the personal safety of Users of the Service or the public</p></li>
                        <li><p>Protect against legal liability</p></li>
                    </ul>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>

                    <ul>
                        <li><p>Comply with a legal obligation</p></li>
                        <li><p>Protect and defend the rights or property of the Company</p></li>
                        <li><p>Prevent or investigate possible wrongdoing in connection with the Service</p></li>
                        <li><p>Protect the personal safety of Users of the Service or the public</p></li>
                        <li><p>Protect against legal liability</p></li>
                    </ul>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen14 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Security of Your Personal Data</strong></h3>

                <button onClick={() => setIsTextWrapperOpen14(!isTextWrapperOpen14)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Security of Your Personal Data</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p >The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p >The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen15 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Children's Privacy</strong></h3>

                <button onClick={() => setIsTextWrapperOpen15(!isTextWrapperOpen15)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Children's Privacy</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>

                    <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>

                    <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen16 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Analytics</strong></h3>

                <button onClick={() => setIsTextWrapperOpen16(!isTextWrapperOpen16)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Analytics</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>

                    <ul>
                        <li>
                            <p><strong>GOOGLE ANALYTICS</strong></p>
                            <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                            <p>
                                You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.
                                For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: Link
                        </p>
                        </li>
                    </ul>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>

                    <ul>
                        <li>
                            <p><strong>GOOGLE ANALYTICS</strong></p>
                            <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                            <p>
                                You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.
                                For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: Link
                        </p>
                        </li>
                    </ul>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen17 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Payments</strong></h3>

                <button onClick={() => setIsTextWrapperOpen17(!isTextWrapperOpen17)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Payments</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>
                        We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).
                    </p>

                    <p>
                        We will not store or collect your payment card details.
                        That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy.
                        These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover.
                        PCI-DSS requirements help ensure the secure handling of payment information.
                    </p>

                    <ul>
                        <li>
                            <p><strong>Stripe</strong></p>
                            <p>Their Privacy Policy can be viewed at <a href="https://stripe.com/en-ca/privacy">https://stripe.com/en-ca/privacy</a></p>
                        </li>
                        <li><p>We do not take Discover.</p></li>
                    </ul>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>
                        We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).
                    </p>

                    <p>
                        We will not store or collect your payment card details.
                        That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy.
                        These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover.
                        PCI-DSS requirements help ensure the secure handling of payment information.
                    </p>

                    <ul>
                        <li>
                            <p><strong>Stripe</strong></p>
                            <p>Their Privacy Policy can be viewed at <a href="https://stripe.com/en-ca/privacy">https://stripe.com/en-ca/privacy</a></p>
                        </li>
                        <li><p>We do not take Discover.</p></li>
                    </ul>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen18 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Links to Other Websites</strong></h3>

                <button onClick={() => setIsTextWrapperOpen18(!isTextWrapperOpen18)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Links to Other Websites</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>

                    <p >We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>

                    <p >We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen19 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Changes to this Privacy Policy</strong></h3>

                <button onClick={() => setIsTextWrapperOpen19(!isTextWrapperOpen19)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Changes to this Privacy Policy</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>

                    <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>

                    <p >You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>

                    <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>

                    <p >You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`${isTextWrapperOpen1 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Contact Us</strong></h3>

                <button onClick={() => setIsTextWrapperOpen20(!isTextWrapperOpen20)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Contact Us</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>If you have any questions about this Privacy Policy, You can contact us:</p>

                    <ul>
                        <li><p>By email: belovedjoy@gmail.com</p></li>
                    </ul>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>If you have any questions about this Privacy Policy, You can contact us:</p>

                    <ul>
                        <li><p>By email: belovedjoy@gmail.com</p></li>
                    </ul>

                </div>

            </div>

        </div >
    );
}

export default PrivacyPolicyContent;