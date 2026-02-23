import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function EditWorkers() {
  const [workers, setWorkers] = useState([]);

  const [selectedWorker, setSelectedWorker] = useState({
    image: null,
    workername: "",
    charges: "",
    information: "",
    experince: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getWorkers")
      .then((response) => {
        console.log("Received data:", response.data);
        setWorkers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching workers:", error);
      });
  }, []);

  const getdata = () => {
    axios
      .get("https://go-services-ten.vercel.app/getWorkers")
      .then((response) => setWorkers(response.data))
      .catch((error) => console.log(error));
  };
  const deleteWorker = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Would you like to delete this worker?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`https://go-services-ten.vercel.app/delete/deleteworker/${id}`);
        setWorkers(workers.filter((worker) => worker._id !== id));
      } catch (error) {
        console.log("Error deleting worker:", error);
      }
    }
  };

  const handleEdit = (service) => {
    setSelectedWorker(service);
    setImagePreview(service.image); // Set image preview
  };

  const handleSaveChanges = async () => {
    try {
      const {
        workername,
        email,
        image,
        password,
        charges,
        information,
        experince,
      } = selectedWorker;

      const formData = new FormData();
      formData.append("workername", workername);
      formData.append("email", email);
      formData.append("image", image); // Assuming image is already a File object
      formData.append("password", password);
      formData.append("charges", charges);
      formData.append("information", information);
      formData.append("experince", experince);

      await fetch(
        `https://go-services-ten.vercel.app/api/notes/updateworker/${selectedWorker._id}`,
        {
          method: "PUT", // Change the method to PUT
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
          body: formData, // Pass the formData object as the body
        }
      );
      // navigate("/EditWorkers");
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
    setSelectedWorker({ ...selectedWorker, [e.target.name]: e.target.value });
  };

  const handlefile = (e) => {
    setSelectedWorker({
      ...selectedWorker,
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
              <li className="breadcrumb-item active">Edit Workers</li>
            </ol>
          </nav>
        </div>

        <div className="container">
          <h2>Workers</h2>
          <div className="row">
            {workers.map((worker) => (
              <div key={worker._id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={worker.image}
                    className="card-img-top"
                    alt={worker.category}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{worker.workername}</h5>
                    <p className="card-text">Email: {worker.email}</p>
                    <p className="card-text">Charges: {worker.charges}</p>
                    <p className="card-text">
                      Information: {worker.information}
                    </p>
                    <p className="card-text">experince: {worker.experince}</p>
                    <button
                      type="button"
                      className="btn btn-success me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => handleEdit(worker)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteWorker(worker._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
                      Edit Worker
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
                      <div class="mb-3">
                        <label for="workername" class="form-label">
                          Worker Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="workername"
                          name="workername"
                          onChange={onchange}
                          value={selectedWorker?.workername}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="charges" class="form-label">
                          Worker charges
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="charges"
                          name="charges"
                          onChange={onchange}
                          value={selectedWorker?.charges}
                        />
                      </div>

                      <div class="mb-3">
                        <label for="experince" class="form-label">
                          Worker Experince
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="experince"
                          name="experince"
                          onChange={onchange}
                          value={selectedWorker?.experince}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="experince" class="form-label">
                          Information
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="information"
                          name="information"
                          onChange={onchange}
                          value={selectedWorker?.information}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="serviceImage" class="form-label">
                          Service Image
                        </label>
                        <input
                          type="file"
                          class="form-control"
                          id="serviceImage"
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
        </div>
      </main>

      <Footer />
    </>
  );
}

export default EditWorkers;
