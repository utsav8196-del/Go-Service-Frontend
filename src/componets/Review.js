import React from 'react'

function Review() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Testimonial</h6>
                                <h1 className="display-6 mb-0">What Our Happy Clients Say!</h1>
                            </div>
                            <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="fa fa-users fa-2x text-primary flex-shrink-0" />
                                        <h1 className="ms-3 mb-0">123+</h1>
                                    </div>
                                    <h5 className="mb-0">Happy Clients</h5>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="fa fa-check fa-2x text-primary flex-shrink-0" />
                                        <h1 className="ms-3 mb-0">123+</h1>
                                    </div>
                                    <h5 className="mb-0">Projects Done</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="testimonial-item">
                                <img className="img-fluid mb-4" src="img/testimonial-1.jpg" alt="/" />
                                <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                <div className="bg-primary mb-3" style={{ width: 60, height: 5 }} />
                                <h5>Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Review