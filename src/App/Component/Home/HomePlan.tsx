import React, { useEffect } from 'react'
import crt from "../../images/crt.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
interface AuxProps {

}

const HomePlan: React.FC<AuxProps> = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  const price = [

    {
      text: "Starter",
      text1: "For Individuals",
      price: 49,
    },

    {
      text: "Pro",
      text1: "For Team",
      price: 89,
    },

    {
      text: "Unlimited",
      text1: "For Enterprises",
      price: 199,
    },


  ]
  return (

    <section className='plan_section'>
      <div className='home_content'>

        <div className='plan_txt_box' data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <div className='plan_txt'>
            <h2>Pricing Plan</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s,</p>
          </div>

          <div className='prc_box'>
            <div className='pricing_box_main'>
              {price.map((item, index) => {
                return (
                  <div className='prc_dtl_box_lst' key={index} style={index === 1 ? { width: "100%", boxShadow: "drop-shadow(0px 0px 15px rgba(18, 140, 126, 0.50))", transform: "scale(1.2)" } : {}} >
                    <div className='pricing_box_dtls' >
                      <h5>{item.text}</h5>
                      <p>{item.text1}</p>
                      <h4>$ {item.price}</h4>
                      <div className='subscribe_btn_main sbsrbtn'>
                        <Link to="/" className='subscribe_btn btnscrb'>Subscribe</Link>
                      </div>
                    </div>

                    <div className='lst_itm'>
                      <ul className='lst'>
                        <li className='lst_txt'>
                          <img src={crt} alt="/" />
                          Lorem ipsum dolor sit amet consectetur.
                        </li>
                        <li className='lst_txt'>
                          <img src={crt} alt="/" />
                          Lorem ipsum dolor sit amet consectetur.
                        </li>
                        <li className='lst_txt'>
                          <img src={crt} alt="/" />
                          Lorem ipsum dolor sit amet consectetur.
                        </li>
                        <li className='lst_txt'>
                          <img src={crt} alt="/" />
                          Lorem ipsum dolor sit amet consectetur.
                        </li>
                        <li className='lst_txt'>
                          <img src={crt} alt="/" />
                          Lorem ipsum dolor sit amet consectetur.
                        </li>
                        <li className='lst_txt'>
                          <img src={crt} alt="/" />
                          Lorem ipsum dolor sit amet consectetur.
                        </li>
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default HomePlan
