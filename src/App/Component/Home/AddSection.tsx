// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import add from "../../images/add.png";
import mbl from "../../images/mbl.png";
import AOS from 'aos';
import "aos/dist/aos.css";
function AddSection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
    const loop = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14];
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
      };
  return (
   <>
      <section className='add_wide'>
        {/* <div className='home_content'> */}
        <div className='wrld_txt'>
          <p> Trusted by over 100+ businesses worldwide! </p>
        </div>
        <div className='lgnfrm_main_sld'>
          <Slider {...settings}>
            {loop.map((item, index) => {
              return (
                <div className='add_img_main' key={index}>
                  <div className='add_img'>
                    <img src={add} alt="/" />
                  </div>

                </div>


              )
            })}
          </Slider>
        </div>

        <div className='txt_mbl_main' data-aos="fade-up"
     data-aos-duration="3000">
          <div className='home_content'>
            <div className='txt_mbl_flx'>
              <div className='txt_mbl'>
                <h2>A nice and simple finacial</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,</p>
                <div className='start_btn_main'>
                  <Link to="" className="start_btn strt_gt">Get Started</Link>
                </div>
              </div>

              <div className='mbl_img'>
                <img src={mbl} alt="/" />
              </div>
            </div>
          </div>

        </div>
      </section></>
  )
}

export default AddSection
