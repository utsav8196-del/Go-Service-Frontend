import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Workerhire() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    state: "",
    city: "",
    zip: "",
    phone: "",
    date: "",
    gender: "",
    jobposition: "",
    experience: "",
    image: "",
    startdate: "",
    salary: "",
  });

  const { firstname, lastname, address, email, state, city, zip, phone, date, gender, jobposition, experience, startdate, salary } = formData;

  const [cities, setCities] = useState([]);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const mockCityData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kadapa", "Kakinada"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang", "Bomdila", "Pasighat", "Ziro", "Daporijo", "Tezu", "Roing"],
    Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Dhubri"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Arrah", "Begusarai"],
    // ... add other states as needed
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      handleStateChange(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlefile = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files?.[0] });
  };

  const handleStateChange = (stateValue) => {
    setFormData({ ...formData, state: stateValue });
    const filteredCities = mockCityData[stateValue] || [];
    setCities(filteredCities);
  };

  // FORM SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      toast.error("Please fill in all fields correctly.", { autoClose: 2000, theme: "colored" });
      return;
    }

    // Append form data
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const response = await fetch("https://go-services-ten.vercel.app/api/notes/addhires", {
        method: "POST",
        headers: { "auth-token": localStorage.getItem("token") },
        body: data,
      });

      if (response.ok) {
        toast.success("Application sent successfully!", { autoClose: 2000, theme: "colored" });
        setFormData({
          firstname: "", lastname: "", address: "", email: "", state: "", city: "", zip: "",
          phone: "", date: "", gender: "", jobposition: "", experience: "", image: "", startdate: "", salary: ""
        });
        setCities([]);
        setValidated(false);
      } else {
        throw new Error("Failed to send application.");
      }
    } catch (error) {
      toast.error("Failed to send application.", { autoClose: 2000, theme: "colored" });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container text-center py-5">
          <h1 className="display-4 text-white mb-4">Worker Hire</h1>
        </div>
      </div>

      <div className="card m-4">
        <div className="card-body m-4">
          <h5 className="card-title mb-4">Do You Have a Job?</h5>
          <form className={`row g-3 ${validated ? "was-validated" : ""}`} noValidate encType="multipart/form-data">

            {/* FIRST NAME */}
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" name="firstname" value={firstname} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter first name*</div>
            </div>

            {/* LAST NAME */}
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" name="lastname" value={lastname} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter last name*</div>
            </div>

            {/* ADDRESS */}
            <div className="col-12">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" name="address" value={address} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter address*</div>
            </div>

            {/* EMAIL */}
            <div className="col-12">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={email} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter email*</div>
            </div>

            {/* STATE */}
            <div className="col-md-4">
              <label className="form-label">State</label>
              <select className="form-control" name="state" value={state} onChange={(e) => handleStateChange(e.target.value)} required>
                <option value="">Select State</option>
                {indianStates.map((s, i) => <option key={i} value={s}>{s}</option>)}
              </select>
              <div className="invalid-feedback">Please select state*</div>
            </div>

            {/* CITY */}
            <div className="col-md-4">
              <label className="form-label">City</label>
              <select className="form-control" name="city" value={city} onChange={handleChange} required>
                <option value="">Select City</option>
                {cities.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
              <div className="invalid-feedback">Please select city*</div>
            </div>

            {/* ZIP */}
            <div className="col-md-4">
              <label className="form-label">Zip</label>
              <input type="number" className="form-control" name="zip" value={zip} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter zip*</div>
            </div>

            {/* PHONE */}
            <div className="col-md-4">
              <label className="form-label">Phone</label>
              <input type="number" className="form-control" name="phone" value={phone} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter phone*</div>
            </div>

            {/* DOB */}
            <div className="col-md-4">
              <label className="form-label">Date of Birth</label>
              <input type="date" className="form-control" name="date" value={date} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter date of birth*</div>
            </div>

            {/* GENDER */}
            <div className="col-md-4">
              <label className="form-label">Gender</label>
              <select className="form-control" name="gender" value={gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="invalid-feedback">Please select gender*</div>
            </div>

            {/* JOB POSITION */}
            <div className="col-md-6">
              <label className="form-label">Job Position</label>
              <input type="text" className="form-control" name="jobposition" value={jobposition} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter job position*</div>
            </div>

            {/* EXPERIENCE */}
            <div className="col-md-6">
              <label className="form-label">Experience (years)</label>
              <input type="text" className="form-control" name="experience" value={experience} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter experience*</div>
            </div>

            {/* IMAGE */}
            <div className="col-md-6">
              <label className="form-label">Upload Image</label>
              <input type="file" className="form-control" name="image" onChange={handlefile} required />
              <div className="invalid-feedback">Please upload an image*</div>
            </div>

            {/* START DATE */}
            <div className="col-md-6">
              <label className="form-label">Start Date</label>
              <input type="date" className="form-control" name="startdate" value={startdate} onChange={handleChange} required />
              <div className="invalid-feedback">Please select start date*</div>
            </div>

            {/* SALARY */}
            <div className="col-md-12">
              <label className="form-label">Expected Salary</label>
              <input type="text" className="form-control" name="salary" value={salary} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter expected salary*</div>
            </div>

            {/* TERMS */}
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="terms" required />
                <label className="form-check-label" htmlFor="terms">Agree to terms and conditions</label>
                <div className="invalid-feedback">You must agree before submitting.</div>
              </div>
            </div>

            <div className="col-12 text-center">
              <button className="btn btn-primary" onClick={handleSubmit} type="submit">Send Application</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default Workerhire;