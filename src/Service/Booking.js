import React from 'react'
import { Link } from "react-router-dom";

function Booking() {
  return (
    <>
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">Booking Summary</h1>
        </div>
      </div>

      <div className="container border border-dark">
          <div className="well col-xs-offset-2 col-sm-offset-2 col-md-offset-4">
            <div className="d-flex">
              <div className="col-xs-8 col-sm-8 col-md-8">
                <address>
                  <strong>GO Service</strong>
                  <br />
                  2135 Sunset Blvd
                  <br />
                  Los Angeles, CA 90026
                  <br />
                  <abbr title="Phone">P:</abbr> (213) 484-6829
                </address>
              </div>
              <div>
                <p>
                  <em className='p-4'>Date: 1st November, 2013</em>
                  <em className='p-4'>Receipt #: 34522677W</em>
                </p>
              </div>
            </div>
              <div className="text-center">
                <h1>Receipt</h1>
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
                    <td className="col-md-9"><em>Home Cleaner</em></td>
                  
                    <td className="col-md-1 text-center">$13</td>
                  
                  </tr>
                  <tr>
                    <td className="col-md-9"><em>Worker Charge</em></td>
                  
                    <td className="col-md-1 text-center">$8</td>
                  
                  </tr>
                  <tr>
                  
                    <td className="text-right">
                      <p>
                        <strong>Subtotal:&nbsp;</strong>
                      </p>
                      <p>
                        <strong>Tax:&nbsp;</strong>
                      </p></td>
                    <td className="text-center">
                      <p>
                        <strong>$6.94</strong>
                      </p>
                      <p>
                        <strong>$6.94</strong>
                      </p></td>
                  </tr>
                  <tr>
                    
                    <td className="text-right"><h4><strong>Total:&nbsp;</strong></h4></td>
                    <td className="text-center text-danger"><h4><strong>$31.53</strong></h4></td>
                  </tr>
                </tbody>
              </table>
              <Link className="btn btn-primary mb-2" to="/Submit">Continue Booking</Link>
          </div>
      </div>


      




    </>
  )
}

export default Booking