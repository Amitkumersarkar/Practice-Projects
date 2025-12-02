import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

    const userInfo = {
        email: 'amit@gmail.com',
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
