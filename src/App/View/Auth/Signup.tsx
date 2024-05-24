import React, { useState } from 'react';
import { SignupProps } from '../../lib/DataSet/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { ClientSignup } from '../../Service/ClientAuth';
import { setClientLogin } from '../../Store/Client';
import { useDispatch } from 'react-redux';
import { reactLocalStorage } from 'reactjs-localstorage';
import { toast } from 'react-toastify';



const Signup: React.FC<SignupProps> = () => {
    const navigate = useNavigate();

    const [fristName, setFristName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [mobileNumber, setMobileNumber] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [isShowPass, setIsShowPass] = useState<boolean>(true)
    const dispatch = useDispatch()

    const SignupHandler = () => {
        ClientSignup({
            email,
            fristName,
            lastName,
            mobileNumber,
            password
        }).then((signupRespons) => {
            if (signupRespons.status && signupRespons.data) {
                dispatch(setClientLogin(signupRespons.data))
                reactLocalStorage.set("token", signupRespons.data.token);
                reactLocalStorage.setObject('ClientData', signupRespons.data);
                toast(signupRespons.massage, { type: toast.TYPE.SUCCESS })
                navigate('/')
            } else {
                toast(signupRespons.massage, { type: toast.TYPE.INFO })
            }
        }).catch((error) => {
            toast(error.massage, { type: toast.TYPE.ERROR })
        })
    }

    return (
        <div className="auth-fluid">
            {/*Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex">
                    <div className="p-3">
                        {/* Logo */}
                        <div className="auth-brand text-center text-lg-start">
                            <div className="auth-brand">
                                <Link to={'/'} className="logo logo-dark text-center">
                                    <span className="logo-lg">
                                        <img src="/assets/images/logo-dark.png" alt="" height={100} />
                                    </span>
                                </Link>
                                <Link to={'/'} className="logo logo-light text-center">
                                    <span className="logo-lg">
                                        <img src="/assets/images/logo-light.png" alt="" height={100} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* title*/}
                        <h4 className="mt-0">Sign Up</h4>
                        <p className="text-muted mb-4">
                            Don't have an account? Create your account, it takes less than a
                            minute
                        </p>
                        {/* form */}
                        <div className='row'>
                            <div className="mb-3 col-lg-6 col-xl-6">
                                <label htmlFor="Frist Name" className="form-label">
                                    Frist Name
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="fristname"
                                    placeholder="Enter your Frist Name"
                                    required={true}
                                    onChange={(e) => setFristName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-xl-6">
                                <label htmlFor="lastname" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="lastname"
                                    placeholder="Enter your last name"
                                    required={true}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
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
                            <label htmlFor="Phone number" className="form-label">
                                Phone Number
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                id="Phonenumber"
                                required={true}
                                placeholder="Enter your phone number"
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
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
                                <div className="input-group-text" data-password="false" onClick={() => setIsShowPass(!isShowPass)}>
                                    <span className="password-eye" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="checkbox-signup"
                                />
                                <label className="form-check-label" htmlFor="checkbox-signup">
                                    I accept
                                    <span className="text-dark">
                                        Terms and Conditions
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="text-center d-grid">
                            <button
                                className="btn btn-primary waves-effect waves-light"
                                onClick={() => SignupHandler()}
                            >
                                Sign Up
                            </button>
                        </div>
                        {/* social*/}
                        {/* <div className="text-center mt-4">
                            <p className="text-muted font-16">Sign in with</p>
                            <ul className="social-list list-inline mt-3 mb-0">
                                <li className="list-inline-item">
                                    <button
                                        className="social-list-item button-cs border-primary text-primary"
                                    >
                                        <i className="mdi mdi-facebook" />
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        className="social-list-item button-cs border-danger text-danger"
                                    >
                                        <i className="mdi mdi-google" />
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        className="social-list-item button-cs border-info text-info"
                                    >
                                        <i className="mdi mdi-twitter" />
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button
                                        className="social-list-item button-cs border-secondary text-secondary"
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
                                Already have account?
                                <Link to="/auth/login" className="text-muted ms-1">
                                    <b>Log In</b>
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
    );
};

export default Signup;
