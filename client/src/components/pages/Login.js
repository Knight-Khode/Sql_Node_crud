import React from 'react'
import bcg from "../../images/sign2.jpeg"

const Login = () => {
    return (
        <div className="signup-form">
        <div className="form-container">
            <div className="form-left">
                <img src={bcg} alt="123"/>
            </div>
            <div className="form-right">
                <div className="right-content">
                    <h2>Welcome Login To Your Account</h2>
                    <form className="signup-form-content">
                        <div className="sign-up-form-group">
                            <i class="fas fa-envelope-square"></i>
                            <input placeholder="Enter email" name="email"/>
                        </div>
                        <div className="sign-up-form-group">
                            <i class="fas fa-key"></i>
                            <input placeholder="Enter password" name="email"/>
                        </div>
                        <div className="sign-up-form-group btn">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
