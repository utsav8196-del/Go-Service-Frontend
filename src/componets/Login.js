import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login(props) {
  const [errors] = useState({});

  const navigate = useNavigate();
  const [credential, setcredential] = useState({ email: "", password: "" });

  useEffect(() => {
    setcredential({ email: "", password: "" })
  },[]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
      });
      console.log("response", response);
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        localStorage.setItem("userId", json.userId);  
        if (credential.email === "admin@gmail.com") {
          navigate("/Admin/dashboard");
        } else {
          navigate("/");
        }
        toast.success(`Welcome`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Enter Valid Email & Password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      toast.error("An error occurred while logging in", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 className="form-title text-center mt-4 py-4">Sign In</h2>
      <section className="signup">
        <div className="container mt-5 text-center">
          <div className="signup-form col-md-4 mx-auto border rounded p-4 shadow">
            <form className="form-horizontal" onSubmit={handlesubmit}>
              <div className="form-icon">
                <i className="fa fa-user-circle"></i>
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  className={`form-control ${errors.email && "is-invalid"}`}
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={credential.email}
                  onChange={onchange}
                  autoComplete="off"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  className={`form-control ${errors.password && "is-invalid"}`}
                  placeholder="Password"
                  name="password"
                  value={credential.password}
                  onChange={onchange}
                  autoComplete="off"
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <span className="forgot py-2">
                <Link to="/reset">Forgot Password?</Link>
              </span>
              <button type="submit" className="btn signin my-2">
                Login Now
              </button>
              <h6 className="my-2">
                <p className="m-2">
                  Not a Member ? <Link to="/signup">Register</Link>
                </p>
              </h6>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       if (response.data.success) {
//         const { authtoken, userId, role, isAdmin } = response.data;

//         // Store in localStorage
//         localStorage.setItem("auth-token", authtoken);
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("userRole", role);
//         localStorage.setItem("isAdmin", isAdmin);

//         // 🔥 REDIRECT BASED ON ROLE
//         if (isAdmin || role === "admin") {
//           console.log("✅ Admin logged in! Redirecting to admin panel...");
//           navigate("/admin-panel");
//         } else {
//           console.log("✅ User logged in! Redirecting to dashboard...");
//           navigate("/dashboard");
//         }

//         alert(`Welcome ${isAdmin ? "Admin" : "User"}!`);
//       } else {
//         setError(response.data.error || "Login failed");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError(err.response?.data?.error || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>

//         {error && <div className="error-msg">{error}</div>}

//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="login-btn"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p>
//           Don't have an account? <a href="/signup">Register here</a>
//         </p>
//       </div>

//       <style>{`
//         .login-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           background: #f5f5f5;
//         }

//         .login-box {
//           background: white;
//           padding: 40px;
//           border-radius: 8px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//           width: 100%;
//           max-width: 400px;
//         }

//         .login-box h2 {
//           text-align: center;
//           margin-bottom: 30px;
//           color: #333;
//         }

//         .form-group {
//           margin-bottom: 20px;
//         }

//         .form-group label {
//           display: block;
//           margin-bottom: 8px;
//           font-weight: bold;
//           color: #555;
//         }

//         .form-group input {
//           width: 100%;
//           padding: 10px;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           font-size: 14px;
//           box-sizing: border-box;
//         }

//         .form-group input:focus {
//           outline: none;
//           border-color: #007bff;
//           box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
//         }

//         .login-btn {
//           width: 100%;
//           padding: 12px;
//           background: #007bff;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           font-size: 16px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .login-btn:hover {
//           background: #0056b3;
//         }

//         .login-btn:disabled {
//           background: #ccc;
//           cursor: not-allowed;
//         }

//         .error-msg {
//           background: #f8d7da;
//           color: #721c24;
//           padding: 12px;
//           border-radius: 4px;
//           margin-bottom: 20px;
//           border: 1px solid #f5c6cb;
//         }

//         .login-box p {
//           text-align: center;
//           margin-top: 20px;
//           color: #666;
//         }

//         .login-box a {
//           color: #007bff;
//           text-decoration: none;
//         }

//         .login-box a:hover {
//           text-decoration: underline;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Login;
