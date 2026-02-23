import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Workersadd() {
  const [services, setServices] = useState({
    image: null,
    workername: "",
    email: "",
    password: "",
    charges: "",
    information: "",
    category: "",
    experince: "",
  });
  const [servicesData, setServicesData] = useState([]);

  console.log("services", servicesData);

  const handleclick = async (e) => {
    e.preventDefault();
    if (!services.workername || !services.email) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", services.image);
    formData.append("workername", services.workername);
    formData.append("email", services.email);
    formData.append("password", services.password);
    formData.append("charges", services.charges);
    formData.append("information", services.information);
    formData.append("category", services.category);
    formData.append("experince", services.experince);

    try {
      const response = await fetch(
        `https://go-services-ten.vercel.app/api/notes/addworker`,
        {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
          body: formData,
        }
      );
      const data = await response.json(); // Parse response data
      if (response.ok) {
        // Check if response status is ok
        toast.success(`Worker added successfully.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setServices({ category: "", information: "" });
      } else {
        // If response status is not ok, display error message
        throw new Error(data.message || "Failed to add worker.");
      }
    } catch (error) {
      // Handle errors
      toast.error(error.message || "Failed to add worker.", {
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
  };

  const onchange = (e) => {
    setServices({ ...services, [e.target.name]: e.target.value });
  };

  const handlefile = (e) => {
    setServices({
      ...services,
      [e.target.name]: e.target.files?.[0], // Storing all selected files in an array
    });
  };

  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getServices")
      .then((response) => setServicesData(response.data))
      .catch((error) => console.log(error));
  }, []);

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
        {/* End Page Title */}
        <form method="POST" encType="multipart/form-data">
          <h1 className="text-center">Add More Worker</h1>
          <br />
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Image </label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              name="image"
              onChange={handlefile}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Worker Name</label>
            <input
              type="text"
              className="form-control"
              id="workername"
              name="workername"
              placeholder="Enter Name"
              onChange={onchange}
              value={services.workername}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              minLength={5}
              onChange={onchange}
              value={services.email}
              placeholder="Enter Email"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              minLength={5}
              onChange={onchange}
              value={services.password}
              placeholder="Enter Password"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Charges</label>
            <input
              type="text"
              className="form-control"
              id="charges"
              name="charges"
              minLength={5}
              onChange={onchange}
              value={services.charges}
              placeholder="Enter Charges"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Information</label>
            <input
              type="text"
              className="form-control"
              id="information"
              name="information"
              minLength={5}
              onChange={onchange}
              value={services.information}
              placeholder="Enter Information"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Select Category</label>
            <select
              className="form-control"
              id="category"
              name="category"
              onChange={onchange}
              value={services.category}
            >
              <option value="">Select</option>
              {servicesData?.map((e) => (
                <option value={e?._id}>{e?.category}</option>
              ))}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Experince</label>
            <input
              type="text"
              className="form-control"
              id="experince"
              name="experince"
              minLength={5}
              onChange={onchange}
              value={services.experince}
              placeholder="Enter Experince"
            />
          </div>
          <br />
          <br />
          <button
            className="btn btn-primary py-3 px-5"
            type="submit"
            onClick={handleclick}
          >
            Add Worker
          </button>
        </form>
      </main>
      {/* End #main */}

      <Footer />
    </>
  );
}

export default Workersadd;
