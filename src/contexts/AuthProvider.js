import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [toggle, setToggle] = useState(true);

    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const signInGoogle = (Provider) =>{
        return signInWithPopup(auth, Provider);
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const LogoutUser = () =>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("observers", currentUser);
            setLoader(false);
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    },[])


    const value = {
        user,
        createUser,
        loginUser,
        LogoutUser,
        updateUser,
        signInGoogle,
        forgetPassword,
        loader,
        toggle,
        setToggle
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;