import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClearAuth } from '../lib/LocalStorage';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';

interface AuxProps {
    // children: ReactNode | ReactElement;
}


const Header: React.FC<AuxProps> = () => {
    const { ClientData } = useSelector((state: RootState)=> state.client)
    const navigate = useNavigate();
    return (
        <div className="navbar-custom">
            <div className="topbar">
                <div className="topbar-menu d-flex align-items-center gap-1">
                    {/* Topbar Brand Logo */}
                    <div className="logo-box">
                        {/* Brand Logo Light */}
                        <Link to={'/'} className="logo-light">
                            <img
                                src="assets/images/logo-light.png"
                                alt="logo"
                                className="logo-lg"
                            />
                            <img
                                src="assets/images/logo-sm.png"
                                alt="small logo"
                                className="logo-sm"
                            />
                        </Link>
                        {/* Brand Logo Dark */}
                        <Link to={'/'} className="logo-dark">
                            <img
                                src="assets/images/logo-dark.png"
                                alt="dark logo"
                                className="logo-lg"
                            />
                            <img
                                src="assets/images/logo-sm.png"
                                alt="small logo"
                                className="logo-sm"
                            />
                        </Link>
                    </div>
                    {/* Sidebar Menu Toggle Button */}
                    {/* <button className="button-toggle-menu">
                        <i className="mdi mdi-menu" />
                    </button> */}
                    {/* Dropdown Menu */}

                </div>
                <ul className="topbar-menu d-flex align-items-center">
                    {/* User Dropdown */}
                    <li className="dropdown">
                        <Link
                            className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
                            data-bs-toggle="dropdown"
                            to="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <img
                                src={ClientData?.userImage}
                                alt="user"
                                className="rounded-circle"
                            />
                            <span className="ms-1 d-none d-md-inline-block">
                                {ClientData?.fristName} {ClientData?.lastName} <i className="mdi mdi-chevron-down" />
                            </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <Link
                                to="#"
                                className="dropdown-item notify-item"
                            >
                                <i className="fe-user" />
                                <span>My Account</span>
                            </Link>
                            <div className="dropdown-divider" />
                            {/* item*/}
                            <button
                                className="dropdown-item notify-item"
                                onClick={() => {
                                    ClearAuth()
                                    navigate('/auth/logout')
                                    // dispatch(logoutClient())
                                }}
                            >
                                <i className="fe-log-out" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;