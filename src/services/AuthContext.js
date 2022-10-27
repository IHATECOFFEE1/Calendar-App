import React, { useState, useEffect, createContext, useRef } from 'react';
import { auth, db } from '../firebase';
import { signInWithGoogle, signOut, OnAuthStateChanged } from '../firebase/clientApp';



const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo] = useRef();

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
        const unsubscribe = onAuthStateChanged(auth ,user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);


    const value = {
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


