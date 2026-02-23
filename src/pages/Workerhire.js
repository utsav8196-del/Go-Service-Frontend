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

  const {
    firstname,
    lastname,
    address,
    email,
    state,
    city,
    zip,
    phone,
    date,
    gender,
    jobposition,
    experience,
    image,
    startdate,
    salary,
  } = formData;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true); // Set validated to true to display validation errors
    } else {
      // Check if any required fields are empty
      if (
        !formData.firstname ||
        !formData.lastname ||
        !formData.address ||
        !formData.email ||
        !formData.state ||
        !formData.city ||
        !formData.zip ||
        !formData.phone ||
        !formData.date ||
        !formData.gender ||
        !formData.jobposition ||
        !formData.experience ||
        !formData.image ||
        !formData.startdate ||
        !formData.salary
      ) {
        setValidated(true);
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
      const form = new FormData();
      form.append("firstname", firstname);
      form.append("lastname", lastname);
      form.append("address", address);
      form.append("email", email);
      form.append("state", state);
      form.append("city", city);
      form.append("zip", zip);
      form.append("phone", phone);
      form.append("date", date);
      form.append("gender", gender);
      form.append("jobposition", jobposition);
      form.append("experience", experience);
      form.append("image", image);
      form.append("startdate", startdate);
      form.append("salary", salary);

      try {
        const response = await fetch(
          `https://go-services-ten.vercel.app/api/notes/addhires`,
          {
            method: "POST",
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
            body: form,
          }
        );
        console.log("form", form);
        if (response.ok) {
          // Check if response status is ok
          toast.success(`Send Application successfully.`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setFormData({
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
        } else {
          throw new Error("Failed to Send Application.");
        }
      } catch (error) {
        // Handle errors
        toast.error("Failed to Send Application.", {
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
    setValidated(false); // Reset validation status
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      handleStateChange(e); // Call handleStateChange for state selection
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handlefile = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files?.[0], // Storing all selected files in an array
    });
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setFormData({ ...formData, state }); // Update state in form data
    setSelectedState(state);

    const filteredCities = mockCityData[state] || [];
    setCities(filteredCities);
  };


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

  const [setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  return (
    <>
      <ToastContainer />
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Worker Hire
          </h1>
        </div>
      </div>
      <div className="card m-4">
        <div className="card-body m-4">
          <h5 className="card-title">Do You Have a Job ?</h5>

          <form
            className={`row g-3 m-4 ${validated ? "was-validated" : ""}`}
            noValidate
            method="POST"
            encType="multipart/form-data"
          >
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="firstname"
                value={firstname}
                onChange={handleChange}
                placeholder="Enter First name..."
                required
              />
              <div className="invalid-feedback">Please Enter a First name*</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder="Enter Last name..."
                required
              />
              <div className="invalid-feedback">Please Enter a Last name*</div>
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
                placeholder="Enter Your Address..."
                required
              />
              <div className="invalid-feedback">Please Enter a Address*</div>
            </div>

            <div className="col-12">
              <label htmlFor="validationCustom05" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="validationCustom05"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your Email..."
                required
              />
              <div className="invalid-feedback">Please Enter a Email*</div>
            </div>

            <div className="col-md-4">
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

            <div className="col-md-4">
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
              <div className="invalid-feedback">Please select a city*</div>
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom05">Zip</label>
              <input
                type="number"
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

            <div className="col-md-4">
              <label htmlFor="validationCustom05">Phone no</label>
              <input
                type="number"
                className="form-control"
                id="validationCustom05"
                placeholder="Enter a Phone number..."
                name="phone"
                onChange={handleChange}
                value={phone}
                pattern="[0-9]*"
                required
              />
              <div className="invalid-feedback">
                Please Enter a phone number*
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom05">Date of Birth</label>
              <div className="input-group date" id="datepicker">
                <input
                  type="date"
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                  name="date"
                  value={date}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Date of Birth*
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="city">Gender</label>
              <select
                className="form-control"
                id="city"
                value={gender}
                name="gender"
                required
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="invalid-feedback">Please Select a Gender*</div>
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom05">Job Position</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                placeholder="Enter Your Job Position..."
                name="jobposition"
                onChange={handleChange}
                value={jobposition}
                required
              />
              <div className="invalid-feedback">
                Please Enter a Job Position*
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom05">Experience</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                placeholder="Enter Your Experience..."
                name="experience"
                onChange={handleChange}
                value={experience}
                pattern="[0-9]*"
                required
              />
              <div className="invalid-feedback">Please Enter a Experience*</div>
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom05">Select Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                placeholder="Enter Your Experience..."
                name="image"
                onChange={handlefile}
                required
              />
              <div className="invalid-feedback">Please Enter a Image*</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="validationCustom05">Start Date..</label>
              <div className="input-group date" id="datepicker">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Select Your Start Date..."
                  name="startdate"
                  value={startdate}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Select a Start Date*
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="validationCustom07">Salary Compression</label>
              <div className="input-group time">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Expected salary..."
                  name="salary"
                  value={salary}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter salary compression*
                </div>
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
              <button
                className="btn btn-primary py-3 px-5"
                onClick={handleSubmit}
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Workerhire;
