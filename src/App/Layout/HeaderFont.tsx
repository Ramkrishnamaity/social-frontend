// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import $ from "jquery";
import { LogoFont } from "../lib/Config";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

interface AuxProps {

}

export const HeaderFont: React.FC<AuxProps> = () => {
  const { isLogin } = useSelector((state: RootState) => state.client)

  const activeClass = () => {
    $('.nav__link').click(function () {
      $('.nav__link').removeClass("active");
      $(this).addClass("active");
    });
  }
  const [active, setActive] = useState<string>("nav__menu");
  const [icon, setIcon] = useState<string>("nav__toggler");
  const [stickyfix, setStickyfix] = useState<boolean>(false);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  function setFixed() {
    if (window.scrollY > 200) {
      setStickyfix(true);
      // alert("yes");
    }
    else {
      setStickyfix(false)
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <>
      <header className={stickyfix ? 'header_nav fixed' : 'header_nav'}>
        {/* <header className="header_nav"> */}
        <div className="home_content">
          <nav className="nav_own">

            <div className="img_mnu">
              <Link to="/" className="nav__brand nav_img order1">
                <img src={LogoFont} alt="Logo"></img>
              </Link>
              <ul className={active}>
                <li className="nav__item " onClick={activeClass} >
                  <NavLink to="/" onClick={navToggle} className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>
                    HOME
                  </NavLink>

                </li>
                <li className="nav__item">
                  <NavLink to="/about" onClick={navToggle} className={({ isActive }) => isActive ? "nav__link active" : "nav__link "}>
                    ABOUT
                  </NavLink>

                </li>
                <li className="nav__item">
                  <NavLink to="/contact" onClick={navToggle} className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>
                    Contact
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={'https://documenter.getpostman.com/view/29647463/2s9YC8xBEv'} target="_blank" >
                    Documentation
                  </NavLink>
                </li>


                <div className="lgn_icn_nm_txt respnsv">
                  <Link to="auth/signup" className="subscribe_btn lgnrsnv">
                    SignUp
                  </Link>
                </div>

              </ul>
            </div>

            {
              !isLogin ?
                <div className="subscribe_btn_main oder2">
                  <div className="lgn_icn_nm_txt">
                    <Link to="auth/login" className="lgn">
                      Login
                    </Link>
                  </div>
                  <div className="lgn_icn_nm_txt sgnup">
                    <Link to="auth/signup" className="subscribe_btn">
                      SignUp
                    </Link>
                  </div>
                </div> :
                <div className="subscribe_btn_main oder2">
                  <div className="lgn_icn_nm_txt sgnup">
                    <Link to="dashboad" className="subscribe_btn">
                      Dashboad
                    </Link>
                  </div>
                </div>
            }



            <div onClick={navToggle} className={icon} >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>

          </nav>
        </div>
      </header >


    </>
  );
}
