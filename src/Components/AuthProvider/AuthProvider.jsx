import { createContext } from 'react';
import app from '../../firebase.info';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const auth = getAuth(app)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
       return signInWithPopup(auth, provider)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser,
        googleLogin,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;