import { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, Mail } from "lucide-react";

const SignIn = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        if (!email || !password) {
            setMessage("❌ All fields are required");
            setLoading(false);
            return;
        }

        setTimeout(() => {
            setMessage("✅ Login successful!");
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br` from-cyan-50 via-white to-cyan-100">
            <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">

                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2">
                        <Coffee className="w-8 h-8 text-cyan-600" />
                        <h1 className="text-4xl font-bold font-serif text-cyan-600">Login</h1>
                    </div>
                    <p className="mt-3 text-gray-500 font-serif text-sm">
                        Access your dashboard, track orders, and enjoy your coffee ☕
                    </p>
                </div>

                {message && (
                    <div
                        className={`p-2 mb-3 text-sm text-center rounded-lg ${message.includes("✅")
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="flex justify-between text-sm">
                        <button type="button" className="text-cyan-600 hover:underline cursor-pointer">
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl shadow-md font-serif"
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>

                {/* Divider */}
                <div className="my-4 flex items-center">
                    <div className="flex-grow` h-px bg-gray-300"></div>
                    <span className="mx-2 text-gray-400 text-sm">or</span>
                    <div className="flex-grow` h-px bg-gray-300"></div>
                </div>

                {/* Google Login */}
                <button
                    disabled={loading}
                    className="w-full btn border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 rounded-xl shadow-sm flex items-center justify-center gap-2"
                >
                    <Mail className="h-5 w-5 text-red-500" />
                    Continue with Google
                </button>

                <p className="text-center mt-4 text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signIn" className="text-cyan-700 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
