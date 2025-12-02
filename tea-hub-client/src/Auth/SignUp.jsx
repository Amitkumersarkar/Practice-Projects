import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
    const { email } = useContext(AuthContext);
    console.log(email);
    return (
        <div>

        </div>
    );
};

export default SignUp;