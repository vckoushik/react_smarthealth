import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Medicine() {
  return (
    <div>
      <Header />
      <section className="department_section layout_padding">
        <div className="department_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>Medicines</h2>
              <p>
                Your trusted source of information for prescription drugs and
                medications
              </p>
            </div>
            <div classNameName="row">
              <div className="col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">Company</th>
                      <th scope="col">Price</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Medicine 1</td>
                      <td>Company 1</td>
                      <td>2.846</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          <i className="far fa-eye"></i>
                        </button>
                        
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Medicine 2</td>
                      <td>Company 2</td>
                      <td>3.417</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          <i className="far fa-eye"></i>
                        </button>
                        
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Medicine 3</td>
                      <td>Company 3</td>
                      <td>1.234</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          <i className="far fa-eye"></i>
                        </button>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="btn-box">
              <a href="">View All</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
