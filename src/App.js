import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./componets/Login";
import Registration from "./componets/Registration";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Home from "./componets/Home";
import Worker from "./pages/Worker";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Datetime from "./pages/Datetime";
import Service from "./pages/Service";
import Booking from "./Admin/Booking";
import Submit from "./Service/Submit";
import ScrollToTop from "./componets/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoteState from "./context/notes/NoteState";
import Payment from "./Service/Payment";
import Admin from "./Admin/Admin";
import Services from "./Admin/Services";
import Workers from "./Admin/Workers";
import Contacts from "./Admin/Contacts";
import Editservice from "./Admin/Editservice";
import Workeradmin from "./Admin/Worker Admin/Workeradmin";
import Workeredit from "./Admin/Worker Admin/Workeredit";
import Workersadd from "./Admin/Workersadd";
import ServiceDetail from "./pages/ServiceDetail";
import Feedback from "./Admin/Feedback";
import WorkerDetails from "./pages/WorkerDetails";
import Workercart from "./pages/Workercart";
import EditWorkers from "./Admin/EditWorkers";
import Reset from "./componets/Reset";
import Success from "./componets/Success";
import Workerhire from "./pages/Workerhire";
import WorkerHire from "./Admin/WorkerHire";

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = [
    "/login",
    "/signup",
    "/WorkerRegister",
    "/editservice",
    "/Feedback",
    "/Admin/dashboard",
    "/Services",
    "/Workers",
    "/Contacts",
    "/Addworker",
    "/Workeradmin",
    "/Workeredit",
    "/EditWorkers",
    "/reset",
    "/bookingtwo",
    "/Payment",
    "/workerrequest",
  ];

  const shouldDisplayHeaderFooter = !hideHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <>
      <NoteState>
        <ScrollToTop />

        {shouldDisplayHeaderFooter && <Navbar />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/worker" element={<Worker />} />
          <Route exact path="/workerdetail/:id" element={<WorkerDetails />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/Booking" element={<Booking />} />
          <Route exact path="/Submit" element={<Submit />} />
          <Route exact path="/signup" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/Admin/dashboard" element={<Admin />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Workers" element={<Workers />} />
          <Route exact path="/editservice" element={<Editservice />} />
          <Route exact path="/datetime" element={<Datetime />} />
          <Route exact path="/Workeradmin" element={<Workeradmin />} />
          <Route exact path="/Workeredit" element={<Workeredit />} />
          <Route exact path="/Addworker" element={<Workersadd />} />
          <Route exact path="/Feedback" element={<Feedback />} />
          <Route exact path="/workercart" element={<Workercart />} />
          <Route exact path="/servicedetail/:id" element={<ServiceDetail />} />
          <Route exact path="/EditWorkers" element={<EditWorkers />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/bookingtwo" element={<Booking />} />
          <Route exact path="/Success" element={<Success />} />
          <Route exact path="/hire" element={<Workerhire />} />
          <Route exact path="/workerrequest" element={<WorkerHire />} />
        </Routes>
        {shouldDisplayHeaderFooter && <Footer />}
      </NoteState>
    </>
  );
}

export default App;
