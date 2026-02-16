import { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Contact(props) {
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setnote] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/contact");
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleclick = (e) => {
    e.preventDefault();
    // Check if any required fields are empty
    if (!note.name || !note.email || !note.subject || !note.message) {
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
    addnote(note.name, note.email, note.subject, note.message);
    setnote({ name: "", email: "", subject: "", message: "" });
    toast.success(`Message Send Successfully..`, {
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
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Contact
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
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <img className="img-fluid" src="img/worker/w-3.jpg" alt="" />
                </div>
                <div className="col-sm-6">
                  <h3 className="mb-0">jack meck</h3>
                  <p>Head of Booking</p>
                  <h6>Contact Details</h6>
                  <p>Any Contact to get services.</p>
                  <p className="mb-0">
                    <h6>Call:</h6> +91 88345 66780
                  </p>
                  <p className="mb-0">
                    <h6>Email:</h6> Jack@email.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <img className="img-fluid" src="img/worker/w-4.jpg" alt="" />
                </div>
                <div className="col-sm-6">
                  <h3 className="mb-0">Jhon Wick</h3>
                  <p>Head of Services</p>
                  <h6>Contact Details</h6>
                  <p>Any Contact to get services.</p>
                  <p className="mb-0">
                    <h6>Call:</h6> +91 98345 66789
                  </p>
                  <p className="mb-0">
                    <h6>Email:</h6> Jhon@email.com
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 450 }}
            >
              <div className="position-relative h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2466056920584!2d72.87411257477427!3d21.222067481112038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0b63ebac43%3A0xfda247a07247b09c!2sSASSC!5e0!3m2!1sen!2sin!4v1735535038343!5m2!1sen!2sin"
                  style={{ minHeight: 450, border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="description"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">Contact Us</h6>
                <h1 className="display-6 mb-0">
                  If You Have Any Query, Please Contact Us
                </h1>
              </div>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax &amp; PHP in a few minutes. Just
                copy and paste the files, add a little code and you're done.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="name"
                        name="name"
                        onChange={onchange}
                        value={note.name}
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0 bg-light"
                        id="email"
                        name="email"
                        onChange={onchange}
                        minLength={5}
                        required
                        value={note.email}
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="subject"
                        name="subject"
                        onChange={onchange}
                        minLength={5}
                        required
                        value={note.subject}
                        placeholder="Subject  "
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0 bg-light"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        style={{ height: 150 }}
                        defaultValue={""}
                        onChange={onchange}
                        minLength={5}
                        required
                        value={note.message}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                      onClick={handleclick}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;
