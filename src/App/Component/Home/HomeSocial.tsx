// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import wrk2 from "../../images/wrk2.png";
import AOS from 'aos';
import "aos/dist/aos.css";

function HomeSocial() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <>
      <section className='choose_social_main'>
        <div className='home_content'>
          <div className='choose_social_img_txt_flx'>
            <div className='choose_social_img' data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              <img src={wrk2} alt="/" />
            </div>
            <div className='choose_social_txt' data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              <h2>Why Choose <span className='scl_txt'>Social One?</span> </h2>
              <div className='chse_lst_itm'>
                <ul className='chs_lst'>
                  <li className='chs_lst_txt'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </li>
                  <li className='chs_lst_txt'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </li>
                  <li className='chs_lst_txt'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSocial
