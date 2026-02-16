import { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

function Navbar() {
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const loadingBarRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    axios
      .post("http://localhost:5000/getcart", { userId })
      .then((res) => {
        const user = res.data?.data || {};
        const cartItems = user.cart || [];
        setUserData(user);
        setCartCount(cartItems.length);
      })
      .catch((err) => console.error("Cart fetch error:", err));
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About Us" },
    { path: "/Service", label: "Our Services" },
    { path: "/worker", label: "Worker" },
    { path: "/hire", label: "Hire" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <LoadingBar color="#FDA12B" height={3} ref={loadingBarRef} />

      <div className="navbar-wrapper">
        {/* Top info bar (hidden on mobile) */}
        <div className="navbar-topbar d-none d-lg-block">
          <div className="container-fluid">
            <div className="row gx-0">
              {/* Left Side - Contact Info */}
              <div className="col-lg-7">
                <div className="topbar-left">
                  <div className="topbar-item">
                    <i className="fa fa-phone topbar-icon" />
                    <span className="topbar-text">+012 345 6789</span>
                  </div>
                  <div className="topbar-item">
                    <i className="far fa-envelope topbar-icon" />
                    <span className="topbar-text">info@example.com</span>
                  </div>
                  <div className="topbar-item">
                    <i className="far fa-clock topbar-icon" />
                    <span className="topbar-text">Mon - Fri : 09 AM - 09 PM</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Social Links */}
              <div className="col-lg-5">
                <div className="topbar-right">
                  <a
                    className="social-btn social-btn-facebook"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="social-btn social-btn-twitter"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="social-btn social-btn-linkedin"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="social-btn social-btn-instagram"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg navbar-main">
          <div className="container-fluid">
            {/* Brand Logo */}
            <Link to="/" className="navbar-brand navbar-brand-custom">
              <i className="fa fa-gear fa-spin navbar-icon" />
              <span className="navbar-brand-text">GO Services</span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler navbar-toggler-custom"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Navbar Menu */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-custom ms-auto">
                {/* Navigation Links */}
                {navItems.map((item) => (
                  <li className="nav-item" key={item.path}>
                    <Link
                      to={item.path}
                      className={`nav-link nav-link-custom ${
                        pathname === item.path ? "active" : ""
                      }`}
                      onClick={() => loadingBarRef.current?.complete()}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                {/* Cart Icon */}
                <li className="nav-item nav-item-cart">
                  <Link
                    to="/workercart"
                    className={`nav-link nav-link-cart ${
                      pathname === "/workercart" ? "active" : ""
                    }`}
                    onClick={() => loadingBarRef.current?.complete()}
                  >
                    <i className="bi bi-cart4" />
                    {cartCount > 0 && (
                      <span className="cart-badge">{cartCount}</span>
                    )}
                  </Link>
                </li>

                {/* Profile Dropdown */}
                <li className="nav-item nav-item-profile">
                  <div
                    className="profile-trigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setIsDropdownOpen(!isDropdownOpen);
                      }
                    }}
                  >
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt="User Profile"
                      className="profile-avatar"
                    />
                  </div>

                  {/* Profile Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="profile-dropdown">
                      <div className="profile-header">
                        <img
                          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          alt="User"
                          className="profile-dropdown-avatar"
                        />
                      </div>
                      <div className="profile-body">
                        <p className="profile-username">
                          {userData?.username || "Guest User"}
                        </p>
                        <p className="profile-email">
                          {userData?.email || "Email not available"}
                        </p>
                      </div>
                      <div className="profile-footer">
                        <button
                          className="btn-logout"
                          onClick={handleLogout}
                        >
                          <i className="fa fa-sign-out" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
