import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
    // declared loading state
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        loading,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;