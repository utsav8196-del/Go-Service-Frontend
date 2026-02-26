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

  const receiptRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Protect Route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  // ✅ Fetch Cart Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://go-services-ten.vercel.app/getcart",
          {
            userId: localStorage.getItem("userId"),
          }
        );
        setData(response.data.data.cart);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // ✅ Remove Item
  const removeItem = async (index) => {
    try {
      const response = await axios.post(
        "https://go-services-ten.vercel.app/remove-from-cart",
        {
          userId: localStorage.getItem("userId"),
          workerId: data[index]._id,
        }
      );

      if (response.data.code === 200) {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const uniqueCategories = [
  //   ...new Set(data.map((item) => item.category.category)),
  // ];

  const subtotal = data.reduce(
    (total, item) => total + parseFloat(item.charges),
    0
  );

  const serviceCharge = subtotal * 0.2;
  const gst = (subtotal + serviceCharge) * 0.18;
  const totalBeforeDiscount = subtotal + serviceCharge + gst;

  const discountedSubtotal = subtotal * (1 - discount / 100);
  const discountedServiceCharge = discountedSubtotal * 0.2;
  const discountedGst =
    (discountedSubtotal + discountedServiceCharge) * 0.18;

  const totalPrice =
    discountedSubtotal + discountedServiceCharge + discountedGst;

  const totalPriceFixed = totalPrice.toFixed(2);

  const handleContinuePayment = () => {
    localStorage.setItem("totalPriceFixed", totalPriceFixed);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    const coupons = {
      "10": 10,
      "20": 15,
      "30": 20,
    };

    if (coupons[coupon]) {
      setDiscount(coupons[coupon]);
      toast.success(`Coupon Applied Successfully!`, {
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      toast.error("Invalid Coupon Code");
    }
  };

  const downloadReceipt = () => {
    const receiptContainer = receiptRef.current;

    html2canvas(receiptContainer).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("receipt.pdf");
    });
  };

  return (
    <div>
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container text-center py-5">
          <h1 className="display-4 text-white mb-4">Our Cart</h1>
          <nav>
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-primary active">
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">

          {/* LEFT SIDE - CART ITEMS */}
          <div className="col-lg-8">
            <h2 className="mb-4">Services Cart ({data.length})</h2>

            {data.map((item, index) => (
              <div key={item._id} className="card mb-3 p-3 shadow-sm">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.workername}
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="col-md-5">
                    <h5>{item.workername}</h5>
                    <p className="text-muted">
                      {item.category.category}
                    </p>
                  </div>

                  <div className="col-md-2">
                    ₹ {item.charges}
                  </div>

                  <div className="col-md-2 text-end">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - RECEIPT */}
          <div className="col-lg-4">
            <div className="card p-4 shadow" ref={receiptRef}>
              <h4 className="mb-3 text-center">Receipt</h4>

              <table className="table">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>₹ {subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Service (20%)</td>
                    <td>₹ {serviceCharge.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>GST (18%)</td>
                    <td>₹ {gst.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>₹ {totalBeforeDiscount.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Discount ({discount}%)</td>
                    <td>₹ {totalPrice.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              className="btn btn-secondary w-100 mt-3"
              onClick={downloadReceipt}
            >
              Download Receipt
            </button>

            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Coupon code"
                value={coupon}
                onChange={handleCouponChange}
              />
              <button
                className="btn btn-primary"
                onClick={applyCoupon}
              >
                Apply
              </button>
            </div>

            <Link
              onClick={handleContinuePayment}
              to="/Submit"
              className="btn btn-warning w-100 mt-3"
            >
              Continue Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workercart;