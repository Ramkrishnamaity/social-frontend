// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Basemap_img } from '../../lib/Config'
import AOS from 'aos';
import "aos/dist/aos.css";
interface AuxProps {

}

const ContactVisit: React.FC<AuxProps> = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <section className='contact_visit_section'>
            <div className='home_content'>
                <div className='visit_txt_map_flx'>
                    <div className='msn_txt' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5>Our Offices</h5>
                        <h2>Now We’re In 3 Countries <span className='scl_txt'>Visit Us</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
                        <div className='address_box'>
                            <h5>Office Address Here</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s,</p>
                            <div className='cntct_btn_main'>
                                <Link to="/" className="cntct_btn">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className='visit_map' data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Basemap_img} alt="/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactVisit
