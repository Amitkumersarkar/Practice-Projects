import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-infinity loading-xl"></span>;
    }

    if (!user) {
        return <Navigate to="/signIn" state={location.pathname} />;
    }

    return children;
};

export default PrivateRoutes;
