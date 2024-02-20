import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Doctors() {
  return (
    
<>
<Header/>
<section className="doctor_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        Our Doctors
      </h2>
      <p className="col-md-10 mx-auto px-0">
      Our platform empowers doctors with comprehensive patient management capabilities and intuitive communication tools to optimize treatment outcomes and foster meaningful patient-provider relationships.
      </p>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-4 mx-auto">
        <div className="box">
          <div className="img-box">
            <img src="images/d1.jpg" alt="" />
          </div>
          <div className="detail-box">
            <div className="social_box">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <h5>
              Elina Josh
            </h5>
            <h6 className="">
              Doctor
            </h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mx-auto">
        <div className="box">
          <div className="img-box">
            <img src="images/d2.jpg" alt=""/>
          </div>
          <div className="detail-box">
            <div className="social_box">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <h5>
              Adam View
            </h5>
            <h6 className="">
              Doctor
            </h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mx-auto">
        <div className="box">
          <div className="img-box">
            <img src="images/d3.jpg" alt=""/>
          </div>
          <div className="detail-box">
            <div className="social_box">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <h5>
              Mia Mike
            </h5>
            <h6 className="">
              Doctor
            </h6>
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
</section>

<Footer/>


</>
  )
}

export default Doctors