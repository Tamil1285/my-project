import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Import CSS file

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("https://276c-103-21-77-182.ngrok-free.app/auth/login/", formData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true, // Ensures cookies (session ID) are stored
            });

            localStorage.setItem("token", response.data.token); // Store token for future requests
            localStorage.setItem("username", response.data.username); // Store username
            // Notify Navbar about login
            window.dispatchEvent(new Event("storage"));

            navigate("/"); // Redirect user after login
        } catch (error) {
            setError(error.response?.data?.error || "Login failed. Please try again.");
        }
    };

    return (
        <div className="container login-container d-flex justify-content-center align-items-center">
            <motion.div
                className="row shadow rounded mt-3 login-row"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left Side - Image (Hidden on small screens) */}
                <motion.div
                    className="col-md-6 d-none d-md-block p-0"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <img
                        src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg"
                        alt="Login Illustration"
                        className="img-fluid login-image"
                    />
                </motion.div>

                {/* Right Side - Login Form (Full width on small screens) */}
                <motion.div
                    className="col-md-6 col-12 d-flex justify-content-center align-items-center login-form-container"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <div className="login-box">
                        <motion.h3
                            className="text-center fs-3 mb-4"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            LOGIN
                        </motion.h3>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={handleSubmit}>
                            <motion.div className="mb-3">
                                <label htmlFor="email" className="form-label">E-Mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            <motion.div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="btn btn-login w-100"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Login
                            </motion.button>
                        </form>

                        <motion.p className="text-center mt-3">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
