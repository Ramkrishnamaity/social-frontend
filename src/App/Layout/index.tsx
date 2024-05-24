import React, { useCallback, useEffect } from 'react';
import LeftSideBar from './LeftSideBar';
import Header from './Header';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { CheckingToken } from '../lib/LocalStorage';
import { useDispatch } from 'react-redux';
import { setClientLogin } from '../Store/Client';
interface AuxProps {
  // children: ReactNode | ReactElement;
}


const Layout: React.FC<AuxProps> = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const chkAuth = useCallback(() => {
    CheckingToken()
      .then((data) => {
        if (data === undefined && !data) {
          navigate("/auth/login")
        } else {
          dispatch(setClientLogin(data))
        }
      })
  }, [navigate, dispatch])
  

  useEffect(() => {
    chkAuth();
  }, [chkAuth])


  return (
    <div id="wrapper">
      {/* ========== Left Sidebar Start ========== */}
      <LeftSideBar />
      {/* Left Sidebar End */}
      {/* ============================================================== */}
      {/* Start Page Content here */}
      {/* ============================================================== */}

      <div className="content-page">
        {/* ========== Topbar Start ========== */}
        <Header />
        {/* ========== Topbar End ========== */}

        {/* content */}
        <div className="content">
          <Outlet />
        </div>


        {/* Footer Start */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                {/* <div>
                  {" "}
                  © Ubold -{" "}
                  <a href="https://coderthemes.com/" target="_blank">
                    Coderthemes.com
                  </a>
                </div> */}
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-flex gap-4 align-item-center justify-content-md-end footer-links">
                  <Link to="#">About</Link>
                  <Link to="#">Support</Link>
                  <Link to="#">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end Footer */}
      </div>


      {/* ============================================================== */}
      {/* End Page content */}
      {/* ============================================================== */}
    </div>


  );
};

export default Layout;
