import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function WorkerRegister() {
    const navigate = useNavigate();
    const [credential, setcredential] = useState({
        name: "",
        email: "",
        password: "",
        service: "",
    });
    const handlesubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, service } = credential;
        const response = await fetch("http://localhost:5000/api/auth/workerregister", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                service
            }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            navigate("/login");
        } else {
            navigate("/WorkerRegister");
        }
    };

    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value });
    };
    return (
        <>
            <h2 className='form-title text-center mt-4 py-4'>Sign Up For Worker</h2>
            <section className='signup'>
                <div className='container mt-5 text-center'>
                    <div className='signup-form col-md-4 mx-auto border rounded p-4 shadow'>
                        <form className="form-horizontal" onSubmit={handlesubmit}>
                            <div className="form-icon">
                                <i className="fa fa-user-circle"></i>
                            </div>
                            <div className="form-group">
                                <span className="input-icon">
                                    <i className="bi bi-person"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="User Name"
                                    name="name"
                                    id='name'
                                    onChange={onchange}
                                // value={formData.username}
                                // onChange={handleChange}
                                />
                                {/* {errors.username && <span className="text-danger">{errors.username}</span>} */}
                            </div>
                            <div className="form-group">
                                <span className="input-icon">
                                    <i className="bi bi-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    id='email'
                                    onChange={onchange}
                                // value={formData.email}
                                // onChange={handleChange}
                                />
                                {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
                            </div>
                            <div className="form-group">
                                <span className="input-icon">
                                    <i className="bi bi-lock"></i>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    id='password'
                                    onChange={onchange}
                                // value={formData.password}
                                // onChange={handleChange}
                                />
                                {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                            </div>
                            <div className="form-group">
                                <span className="input-icon">
                                    <i class="bi bi-cash"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Charges"
                                    name="charges"
                                    id='charges'
                                    onChange={onchange}
                                // value={formData.password}
                                // onChange={handleChange}
                                />
                                {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                            </div>
                            <div className="form-group">
                                <span className="input-icon">
                                    <i class="bi bi-info-circle"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Information"
                                    name="Information"
                                    id='Information'
                                    onChange={onchange}
                                // value={formData.password}
                                // onChange={handleChange}
                                />
                                {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                            </div>                    
                            <div className="form-group">
                                <span className="input-icon">
                                    <i className="bi bi-check2-circle"></i>
                                </span>
                                <select
                                    className="form-select form-control pt-3 bg-white"
                                    name="service"
                                    id='service'
                                    onChange={onchange}
                                // value={formData.service}
                                // onChange={handleChange}
                                >
                                    <option value="Home Cleaning">Home Cleaning</option>
                                    <option value="Car Washing">Car Washing</option>
                                    <option value={"Car Rental"}>Car Rental</option>
                                    <option value={"Renovation and Painting"}>Renovation and Painting</option>
                                    <option value={"Beauty & Car"}>Beauty & Car</option>
                                    <option value={"Fitness Coach"}>Fitness Coach</option>
                                    <option value={"Car Repair"}>Car Repair</option>
                                    <option value={"Mobile Repair"}>Mobile Repair</option>
                                    <option value={"Mobile Repair"}>Bike Repair</option>
                                    <option value={"Wiring and installation"}>Wiring and installation</option>
                                    <option value={"Interior Design"}>Interior Design</option>
                                    <option value={"Chef Cook"}>Chef Cook</option>
                                    <option value={"Car Towing"}>Car Towing</option>
                                    <option value={"Import & Export"}>Import & Export</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <span className="input-icon">
                                <i class="bi bi-clipboard-check"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Experince"
                                    name="Experince"
                                    id='Experince'
                                    onChange={onchange}
                                // value={formData.password}
                                // onChange={handleChange}
                                />
                                {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                            </div>
                            <div className="form-group">
                                <input
                                    type="file"
                                    className="form-control"
                                    placeholder="Photo"
                                    name="Photo"
                                    id='Photo'
                                    onChange={onchange}
                                // value={formData.password}
                                // onChange={handleChange}
                                />
                                {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                            </div>
                            <button type="submit" className="btn signin my-2">Register Now</button>
                            <h6 className="my-2">
                                Already have an account?{' '}
                                <Link to="/login">Log in</Link>
                            </h6>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WorkerRegister;
