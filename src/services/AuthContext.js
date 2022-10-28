import React, { useState, useEffect, createContext, useRef, useContext } from 'react';
import { auth } from '../firebase/clientApp';
import {
    GoogleAuthProvider,
    signInWithGoogle,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = createContext();

export const UserAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo] = useRef();

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    function signup() {
        return signInWithGoogle();
    }

    function login() {
        return signInWithGoogle();
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);


    const value = {
        googleSignIn,
        currentUser,
        login,
        signup,
        logout,
        userInfo,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}


