import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebarworker() {

    const { pathname } = useLocation();

    return (
        <>
            {/* ======= Sidebar ======= */}
            <aside id="sidebar" className="sidebar">
                      <ul className="sidebar-nav" id="sidebar-nav">
                    <Link
                        to="/Workeradmin"
                        className={`nav-item nav-link ${pathname === "/Workeradmin" ? "active" : ""
                            }`}
                    ><i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        to="/Workeredit"
                        className={`nav-item nav-link ${pathname === "/Workeredit" ? "active" : ""
                            }`}
                    ><i className="bi bi-wrench" /><span>Workers</span>
                    </Link>

                </ul>
            </aside>{/* End Sidebar*/}
        </>
    )
}

export default Sidebarworker