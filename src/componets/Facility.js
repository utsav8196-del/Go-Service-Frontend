import React from "react";
// import { Link } from "react-router-dom";
function Facility() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end mb-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="border-start border-5 border-primary ps-4">
                <h6 className="text-body text-uppercase mb-2">Choose</h6>
                <h1 className="display-6 mb-0">Why Choose us</h1>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <section className="aon-why-choose2-area">
            <div className="container">
              <div className="aon-why-choose2-box">
                <div className="row">
                  {/* COLUMNS LEFT */}
                  <div className="col-lg-6 col-md-12">
                    <div className="aon-why-choose-info">
                      <ul className="aon-why-choose-steps list-unstyled">
                        <li className="d-flex">
                          <div className="aon-w-choose-left aon-icon-effect">
                            <div className="aon-w-choose-icon">
                              <i className="aon-icon m-4">
                                <img
                                  src="http://aonetheme.com/service-finder-demo4/wp-content/uploads/2022/09/1.png"
                                  alt="/"
                                />
                              </i>
                            </div>
                          </div>
                          <div className="aon-w-choose-right">
                            <h4 className="aon-title text-dark">
                              Meet new customers
                            </h4>
                            <p className="text-muted">
                              Suspendisse tincidunt rutrum ante. Vestibulum
                              elementum ipsum sit amet turpis elementum
                              lobortis.
                            </p>
                          </div>
                        </li>
                        <br />
                        <li className="d-flex">
                          <div className="aon-w-choose-left aon-icon-effect">
                            <div className="aon-w-choose-icon">
                              <i className="aon-icon m-4">
                                <img
                                  src="http://aonetheme.com/service-finder-demo4/wp-content/uploads/2021/12/2-1.png"
                                  alt="/"
                                />
                              </i>
                            </div>
                          </div>
                          <div className="aon-w-choose-right">
                            <h4 className="aon-title text-dark">
                              Grow your revenue
                            </h4>
                            <p className="text-muted">
                              Suspendisse tincidunt rutrum ante. Vestibulum
                              elementum ipsum sit amet turpis elementum
                              lobortis.
                            </p>
                          </div>
                        </li>
                        <br />
                        <br />
                        <li className="d-flex">
                          <div className="aon-w-choose-left aon-icon-effect">
                            <div className="aon-w-choose-icon">
                              <i className="aon-icon m-4">
                                <img
                                  src="http://aonetheme.com/service-finder-demo4/wp-content/uploads/2021/12/3-1.png"
                                  alt="/"
                                />
                              </i>
                            </div>
                          </div>
                          <div className="aon-w-choose-right">
                            <h4 className="aon-title text-dark">
                              Build your online reputation
                            </h4>
                            <p className="text-muted">
                              Suspendisse tincidunt rutrum ante. Vestibulum
                              elementum ipsum sit amet turpis elementum
                              lobortis.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* COLUMNS RIGHT */}
                  <div className="col-lg-6 col-md-12 ">
                    <div className="aon-why-choose2-line">
                      <div className="aon-why-choose2-pic">
                        <img
                          src="/img/background-1.jpg"
                          className="img-fluid"
                          alt="Background"
                          style={{
                            height: "500px",
                            marginTop: "-140px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Facility;
