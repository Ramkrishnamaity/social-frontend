// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import patmnt_img from "../../images/patmnt_img.png";
import AOS from 'aos';
import "aos/dist/aos.css";

function AnalyticBox() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <>
      <section className='anlt_box_img'>
        <div className='hom_content_bg'>
          <div className='home_content'>
            <div className='patmnt_flx'>
              <div className='anlty_box' data-aos="fade-up"
                data-aos-duration="3000">
                <h4>Advance Analytic</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
              </div>
              <div className='anlty_box' data-aos="fade-up"
                data-aos-duration="3000">
                <h4>Easy Payment</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
              </div>
              <div className='anlty_box' data-aos="fade-up"
                data-aos-duration="3000">
                <h4>Fully integrated</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
              </div>
            </div>
            <div className='patmnt_img_main' data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000">
              <img src={patmnt_img} alt="/" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AnalyticBox
