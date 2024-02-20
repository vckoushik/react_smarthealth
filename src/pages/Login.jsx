import React from 'react'
import Footer from '../components/Footer';

function Login() {
    return (
        
        <div>
          <section className="contact_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>Login</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form_container contact-form">
                    <form action="">
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="password" placeholder="password"/>
                      </div>
                      <div className="btn_box">
                        <button type="submit">Log In</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="map_container">
                    <div className="map">
                      <div id="googleMap"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <Footer/>
        </div>
      );
}

export default Login