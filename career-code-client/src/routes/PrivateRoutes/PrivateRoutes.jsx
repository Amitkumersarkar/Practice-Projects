import { use } from "react";
import { AuthContext } from "../../contextApi/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user } = use(AuthContext);
    if (!user) {
        <Navigate to='/signIn'></Navigate>
    }
    return children;

};

export default PrivateRoutes;