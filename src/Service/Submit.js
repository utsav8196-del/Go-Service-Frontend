import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Submit() {
  const context = useContext(noteContext);
  const { addbooking } = context;
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    userName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });

  console.log("formData", formData);

  const { date, time, userName, address, city, state, zip, phone, email } =
    formData;

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true); // Set validated to true to display validation errors
    } else {
      // Check if any required fields are empty
      if (
        !formData.date ||
        !formData.time ||
        !formData.userName ||
        !formData.address ||
        !formData.city ||
        !formData.state ||
        !formData.zip ||
        !formData.phone ||
        !formData.email
      ) {
        // Display an error message using toast
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
        return; // Prevent form submission
      }
      // If all required fields are filled, proceed with form submission
      addbooking(
        formData.date,
        formData.time,
        formData.userName,
        formData.address,
        formData.city,
        formData.state,
        formData.zip,
        formData.phone,
        formData.email
      );
      setFormData({
        date: "",
        time: "",
        userName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
      });
      toast.success(`Message Sent Successfully..`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setValidated(false); // Reset validation status
      navigate("/Payment");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      handleStateChange(e); // Call handleStateChange for state selection
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setFormData({ ...formData, state }); // Update state in form data
    setSelectedState(state);

    const filteredCities = mockCityData[state] || [];
    setCities(filteredCities);
  };

  const getToday = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/getcart", {
          userId: localStorage.getItem("userId"),
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const mockCityData = {
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Rajahmundry",
      "Tirupati",
      "Kadapa",
      "Kakinada",
    ],
    "Arunachal Pradesh": [
      "Itanagar",
      "Naharlagun",
      "Tawang",
      "Bomdila",
      "Pasighat",
      "Ziro",
      "Daporijo",
      "Tezu",
      "Roing",
    ],
    Assam: [
      "Guwahati",
      "Silchar",
      "Dibrugarh",
      "Jorhat",
      "Nagaon",
      "Tinsukia",
      "Tezpur",
      "Bongaigaon",
      "Dhubri",
    ],
    Bihar: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Purnia",
      "Darbhanga",
      "Bihar Sharif",
      "Arrah",
      "Begusarai",
    ],
    Chhattisgarh: [
      "Raipur",
      "Bhilai",
      "Bilaspur",
      "Korba",
      "Rajnandgaon",
      "Raigarh",
      "Jagdalpur",
      "Ambikapur",
      "Dhamtari",
    ],
    Goa: [
      "Panaji",
      "Margao",
      "Vasco Da Gama",
      "Ponda",
      "Mapusa",
      "Bicholim",
      "Curchorem",
      "Sanquelim",
      "Valpoi",
    ],
    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Junagadh",
      "Gandhinagar",
      "Anand",
    ],
    Haryana: [
      "Faridabad",
      "Gurgaon",
      "Panipat",
      "Ambala",
      "Yamunanagar",
      "Rohtak",
      "Hisar",
      "Karnal",
      "Sonipat",
    ],
    "Himachal Pradesh": [
      "Shimla",
      "Mandi",
      "Solan",
      "Dharamshala",
      "Kullu",
      "Chamba",
      "Una",
      "Bilaspur",
      "Hamirpur",
    ],
    Jharkhand: [
      "Ranchi",
      "Jamshedpur",
      "Dhanbad",
      "Bokaro Steel City",
      "Deoghar",
      "Phusro",
      "Hazaribagh",
      "Giridih",
      "Ramgarh",
    ],
    Karnataka: [
      "Bangalore",
      "Hubli-Dharwad",
      "Mysore",
      "Gulbarga",
      "Belgaum",
      "Mangalore",
      "Davanagere",
      "Bellary",
      "Shimoga",
    ],
    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kollam",
      "Thrissur",
      "Alappuzha",
      "Palakkad",
      "Malappuram",
      "Kannur",
    ],
    "Madhya Pradesh": [
      "Indore",
      "Bhopal",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Dewas",
      "Satna",
      "Ratlam",
    ],
    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Thane",
      "Nashik",
      "Kalyan-Dombivli",
      "Vasai-Virar",
      "Aurangabad",
      "Solapur",
    ],
    Manipur: [
      "Imphal",
      "Thoubal",
      "Lilong",
      "Mayang Imphal",
      "Kakching",
      "Yairipok",
      "Kumbi",
      "Wangoi",
      "Bishnupur",
    ],
    Meghalaya: [
      "Shillong",
      "Tura",
      "Jowai",
      "Nongstoin",
      "Williamnagar",
      "Baghmara",
      "Resubelpara",
      "Mairang",
      "Nongpoh",
    ],
    Mizoram: [
      "Aizawl",
      "Lunglei",
      "Saiha",
      "Champhai",
      "Kolasib",
      "Serchhip",
      "Khawzawl",
      "Biate",
      "Tlabung",
    ],
    Nagaland: [
      "Kohima",
      "Dimapur",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto",
      "Phek",
      "Mon",
      "Longleng",
    ],
    Odisha: [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Brahmapur",
      "Sambalpur",
      "Puri",
      "Baleshwar",
      "Baripada",
      "Bhadrak",
    ],
    Punjab: [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "Hoshiarpur",
      "Mohali",
      "Batala",
      "Pathankot",
    ],
    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Kota",
      "Bikaner",
      "Ajmer",
      "Udaipur",
      "Bhilwara",
      "Alwar",
      "Bharatpur",
    ],
    Sikkim: [
      "Gangtok",
      "Namchi",
      "Gyalshing",
      "Rangpo",
      "Jorethang",
      "Singtam",
      "Mangan",
      "Ravangla",
      "Soreng",
    ],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tiruppur",
      "Erode",
      "Vellore",
      "Tirunelveli",
    ],
    Telangana: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar",
      "Ramagundam",
      "Khammam",
      "Mahbubnagar",
      "Nalgonda",
      "Adilabad",
    ],
    Tripura: [
      "Agartala",
      "Udaipur",
      "Dharmanagar",
      "Kailasahar",
      "Ambassa",
      "Santirbazar",
      "Khowai",
      "Belonia",
      "Teliamura",
    ],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Ghaziabad",
      "Agra",
      "Meerut",
      "Varanasi",
      "Allahabad",
      "Bareilly",
      "Aligarh",
    ],
    Uttarakhand: [
      "Dehradun",
      "Haridwar",
      "Roorkee",
      "Haldwani",
      "Rudrapur",
      "Kashipur",
      "Rishikesh",
      "Ramnagar",
      "Ranikhet",
    ],
    "West Bengal": [
      "Kolkata",
      "Asansol",
      "Siliguri",
      "Durgapur",
      "Bardhaman",
      "English Bazar",
      "Baharampur",
      "Habra",
      "Kharagpur",
    ],
  };

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    console.log("data", data);
    if (data) {
      setFormData({
        date: data?.data?.date,
        time: data?.data?.time,
        userName: data?.data?.username,
        address: data?.data?.address,
        city: data?.data?.city,
        state: data?.data?.state,
        zip: data?.data?.zip,
        phone: data?.data?.phone,
        email: data?.data?.email,
      });
    }
  }, [data]);

  return (
    <>
      <ToastContainer />
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Booking Summary
          </h1>
        </div>
      </div>
      <div className="card m-4">
        <div className="card-body m-4">
          <h5 className="card-title">Your Details</h5>

          <form
            className={`row g-3 m-4 ${validated ? "was-validated" : ""}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="userName"
                value={userName}
                onChange={handleChange}
                placeholder="Enter Your name..."
                required
              />
              <div className="invalid-feedback">Please choose a User Name.</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                Your Phone no
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Enter Your phone no..."
                required
              />
              <div className="invalid-feedback">Please choose a Phone no.</div>
            </div>
            <div className="col-12">
              <label htmlFor="validationCustom05" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Your Email..."
                required
              />
              <div className="invalid-feedback">Please Enter a Email.</div>
            </div>
            <div className="col-12">
              <label htmlFor="validationCustom05" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                name="address"
                value={address}
                onChange={handleChange}
                placeholder="Enter your address..."
                required
              />
              <div className="invalid-feedback">Please Enter a Address.</div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="validationCustom04">State</label>
                <select
                  className="form-control"
                  id="validationCustom04"
                  value={state}
                  name="state"
                  required
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {indianStates.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  Please select a state or union territory.
                </div>
              </div>
              {selectedState && (
                <div className="col-md-3">
                  <label htmlFor="city">City</label>
                  <select
                    className="form-control"
                    id="city"
                    value={city}
                    name="city"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="col-md-3">
                <label htmlFor="validationCustom05">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  placeholder="Zip"
                  name="zip"
                  onChange={handleChange}
                  value={zip}
                  pattern="[0-9]*"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid zip (numbers only).
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="validationCustom05">Date</label>
              <div className="input-group date" id="datepicker">
                <input
                  type="date"
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                  name="date"
                  value={date}
                  onChange={handleChange}
                  min={getToday()} // Set minimum date to today
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom07">Time</label>
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
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary py-3 px-5" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Submit;
