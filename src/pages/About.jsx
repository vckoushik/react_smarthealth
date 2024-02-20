import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
        <Header/>
        <section className="about_section layout_padding">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src="images/about-img.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About <span>Us</span>
              </h2>
            </div>
            <p>
            Welcome to Smart Health System, your comprehensive healthcare solution designed to streamline medical processes, enhance patient care, and improve health outcomes. At Smart Health System, we are dedicated to leveraging cutting-edge technology to revolutionize the way healthcare is delivered and experienced.
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

        <Footer/>
    </div>
  )
}

export default About