import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FacebookIcon, GoogleIcon, LogoFont, Slider1Image } from '../../lib/Config';
import "./LoginSignup.css"
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

interface AuxProps {

}

const Login: React.FC<AuxProps> = () => {
    const [passwordtype, setPasswordtype] = useState("Password");
    const [passwordinput, setPasswordinput] = useState("");
    const loop = [1, 2, 3, 4]
    const handlePasswordChange = (event: any) => {
        setPasswordinput(event.target.value);
    }
    const togglePassword = () => {
        if (passwordtype === "password") {
            setPasswordtype("text")
            return;
        }
        setPasswordtype("password")
    }


    return (
        <>
            <section className='lgnfrm'>

                <div className='lgnfrm_main_flx'>
                    <div className='lgnfrm_main_lgn_sld'>


                        <div className='lgnfrm_main_sld'>
                            <div className='logolgn_img'>
                                <img src={LogoFont} alt="/" />
                            </div>

                            <Slider {...settings}>
                                {loop.map((item, index) => {
                                    return (
                                        <div className='lgn_sld' key={index}>
                                            {/* <div className='logolgn_img'>
                                                <img src={LogoFont} alt="/" />
                                            </div> */}
                                            <div className='lgn_sld_txt'>
                                                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur. Id volutpat enim sollicitudin rhoncus quam sed aliquam massa ut.</p>
                                            </div>

                                            <div className='sldr_img'>
                                                <img src={Slider1Image} alt='/' />
                                            </div>
                                        </div>


                                    )
                                })}
                            </Slider>


                        </div>

                    </div>

                    <div className='lgnfrm_main_frm'>
                        <div className='lgnfrm_main_frm_wh'>
                            <div className='logolgn_img_scnd'>
                                <img src={LogoFont} alt="/" />
                            </div>
                            <h4>Welcome back!</h4>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <form>
                                <div className="form-group">

                                    <input
                                        type="email"
                                        className="form-control inpt_txt"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />

                                </div>
                                <div className="form-group form_rltv">

                                    <input
                                        type={passwordtype}
                                        onChange={handlePasswordChange}
                                        value={passwordinput}
                                        className="form-control inpt_txt"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        name=""
                                    />

                                    <div className='pass_icon' onClick={togglePassword}>
                                        {passwordtype === "password" ? <i className="fa-regular fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                                    </div>
                                </div>
                                <div className='rembr_flx'>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="defaultCheck1"
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className='frgt_psswrd'>
                                        <Link to={"#"} className='frgt_psswrd_txt'>Forgot Password?</Link>
                                    </div>

                                </div>

                                <div className='lgn_btn_main'>
                                    <Link to="/" className='lgn_btn'>Login</Link>
                                </div>

                                <div className='divider d-flex align-items-center'>
                                    <p className='text-center lgnwth d-flex align-items-center mb-1 lgn_txt'>or</p>
                                </div>

                                <div className='ggle_fcbk'>
                                    <div className='google_btn_main'>
                                        <Link to="/" className='google_btn'>
                                            <img src={GoogleIcon} alt="" />
                                            Google
                                        </Link>
                                    </div>
                                    <div className='google_btn_main'>
                                        <Link to="/" className='google_btn'>
                                            <img src={FacebookIcon} alt="" />
                                            Facebook
                                        </Link>
                                    </div>
                                </div>
                                <div className='don_txt'>
                                    <p>Don’t Have an account?
                                        <Link to="/" className='don_txt_sgn'>Sign Up</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Login
