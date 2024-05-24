// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner_img from "../../images/banner_img.png";
import bg_img1 from "../../images/bg_img1.png";
import AOS from 'aos';
import "aos/dist/aos.css";

function HomeBanner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <>
      <section className='hom_main_section'>

        <div className='home_content'>
          <div className='banner_txt_img_main_flx'>
            <div className='banner_txt' data-aos="fade-up"
              data-aos-duration="3000">
              <h2>Make the best of your business <span className='anlt_txt'>Analytics</span></h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
              </p>
              <div className='start_work_btn_main_flx'>
                <div className='start_btn_main'>
                  <Link to="" className="start_btn">Get Started</Link>
                </div>
                <div className='work_btn_main'>
                  <div className='work_btn_bx'>
                    <i className="fa-solid fa-play"></i>

                  </div>
                  See How it Works
                </div>
              </div>
            </div>


            <div className='banner_img' data-aos="fade-up"
              data-aos-duration="3000">
              <img src={banner_img} alt="/" />
              <div className='bg_box'>
                <div className='bg_img_txt'>
                  <div className='bg_img'>
                    <img src={bg_img1} alt='/'></img>
                  </div>
                  <div className='txt_bg'>
                    <h4>Product Name</h4>
                    <p>Lorem Ipsum is simply dummy text of the</p>

                    <div className='prc_edt_btn_flx'>
                      <p>$ 1,333</p>
                      <div className='edt_btn'>
                        <Link to="/" className='edt'>Edit</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default HomeBanner

