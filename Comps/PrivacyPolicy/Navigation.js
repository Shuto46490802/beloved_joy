

const Navigation = ({ navigationRef, scrollTrackRef, scrollThumbRef, scrollTo, sectionTops }) => {

    return (
        <div className="c-privacy-nav color-light-red should-animate d-md-block d-none">

            <div ref={navigationRef} className="c-privacy-nav__inner">

                <div ref={scrollTrackRef} className="c-privacy-nav__scrollbar-track">
                    <div ref={scrollThumbRef} className="c-privacy-nav__scrollbar-thumb scrollbar-thumb-y should-animate" />
                </div>

                <ul className="c-privacy-nav__list p-0 m-0">

                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[0]) }}><p>Privacy Policy</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[1]) }}><p>Interpretation</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[2]) }}><p>Definitions</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[3]) }}><p>Information Collected and Use</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[4]) }}><p>Personal Data</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[5]) }}><p>Usage Data</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[6]) }}><p>Tracking Technologies and Cookies</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[7]) }}><p>Use of Your Personal Data</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[8]) }}><p>Retention of Your Personal Data</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[9]) }}><p>Transfer of Your Personal Data</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[10]) }}><p>Business Transactions</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[11]) }}><p>Law enforcement</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[12]) }}><p>Other legal requirements</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[13]) }}><p>Security of Your Personal Data</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[14]) }}><p>Children's Privacy</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[15]) }}><p>Analytics</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[16]) }}><p>Payments</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[17]) }}><p>Links to Other Websites</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[18]) }}><p>Changes to this Privacy Policy</p></button></li>
                    <li className="c-privacy-nav__list__item"><button ariaLabel="button" name="button" onClick={() => { scrollTo(0, sectionTops[19]) }}><p>Contact Us</p></button></li>

                </ul>

            </div>

        </div>
    );
}

export default Navigation;