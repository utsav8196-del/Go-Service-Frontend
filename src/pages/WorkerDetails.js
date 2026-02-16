import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function WorkerDetials({ documentId }) {
  const { id } = useParams();
  const [worker, setWorker] = useState();
  // const [workerid, setworkerid] = useState("");
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/getWorkers/${id}`) // Replace with your backend endpoint to fetch worker details by ID
        .then((response) => setWorker(response?.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleaddtocart = (workerId) => {
    const _workerId = workerId;
    const userId = localStorage.getItem("userId");

    console.log({ workerId: _workerId, userId });
    const data = { workerId: _workerId, userId };
    axios
      .post("http://localhost:5000/add-to-cart", data)
      .then((res) => {
        console.log(res.data, "27");
        if (res.data.code === 200) {
          return "hiii";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <div
          className="container-fluid page-header py-5 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container text-center py-5">
            <h1 className="display-4 text-white animated slideInDown mb-4">
              workers
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a className="text-white" href="/">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="/worker">
                    worker
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-primary active"
                  aria-current="page"
                >
                  {worker?.workername}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div>
          <section id="about" className="about pt-5">
            <div className="container">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                  <img
                    src={worker?.image}
                    className="img-fluid"
                    alt={worker?.category}
                  />
                </div>
                <div className="col-lg-5 content">
                  <h2>{worker?.workername}</h2>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Charges:</strong>{" "}
                          <span>{worker?.charges}</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>About:</strong>{" "}
                          <span>{worker?.information}</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Experience:</strong>{" "}
                          <span>{worker?.experince}</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Website:</strong>{" "}
                          <span>www.goworkers.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex m-3 justify-content-md-start">
                    <Link
                      to="/Service"
                      onClick={() => {
                        handleaddtocart(worker._id);
                      }}
                      className="btn btn-primary py-2 px-3"
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WorkerDetials;
