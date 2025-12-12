import { use } from "react";
import { AuthContext } from "../../contextApi/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user } = use(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (!user) {
        return <Navigate to='/signIn' state={location.pathname}></Navigate>
    }
    return children;

};

export default PrivateRoutes;