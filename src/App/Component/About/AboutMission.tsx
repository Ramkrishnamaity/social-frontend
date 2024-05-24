// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import cstmr from "../../images/cstmr.png";
import stry_img from "../../images/stry_img.png";
import AOS from 'aos';
import "aos/dist/aos.css";
function AboutMission() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <>
            <section className='about_page_mission'>
                <div className='home_content'>
                    <div className='msn_img_txt_flx'>
                        <div className='msn_txt' data-aos="fade-up"
                            data-aos-duration="3000">
                            <h5>Our Mission</h5>
                            <h2>Build Better For Best <span className='scl_txt'>Economy</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
                            <div className='jntmbtn_main'>
                                <Link to="/" className="jntmbtn">Join Our Team</Link>
                            </div>
                        </div>
                        <div className='msn_img' data-aos="fade-up"
                            data-aos-duration="3000">
                            <img src={cstmr} alt="/" />
                            <div className='ceo_box'>
                                <h4>Isabella Gómez</h4>
                                <p>CEO- Social One</p>
                            </div>
                        </div>
                    </div>
                    <div className='stry_img_txt_flx'>
                        <div className='stry_img' data-aos="fade-up"
                            data-aos-duration="3000">
                            <img src={stry_img} alt="/" />
                        </div>
                        <div className='msn_txt' data-aos="fade-up"
                            data-aos-duration="3000">
                            <h5>Our Story</h5>
                            <h2>We Believe In The <span className='scl_txt'> Power of</span> <span className='scl_txt'>unity</span> And <span className='scl_txt'> Team Work</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
                            <div className='jntmbtn_main'>
                                <Link to="/" className="jntmbtn">Join Our Team</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMission
