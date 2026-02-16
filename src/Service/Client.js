import { Link } from "react-router-dom";

function Client() {

  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Client Details
          </h1>
        </div>
      </div>
      <div>
        <section id="about" className="about pt-5">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img
                  src="/img/worker/home-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-5 content">
                <h2>Professional Home Cleaner from India</h2>
                <p className="fst-italic py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Type:</strong> <span>Home Cleaner</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Website:</strong>{" "}
                        <span>www.goservices.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Worker:</strong> <span>Available</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>City:</strong> <span>Gujrat, INDIA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Rating:</strong>{" "}
                        <div>
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="d-grid gap-2 d-md-flex m-3 justify-content-md-start">
                  <Link to="/datetime" className="btn btn-primary py-2 px-3">Continue Booking..</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Client;
