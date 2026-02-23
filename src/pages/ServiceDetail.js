import  { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://go-services-ten.vercel.app/getService/${id}`) // Replace with your backend endpoint to fetch service details by ID
        .then((response) => setService(response?.data?.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <>
      <div>
        {service ? (
          <div>
            <div
              className="container-fluid page-header py-5 mb-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="container text-center py-5">
                <h1 className="display-4 text-white animated slideInDown mb-4">
                  Services
                </h1>
                <nav aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                      <a className="text-white" href="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-white" href="/Service">
                        Servicedetail
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item text-primary active"
                      aria-current="page"
                    >
                      {service.category}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div>
              <section id="about" className="about pt-5">
                <div className="container">
                  <div className="border-start border-5 border-primary ps-4">
                    <h1 className="display-6 mb-3">Service Details</h1>
                  </div>
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4">
                      <img
                        src={service.image}
                        className="img-fluid"
                        alt={service.category}
                      />
                    </div>
                    <div className="col-lg-5 content">
                      <h2>{service?.category}</h2>
                      {/* <p className="fst-italic py-3">{service?.information}</p> */}
                      <div className="row py-3">
                        <div className="col-lg-6 py-3">
                          <ul>
                            <li>
                              <i className="bi bi-chevron-right" />{" "}
                              <strong>Type:</strong>{" "}
                              <span>{service?.category}</span>
                            </li>

                            <li>
                              <i className="bi bi-chevron-right" />{" "}
                              <strong>Info:</strong>{" "}
                              <span>{service?.information}</span>
                            </li>
                            <li>
                              <i className="bi bi-chevron-right" />{" "}
                              <strong>Website:</strong>{" "}
                              <span>
                                <Link to="/">www.Goservices.com </Link>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="py-5">
              <section id="recent-blog-posts" className="recent-blog-posts">
                <div className="container" data-aos="fade-up">
                  <div className="border-start border-5 border-primary ps-4">
                    <h1 className="display-6 mb-3">Workers</h1>
                  </div>
                  <div className="row gy-5">
                    {service.workers.map((e) => (
                      <div
                        className="col-xl-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <Link className="small" to={`/workerdetail/${e?._id}`}>
                          <div className="post-item position-relative h-100">
                            <div className="post-img position-relative overflow-hidden">
                              <img
                                src={e?.image}
                                className="img-fluid"
                                alt=""
                                // style={{
                                //   height: "250px",
                                //   width: "100%",
                                // }}
                              />
                            </div>
                            <div className="post-content d-flex flex-column">
                              <h3 className="post-title">{e?.workername}</h3>
                              <div className="meta d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  Charges:
                                  <span className="ps-2">{e?.charges}</span>
                                </div>
                              </div>
                              <hr />
                              {/* <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a> */}
                              <div className="readmore">
                                READ MORE
                                <i className="fa fa-arrow-right ms-3" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                    {/* End post item */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default ServiceDetail;
