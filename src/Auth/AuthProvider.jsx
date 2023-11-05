import {  createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    //  create User Password
     const createUserEmailAndPassword = (email,password)  => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const loginWithEmailAndPassword = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // profile
    const UpdateProfile = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
    }
     // google
     const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    };
    // LogOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() =>{
        setLoading(false)
        const UnSubscribe = onAuthStateChanged(auth,(MainUser)=>{

            setUser(MainUser)
        });
        return () =>  UnSubscribe()
    },[])

    const AuthInfo = {
        user,
        createUserEmailAndPassword,
        logOut,
        googleLogin,
        loading,
        loginWithEmailAndPassword,
        UpdateProfile
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;