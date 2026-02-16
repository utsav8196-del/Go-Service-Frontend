import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Workers() {
    return (
        <>
            <Header />
            <Sidebar />

            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/Admin/dashboard">Home</Link></li>
                            <li className="breadcrumb-item active">Worker</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <h1 className="text-center">Worker Information</h1><br />
                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <a href="/workerinfo.html"><img src="/img/worker/w-5.jpg" alt="Profile" className="rounded-circle" />
                                    </a>
                                    <h2>Kevin Anderson</h2>
                                    <h3>Web Designer</h3>
                                    <div className="social-links mt-2">
                                        <a href="#/" className="twitter"><i className="bi bi-twitter" /></a>
                                        <a href="#/" className="facebook"><i className="bi bi-facebook" /></a>
                                        <a href="#/" className="instagram"><i className="bi bi-instagram" /></a>
                                        <a href="#/" className="linkedin"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>{/* End #main */}


            <Footer />
        </>
    )
}

export default Workers