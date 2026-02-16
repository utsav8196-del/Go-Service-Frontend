import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Editservice() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState({
    category: "",
    information: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/getServices")
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  const getdata = () => {
    axios
      .get("http://localhost:5000/getServices")
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  };

  const deleteService = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Would you like to delete this service?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/delete/Workeredit/${id}`);
        setServices(services.filter((service) => service._id !== id));
      } catch (error) {
        console.log("Error deleting service:", error);
      }
    }
  };

  const handleEdit = (service) => {
    setSelectedService(service);
    setImagePreview(service.image); // Set image preview
  };

  const handleSaveChanges = async () => {
    try {
      const { category, information, image } = selectedService;

      const formData = new FormData();
      formData.append("category", category);
      formData.append("information", information);
      formData.append("image", image); // Assuming image is already a File object

      await fetch(
        `http://localhost:5000/api/notes/updateService/${selectedService._id}`,
        {
          method: "PUT", // Change the method to PUT
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
          body: formData, // Pass the formData object as the body
        }
      );
      navigate("/editservice");
    } catch (error) {
      console.log("Error updating service:", error);
    }
    toast.success(`Data Changed Successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const onchange = (e) => {
    setSelectedService({ ...selectedService, [e.target.name]: e.target.value });
  };

  const handlefile = (e) => {
    setSelectedService({
      ...selectedService,
      [e.target.name]: e.target.files?.[0],
    });
    setImagePreview(URL.createObjectURL(e.target.files[0]));
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
              <li className="breadcrumb-item active">Services</li>
            </ol>
          </nav>
        </div>
        <h1 className="text-center">Edit Services</h1>
        <br />
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.category}
                    style={{ height: "250px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.category}</h5>
                    <p className="card-text">{service.information}</p>
                    <div className="d-flex ">
                      <button
                        type="button"
                        className="btn btn-success me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => handleEdit(service)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteService(service._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="modal-dialog modal-dialog-centered">
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Edit Services
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={getdata}
                  ></button>
                </div>
                <div class="modal-body">
                  <form method="POST" encType="multipart/form-data">
                    <h1 className="text-center">Edit Services</h1>
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
                      {imagePreview && (
                        <img
                          src={imagePreview}
                          alt="Selected"
                          style={{ width: "100px", marginTop: "10px" }}
                        />
                      )}
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Services Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        onChange={onchange}
                        value={selectedService.category}
                        placeholder="Services Name"
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
                        onChange={onchange}
                        minLength={5}
                        required
                        value={selectedService.information}
                        placeholder="Your Email"
                      />
                    </div>
                    <br />
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={handleSaveChanges}
                    >
                      Save changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Editservice;
