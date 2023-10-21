import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

export const authContext = createContext(null)
const AuthControl = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, useloading] = useState(true)
    const signup = (email, password) => {
        useloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        useloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider()
    const google = () => {
        useloading(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const onSubsribe = onAuthStateChanged(auth, currentuser => {
            useloading(false)
            setuser(currentuser)
        })
        return () => {
            onSubsribe();
        }
    }, [])
    const logout = () => {
        useloading(true)
        return signOut(auth)
    }
    const info = {
        user,
        signup,
        login,
        google,
        logout,
        loading
    }
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthControl;