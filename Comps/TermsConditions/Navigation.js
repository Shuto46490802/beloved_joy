
const Navigation = ({ navigationRef, scrollTrackRef, scrollThumbRef, scrollTo, sectionTops }) => {

    return (
        <div className="c-privacy-nav terms-conditions color-light-red should-animate d-md-block d-none">

            <div ref={navigationRef} className="c-privacy-nav__inner">

                <div ref={scrollTrackRef} className="c-privacy-nav__scrollbar-track">
                    <div ref={scrollThumbRef} className="c-privacy-nav__scrollbar-thumb scrollbar-thumb-y should-animate" />
                </div>

                <ul className="c-privacy-nav__list p-0 m-0">

                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[0]) }}><p>Terms of Use</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[1]) }}><p>Agreement to Terms</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[2]) }}><p>Intellectual Property Rights</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[3]) }}><p>User Representations</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[4]) }}><p>User Registration</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[5]) }}><p>Products</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[6]) }}><p>Purchases and Payment</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[7]) }}><p>Prohibited Activities</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[8]) }}><p>User Generated Contributions</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[9]) }}><p>Contribution License</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[10]) }}><p>Submissions</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[11]) }}><p>Third-Party Websites and Content</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[12]) }}><p>Site Management</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[13]) }}><p>Term and Termination</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[14]) }}><p>Modifications and Interruptions</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[15]) }}><p>Govering Law</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[16]) }}><p>Dispute Resolution</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[17]) }}><p>Corrections</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[18]) }}><p>Disclaimer</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[19]) }}><p>Limitations of Liability</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[20]) }}><p>Indemnification</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[21]) }}><p>User Data</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[22]) }}><p>Electronic Communacations, Transactions, and Signatures</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[23]) }}><p>Miscellaneous</p></button></li>
                    <li className="c-privacy-nav__list__item"><button name="button" onClick={() => { scrollTo(0, sectionTops[24]) }}><p>Contact Us</p></button></li>

                </ul>

            </div>

        </div>
    );
}

export default Navigation;