import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { auth, db } from '../firebase/clientApp';
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';



const AuthContext = createContext();

export const UserAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log("User is signed in ", currentUser);
            } else {
                setUser(null);
            }
        })
        return unsubscribe;
    }, [])


    const value = {
        user,
        googleSignIn,
        logOut,
        
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


