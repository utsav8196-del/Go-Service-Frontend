import  { useState } from "react";
import { toast } from "react-toastify";

function Reset() {
  const [state, setstate] = useState();

  const handlesubmit = (e) => {
    e.preventDefault();
    const { email } = state;
    fetch("https://go-services-ten.vercel.app/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.info(`${data.status}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2 className="form-title text-center mt-4 py-4">Forgot Password</h2>
      <section className="signup">
        <div className="container mt-5 text-center">
          <div className="signup-form col-md-4 mx-auto border rounded p-4 shadow">
            <form className="form-horizontal" onSubmit={handlesubmit}>
              <div className="form-icon">
                <i class="bi bi-question-circle"></i>
              </div>
              <div className="mb-3 form-group">
                <span className="input-icon">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setstate({ email: e.target.value })}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reset;
