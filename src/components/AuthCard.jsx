import { useState } from "react";
import "./AuthCard.css";

import {
    FaGooglePlusG,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthCard = () => {
    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showForgot, setShowForgot] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowForgot(false);
            setIsClosing(false);
        }, 400); // match CSS transition time
    };


    return (
        <div>
            <div className={`container ${isActive ? "active" : ""}`} id="container">
                {/* Sign Up */}
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <FaGooglePlusG />
                            </a>
                            <a href="#" className="icon">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="icon">
                                <FaGithub />
                            </a>
                            <a href="#" className="icon">
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" autoComplete="email" required />
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <button className="submit-btn">Sign In</button>
                    </form>
                </div>

                {/* Sign In */}
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <FaGooglePlusG />
                            </a>
                            <a href="#" className="icon">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="icon">
                                <FaGithub />
                            </a>
                            <a href="#" className="icon">
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" name="email" placeholder="Email" autoComplete="email" required />
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <a href="#"
                            onClick={() => setShowForgot(true)}
                        >
                            Forget Your Password?
                        </a>
                        <button className="submit-btn">Sign In</button>
                    </form>
                </div>

                {/* Toggle Container */}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button
                                className="hidden"
                                id="login"
                                type="button"
                                onClick={() => setIsActive(false)}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button
                                className="hidden"
                                id="register"
                                type="button"
                                onClick={() => setIsActive(true)}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Forgot Password Glassmorphic Modal */}
            {showForgot && (
                <div className="forgot-glass-overlay" onClick={handleClose}>
                    <div
                        className={`forgot-card ${isClosing ? "closing" : "active"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Forgot Password?</h2>
                        <p>Enter your email and we’ll send you reset instructions.</p>

                        <form>
                            <div className="forgot-inputGroup">
                                <input type="email" name="email" autoComplete="email" required />
                                <label>Email Address</label>
                            </div>

                            <button className="forgot-btn">
                                Send Email!
                                <div className="forgot-btn-icon">
                                    <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AuthCard
