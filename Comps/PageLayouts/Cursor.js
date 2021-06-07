import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from "next/router"
import { useAuth } from '../../lib/auth';

const Cursor = ({ touch }) => {

    const cursorRef = useRef();
    const [cursorClass, setCursorClass] = useState("");
    const [cursorEventClass, setCursorEventClass] = useState("")
    const [cursorActive, setCursorActive] = useState(false);
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        bindCursorEvent()
        document.body.addEventListener('mousemove', cursorMove);
        document.body.addEventListener('mouseleave', cursorLeave)
        return () => {
            document.body.removeEventListener('mousemove', cursorMove);
            document.body.removeEventListener('mouseleave', cursorLeave)
        };
    }, [router, user])

    const cursorMove = (event) => {
        if (!touch) {
            cursorRef.current.style.transform = 'translate3d(' + event.x + 'px,' + event.y + 'px,0px)';

            if (!cursorActive) {
                setCursorActive(true)
                setCursorClass('show-mouse')
            }
        }
    }

    const cursorLeave = (event) => {
        cursorRef.current.style.transform = 'translate3d(' + event.x + 'px,' + event.y + 'px,0px)';
        setCursorActive(false)
        setCursorClass('')
    }

    const bindCursorEvent = () => {
        let _els = document.getElementsByTagName('a');

        if (_els.length > 0) {
            for (var _i = 0; _i < _els.length; _i++) {
                if (!_els[_i].classList.contains('js-hover-setup')) {
                    _els[_i].classList.add('js-hover-setup');

                    _els[_i].addEventListener('mouseover', function (_evt) {
                        if (_evt.target.classList.contains('js-hover-next') || _evt.target.classList.contains('swiper-button-next')) {
                            cursorRef.current.classList.add('hover-next');
                            cursorRef.current.classList.remove('hover-prev');
                            cursorRef.current.classList.add('mouse-hover');
                        } else if (_evt.target.classList.contains('js-hover-prev') || _evt.target.classList.contains('swiper-button-prev')) {
                            cursorRef.current.classList.remove('hover-next');
                            cursorRef.current.classList.add('hover-prev');
                            cursorRef.current.classList.add('mouse-hover');
                        } else {
                            cursorRef.current.classList.remove('hover-prev');
                            cursorRef.current.classList.remove('hover-next');
                            cursorRef.current.classList.add('mouse-hover');
                        }
                    });

                    _els[_i].addEventListener('mouseout', function (_evt) {
                        cursorRef.current.classList.remove('mouse-hover');
                        cursorRef.current.classList.remove('hover-next');
                        cursorRef.current.classList.remove('hover-prev');
                    });
                }
            }
        }

        _els = document.getElementsByTagName('button');

        if (_els.length > 0) {
            for (var _i17 = 0; _i17 < _els.length; _i17++) {
                if (_els[_i17].classList.contains('js-hover-setup') === false) {
                    _els[_i17].classList.add('js-hover-setup');

                    _els[_i17].addEventListener('mouseover', function (_evt) {
                        if (_evt.target.classList.contains('js-hover-next') || _evt.target.classList.contains('next') || _evt.target.classList.contains('swiper-button-next')) {
                            cursorRef.current.classList.add('hover-next');
                            cursorRef.current.classList.remove('hover-prev');
                            cursorRef.current.classList.add('mouse-hover');
                        } else if (_evt.target.classList.contains('js-hover-prev') || _evt.target.classList.contains('previous') || _evt.target.classList.contains('swiper-button-prev')) {
                            cursorRef.current.classList.remove('hover-next');
                            cursorRef.current.classList.add('hover-prev');
                            cursorRef.current.classList.add('mouse-hover');
                        } else {
                            cursorRef.current.classList.remove('hover-prev');
                            cursorRef.current.classList.remove('hover-next');
                            cursorRef.current.classList.add('mouse-hover');
                        }
                    });

                    _els[_i17].addEventListener('mouseout', function (_evt) {
                        cursorRef.current.classList.remove('mouse-hover');
                        cursorRef.current.classList.remove('hover-next');
                        cursorRef.current.classList.remove('hover-prev');
                    });
                }
            }
        }
    }

    return (
        <div className={`c-cursor ${cursorClass}`} ref={cursorRef} style={touch ? { display: "none" } : {}}>
            <div className={"c-cursor__arrows"}>
                <div className="c-cursor__arrows__right">
                    <svg x="0px" y="0px" viewBox="0 0 22 10">
                        <polygon style={{ fill: "#999B9D" }}
                            points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />
                    </svg>
                </div>
                <div className="c-cursor__arrows__left">
                    <svg x="0px" y="0px" viewBox="0 0 22 10">
                        <polygon style={{ fill: "#999B9D" }}
                            points="5,9.35 5.71,8.65 2.56,5.5 21.35,5.5 21.35,4.5 2.56,4.5 5.71,1.35 5,0.65 0.65,5 " />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Cursor;