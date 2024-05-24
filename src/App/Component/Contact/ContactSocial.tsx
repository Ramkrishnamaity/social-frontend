// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css";
function ContactSocial() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <>
            <section className='contact_social_section'>
                <div className='home_content'>
                    <div className='antn_txt_subsc' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='cntntsocl_txt'>
                            <h5>Our Offices</h5>
                            <h4>Let’s Us Keep You Updated Always</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s,</p>
                        </div>
                        <div className='eml_subsc'>
                            <form>
                                <div className='form_box'>
                                    <input type="text" name="Emailaddress" className='form-control frm_bg' placeholder='Enter Your Email ID' />
                                    <div className='sbmt'>
                                        <Link className='sbmt_btn' to="/">Submit</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSocial
