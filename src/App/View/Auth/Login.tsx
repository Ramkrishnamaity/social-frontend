import React, { useState } from 'react';
import { LoginProps } from '../../lib/DataSet/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { ClientLogin } from '../../Service/ClientAuth';
import { useDispatch } from 'react-redux';
import { setClientLogin } from '../../Store/Client';
import { reactLocalStorage } from 'reactjs-localstorage';
import { toast } from 'react-toastify';

const Login: React.FC<LoginProps> = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isShowPass, setIsShowPass] = useState<boolean>(true)
    const dispatch = useDispatch()



    const LoginHandler = () => {
        ClientLogin(email, password).then((data) => {
            if (data.status && data.data) {
                dispatch(setClientLogin(data.data))
                reactLocalStorage.set("token", data.data.token);
                reactLocalStorage.setObject('ClientData', data.data);
                toast(data.massage, { type: toast.TYPE.SUCCESS });
                navigate('/')
            } else {
                toast(data.massage, { type: toast.TYPE.WARNING });
            }
            
        })
            .catch((error) => {
                toast(error.massage, { type: toast.TYPE.ERROR });
            })
    }
    return (
        <div className="auth-fluid">
            {/*Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
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
                                        <img src="/assets/images/logo-dark.png" alt="" height={100} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* title*/}
                        <h4 className="mt-0">Sign In</h4>
                        <p className="text-muted mb-4">
                            Enter your email address and password to access account.
                        </p>
                        {/* form */}
                        <div className="mb-3">
                            <label htmlFor="emailaddress" className="form-label">
                                Email address
                            </label>
                            <input
                                className="form-control"
                                type="email"
                                id="emailaddress"
                                required={true}
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <a href="auth-recoverpw-2.html" className="text-muted float-end">
                                <small>Forgot your password?</small>
                            </a>
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <div className="input-group input-group-merge">
                                <input
                                    type={isShowPass ? "password" : "text"}
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="input-group-text" data-password="false">
                                    <span className="password-eye" onClick={() => setIsShowPass(!isShowPass)} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="checkbox-signin"
                                />
                                <label className="form-check-label" htmlFor="checkbox-signin">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="text-center d-grid">
                            <button
                                className="btn btn-primary"
                                onClick={() => LoginHandler()}
                            >
                                Log In{" "}
                            </button>
                        </div>
                        {/* social*/}
                        {/* <div className="text-center mt-4">
                            <p className="text-muted font-16">Sign in with</p>
                            <ul className="social-list list-inline mt-3">
                                <li className="list-inline-item">
                                    <button
                                        className="social-list-item border-primary text-primary button-cs"
                                    >
                                        <i className="mdi mdi-facebook" />
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        className="social-list-item border-danger text-danger button-cs"
                                    >
                                        <i className="mdi mdi-google" />
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        className="social-list-item border-info text-info button-cs"
                                    >
                                        <i className="mdi mdi-twitter" />
                                    </button>
                                </li>
                                <li className="list-inline-item ">
                                    <button
                                        className="social-list-item border-secondary text-secondary button-cs"
                                    >
                                        <i className="mdi mdi-github" />
                                    </button>
                                </li>
                            </ul>
                        </div> */}
                        {/* end form*/}
                        {/* Footer*/}
                        <footer className="footer footer-alt">
                            <p className="text-muted">
                                Don't have an account?{" "}
                                <Link to="/auth/signup" className="text-muted ms-1">
                                    <b>Sign Up</b>
                                </Link>
                            </p>
                        </footer>
                    </div>{" "}
                    {/* end .card-body */}
                </div>{" "}
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
                </div>{" "}
                {/* end auth-user-testimonial*/}
            </div>
            {/* end Auth fluid right content */}
        </div>

    );
};

export default Login;
