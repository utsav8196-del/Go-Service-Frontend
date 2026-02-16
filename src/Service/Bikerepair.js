import React from 'react'

function Bikerepair() {
    return (
        <>

            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="/Service">Our Service</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Bike Repair</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div>
                <section id="about" className="about pt-5">
                    <div className="container">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4">
                                <img src="img/bike-repair.jpg" className="img-fluid" alt="Bike Repair" />
                            </div>
                            <div className="col-lg-5 content">
                                <h2>Professional Bike Repair</h2>
                                <p className="fst-italic py-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right" /> <strong>Type:</strong> <span>Bike Repair</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.goservices.com</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>Worker:</strong> <span>Available</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Gujrat, INDIA</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right" /> <strong>Rating:</strong> <div>
                                                <span className="fa fa-star checked" />
                                                <span className="fa fa-star checked" />
                                                <span className="fa fa-star checked" />
                                                <span className="fa fa-star checked" />
                                                <span className="fa fa-star checked" />
                                            </div>
                                            </li>
                                            {/* <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Master</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li> */}
                                        </ul>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section id="recent-blog-posts" className="recent-blog-posts">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Workers</h2>
                        <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="post-item position-relative h-100">
                                <div className="post-img position-relative overflow-hidden">
                                    <img src="/img/worker/bike-1.jpeg" className="img-fluid" alt="" />
                                    <span className="post-date"> <div>
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star" />
                                    </div>
                                    </span>
                                </div>
                                <div className="post-content d-flex flex-column">
                                    <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                                    <div className="meta d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-person" /> <span className="ps-2">Julia Parker</span>
                                        </div>
                                        <span className="px-3 text-black-50">/</span>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-folder2" /> <span className="ps-2">Home Cleaner</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>{/* End post item */}

                        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="post-item position-relative h-100">
                                <div className="post-img position-relative overflow-hidden">
                                    <img src="/img/worker/bike-2.jpg" className="img-fluid" alt="" />
                                    <span className="post-date"> <div>
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                    </div>
                                    </span>
                                </div>
                                <div className="post-content d-flex flex-column">
                                    <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                                    <div className="meta d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-person" /> <span className="ps-2">Mario Douglas</span>
                                        </div>
                                        <span className="px-3 text-black-50">/</span>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-folder2" /> <span className="ps-2">Home Cleaner</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>{/* End post item */}

                        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="post-item position-relative h-100">
                                <div className="post-img position-relative overflow-hidden">
                                    <img src="/img/worker/bike-3.jpg" className="img-fluid" alt="" />
                                    <span className="post-date"> <div>
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star" />
                                    </div>
                                    </span>
                                </div>
                                <div className="post-content d-flex flex-column">
                                    <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                                    <div className="meta d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-person" /> <span className="ps-2">Mario Douglas</span>
                                        </div>
                                        <span className="px-3 text-black-50">/</span>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-folder2" /> <span className="ps-2">Home Cleaner</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>{/* End post item */}

                        <div className="col-xl-4 col-md-6">
                            <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay={300}>
                                <div className="post-img position-relative overflow-hidden">
                                    <img src="/img/worker/bike-4.jpg" className="img-fluid" alt="" />
                                    <span className="post-date"> <div>
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                    </div>
                                    </span>
                                </div>
                                <div className="post-content d-flex flex-column">
                                    <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>
                                    <div className="meta d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-person" /> <span className="ps-2">Lisa Hunter</span>
                                        </div>
                                        <span className="px-3 text-black-50">/</span>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-folder2" /> <span className="ps-2">Home Cleaner</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>{/* End post item */}

                        <div className="col-xl-4 col-md-6">
                            <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay={300}>
                                <div className="post-img position-relative overflow-hidden">
                                    <img src="/img/worker/bike-5.jpg" className="img-fluid" alt="" />
                                    <span className="post-date"> <div>
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                    </div>
                                    </span>
                                </div>
                                <div className="post-content d-flex flex-column">
                                    <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>
                                    <div className="meta d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-person" /> <span className="ps-2">Lisa Hunter</span>
                                        </div>
                                        <span className="px-3 text-black-50">/</span>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-folder2" /> <span className="ps-2">Home Cleaner</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>{/* End post item */}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Bikerepair