import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Booking() {
  const [users, setUsers] = useState([]);
  const [approvedBookings, setApprovedBookings] = useState([]);

  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getbooking")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteFeedback = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Would you like to delete this information?"
    );
    if (confirmDelete) {
      axios
        .delete(`https://go-services-ten.vercel.app/delete/booking/${id}`)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };

  const approveBooking = (id) => {
    setApprovedBookings([...approvedBookings, id]);
    // Add logic to send approval request to the server if needed
    // Display success message
    alert("Booking approved successfully!");
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
        <h1 className="text-center">Booked Information</h1>
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
                <div className="card-body">
                  <h5 className="card-title">{user.userName}</h5>
                  <p className="card-text">email:{user.email}</p>
                  <p className="card-text">Phone: {user.phone}</p>
                  <p className="card-text">Address: {user.address}</p>
                  <p className="card-text">City: {user.city}</p>
                  <p className="card-text">State: {user.state}</p>
                  <p className="card-text">Zip: {user.zip}</p>
                  <p className="card-text">Date: {user.date}</p>
                  <p className="card-text">Time: {user.time}</p>
                  <div className="d-flex">
                    <button
                      type="button"
                      className={`btn ${
                        approvedBookings.includes(user._id)
                          ? "btn-secondary"
                          : "btn-success"
                      } me-2`}
                      onClick={() => approveBooking(user._id)}
                      disabled={approvedBookings.includes(user._id)}
                    >
                      {approvedBookings.includes(user._id)
                        ? "Approved"
                        : "Approve"}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteFeedback(user._id)}
                    >
                      Delete
                    </button>
                  </div>
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

export default Booking;
