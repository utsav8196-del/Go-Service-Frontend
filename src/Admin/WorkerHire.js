import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function WorkerHire() {
  const [application, setapplication] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/gethireapplication")
      .then((response) => setapplication(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteFeedback = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Would you like to Reject this Worker?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:5000/delete/applicationworker/${id}`)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Header />
      <Sidebar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/Admin/dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        <h1 className="text-center my-4">Job Request</h1>
        <div className="container">
          <div className="row">
            {application.map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <div className="d-flex">
                    <img
                      src={service.image}
                      className="card-img-top"
                      alt={service.category}
                      style={{ height: "100px", width: "100px" }}
                    />
                    <h5
                      className="card-title mx-2"
                      style={{ marginTop: "25px" }}
                    >
                      Name: {service.firstname} {service.lastname}
                    </h5>
                  </div>
                  <hr />
                  <div className="card-body">
                    <p className="card-text">Address: {service.address}</p>
                    <p className="card-text">Email: {service.email}</p>
                    <p className="card-text">State: {service.state}</p>
                    <p className="card-text">City: {service.city}</p>
                    <p className="card-text">Zip: {service.zip}</p>
                    <p className="card-text">Phone: {service.phone}</p>
                    <p className="card-text">Date of Birth: {service.date}</p>
                    <p className="card-text">Gender: {service.gender}</p>
                    <p className="card-text">
                      Job Position: {service.jobposition}
                    </p>
                    <p className="card-text">
                      Experience: {service.experience}
                    </p>
                    <p className="card-text">Start Date: {service.startdate}</p>
                    <p className="card-text">
                      Salary Expected: {service.salary}
                    </p>
                    <div className="d-flex">
                      <button
                        className="btn btn-success"
                        style={{ marginRight: "10px" }}
                      >
                        Hire
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => deleteFeedback(service._id)}
                      >
                        Rejected
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Page Title */}
      </main>
      {/* End #main */}

      <Footer />
    </>
  );
}

export default WorkerHire;
