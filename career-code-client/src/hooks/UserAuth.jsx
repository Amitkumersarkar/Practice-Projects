import { use } from "react";
import { AuthContext } from "../contextApi/AuthContext/AuthContext";

const UserAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo
};

export default UserAuth;