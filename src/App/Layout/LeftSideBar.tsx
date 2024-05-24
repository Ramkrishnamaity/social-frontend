import React, { useEffect, useState } from 'react'
import { RoutesData } from '../lib/DataSet/Global'
import RoutesList from '../Route'
import { Link, useLocation } from 'react-router-dom'
import { ProjecTDarkLogo, ProjecTSmLogo } from '../lib/Config'
import { AcctiveManu } from '../lib/Global'
import { useSelector } from 'react-redux'
import { RootState } from '../Store/store'

type Props = {

}


const LeftSideBar: React.FC<Props> = () => {
    const [subMenu, setSubMenu] = useState<RoutesData[]>([])
    const [menuName, setMenuName] = useState<string>("")
    const currentUrl = useLocation()
    const Role = useSelector((state: RootState) => state.client.ClientData?.type)
    useEffect(() => {
        const CurrentMenu: RoutesData | undefined = RoutesList.find((it) => AcctiveManu(it, currentUrl) === "active");
        if (CurrentMenu) {
            setSubMenu(CurrentMenu?.children);
            setMenuName(CurrentMenu?.name);
        }
    }, [currentUrl, Role])

    return (
        <div className="left-side-menu">
            <div className="sidebar-icon-menu">
                {/* LOGO */}
                <div className="logo-box">
                    {/* Brand Logo Light */}
                    <Link to="/">
                        <img src={ProjecTSmLogo} alt="small logo" height={28} />
                    </Link>
                </div>
                <div className="h-100" data-simplebar="">
                    <ul className="menu" id="two-col-sidenav-main">
                        {
                            RoutesList.map((item, inbox) => {
                                if (Role !== item.role && item.role !== "All") {
                                    return null;
                                }
                                return (
                                    <li className="menu-item" key={inbox}>
                                        <button
                                            data-bs-title={item.name}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="right"
                                            data-bs-trigger="hover"
                                            className={`menu-link ${AcctiveManu(item, currentUrl)} ${menuName === item.name ? "btn btn-white" : "button-cs"}`}
                                            onClick={() => {
                                                setSubMenu(item.children)
                                                setMenuName(item.name)
                                            }}
                                        >
                                            <span className="menu-icon">
                                                {item.icon}
                                            </span>
                                        </button>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
            {/*- Menu */}
            <div className="app-menu">
                {/* Brand Logo */}
                <div className="logo-box">
                    {/* Brand Logo Light */}
                    <Link to="/" className="logo-light">
                        <img
                            src="assets/images/logo-light-2.png"
                            alt="logo"
                            className="logo-lg"
                        />
                        <img
                            src={ProjecTSmLogo}
                            alt="small logo"
                            className="logo-sm"
                        />
                    </Link>
                    {/* Brand Logo Dark */}
                    <Link to="/" className="logo-dark">
                        <img
                            src={ProjecTDarkLogo}
                            alt="dark logo"
                            className="logo-lg"
                        />
                        <img
                            src={ProjecTSmLogo}
                            alt="small logo"
                            className="logo-sm"
                        />
                    </Link>
                </div>
                <div id="two-col-menu" className="h-100" data-simplebar="">
                    <div className="twocolumn-menu-item d-block" id="dashboard">
                        <ul className="menu">
                            <li className="menu-title">{menuName}</li>
                            {
                                subMenu?.map((item, inbox) => {
                                    if (Role !== item.role && item.role !== "All") {
                                        return null;
                                    }
                                    return (
                                        <li className={`menu-item ${item.url === currentUrl.pathname ? "menuitem-active" : ""}`} key={inbox}>
                                            <Link to={item.url ?? item.path} className={`menu-link ${item.path === currentUrl.pathname ? "active" : ""}`}>
                                                <span className="menu-text">{item.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="clearfix" />
        </div>
    )
}
export default LeftSideBar;