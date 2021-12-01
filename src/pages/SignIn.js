import React from 'react'
import { Link } from 'react-router-dom'
import '../component/signin/signin.css';

const SignIn = () => {
    return (
        <div className='container'>
            <div className="form-wrap">
                <Link to='/' className='icon'>Back to Home</Link>
                <div className="form-content">
                    <form action="" className="form">
                        <h1>Sign in to your account</h1>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" required className="form-input" />
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" required className="form-input" />
                        <button type="submit" className='form-btn'>Continue</button>
                        <p className="forgot-password">Forgot Password</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
