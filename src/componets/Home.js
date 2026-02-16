import React, { useEffect } from "react";
import Facts from "./Facts";
import Facility from "./Facility";
import Team from "./Team";
import Review from "./Review";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/banner-1.jpg" alt="/" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                      <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                        Welcome to GO Services
                      </h5>
                      <h1 className="display-2 text-light mb-3 animated slideInDown">
                        A Daily Routine Services &amp; Renovation Company
                      </h1>
                      <ol className="breadcrumb mb-4 pb-2">
                        <li className="breadcrumb-item fs-5 text-light">
                          Home Cleaning
                        </li>
                        <li className="breadcrumb-item fs-5 text-light">
                          Beauty &amp; Care
                        </li>
                        <li className="breadcrumb-item fs-5 text-light">
                          Bike Service
                        </li>
                      </ol>
                      <Link to="/service" className="btn btn-primary py-3 px-5">
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="/" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                      <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                        Welcome to GO Services
                      </h5>
                      <h1 className="display-2 text-light mb-3 animated slideInDown">
                        Professional Tiling &amp; Painting Services
                      </h1>
                      <ol className="breadcrumb mb-4 pb-2">
                        <li className="breadcrumb-item fs-5 text-light">
                          Interior Design
                        </li>
                        <li className="breadcrumb-item fs-5 text-light">
                          Chef Cook
                        </li>
                        <li className="breadcrumb-item fs-5 text-light">
                          Car Service
                        </li>
                      </ol>
                      <Link to="/service" className="btn btn-primary py-3 px-5">
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Facts />
      <Facility />
      <Team />
      <Review />
    </>
  );
}

export default Home;
