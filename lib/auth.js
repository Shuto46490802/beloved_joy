import React, { createContext, useContext, useState, useEffect } from "react";
import nookies from "nookies";
import firebase from "./firebaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        return firebase.auth().onIdTokenChanged(async (user) => {

            if (!user) {
                setUser(null);
                nookies.set(undefined, "token", "", { path: "/" })
            } else {
                const token = await user.getIdToken();
                setUser(user);
                nookies.set(undefined, "token", token, { path: "/" })
            }

        })

    }, []);

    useEffect(() => {

        const handle = setInterval(async () => {
            const user = firebase.auth().curentUser;
            if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);


        return () => clearInterval(handle);

    }, [])

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    )

};

export const useAuth = () => {
    return useContext(AuthContext);
};