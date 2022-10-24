import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, updateProfile, signOut, sendEmailVerification } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const CreateAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
        
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };
    const providerLogIN = (provider) => {
        return signInWithPopup(auth,provider);
    };
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
        
            setLoading(false)
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
             }

        });
        return () => {
            unsubscribe();
        }
    }, []);
   
    const authInfo = { user, CreateAccount, logIn, providerLogIN, updateUserProfile, logOut, verifyEmail, setLoading};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;