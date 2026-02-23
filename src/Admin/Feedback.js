import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Feedback() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getFeedback")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteFeedback = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Would you like to delete this feedback?"
    );
    if (confirmDelete) {
      axios
        .delete(`https://go-services-ten.vercel.app/delete/feedback/${id}`)
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
              <li className="breadcrumb-item active">Feedback</li>
            </ol>
          </nav>
        </div>
        <h1 className="text-center">Feedback Information</h1>
        <br />
        <div className="row">
          {users.map((user, index) => (
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
                  onClick={() => deleteFeedback(user._id)}
                  style={{ zIndex: "1" }}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Subject: {user.subject}</p>
                  <p className="card-text">Message: {user.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Feedback;
