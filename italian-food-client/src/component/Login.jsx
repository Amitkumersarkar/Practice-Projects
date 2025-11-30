import { useState } from "react";
import { motion } from "framer-motion";

export default function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fixed credentials
        if (email === "user@example.com" && password === "password") {
            onLogin();
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="login-section">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                className="login-container"
            >
                <h2>Login to Access Home</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </motion.div>
        </div>
    );
}