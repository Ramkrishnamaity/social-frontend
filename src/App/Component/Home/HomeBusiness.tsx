// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import bsns_img from "../../images/bsns_img.png";
import lst_crt from "../../images/lst_crt.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
function HomeBusiness() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <>
    <section className='busns_img_txt_main'>
        <div className='home_content'>
          <div className='bsns_img_txt_flx'>

            <div className='busns_img'data-aos="fade-up"
                data-aos-duration="3000">
              <img src={bsns_img} alt="/" />
            </div>

            <div className='busns_txt' data-aos="fade-up"
                data-aos-duration="3000">
              <h2>Let your business thrive under our supervision</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
              <h5>We are making every usiness grow!</h5>

              <div className='bsnl_lst'>
                <ul className='bsnl_lst_itm'>
                  <li className='bsnllst_txt'>
                    <img src={lst_crt} alt="/" />
                    Super useful and easy to use interface
                  </li>
                  <li className='bsnllst_txt'>
                    <img src={lst_crt} alt="/" />
                    Easiest way to grow your business in Days
                  </li>
                </ul>
              </div>
              <div className='cntn_btn_main'>
                <Link to="/" className='cntn_btn'>Contact Now</Link>
              </div>
            </div>



          </div>

        </div>
      </section>
    </>
  )
}

export default HomeBusiness
