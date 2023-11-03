import { createContext, useEffect, useState } from 'react';
import app from '../../firebase.info';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const auth = getAuth(app)

    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        
    },[])

    const authInfo = {
        createUser,
        googleLogin,
        loginUser,
        user,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;