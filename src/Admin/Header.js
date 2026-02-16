import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <>
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
          </a>
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="/">
                <i className="bi bi-search" />
              </a>
            </li>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"></ul>
            <button className="primary1" onClick={handlelogout}>
              Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
