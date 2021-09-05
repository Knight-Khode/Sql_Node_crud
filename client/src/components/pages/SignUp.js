import React from 'react'
import bcg from "../../images/sign2.jpeg"

const SignUp = () => {
    return (
        <div className="signup-form">
            <div className="form-container">
                <div className="form-left">
                    <img src={bcg} alt="123"/>
                </div>
                <div className="form-right">
                    <div className="right-content">
                        <h2>Join Our Wonderful Community</h2>
                        <form className="signup-form-content">
                            <div className="sign-up-form-group">
                                <i class="fas fa-user-circle"></i>
                                <input placeholder="Enter username" name="username"/>
                            </div>
                            <div className="sign-up-form-group">
                                <i class="fas fa-envelope-square"></i>
                                <input placeholder="Enter email" name="email"/>
                            </div>
                            <div className="sign-up-form-group">
                                <i class="fas fa-key"></i>
                                <input placeholder="Enter password" name="email"/>
                            </div>
                            <div className="sign-up-form-group">
                                <i class="fas fa-lock"></i>
                                <input placeholder="Confirm password" name="email"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
