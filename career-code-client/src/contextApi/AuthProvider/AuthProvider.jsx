import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
    // declared loading state
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // signUp user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    // declared observer to track and to get the current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('user in the auth state change', currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // share auth data 
    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;