
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutClient } from '../../Store/Client'

type Props = {}

export const Logout = (props: Props) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(logoutClient());
    },[dispatch])
    return (
        <div className="auth-fluid">
            {/*Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex justify-content-center h-100">
                    <div className="p-3">
                        {/* Logo */}
                        <div className="auth-brand text-center text-lg-start">
                            <div className="auth-brand">
                                <Link to="/" className="logo logo-dark text-center">
                                    <span className="logo-lg">
                                        <img src="/assets/images/logo-dark.png" alt="" height={100} />
                                    </span>
                                </Link>
                                <Link to="/" className="logo logo-light text-center">
                                    <span className="logo-lg">
                                        <img src="/assets/images/logo-light.png" alt="" height={100} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center w-100">
                            <div className="mt-4">
                                <div className="logout-checkmark">
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 130.2 130.2"
                                    >
                                        <circle
                                            className="path circle"
                                            fill="none"
                                            stroke="#4bd396"
                                            strokeWidth={6}
                                            strokeMiterlimit={10}
                                            cx="65.1"
                                            cy="65.1"
                                            r="62.1"
                                        />
                                        <polyline
                                            className="path check"
                                            fill="none"
                                            stroke="#4bd396"
                                            strokeWidth={6}
                                            strokeLinecap="round"
                                            strokeMiterlimit={10}
                                            points="100.2,40.2 51.5,88.8 29.8,67.5 "
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3>See you again !</h3>
                            <p className="text-muted"> You are now successfully sign out. </p>
                        </div>
                        {/* Footer*/}
                        <footer className="footer footer-alt">
                            <p className="text-muted">
                                Don't have an account?
                                <Link to="/auth/login" className="text-muted ms-1">
                                    <b>Sign In</b>
                                </Link>
                            </p>
                        </footer>
                    </div>
                    {/* end .card-body */}
                </div>
                {/* end .align-items-center.d-flex.h-100*/}
            </div>
            {/* end auth-fluid-form-box*/}
            {/* Auth fluid right content */}
            <div className="auth-fluid-right text-center">
                <div className="auth-user-testimonial">
                    <h2 className="mb-3 text-white">I love the color!</h2>
                    <p className="lead">
                        <i className="mdi mdi-format-quote-open" /> I've been using your theme
                        from the previous developer for our web app, once I knew new version is
                        out, I immediately bought with no hesitation. Great themes, good
                        documentation with lots of customization available and sample app that
                        really fit our need. <i className="mdi mdi-format-quote-close" />
                    </p>
                    <h5 className="text-white">- Fadlisaad (Ubold Admin User)</h5>
                </div>
                {/* end auth-user-testimonial*/}
            </div>
            {/* end Auth fluid right content */}
        </div>

    )
}