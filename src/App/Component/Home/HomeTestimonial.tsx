// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cstmr from "../../images/cstmr.png"
import AOS from 'aos';
import "aos/dist/aos.css";
function HomeTestimonial() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  const loop = [1, 2, 3, 4, 5, 6]
  var settings1 = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className='customer_says'>
        <div className='home_content'>
          <div className='cstmr_txt_sys' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='customer_says_txt'>
              <h2 >
                See Our <span className='tst_spn'>Testimonial</span>
              </h2>
            </div>
            <div className='customer_says_box'>
              <Slider {...settings1}>
                {loop.map((item, index) => {

                  return (
                    <div className='customer_says_testimnl' key={index}>
                      <div className='customer_says_testimnl_flx'>
                        <div className='custmer_img'>
                          <img src={cstmr} alt='/' />
                        </div>
                        <div className='cstmr_sys_txt'>
                          <span className='sctmr_str'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>

                          <h4>Lisa</h4>

                          <p>Customer Service Provider</p>
                        </div>
                      </div>
                    </div>
                  )
                })}

              </Slider>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default HomeTestimonial
