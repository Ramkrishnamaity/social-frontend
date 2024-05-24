import React from 'react'
import { Link } from 'react-router-dom'
import { LogoFont } from '../lib/Config'

interface AuxProps {

}

const FooterFont: React.FC<AuxProps> = () => {
  return (
    <div className='footer-section'>
      <div className='home_content'>
        <div className='ftr_flx'>
          <div className='ftr_flx_wh1'>
            <div className='footer_txtsec1'>
              <div className='nav_img'>
                <img src={LogoFont} alt="/" />
              </div>
              <div className='ftr_txt'>
                <p>Lorem ipsum dolor sit amet consectetur. Lacus ac id amet sit sed in morbi. Morbi auctor eleifend feugiat faucibus tortor quis nibh.</p>
                <p>lorem@mail.com</p>
                <p>+01 1234 5678</p>
              </div>
            </div>
          </div>
          <div className='ftr_flx_wh2'>
            <p>About Us</p>
            <div className='ftr_lst_itm'>
              <ul className='ftr_lst'>
                <li className='ftr_lst_txt'><Link to="/">
                  Lorem Ipsum
                </Link>
                </li>
                <li className='ftr_lst_txt'><Link to="/">
                  Lorem Ipsum
                </Link>
                </li>
                <li className='ftr_lst_txt'><Link to="/">
                  Lorem Ipsum
                </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='ftr_flx_wh2'>
            <p>About Us</p>
            <div className='ftr_lst_itm'>
              <ul className='ftr_lst'>
                <li className='ftr_lst_txt'><Link to="/">
                  Lorem Ipsum
                </Link>
                </li>
                <li className='ftr_lst_txt'><Link to="/">
                  Lorem Ipsum
                </Link>
                </li>
                <li className='ftr_lst_txt'><Link to="/">
                  Lorem Ipsum
                </Link>
                </li>
                <li className='ftr_lst_txt'><Link to="/">
                  Lorem Ipsum
                </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='ftr_flx_wh2'>
            <p>Social Links</p>
            <div className='ftr_lst_itm'>
              <ul className='ftr_lst'>
                <li className='ftr_lst_icon'><Link to="/">
                  <i className="fa-brands fa-facebook"></i>
                  Facebook
                </Link>
                </li>
                <li className='ftr_lst_icon'><Link to="/">
                  <i className="fa-brands fa-twitter"></i>
                  Twitter
                </Link>
                </li>
                <li className='ftr_lst_icon'><Link to="/">
                  <i className="fa-brands fa-linkedin"></i>
                  LinkedIn
                </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterFont
