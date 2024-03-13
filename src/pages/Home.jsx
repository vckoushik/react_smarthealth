import React from 'react'
import {useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';
function Home() {
  const navigate = useNavigate();
  return (
    <div>

  <div className="hero_area">

    <div className="hero_bg_box">
      <img src="images/hero-bg.png" alt=""/>
    </div>

    
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              Smart Health System
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={() => navigate("/")}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/about")}> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/departments")}>Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/doctors")}>Doctors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/medicine")}>Medicines</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/contact")}>Contact Us</a>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" >
                  <i className="fa fa-search" aria-hidden="true" onClick={() => navigate("/search")}></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      We Provide Best Healthcare
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      We Provide Best Healthcare
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      We Provide Best Healthcare
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>
  </div>



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


  <section className="about_section layout_margin-bottom">
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
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="doctor_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Doctors
        </h2>
        <p className="col-md-10 mx-auto px-0">
          Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/d1.jpg" alt=""/>
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

</div>

  )
}

export default Home