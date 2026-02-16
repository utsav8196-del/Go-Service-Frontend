import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./button.css";

function Workercart() {
  const [data, setData] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Reference for the receipt container
  const receiptRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/getcart", {
          userId: localStorage.getItem("userId"),
        });
        setData(response.data.data.cart);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/workercart");
    } else {
      navigate("/login");
    }
  }, []);
  // Function to remove an item from the cart
  const removeItem = async (index) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/remove-from-cart",
        {
          userId: localStorage.getItem("userId"),
          workerId: data[index]._id,
        }
      );

      if (response.data.code === 200) {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
      } else {
        console.log("Failed to remove item from cart");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Extract unique categories
  const uniqueCategories = [
    ...new Set(data.map((item) => item.category.category)),
  ];

  // Calculate total item count
  const totalItems = data.length;

  // Calculate total price
  const subtotal = data.reduce(
    (total, item) => total + parseFloat(item.charges),
    0
  );
  const serviceCharge = subtotal * 0.2; // 20% service charge
  const gst = (subtotal + serviceCharge) * 0.18; // 18% GST

  // Calculate total price before discount
  const totalPriceBeforeDiscount = subtotal + serviceCharge + gst;

  // Calculate total price after discount
  // const discountedSubtotal = subtotal * (1 - discount / 100);
  // const discountedServiceCharge = discountedSubtotal * 0.2;
  // const discountedGst = (discountedSubtotal + discountedServiceCharge) * 0.18;
  // const totalPrice =
  //   discountedSubtotal + discountedServiceCharge + discountedGst;
  const discountedSubtotal = subtotal * (1 - discount / 100);
  const discountedServiceCharge = discountedSubtotal * 0.2;
  const discountedGst = (discountedSubtotal + discountedServiceCharge) * 0.18;
  const totalPrice =
    discountedSubtotal + discountedServiceCharge + discountedGst;
  const totalPriceFixed = totalPrice.toFixed(2); // Apply toFixed to ensure two decimal places
  const handleContinuePayment = () => {
    localStorage.setItem("totalPriceFixed", totalPriceFixed); // Store totalPrice in localStorage
  };
  // Function to handle coupon input change
  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
  };

  // Function to apply coupon
  const applyCoupon = () => {
    console.log("Entered Coupon:", coupon); // Log the entered coupon code
    // Static coupon codes with discounts
    const coupons = {
      10: 10,
      20: 15,
      30: 20,
    }; // Add more coupon codes and discounts as needed

    const uppercaseCoupon = coupon.toUpperCase();
    if (coupons.hasOwnProperty(uppercaseCoupon)) {
      console.log("Coupon Applied:", coupon); // Log the applied coupon code
      setDiscount(coupons[uppercaseCoupon]); // Set discount based on coupon
      // Display notification using toastify or similar library
      // toast.success(`Coupon "${coupon}" Applied Successfully!`);
      toast.success(`Coupon "${coupon}" Applied Successfully!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      // Display notification for invalid coupon code
      toast.error("Invalid Coupon Code");
    }
  };

  const downloadReceipt = () => {
    // Select the receipt container
    const receiptContainer = receiptRef.current;

    // Convert receipt container to canvas
    html2canvas(receiptContainer).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size: 210mm x 297mm
      pdf.save("receipt.pdf");
    });
  };

  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Our Cart
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/worker">
                  cart
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              ></li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2 border shadow"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Services Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {totalItems} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {data.map((item, index) => (
                          <div key={index}>
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={item.image}
                                  className="img-fluid rounded-3"
                                  alt={item.workername}
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">
                                  {item.workername}
                                </h6>
                                <h6 className="text-muted">
                                  {item.category.category}
                                </h6>
                                <h6 className="text-black mb-0">
                                  {item.category.description}
                                </h6>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">₹ {item.charges}</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button
                                  className="btn btn-link text-muted"
                                  onClick={() => removeItem(index)}
                                >
                                  <i className="fas fa-times" />
                                </button>
                              </div>
                            </div>
                            <hr className="my-4" />
                          </div>
                        ))}
                        <div className="pt-5">
                          <h6
                            className="position-absolute bottom-0 start-0"
                            style={{ marginBottom: "30px", marginLeft: "30px" }}
                          >
                            <Link to="/service" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2" />
                              Add more services
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-4 bg-grey"
                      style={{ backgroundColor: "lightgray" }}
                    >
                      <div className="px-3" ref={receiptRef}>
                        <div
                          style={{
                            textAlign: "center", // Center-align the content
                          }}
                        >
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Receipt</h3>
                          <hr className="my-4" />
                        </div>

                        <table className="table table-hover">
                          <tbody>
                            <tr>
                              <td>
                                <h3>Items</h3>
                              </td>
                              <td>
                                <h3>Price</h3>
                              </td>
                            </tr>
                            {uniqueCategories.map((category, index) => {
                              const categoryItems = data.filter(
                                (item) => item.category.category === category
                              );
                              return (
                                <tr key={index}>
                                  <td>{category}</td>
                                  <td>
                                    {categoryItems.map((item, idx) => (
                                      <div key={idx}>₹ {item.charges}</div>
                                    ))}
                                  </td>
                                </tr>
                              );
                            })}
                            <tr>
                              <td>Subtotal</td>
                              <td>₹ {subtotal.toFixed(2)}</td>
                            </tr>
                            <br />
                            <tr>
                              <td>Service Charge (20%)</td>
                              <td>₹ {serviceCharge.toFixed(2)}</td>
                            </tr>
                            <tr>
                              <td>GST (18%)</td>
                              <td>₹ {gst.toFixed(2)}</td>
                            </tr>
                            <tr>
                              <td>
                                <h6>Total Price</h6>
                              </td>
                              <td>
                                <p> ₹{totalPriceBeforeDiscount.toFixed(2)}</p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <h6>Discount: {discount}%</h6>
                              </td>
                              <h6> ₹{totalPrice.toFixed(2)}</h6>
                            </tr>
                          </tbody>
                        </table>

                        <hr className="my-4" />
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        {/* Download button */}
                        <button className="Btn" onClick={downloadReceipt}>
                          <svg
                            className="svgIcon"
                            viewBox="0 0 384 512"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                          </svg>
                          <span className="icon2"></span>
                        </button>

                        {/* Coupon input field */}
                        <div
                          className="position-relative me-4"
                          style={{ maxWidth: 500 }}
                        >
                          <input
                            className="form-control pe-5"
                            type="text"
                            placeholder="Enter our coupon..."
                            value={coupon}
                            onChange={handleCouponChange}
                          />
                          <button
                            onClick={applyCoupon}
                            type="button"
                            className="btn btn-primary py-2  position-absolute top-0 end-0 mt-1 me-1"
                          >
                            Redeem
                          </button>
                        </div>
                      </div>
                      <Link
                        onClick={handleContinuePayment}
                        to={{
                          pathname: "/Submit",
                          state: { totalPrice: totalPrice },
                        }}
                        className="btn btn-warning my-4"
                        style={{ marginLeft: "18px" }}
                      >
                        Continue Payment
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workercart;
