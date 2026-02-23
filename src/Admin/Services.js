// import {useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// function Services() {
//   const [services, setServices] = useState({
//     category: "",
//     information: "",
//     image: null,
//   });

//   const handleclick = async (e) => {
//     e.preventDefault();
//     // Check if any required fields are empty
//     if (!services.category || !services.information) {
//       // Display an error message using toast
//       toast.error("Category and information are required.", {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//       return; // Prevent form submission
//     }
//     // If all required fields are filled, proceed with form submission

//     const formData = new FormData();
//     formData.append("category", services.category);
//     formData.append("information", services.information);
//     formData.append("image", services.image);

//     try {
//       const response = await fetch(
//         `https://go-services-ten.vercel.app/api/notes/addservices`,
//         {
//           method: "POST",
//           headers: {
//             "auth-token": localStorage.getItem("token"),
//           },
//           body: formData,
//         }
//       );
//       const data = await response.json(); // Parse response data
//       if (response.ok) {
//         // Check if response status is ok
//         toast.success(`Service added successfully.`, {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         });
//         setServices({ category: "", information: "" });
//       } else {
//         // If response status is not ok, display error message
//         throw new Error(data.message || "Failed to add service.");
//       }
//     } catch (error) {
//       // Handle errors
//       toast.error(error.message || "Failed to add service.", {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//     }
//     setServices({ category: "", information: "" });
//   };

//   const onchange = (e) => {
//     setServices({ ...services, [e.target.name]: e.target.value });
//   };

//   const handlefile = (e) => {
//     setServices({
//       ...services,
//       [e.target.name]: e.target.files?.[0], // Storing all selected files in an array
//     });
//   };

//   return (
//     <>
//       <Header />
//       <Sidebar />

//       <main id="main" className="main">
//         <div className="pagetitle">
//           <h1>Dashboard</h1>
//           <nav>
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item">
//                 <Link to="/Admin/dashboard">Home</Link>
//               </li>
//               <li className="breadcrumb-item active">Dashboard</li>
//             </ol>
//           </nav>
//         </div>
//         {/* End Page Title */}
//         <form method="POST" encType="multipart/form-data">
//           <h1 className="text-center">Add More Services</h1>
//           <br />
//           <div className="form-group">
//             <label htmlFor="exampleFormControlFile1">Image </label>
//             <input
//               type="file"
//               className="form-control-file"
//               id="image"
//               name="image"
//               onChange={handlefile}
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Services Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="category"
//               name="category"
//               onChange={onchange}
//               value={services.category}
//               placeholder="Services Name"
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Information</label>
//             <input
//               type="text"
//               className="form-control"
//               id="information"
//               name="information"
//               onChange={onchange}
//               minLength={5}
//               required
//               value={services.information}
//               placeholder="Information"
//             />
//           </div>
//           <br />
//           <button
//             className="btn btn-primary py-3 px-5"
//             type="submit"
//             onClick={handleclick}
//           >
//             Add Service
//           </button>
//         </form>
//       </main>
//       {/* End #main */}

//       <Footer />
//     </>
//   );
// }

// export default Services;


import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Services() {
  const [services, setServices] = useState({
    category: "",
    information: "",
    image: null,
  });

  const handleclick = async (e) => {
    e.preventDefault();

    if (!services.category || !services.information) {
      toast.error("Category and information are required.", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }

    const formData = new FormData();
    formData.append("category", services.category);
    formData.append("information", services.information);
    if (services.image) {
      formData.append("image", services.image);
    }

    try {
      const response = await fetch(
        "https://go-services-ten.vercel.app/api/notes/addservices",
        {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add service.");
      }

      toast.success("Service added successfully.", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });

      // Reset form
      setServices({
        category: "",
        information: "",
        image: null,
      });
    } catch (error) {
      toast.error(error.message || "Failed to add service.", {
        position: "top-right",
        autoClose: 2000,
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
      image: e.target.files?.[0] || null,
    });
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
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <form onSubmit={handleclick} encType="multipart/form-data">
          <h1 className="text-center">Add More Services</h1>
          <br />

          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              className="form-control-file"
              name="image"
              onChange={handlefile}
            />
          </div>

          <br />

          <div className="form-group">
            <label>Services Name</label>
            <input
              type="text"
              className="form-control"
              name="category"
              value={services.category}
              onChange={onchange}
              placeholder="Services Name"
              required
            />
          </div>

          <br />

          <div className="form-group">
            <label>Information</label>
            <input
              type="text"
              className="form-control"
              name="information"
              value={services.information}
              onChange={onchange}
              minLength={5}
              placeholder="Information"
              required
            />
          </div>

          <br />

          <button className="btn btn-primary py-3 px-5" type="submit">
            Add Service
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default Services;