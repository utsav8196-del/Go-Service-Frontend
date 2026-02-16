import { Link } from "react-router-dom";

function Addtocart() {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Booking Summary
          </h1>
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
                          <h6 className="mb-0 text-muted">2 items</h6>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="/img/worker/home-1.jpg"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Home cleaning</h6>
                            <h6 className="text-black mb-0">Eum roe</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times" />
                            </a>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="/img/worker/beauty-3.jpg"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Beauty & Care</h6>
                            <h6 className="text-black mb-0">Et repellendus</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times" />
                            </a>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="/img/worker/chef-1.jpg"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Chef Cook</h6>
                            <h6 className="text-black mb-0">Et Autem</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times" />
                            </a>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="pt-5">
                          <h6 className="mb-0">
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
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Receipt</h3>

                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items 2</h5>
                          <h5>€ 132.00</h5>
                        </div>
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Services</th>
                              <th className="text-center">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="col-md-9">
                                <em>Home Cleaner</em>
                              </td>

                              <td className="col-md-1 text-center">$13</td>
                            </tr>
                            <tr>
                              <td className="col-md-9">
                                <em>Worker Charge</em>
                              </td>

                              <td className="col-md-1 text-center">$8</td>
                            </tr>
                          </tbody>
                        </table>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>€ 137.00</h5>
                        </div>
                        <Link 
                        type="submit"
                          to="/Payment"
                          className="btn btn-warning">
                          Continue Payment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtocart;
