import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.userName.trim()) {
      newErrors.userName = "Username is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log("Form submitted:", formData);
      try {
        const { firstName, lastName, phoneNumber, userName, email, password } =
          formData;

        const response = await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phoneNumber,
              userName,
              email,
              password,
            }),
          }
        );
        const json = await response.json();
        console.log("json", json);
        if (json) {
          localStorage.setItem("token", json.authtoken);
          navigate("/login");
        } else {
          navigate("/signup");
          throw new Error(json.message || "User Already Exists...");
        }
      } catch (error) {
        toast.error(error.message || "User Already Exists...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <h2 className="form-title text-center mt-4 py-4">Registration</h2>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 py-5 border mt-4 rounded p-4 shadow">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.firstName
                          ? "is-invalid"
                          : formData.firstName
                          ? "is-valid"
                          : ""
                      }`}
                      id="fname"
                      autoComplete="off"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. John"
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group first">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.lastName
                          ? "is-invalid"
                          : formData.lastName
                          ? "is-valid"
                          : ""
                      }`}
                      id="lname"
                      name="lastName"
                      value={formData.lastName}
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="e.g. Smith"
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.phoneNumber
                          ? "is-invalid"
                          : formData.phoneNumber
                          ? "is-valid"
                          : ""
                      }`}
                      id="phone"
                      name="phoneNumber"
                      autoComplete="off"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+00 0000 000 0000"
                    />
                    {errors.phoneNumber && (
                      <div className="invalid-feedback">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group first">
                    <label htmlFor="uname">Username</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.userName
                          ? "is-invalid"
                          : formData.userName
                          ? "is-valid"
                          : ""
                      }`}
                      id="uname"
                      autoComplete="off"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      placeholder="e.g. xyz11"
                    />
                    {errors.userName && (
                      <div className="invalid-feedback">{errors.userName}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email
                          ? "is-invalid"
                          : formData.email
                          ? "is-valid"
                          : ""
                      }`}
                      id="email"
                      name="email"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. mailto:john@your-domain.com"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password
                          ? "is-invalid"
                          : formData.password
                          ? "is-valid"
                          : ""
                      }`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Your Password"
                      autoComplete="off"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <input
                  type="submit"
                  value="Register"
                  className="btn px-5 btn-primary"
                />
                <h6 className="my-2">
                  <p className="m-2">
                    Already Have an Account ? <Link to="/login">Login</Link>
                  </p>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
