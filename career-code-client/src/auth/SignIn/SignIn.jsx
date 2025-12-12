import Lottie from "lottie-react";
import signInLottie from "../../assets/Login.json";
import { use } from "react";
import { AuthContext } from "../../contextApi/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const SignIn = () => {

    const { signInUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    console.log('Location in sign in page', location);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        const newUser = { email, password };
        console.log(newUser)

        // signIn user
        signInUser(email, password)
            .then(result => {
                console.log(result)
                navigate(from);
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className="w-[350px]" animationData={signInLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold my-5">SignIn now!</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" required className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" required className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;