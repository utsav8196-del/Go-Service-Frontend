// import axios from "axios";
// import  { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Worker() {
//   const [workers, setWorker] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://go-services-ten.vercel.app/getworkers")
//       .then((response) => setWorker(response.data))
//       .catch((error) => console.log(error));
//   }, []);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       navigate("/worker");
//     } else {
//       navigate("/");
//     }
//   }, [navigate]);
//   return (
//     <>
//       <div
//         className="container-fluid page-header py-5 mb-5 wow fadeIn"
//         data-wow-delay="0.1s"
//       >
//         <div className="container text-center py-5">
//           <h1 className="display-4 text-white animated slideInDown mb-4">
//             Workers
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
//                 Workers
//               </li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* worker details */}
//       <section id="recent-blog-posts" className="recent-blog-posts">
//         <div className="container" data-aos="fade-up">
//         <div
//             className=" wow fadeInUp mb-4 d-flex justify-content-between"
//             data-wow-delay="0.1s"
//           >
//             <div className="border-start border-5 border-primary ps-4">
//               <h1 className="display-6 mb-0">Our Workers</h1>
//             </div>
//             {/* Search input */}
//             {/* <div className="input-group">
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
//             </div> */}
//           </div>
//           <div className="row gy-5">
//             {workers.map((worker, index) => (
//               <div
//                 className="col-xl-4 col-md-6"
//                 data-aos="fade-up"
//                 data-aos-delay={100}
//               >
//                 <Link className="small" to={`/workerdetail/${worker?._id}`}>
//                   <div className="post-item position-relative h-100">
//                     <div className="post-img position-relative overflow-hidden">
//                       <img src={worker?.image} className="img-fluid" alt="" />
//                       <span className="post-date">
//                         {" "}
//                         <div>
//                           <span className="fa fa-star checked" />
//                           <span className="fa fa-star checked" />
//                           <span className="fa fa-star checked" />
//                           <span className="fa fa-star checked" />
//                           <span className="fa fa-star" />
//                         </div>
//                       </span>
//                     </div>
//                     <div className="post-content d-flex flex-column">
//                       <h3 className="post-title">{worker?.workername}</h3>
//                       <div className="meta d-flex align-items-center">
//                         <div className="d-flex align-items-center">
//                           <i class="fas fa-rupee-sign"></i>
//                           <span className="ps-2">{worker?.charges}</span>
//                         </div>
//                         <span className="px-3 text-black-50">/</span>
//                         <div className="d-flex align-items-center">
//                           <i class="fas fa-info-circle"></i>
//                           <span className="ps-2">{worker?.information}</span>
//                         </div>
//                       </div>
//                       <hr />
//                       READ MORE
//                       <i className="fa fa-arrow-right ms-3" />
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Worker() {
  const [workers, setWorker] = useState([]);
  const navigate = useNavigate();

  // ✅ Protect Route
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  // ✅ Fetch Workers
  useEffect(() => {
    axios
      .get("https://go-services-ten.vercel.app/getworkers")
      .then((response) => setWorker(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn">
        <div className="container text-center py-5">
          <h1 className="display-4 text-white mb-4">Workers</h1>
          <nav>
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-primary active">
                Workers
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Worker Section */}
      <section className="recent-blog-posts">
        <div className="container">
          <div className="mb-4 d-flex justify-content-between">
            <div className="border-start border-5 border-primary ps-4">
              <h1 className="display-6 mb-0">Our Workers</h1>
            </div>
          </div>

          <div className="row gy-5">
            {workers.map((worker) => (
              <div
                key={worker._id}
                className="col-xl-4 col-md-6"
              >
                <Link className="small" to={`/workerdetail/${worker._id}`}>
                  <div className="post-item position-relative h-100">
                    <div className="post-img position-relative overflow-hidden">
                      <img
                        src={worker.image}
                        className="img-fluid"
                        alt={worker.workername}
                      />
                    </div>

                    <div className="post-content d-flex flex-column">
                      <h3 className="post-title">
                        {worker.workername}
                      </h3>

                      <div className="meta d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="ps-2">
                            {worker.charges}
                          </span>
                        </div>

                        <span className="px-3 text-black-50">/</span>

                        <div className="d-flex align-items-center">
                          <i className="fas fa-info-circle"></i>
                          <span className="ps-2">
                            {worker.information}
                          </span>
                        </div>
                      </div>

                      <hr />

                      <span>
                        READ MORE
                        <i className="fa fa-arrow-right ms-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}