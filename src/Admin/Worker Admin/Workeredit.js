import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import Sidebarworker from "./Sidebarworker";

function EditWorkers() {
    const [workers, setWorkers] = useState([]);
    const [selectedWorker, setSelectedWorker] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/getWorkers")
            .then(response => {
                console.log("Received data:", response.data);
                setWorkers(response.data);
            })
            .catch(error => {
                console.error("Error fetching workers:", error);
            });
    }, []);

    const deleteWorker = async (id) => {
        console.log(id);
        const confirmDelete = window.confirm(
            "Would you like to delete this worker?"
        );
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5000/delete/deleteworker/${id}`);
                setWorkers(workers.filter(worker => worker._id !== id));
            } catch (error) {
                console.log("Error deleting worker:", error);
            }
        }
    };

    const handleEdit = (worker) => {
        setSelectedWorker(worker);
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put(
                `http://localhost:5000/updateWorker/${selectedWorker._id}`,
                selectedWorker
            );
            const modalBackdrop = document.getElementById("staticBackdrop");
            if (modalBackdrop) {
                modalBackdrop.remove();
                window.location.reload();
            }
        } catch (error) {
            console.log("Error updating worker:", error);
        }
    };

    return (
        <>
            <Header/>
            <Sidebarworker/>

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
                        {workers.map(worker => (
                            <div key={worker._id} className="col-md-4 mb-4">
                                <div className="card">
                                    <img
                                        src={worker.image}
                                        className="card-img-top"
                                        alt={worker.category}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{worker.workername}</h5>
                                        <p className="card-text">Email: {worker.email}</p>
                                        <p className="card-text">Charges: {worker.charges}</p>
                                        <p className="card-text">Category: {worker.category}</p>
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
                                        ></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="mb-3">
                                                <label for="workername" class="form-label">
                                                    Worker Name
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="workername"
                                                    value={selectedWorker?.workername}
                                                    onChange={(e) =>
                                                        setSelectedWorker({
                                                            ...selectedWorker,
                                                            workername: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label for="email" class="form-label">
                                                    Worker Email
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="email"
                                                    value={selectedWorker?.email}
                                                    onChange={(e) =>
                                                        setSelectedWorker({
                                                            ...selectedWorker,
                                                            email: e.target.value,
                                                        })
                                                    }
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
                                                    value={selectedWorker?.charges}
                                                    onChange={(e) =>
                                                        setSelectedWorker({
                                                            ...selectedWorker,
                                                            charges: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label for="category" class="form-label">
                                                    Worker category
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="category"
                                                    value={selectedWorker?.category}
                                                    onChange={(e) =>
                                                        setSelectedWorker({
                                                            ...selectedWorker,
                                                            category: e.target.value,
                                                        })
                                                    }
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
                                                    value={selectedWorker?.experince}
                                                    onChange={(e) =>
                                                        setSelectedWorker({
                                                            ...selectedWorker,
                                                            experince: e.target.value,
                                                        })
                                                    }
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
                                                    onChange={(e) => {
                                                        console.log('File selected:', e.target.files[0]);
                                                        setSelectedWorker({
                                                            ...selectedWorker,
                                                            image: e.target.files[0], // Assuming you only allow selecting one image
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={handleSaveChanges}
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}


export default EditWorkers;
