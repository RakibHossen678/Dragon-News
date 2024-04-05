import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";
export const AuthContext=createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogIn=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const UnSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('current user',currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
            UnSubscribe()
        }
    },[])
    const AutInfo={
        user,
        loader,
        createUser,
        logOut,
        userLogIn
    }
    return (
        <AuthContext.Provider value={AutInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children:PropTypes.node
}

export default AuthProvider;