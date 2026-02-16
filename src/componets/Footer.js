import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h1 className="text-white mb-3 text-left d-flex align-items-center">
                <i
                  className="fa fa-gear fa-spin"
                  style={{ fontSize: "50px", color: "#FDA12B" }}
                />
                GO Services
              </h1>
              <p>
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita
              </p>
              <div className="d-flex pt-2">
                {/* <a className="btn btn-square btn-outline-primary me-1" href><i className="fab fa-twitter" /></a> */}
                <Link
                  className="btn btn-outline-primary me-2"
                  to="https://facebook.com/"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link
                  className="btn btn-outline-info me-2"
                  to="https://twitter.com/"
                >
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  className="btn btn-outline-primary me-2"
                  to="https://linkedin.com/"
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  to="https://instagram.com/"
                >
                  {" "}
                  <i className="fab fa-instagram" />{" "}
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p>
                <i className="fas fa-map me-3" />
                395010 Surat, Gujarat, INDIA
              </p>
              <p>
                <i className="fas fa-phone me-3" />
                +91 90543 51477
              </p>
              <p>
                <i className="fa fa-envelope me-3" />
                goservices@gmail.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="/About">
                About Us
              </a>
              <a className="btn btn-link" href="/Contact">
                Contact Us
              </a>
              <a className="btn btn-link" href="/Service">
                Our Services
              </a>
              <a className="btn btn-link" href="/">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="/">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <Link
                  to="/signup"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-1 me-1"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0" style={{color: "sandybrown"}}>
                © <a href="/">GO Services ,</a> All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end" style={{color: "sandybrown"}}>
                Designed By <a href="/">GO service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
