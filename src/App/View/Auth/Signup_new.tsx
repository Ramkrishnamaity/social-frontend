import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FacebookIcon, GoogleIcon, LogoFont, Slider1Image } from '../../lib/Config';
import "./LoginSignup.css"
const loop = [1, 2, 3, 4]

var settings = {
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

const SignUp: React.FC<AuxProps> =() => {



  return (
    <section className='sgnupfrm'>
      <div className='lgnfrm_main_flx'>
        <div className='lgnfrm_main_lgn_sld'>


          <div className='lgnfrm_main_sld'>


            <Slider {...settings}>
              {loop.map((item, index) => {
                return (
                  <div className='lgn_sld' key={index}>
                    <div className='logolgn_img'>
                      <img src={LogoFont} alt="/" />
                    </div>
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
          <div className='sgnfrm_main_frm_wh'>
            <div className='logolgn_img_scnd'>
              <img src={LogoFont} alt="/" />
            </div>
            <h4>Create Your Account</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <form>

              <div className='row'>
                <div className='col-lg-6 col-xl-6 col-md-12'>
                  <div className="form-group">

                    <input
                      type="email"
                      className="form-control inpt_txt "
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />

                  </div>
                </div>
                <div className='col-lg-6 col-xl-6 col-md-12'>
                  <div className="form-group">

                    <input
                      type="email"
                      className="form-control inpt_txt "
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                    />

                  </div>
                </div>

              </div>

              <div className="form-group">

                <input
                  type="email"
                  className="form-control inpt_txt"
                  aria-describedby="emailHelp"
                  placeholder="@username"
                />

              </div>
              <div className="form-group">

                <input
                  type="email"
                  className="form-control inpt_txt"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your email address"
                />

              </div>
              <div className="form-group">

                <input
                  type="password"
                  className="form-control inpt_txt"
                  placeholder="Password"
                />
              </div>


              <div className='lgn_btn_main'>
                <Link to="/" className='lgn_btn'>Create Account</Link>
              </div>

              <div className='divider d-flex align-items-center'>
                <p className='text-center lgnwth d-flex align-items-center mb-1 lgn_txt'>or</p>
              </div>

              <div className='ggle_fcbk'>
                <div className='google_btn_main'>
                  <Link to="/" className='google_btn'>
                    <img src={GoogleIcon} alt='google' />
                    Google
                  </Link>
                </div>
                <div className='google_btn_main'>
                  <Link to={"/"} className='google_btn'>
                    <img src={FacebookIcon} alt='Facebook' />
                    Facebook
                  </Link>
                </div>
              </div>
              <div className='don_txt'>
                <p>Dont Have an account?
                  <Link to="" className='don_txt_sgn'>Sign Up</Link>
                </p>
              </div>
              <div className='cndn_plcy'>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Yes, i am understand the <span className='trms_cndn'>terms & Condition</span> Policy
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SignUp
