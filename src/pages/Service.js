import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Service() {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getServices")
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (serviceId) => {
    axios
      .get(`https://go-services-ten.vercel.app/getServiceById/${serviceId}`)
      .then((response) => {
        console.log("Service details:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
      });
  };

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Services
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Our Service
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className=" wow fadeInUp mb-4 d-flex justify-content-between"
            data-wow-delay="0.1s"
          >
            <div className="border-start border-5 border-primary ps-4">
              <h1 className="display-6 mb-0">Our Services</h1>
            </div>
            {/* Search input */}
            <div className="input-group">
              <input
                type="text"
                className="form-control ms-auto border-1 py-2 px-3 text-black"
                placeholder="Search..."
                style={{
                  borderRadius: "20px",
                  maxWidth: "300px",
                  boxShadow: "0 4px 5px black",
                  borderColor: "#FDA12B",
                  fontSize: "15px",
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Render filtered services */}
            {filteredServices.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp d-flex"
                data-wow-delay="0.3s"
                key={index}
              >
                <Link
                  to={`/servicedetail/${service._id}`}
                  className="text-decoration-none card border-1 shadow-lg flex-fill"
                  onClick={() => handleClick(service._id)}
                  style={{ width: "100%" }}
                >
                  <img
                    className="card-img-top"
                    src={
                      `${service.image}`
                    }
                    alt={service.category}
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{service.category}</h5>
                    <p className="card-text">{service.information}</p>
                    <div className="mt-auto">
                      <Link
                        to="#"
                        className="btn btn-primary rounded-circle btn-sm"
                      >
                        <i className="fa fa-arrow-right" /> {/* Add icon */}
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Service() {
//   const [services, setServices] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://go-services-ten.vercel.app/getServices")
//       .then((response) => {
//         console.log("SERVICES DATA:", response.data);
//         setServices(response.data);
//       })
//       .catch((error) => console.log("Error fetching services:", error));
//   }, []);

//   // Filter services based on search query
//   const filteredServices = services.filter((service) =>
//     service.category?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       {/* Header */}
//       <div
//         className="container-fluid page-header py-5 mb-5 wow fadeIn"
//         data-wow-delay="0.1s"
//       >
//         <div className="container text-center py-5">
//           <h1 className="display-4 text-white animated slideInDown mb-4">
//             Services
//           </h1>
//           <nav aria-label="breadcrumb animated slideInDown">
//             <ol className="breadcrumb justify-content-center mb-0">
//               <li className="breadcrumb-item">
//                 <a className="text-white" href="/">
//                   Home
//                 </a>
//               </li>
//               <li
//                 className="breadcrumb-item text-primary active"
//                 aria-current="page"
//               >
//                 Our Service
//               </li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="container-xxl py-5">
//         <div className="container">
//           {/* Header + Search */}
//           <div
//             className="wow fadeInUp mb-4 d-flex justify-content-between"
//             data-wow-delay="0.1s"
//           >
//             <div className="border-start border-5 border-primary ps-4">
//               <h1 className="display-6 mb-0">Our Services</h1>
//             </div>
//             <div className="input-group">
//               <input
//                 type="text"
//                 className="form-control ms-auto border-1 py-2 px-3 text-black"
//                 placeholder="Search..."
//                 style={{
//                   borderRadius: "20px",
//                   maxWidth: "300px",
//                   boxShadow: "0 4px 5px black",
//                   borderColor: "#FDA12B",
//                   fontSize: "15px",
//                 }}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Services Grid */}
//           <div className="row g-4 justify-content-center">
//             {filteredServices.map((service) => (
//               <div
//                 className="col-lg-4 col-md-6 wow fadeInUp d-flex"
//                 data-wow-delay="0.3s"
//                 key={service._id}
//               >
//                 <Link
//                   to={`/servicedetail/${service._id}`}
//                   className="text-decoration-none card border-1 shadow-lg flex-fill"
//                   style={{ width: "100%" }}
//                 >
//                   {/* Image */}
//                   <img
//                     className="card-img-top"
//                     src={
//                       service.image
//                         ? `https://go-services-ten.vercel.app/${service.image}`
//                         : "https://via.placeholder.com/400x200?text=No+Image"
//                     }
//                     alt={service.category || "Service Image"}
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />

//                   {/* Card Body */}
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title">{service.category || "No Category"}</h5>
//                     <p className="card-text">
//                       {service.information || "No information available."}
//                     </p>
//                     <div className="mt-auto">
//                       <button
//                         className="btn btn-primary rounded-circle btn-sm"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           console.log("Clicked service:", service._id);
//                         }}
//                       >
//                         <i className="fa fa-arrow-right" />
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Service;
