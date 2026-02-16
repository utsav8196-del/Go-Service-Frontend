import React, { useState } from "react";
import { Link } from "react-router-dom";

function Datetime() {
  const getToday = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });

  const { date, time } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  // Function to handle date change and show time picker
  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.target.value });
    // Show the time picker
    document.getElementById("timepicker").classList.remove("d-none");
  };

  return (
    <>
      <div
        className="container-fluid page-header py-4 mb-4 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Date & Time Picker{" "}
          </h1>
        </div>
      </div>

              <h3 style={{textAlign:"center"}}>Select Date & Time</h3>
      <div className="container mt-5 text-center" >
        <div className="signup-form col-md-4 mx-auto border rounded p-4 shadow">
          <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-icon">
                <i className="bi bi-clock-fill"></i>
              </div>
            <div className="form-group">
              <div className="input-group date" id="datepicker">
                <input
                  type="date"
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                  min={getToday()} // Set minimum date to today
                  required
                />
              </div>
            </div>
            {/* Time picker initially hidden */}
            <div className="form-group d-none" id="timepicker">
              <div className="input-group time">
                <input
                  type="time"
                  className="form-control"
                  placeholder="HH:MM AM/PM"
                  name="time"
                  value={time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="d-grid gap-3 d-md-flex m-3 justify-content-md-start ">
              <Link className="btn btn-primary" to="/addtocart">
                Go To Cart
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Datetime;
