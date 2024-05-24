// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import cstmr2 from "../../images/cstmr2.png";
import cstmr3 from "../../images/cstmr3.png";
import cstmr from "../../images/cstmr.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
function AboutTeam() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    const team = [
        {
            image: cstmr,
            name: "Isabella Gómez",
            designation: "CEO- Social One",

        },
        {
            image: cstmr2,
            name: "Amir Bashar",
            designation: "CEO- Social One",

        },
        {
            image: cstmr3,
            name: "Elise Popa",
            designation: "CEO- Social One",

        },
        {
            image: cstmr2,
            name: "Mateo Gómez",
            designation: "CEO- Social One",

        },
        {
            image: cstmr,
            name: "Isabella Gómez",
            designation: "CEO- Social One",

        },
        {
            image: cstmr2,
            name: "Amir Bashar",
            designation: "CEO- Social One",

        },
        {
            image: cstmr,
            name: "Mateo Gómez",
            designation: "CEO- Social One",

        },
        {
            image: cstmr2,
            name: "Isabella Gómez",
            designation: "CEO- Social One",

        },
    ]
    return (
        <>
            <section className='about_page_team'>
                <div className='home_content'>

                    <div className='amnz_txt_main_jnt' data-aos="fade-up"
                            data-aos-duration="3000">
                        <div className='amnz_txt'>
                            <h2>The <span className='scl_txt'>Amazing Team</span> Of Us</h2>
                        </div>

                        <div className='join_tm_main_flx' >
                            {team.map((item, index) => {
                                return (

                                    <div className='join_tm_img' key={index} >
                                        <img src={item.image} alt="/" />
                                        <div className='bg_lght_box'>
                                            <h4>{item.name}</h4>
                                            <p>{item.designation}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='jntmbtn_main'>
                            <Link to="/" className="jntmbtn">Join Our Team</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTeam
