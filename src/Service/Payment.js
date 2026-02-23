import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Payment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("https://go-services-ten.vercel.app/getcart", {
        userId: localStorage.getItem("userId"),
      }) // Replace with your backend endpoint to fetch worker details by ID
      .then((response) => {
        if (response) {
          setData(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const redirectToPayment = () => {
    window.location.href = `https://go-services-ten.vercel.app/pay?totalPrice=${totalPrice}`;
  };

  // eslint-disable-next-line no-unused-vars
  const [data1, setData1] = useState([]);
  const [totalPrice, settotalPrice] = useState();
  useEffect(() => {
    const totalPrice = localStorage.getItem("totalPriceFixed");
    settotalPrice(totalPrice);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://go-services-ten.vercel.app/getcart", {
          userId: localStorage.getItem("userId"),
        });
        setData1(response.data.data.cart);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Calculate total price
  // const subtotal = data1.reduce(
  //   (total, item) => total + parseFloat(item.charges),
  //   0
  // );
  // const serviceCharge = subtotal * 0.2; // 20% service charge
  // const gst = (subtotal + serviceCharge) * 0.18; // 18% GST
  // const totalPrice = subtotal + serviceCharge + gst;

  return (
    <>
      <div className="container me-4">
        <div className="row m-4">
          <div className="card text-center w-75 m-4">
            <div className="card-header">
              <h5>USER INFORMATION</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">{data?.data?.name}</h5>
              <p className="card-text">PAY AMOUNT : ₹ {totalPrice} </p>

              <button className="btn btn-primary" onClick={redirectToPayment}>
                Go to Payment
              </button>
            </div>
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
      </div>
    </>
  );
}

export default Payment;
