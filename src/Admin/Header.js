import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <>
      {/* ======= Header ======= */}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1 className="m-0 text-center d-flex align-items-center">
              <i className="fa fa-gear fa-spin" style={{ color: "#FDA12B" }} />
              GO Services
            </h1>
            {/* <span className="d-none d-lg-block">GO Services</span> */}
          </a>
          {/* <i className="bi bi-list toggle-sidebar-btn" /> */}
        </div>
        {/* End Logo */}
        {/* <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search" /></button>
                    </form> */}
        {/* </div>End Search Bar */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="/">
                <i className="bi bi-search" />
              </a>
            </li>
            {/* End Search Icon*/}

            {/* End Profile Iamge Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"></ul>
            {/* End Profile Dropdown Items */}
            <button className="primary1" onClick={handlelogout}>
              Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
            </button>
            {/* End Profile Nav */}
          </ul>
        </nav>
        {/* End Icons Navigation */}
      </header>
      {/* End Header */}
    </>
  );
}

export default Header;
