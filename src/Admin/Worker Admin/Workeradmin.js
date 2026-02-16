import React from "react";
import Header from "../Header";
import Sidebarworker from "./Sidebarworker";
import Footer from "../Footer";

function Worker() {
  return (
    <>
      <Header />
      <Sidebarworker />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-12">
              <div className="row">
                {/* Sales Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Services</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-journal-text" />
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Sales Card */}
                {/* Recent Sales */}
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="card-body">
                      <h5 className="card-title">Recent Sales</h5>
                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="/">#2457</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="/" className="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">#2147</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="/" className="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">#2049</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="/" className="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">#2644</a>
                            </th>
                            <td>Angus Grady</td>
                            <td>
                              <a href="/" className="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>$67</td>
                            <td>
                              <span className="badge bg-danger">Rejected</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">#2644</a>
                            </th>
                            <td>Raheem Lehner</td>
                            <td>
                              <a href="/" className="text-primary">
                                Sunt similique distinctio
                              </a>
                            </td>
                            <td>$165</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* End Recent Sales*/}
              </div>
            </div>
            {/* End Left side columns */}
          </div>
        </section>
      </main>
      {/* End #main */}

      <Footer />
    </>
  );
}

export default Worker;
