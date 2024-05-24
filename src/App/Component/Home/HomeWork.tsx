// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import { HomeEdinboro } from '../../lib/Config';
function HomeWork() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  const videoRef = useRef<any>();
  const handlePlay = () => {
    videoRef.current.play();
  }
  return (
    <section className='bsns_wrk_main'>
      <div className='home_content'>
        <div className='bsns_wrk_flx'>
          <div className='bsns_wrk_txt' data-aos="fade-up"
            data-aos-duration="3000">
            <h2>How it work</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
          </div>
          <div className="vdo" data-aos="fade-up"
            data-aos-duration="3000">
            <video muted className='vdowdth' ref={videoRef}>
              <source
                src={HomeEdinboro}
                type="video/mp4"
              />
            </video>
            <div className='vdo_btn'>
              <div className="btn_own" onClick={handlePlay}>
                <i className="fa-solid fa-play"></i>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeWork
