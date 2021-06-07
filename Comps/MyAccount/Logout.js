import firebase from "../../lib/firebaseClient"

const Logout = ({ toggleAccount, toggleLogout, logoutRef, logoutOverlayRef }) => {
    return (
        <div ref={logoutOverlayRef} className="c-logout-overlay d-flex onTop position-fixed t-0 l-0 w-100 h-100 flex-center">

            <div ref={logoutRef} className="c-logout d-flex flex-column justify-content-center onTop p-2">

                <div>

                    <h4 className="text-center">are-you-sure</h4>

                </div>

                <div className="mt-3 w-100 d-flex justify-content-between col-sm-6 col-lg px-4">

                    <button
                        onClick={async () => {
                            await firebase
                                .auth()
                                .signOut()

                            toggleAccount()
                        }}
                    >
                        <span>Yes</span>
                    </button>

                    <button
                        onClick={() => {
                            toggleLogout()
                        }}
                    >
                        <span>No</span>
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Logout;