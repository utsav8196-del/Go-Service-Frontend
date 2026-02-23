import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getUser")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getServices")
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getWorkers")
      .then((response) => setWorkers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Would you like to delete this feedback?"
    );
    if (confirmDelete) {
      axios
        .delete(`https://go-services-ten.vercel.app/delete/User/${id}`)
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
      <div>
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
          {/* End Page Title */}
          <section className="section dashboard">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="card-body">
                        <h5 className="card-title">Services</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-journal-text" />
                          </div>
                          <div className="ps-3">
                            <h6>{services.length}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Sales Card */}
                  {/* Revenue Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
                      <div className="card-body">
                        <h5 className="card-title">Workers</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-wrench" />
                          </div>
                          <div className="ps-3">
                            <h6>{workers.length}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Revenue Card */}
                  {/* Customers Card */}
                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="card-body">
                        <h5 className="card-title">Customers</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people" />
                          </div>
                          <div className="ps-3">
                            <h6>{users.filter(user => user.email !== 'admin@gmail.com').length}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Customers Card */}

                  <div className="row">
                    <h3>User Data</h3>
                    {users
                      .filter((user) => user.email !== "admin@gmail.com")
                      .map((user, index) => (
                        <div className="col-md-3 my-3" key={index}>
                          <div
                            className="card d-flex flex-column h-100 position-relative"
                            style={{
                              backgroundColor: "#f8f9fa",
                              border: "1px solid #ced4da",
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            }}
                          >
                            <button
                              className="btn btn-danger position-absolute top-0 end-0 m-2 rounded-circle"
                              onClick={() => deleteUser(user._id)}
                              style={{ zIndex: "1" }}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                            <div className="card-body">
                              <h5 className="card-title">{user.name}</h5>
                              <p className="card-text">{user.email}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* End Left side columns */}
            </div>
          </section>
        </main>
        {/* End #main */}
        <a
          href="/#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
