import React, { useEffect } from 'react'
import { SclmnAbout, sclbnrAbout } from '../../lib/Config';
import AOS from 'aos';
import "aos/dist/aos.css";
interface AuxProps {

}

const AboutSocial: React.FC<AuxProps> = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    const pricebox = [
        {
            percentage: 99,
            symbol: "%",
            text: "Database",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            percentage: 233,
            symbol: "+",
            text: "App Serves",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            percentage: 13,
            symbol: "k",
            text: "API serves",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            percentage: 17,
            symbol: "+",
            text: "Market Place",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
    ]
    return (
        <>
            <section className='about_page_social'>
                <div className='home_content'>
                    <div className='social_txt_img_flx'>
                        <div className='social_txt' data-aos="fade-up"
                            data-aos-duration="3000">
                            <h2>About Our Company <span className='scl_txt'>Social One</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s,</p>
                        </div>
                        <div className='scl_img' data-aos="fade-up"
                            data-aos-duration="3000">
                            <img src={SclmnAbout} alt="/" />
                        </div>
                    </div>

                    <div className='sclbnr_img' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">
                        <img src={sclbnrAbout} alt="/" />
                    </div>

                    <div className='scl_bnr_box_main_flx' data-aos="fade-up"
                        data-aos-duration="3000">

                        {pricebox.map((item, index) => {
                            return (
                                <div className='scl_bnr_box_main' key={index}>

                                    <div className='scl_bnr_box'>
                                        <h5>{item.percentage + '' + item.symbol}</h5>
                                        <h4>{item.text}</h4>
                                        <p>{item.para}</p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSocial
