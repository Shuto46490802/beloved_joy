import { useRef, useState, useEffect } from "react";
import Link from "../PageLayouts/Link";
import { gsap } from "gsap";

const Content = ({ addToSectionRefs }) => {

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
    const [isTextWrapperOpen21, setIsTextWrapperOpen21] = useState(false)
    const [isTextWrapperOpen22, setIsTextWrapperOpen22] = useState(false)
    const [isTextWrapperOpen23, setIsTextWrapperOpen23] = useState(false)
    const [isTextWrapperOpen24, setIsTextWrapperOpen24] = useState(false)

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

    useEffect(() => {

        if (isTextWrapperOpen21) {

            gsap.fromTo(textWrapperRefs.current[20],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[20],
                {
                    height: textWrapperRefs.current[20].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen21])

    useEffect(() => {

        if (isTextWrapperOpen22) {

            gsap.fromTo(textWrapperRefs.current[21],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[21],
                {
                    height: textWrapperRefs.current[21].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen22])

    useEffect(() => {

        if (isTextWrapperOpen23) {

            gsap.fromTo(textWrapperRefs.current[22],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[22],
                {
                    height: textWrapperRefs.current[22].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen23])

    useEffect(() => {

        if (isTextWrapperOpen24) {

            gsap.fromTo(textWrapperRefs.current[23],
                {
                    height: 0
                },
                {
                    height: "auto",
                    duration: 0.4
                })

        } else {

            gsap.fromTo(textWrapperRefs.current[23],
                {
                    height: textWrapperRefs.current[23].clientHeight
                },
                {
                    height: 0,
                    duration: 0.4
                })

        }

    }, [isTextWrapperOpen24])

    return (
        <div className="c-privacy-policy__content">

            <div className="mb-md-4 mb-1" ref={addToSectionRefs}>

                <h2 className="mb-md-2 mb-0 pb-6"><strong>Terms of Use</strong></h2>

                <h6><strong>Last updated: April 12, 2021</strong></h6>

            </div>

            <div className={`mb-md-4 mb-1 ${isTextWrapperOpen1 ? "is-active" : ""}`} ref={addToSectionRefs}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Agreement to Terms</strong></h3>

                <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen1(!isTextWrapperOpen1)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Agreement to Terms</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p >
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and MY COMPANY  ("<strong>Company</strong>", “<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”), concerning your access to and use of the <Link ariaLabel="home" href="/"><a>https://beloved-joy.vercel.app/</a></Link> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>

                    <p>
                        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.
                    </p>

                    <p>
                        The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                    </p>

                    <p>
                        The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.
                    </p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p >
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and MY COMPANY  ("<strong>Company</strong>", “<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”), concerning your access to and use of the <Link ariaLabel="home" href="/"><a>https://beloved-joy.vercel.app/</a></Link> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>

                    <p>
                        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.
                    </p>

                    <p>
                        The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                    </p>

                    <p>
                        The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.
                    </p>

                </div>

            </div>

            <div className={`mb-md-4 mb-1 ${isTextWrapperOpen2 ? "is-active" : ""}`} ref={addToSectionRefs}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Intellectual Property Rights</strong></h3>

                <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen2(!isTextWrapperOpen2)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>Intellectual Property Rights</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>
                        Unless otherwise
                        indicated, the Site is our proprietary property and all source code, databases,
                        functionality, software, website designs, audio, video, text, photographs, and
                        graphics on the Site (collectively, the “Content”) and the trademarks, service
                        marks, and logos contained therein (the “Marks”) are owned or controlled by us or
                        licensed to us, and are protected by copyright and trademark laws and various
                        other intellectual property rights and unfair competition laws of the United
                        States, international copyright laws, and international conventions. The Content and the Marks are provided on the
                        Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms
                        of Use, no part of the Site and no Content or Marks may be copied, reproduced,
                        aggregated, republished, uploaded, posted, publicly displayed, encoded,
                        translated, transmitted, distributed, sold, licensed, or otherwise exploited
                        for any commercial purpose whatsoever, without our express prior written
                        permission.
                    </p>

                    <p>
                        Provided that you
                        are eligible to use the Site, you are granted a limited license to access and
                        use the Site and to download or print a copy of any portion of the Content to
                        which you have properly gained access solely for your personal, non-commercial
                        use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
                    </p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>
                        Unless otherwise
                        indicated, the Site is our proprietary property and all source code, databases,
                        functionality, software, website designs, audio, video, text, photographs, and
                        graphics on the Site (collectively, the “Content”) and the trademarks, service
                        marks, and logos contained therein (the “Marks”) are owned or controlled by us or
                        licensed to us, and are protected by copyright and trademark laws and various
                        other intellectual property rights and unfair competition laws of the United
                        States, international copyright laws, and international conventions. The Content and the Marks are provided on the
                        Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms
                        of Use, no part of the Site and no Content or Marks may be copied, reproduced,
                        aggregated, republished, uploaded, posted, publicly displayed, encoded,
                        translated, transmitted, distributed, sold, licensed, or otherwise exploited
                        for any commercial purpose whatsoever, without our express prior written
                        permission.
                    </p>

                    <p>
                        Provided that you
                        are eligible to use the Site, you are granted a limited license to access and
                        use the Site and to download or print a copy of any portion of the Content to
                        which you have properly gained access solely for your personal, non-commercial
                        use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
                    </p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen3 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>User Representations</strong></h3>

                <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen3(!isTextWrapperOpen3)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>User Representations</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>
                        By using the Site, you represent and warrant that:
                        (1)all registration information you submit will be true, accurate, current, and complete;
                        (2) you will maintain the accuracy of such information and promptly update such registration information as necessary;
                        (3)you have the legal capacity and you agree to comply with these Terms of Use;
                        (4)you are not a minor in the jurisdiction in which you reside;
                        (5)you will not access the Site through automated or non-human means, whether through a bot, script or otherwise;
                        (6)you will not use the Site for any illegal or unauthorized purpose; and
                        (7)your use of the Site will not violate any applicable law or regulation.
                    </p>

                    <p>
                        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                    </p>

                </div>

                <div className="text-wrapper d-md-block d-none">

                    <p>
                        By using the Site, you represent and warrant that:
                        (1)all registration information you submit will be true, accurate, current, and complete;
                        (2) you will maintain the accuracy of such information and promptly update such registration information as necessary;
                        (3)you have the legal capacity and you agree to comply with these Terms of Use;
                        (4)you are not a minor in the jurisdiction in which you reside;
                        (5)you will not access the Site through automated or non-human means, whether through a bot, script or otherwise;
                        (6)you will not use the Site for any illegal or unauthorized purpose; and
                        (7)your use of the Site will not violate any applicable law or regulation.
                    </p>

                    <p>
                        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                    </p>

                </div>

            </div>

            <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen4 ? "is-active" : ""}`}>

                <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>User Registration</strong></h3>

                <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen4(!isTextWrapperOpen4)} className="d-md-none d-block">
                    <h3 className="mb-md-2 mb-0 pb-6"><strong>User Registration</strong></h3>
                </button>

                <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                    <p>
                        You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectiona
                    
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                            </p>

                        </div>

            </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen5 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Products</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen5(!isTextWrapperOpen5)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Products</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability ,
                                and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                            </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability ,
                                and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                            </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen6 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Purchases and Payment</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen6(!isTextWrapperOpen6)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Purchases and Payment</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                We accept the following forms of payment:
                            </p>

                            <ul >
                                <li><p><strong>Visa</strong></p></li>
                                <li><p><strong>Mastercard</strong></p></li>
                                <li><p><strong>American Express</strong></p></li>
                                <li><p><strong>Paypal</strong></p></li>
                            </ul>

                            <p>
                                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site.
                                You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us.
                                We may change prices at any time. All payments shall be in CAD.
                            </p>

                            <p>
                                You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order.
                                We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                            </p>

                            <p>
                                We reserve the right to refuse any order placed through the Site.We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.These restrictions may include orders placed by or under the same customer account, the same payment method, and / or orders that use the same billing or shipping address.We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
                            </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                We accept the following forms of payment:
                            </p>

                            <ul >
                                <li><p><strong>Visa</strong></p></li>
                                <li><p><strong>Mastercard</strong></p></li>
                                <li><p><strong>American Express</strong></p></li>
                                <li><p><strong>Paypal</strong></p></li>
                            </ul>

                            <p>
                                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site.
                                You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us.
                                We may change prices at any time. All payments shall be in CAD.
                            </p>

                            <p>
                                You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order.
                                We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                            </p>

                            <p>
                                We reserve the right to refuse any order placed through the Site.We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.These restrictions may include orders placed by or under the same customer account, the same payment method, and / or orders that use the same billing or shipping address.We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
                            </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen7 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Prohibited Activities</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen7(!isTextWrapperOpen7)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Prohibited Activities</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

                            <p>As a user of the Site, you agree not to:</p>

                            <ul>
                                <li><p>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</p></li>
                                <li><p>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</p></li>
                                <li><p>Use a buying agent or purchasing agent to make purchases on the Site.</p></li>
                                <li><p>Use the Site to advertise or offer to sell goods and services.</p></li>
                                <li><p>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</p></li>
                                <li><p>Engage in unauthorized framing of or linking to the Site.</p></li>
                                <li><p>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</p></li>
                                <li><p>Make improper use of our support services or submit false reports of abuse or misconduct.</p></li>
                                <li><p>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</p></li>
                                <li><p>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</p></li>
                                <li><p>Attempt to impersonate another user or person or use the username of another user.</p></li>
                                <li><p>Sell or otherwise transfer your profile.</p></li>
                                <li><p>Use any information obtained from the Site in order to harass, abuse, or harm another person.</p></li>
                                <li><p>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</p></li>
                                <li><p>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</p></li>
                                <li><p>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</p></li>
                                <li><p>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</p></li>
                                <li><p>Delete the copyright or other proprietary rights notice from any Content.</p></li>
                                <li><p>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</p></li>
                                <li><p>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</p></li>
                                <li><p>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</p></li>
                                <li><p>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</p></li>
                                <li><p>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</p></li>
                                <li><p>Use the Site in a manner inconsistent with any applicable laws or regulations.</p></li>
                            </ul>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

                            <p>As a user of the Site, you agree not to:</p>

                            <ul>
                                <li><p>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</p></li>
                                <li><p>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</p></li>
                                <li><p>Use a buying agent or purchasing agent to make purchases on the Site.</p></li>
                                <li><p>Use the Site to advertise or offer to sell goods and services.</p></li>
                                <li><p>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</p></li>
                                <li><p>Engage in unauthorized framing of or linking to the Site.</p></li>
                                <li><p>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</p></li>
                                <li><p>Make improper use of our support services or submit false reports of abuse or misconduct.</p></li>
                                <li><p>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</p></li>
                                <li><p>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</p></li>
                                <li><p>Attempt to impersonate another user or person or use the username of another user.</p></li>
                                <li><p>Sell or otherwise transfer your profile.</p></li>
                                <li><p>Use any information obtained from the Site in order to harass, abuse, or harm another person.</p></li>
                                <li><p>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</p></li>
                                <li><p>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</p></li>
                                <li><p>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</p></li>
                                <li><p>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</p></li>
                                <li><p>Delete the copyright or other proprietary rights notice from any Content.</p></li>
                                <li><p>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</p></li>
                                <li><p>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</p></li>
                                <li><p>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</p></li>
                                <li><p>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</p></li>
                                <li><p>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</p></li>
                                <li><p>Use the Site in a manner inconsistent with any applicable laws or regulations.</p></li>
                            </ul>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen8 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>User Generated Contributions</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen8(!isTextWrapperOpen8)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>User Generated Contributions</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
                    </p>

                            <ul>
                                <li><p>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</p></li>
                                <li><p>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.</p></li>
                                <li><p>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.</p></li>
                                <li><p>Your Contributions are not false, inaccurate, or misleading.</p></li>
                                <li><p>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</p></li>
                                <li><p>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</p></li>
                                <li><p>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</p></li>
                                <li><p>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</p></li>
                                <li><p>Your Contributions do not violate any applicable law, regulation, or rule.</p></li>
                                <li><p>Your Contributions do not violate the privacy or publicity rights of any third party.</p></li>
                                <li><p>Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.</p></li>
                                <li><p>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors;</p></li>
                                <li><p>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</p></li>
                                <li><p>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</p></li>
                            </ul>

                            <p>
                                Any use of the Site or the Marketplace Offerings in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site and the Marketplace Offerings.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
                    </p>

                            <ul>
                                <li><p>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</p></li>
                                <li><p>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.</p></li>
                                <li><p>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.</p></li>
                                <li><p>Your Contributions are not false, inaccurate, or misleading.</p></li>
                                <li><p>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</p></li>
                                <li><p>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</p></li>
                                <li><p>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</p></li>
                                <li><p>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</p></li>
                                <li><p>Your Contributions do not violate any applicable law, regulation, or rule.</p></li>
                                <li><p>Your Contributions do not violate the privacy or publicity rights of any third party.</p></li>
                                <li><p>Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.</p></li>
                                <li><p>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors;</p></li>
                                <li><p>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</p></li>
                                <li><p>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</p></li>
                            </ul>

                            <p>
                                Any use of the Site or the Marketplace Offerings in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site and the Marketplace Offerings.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen9 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Contribution License</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen9(!isTextWrapperOpen9)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Contribution License</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                You and Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                    </p>

                            <p>
                                By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.
                    </p>

                            <p>
                                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">
                            <p>
                                You and Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                    </p>

                            <p>
                                By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.
                    </p>

                            <p>
                                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen10 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Submissions</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen10(!isTextWrapperOpen10)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Submissions</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site or the Marketplace Offerings ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site or the Marketplace Offerings ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen11 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Third-Party Websites and Content</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen11(!isTextWrapperOpen11)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Third-Party Websites and Content</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                The Site may contain (or you may be sent via the Site or the Marketplace Offerings) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content").
                                Such Third-Party Websites and Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Websites or the Third-Party Content.
                                Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party ontent does not imply approval or endorsement thereof by us.
                                If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern.
                                You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site.Any purchases you make through Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party.
                                You agree and acknowledge that we do not endorse the products or services offered on Websites and you shall hold us harmless from any harm caused by your purchase of such products or services.
                                Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                The Site may contain (or you may be sent via the Site or the Marketplace Offerings) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content").
                                Such Third-Party Websites and Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Websites or the Third-Party Content.
                                Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party ontent does not imply approval or endorsement thereof by us.
                                If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern.
                                You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site.Any purchases you make through Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party.
                                You agree and acknowledge that we do not endorse the products or services offered on Websites and you shall hold us harmless from any harm caused by your purchase of such products or services.
                                Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen12 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Site Management</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen12(!isTextWrapperOpen12)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Site Management</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site and the Marketplace Offerings.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site and the Marketplace Offerings.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen13 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Term and Termination</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen13(!isTextWrapperOpen13)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Term and Termination</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION.
                                WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE AND THE MARKETPLACE OFFERINGS OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    </p>

                            <p>
                                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION.
                                WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE AND THE MARKETPLACE OFFERINGS OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    </p>

                            <p>
                                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen14 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Modifications and Interruptions</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen14(!isTextWrapperOpen14)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Modifications and Interruptions</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Marketplace Offerings without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or the Marketplace Offerings.
                        </p>

                            <p>
                                We cannot guarantee the Site and the Marketplace Offerings will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site or the Marketplace Offerings at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site or the Marketplace Offerings during any downtime or discontinuance of the Site or the Marketplace Offerings. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or the Marketplace Offerings or to supply any corrections, updates, or releases in connection therewith.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Marketplace Offerings without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or the Marketplace Offerings.
                        </p>

                            <p>
                                We cannot guarantee the Site and the Marketplace Offerings will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site or the Marketplace Offerings at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site or the Marketplace Offerings during any downtime or discontinuance of the Site or the Marketplace Offerings. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or the Marketplace Offerings or to supply any corrections, updates, or releases in connection therewith.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen15 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Govering Law</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen15(!isTextWrapperOpen15)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Govering Law</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                These terms shall be governed by and defined following the laws of Canada. MY COMPANY and yourself irrevocably consent that the courts of Canada shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                These terms shall be governed by and defined following the laws of Canada. MY COMPANY and yourself irrevocably consent that the courts of Canada shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen16 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Dispute Resolution</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen16(!isTextWrapperOpen16)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Dispute Resolution</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p><strong>Binding Arbitration</strong></p>

                            <p>
                                Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3).
                                The seat, or legal place, or arbitration shall be Toronto, Canada. The language of the proceedings shall be English.
                                The governing law of the contract shall be substantive law of Canada.
                    </p>

                            <p><strong>Restrictions</strong></p>

                            <p>
                                The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. The the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                    </p>

                            <p><strong>Exceptions to Arbitration</strong></p>

                            <p>
                                The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p><strong>Binding Arbitration</strong></p>

                            <p>
                                Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3).
                                The seat, or legal place, or arbitration shall be Toronto, Canada. The language of the proceedings shall be English.
                                The governing law of the contract shall be substantive law of Canada.
                    </p>

                            <p><strong>Restrictions</strong></p>

                            <p>
                                The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. The the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                    </p>

                            <p><strong>Exceptions to Arbitration</strong></p>

                            <p>
                                The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen17 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Corrections</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen17(!isTextWrapperOpen17)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Corrections</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Marketplace Offerings, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Marketplace Offerings, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen18 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Disclaimer</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen18(!isTextWrapperOpen18)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Disclaimer</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                                YOU AGREE THAT YOUR USE OF THE SITE SERVICES WILL BE AT YOUR SOLE RISK.
                                TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THIS SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
                                (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
                                (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE,
                                (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,
                                (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE,
                                (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR
                                (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE.
                                WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                                AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                                YOU AGREE THAT YOUR USE OF THE SITE SERVICES WILL BE AT YOUR SOLE RISK.
                                TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THIS SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
                                (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
                                (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE,
                                (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,
                                (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE,
                                (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR
                                (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE.
                                WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                                AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen19 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Limitations of Liability</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen19(!isTextWrapperOpen19)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Limitations of Liability</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US.
                                CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.

                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US.
                                CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.

                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen20 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Indemnification</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen20(!isTextWrapperOpen20)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Indemnification</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of:
                                (1) use of the Site;
                                (2) breach of these Terms of Use;
                                (3) any breach of your representations and warranties set forth in these Terms of Use;
                                (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or
                                (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of:
                                (1) use of the Site;
                                (2) breach of these Terms of Use;
                                (3) any breach of your representations and warranties set forth in these Terms of Use;
                                (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or
                                (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen21 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>User Data</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen21(!isTextWrapperOpen21)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>User Data</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site.
                                Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site.
                                You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site.
                                Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site.
                                You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen22 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Electronic Communacations, Transactions, and Signatures</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen22(!isTextWrapperOpen22)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Electronic Communacations, Transactions, and Signatures</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper">

                            <p>
                                Visiting the Site, sending us emails, and completing online forms constitute electronic communications.
                                You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.
                                YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE.
                                You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                Visiting the Site, sending us emails, and completing online forms constitute electronic communications.
                                You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.
                                YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE.
                                You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen23 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Miscellaneous</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen23(!isTextWrapperOpen23)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Miscellaneous</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>
                                These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us.
                                Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision.
                                These Terms of Use operate to the fullest extent permissible by law.
                                We may assign any or all of our rights and obligations to others at any time.
                                We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.
                                If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions.
                                There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site.
                                You agree that these Terms of Use will not be construed against us by virtue of having drafted them.
                                You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.
                    </p>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>
                                These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us.
                                Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision.
                                These Terms of Use operate to the fullest extent permissible by law.
                                We may assign any or all of our rights and obligations to others at any time.
                                We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.
                                If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions.
                                There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site.
                                You agree that these Terms of Use will not be construed against us by virtue of having drafted them.
                                You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.
                    </p>

                        </div>

                    </div>

                    <div ref={addToSectionRefs} className={`mb-md-4 mb-1 ${isTextWrapperOpen24 ? "is-active" : ""}`}>

                        <h3 className="mb-md-2 mb-0 pb-6 d-md-block d-none"><strong>Contact Us</strong></h3>

                        <button ariaLabel="button" name="button" onClick={() => setIsTextWrapperOpen24(!isTextWrapperOpen24)} className="d-md-none d-block">
                            <h3 className="mb-md-2 mb-0 pb-6"><strong>Contact Us</strong></h3>
                        </button>

                        <div ref={addToTextWrapperRefs} className="text-wrapper d-md-none d-block">

                            <p>If you have any questions about this Terms and Conditions, You can contact us:</p>

                            <ul>
                                <li><p>By email: belovedjoy@gmail.com</p></li>
                            </ul>

                        </div>

                        <div className="text-wrapper d-md-block d-none">

                            <p>If you have any questions about this Terms and Conditions, You can contact us:</p>

                            <ul>
                                <li><p>By email: belovedjoy@gmail.com</p></li>
                            </ul>

                        </div>

                    </div>


                </div >
    );
}

export default Content;