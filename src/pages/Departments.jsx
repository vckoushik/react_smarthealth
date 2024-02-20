import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Departments() {
  return (
    <div>
        <Header/>
        <section className="department_section layout_padding">
        <div className="department_container">
      <div className="container ">
        <div className="heading_container heading_center">
          <h2>
            Our Departments
          </h2>
          <p>
            Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum dolores doloremque accusantium
          </p>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="box ">
              <div className="img-box">
                <img src="images/s1.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Cardiology
                </h5>
                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box ">
              <div className="img-box">
                <img src="images/s2.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Diagnosis
                </h5>
                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box ">
              <div className="img-box">
                <img src="images/s3.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Surgery
                </h5>
                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box ">
              <div className="img-box">
                <img src="images/s4.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  First Aid
                </h5>
                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">
            View All
          </a>
        </div>
      </div>
    </div>
  </section>
        <Footer/>
    </div>
  )
}

export default Departments