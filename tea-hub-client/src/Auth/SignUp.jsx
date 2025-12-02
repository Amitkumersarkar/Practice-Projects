import { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, UserPlus } from "lucide-react";

const SignUp = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const confirmPassword = form.get("confirmPassword");

        if (!name || !email || !password || !confirmPassword) {
            setMessage("❌ All fields are required");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setMessage("❌ Passwords do not match");
            setLoading(false);
            return;
        }

        // TODO: Connect to backend / Firebase
        setTimeout(() => {
            setMessage("✅ Account created successfully!");
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
            <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">

                {/* Header */}
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2">
                        <Coffee className="w-8 h-8 text-cyan-600" />
                        <h1 className="text-4xl font-bold font-serif text-cyan-600">Sign Up</h1>
                    </div>

                    <p className="mt-3 text-gray-500 font-serif text-sm">
                        Create an account and start your coffee journey ☕
                    </p>
                </div>

                {/* Message */}
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

                {/* Form */}
                <form onSubmit={handleSignUp} className="space-y-4">

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

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
                            placeholder="Enter password"
                            required
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            required
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl shadow-md font-serif flex justify-center items-center"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                {/* Divider */}
                <div className="my-4 flex items-center">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-2 text-gray-400 text-sm">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Login link */}
                <p className="text-center mt-4 text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/signIn"
                        className="text-cyan-700 font-semibold hover:underline"
                    >
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
