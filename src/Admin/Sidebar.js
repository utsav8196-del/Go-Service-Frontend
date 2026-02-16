import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <>
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <Link
            to="/Admin/dashboard"
            className={`nav-item nav-link ${
              pathname === "/Admin/dashboard" ? "active" : ""
            }`}
          >
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </Link>

          <li className="nav-item">
            <Link
              className="nav-link "
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              to="#"
            >
              <i className="bi bi-journal-text"></i>
              <span>Services</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="forms-nav"
              className="nav-content collapse show"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/Services">
                  <span>Add more services</span>
                </Link>
              </li>
              <li>
                <Link to="/editservice">
                  <span>Edit services</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link "
              data-bs-target="#forms-nav1"
              data-bs-toggle="collapse"
              to="#"
            >
              <i className="bi bi-journal-text"></i>
              <span>Workers</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="forms-nav1"
              className="nav-content collapse show"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/Addworker">
                  <span>Add more worker</span>
                </Link>
              </li>
              <li>
                <Link to="/EditWorkers">
                  <span>Edit worker</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* <Link
            to="/Feedback"
            className={`nav-item nav-link ${
              pathname === "/Feedback" ? "active" : ""
            }`}
          >
            <i className="bi bi-person" />
            <span>Feedback</span>
          </Link> */}

          <Link
            to="/Contacts"
            className={`nav-item nav-link ${
              pathname === "/Contacts" ? "active" : ""
            }`}
            // onClick={() => ref.current.complete()}
          >
            <i className="bi bi-envelope" />
            <span>Contact</span>
          </Link>
          <Link
            to="/bookingtwo"
            className={`nav-item nav-link ${
              pathname === "/booking" ? "active" : ""
            }`}
            // onClick={() => ref.current.complete()}
          >
            <i class="bi bi-bookmark-check"></i>
            <span>Appointment</span>
          </Link>
          <Link
            to="/workerrequest"
            className={`nav-item nav-link ${
              pathname === "/workerrequest" ? "active" : ""
            }`}
            // onClick={() => ref.current.complete()}
          >
            <i class="far fa-address-card"></i>
            <span>Job request</span>
          </Link>
        </ul>
      </aside>
      {/* End Sidebar*/}
    </>
  );
}

export default Sidebar;
