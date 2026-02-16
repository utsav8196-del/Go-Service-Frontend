import  { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function About(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/About");
    } else {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="col-lg-8 m-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="border-start border-5 border-primary ps-4">
          <h6 className="text-body text-uppercase mb-2">Our Gallery</h6>
          <h1 className="display-6 mb-0">Happy Client</h1>
        </div>
      </div>

      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="row gy-2 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <a
                href="/img/about/beauty-2.jpg"
                title="Gallery 1"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/beauty-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/bike-1.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/bike-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/chef-1.jpg"
                title="Gallery 3"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/chef-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/chef-2.jpg"
                title="Gallery 4"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/chef-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/design-1.jpg"
                title="Gallery 5"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/design-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/fitness-1.jpg"
                title="Gallery 6"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/fitness-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/home-1.jpg"
                title="Gallery 7"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/home-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/import-1.jpg"
                title="Gallery 8"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/import-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/mobile-1.jpg"
                title="Gallery 9"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/mobile-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/renovation-1.jpg"
                title="Gallery 10"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/renovation-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/rental-1.jpg"
                title="Gallery 11"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/rental-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a
                href="/img/about/towing-1.jpg"
                title="Gallery 12"
                className="glightbox preview-link"
              >
                <div className="gallery-item h-100">
                  <img
                    src="/img/about/towing-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-angle-expand" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
