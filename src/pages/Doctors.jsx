import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getDoctors, searchDoctors } from "../Apis/AxiosApi";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchMyAPI() {
    const data = await getDoctors();
    console.log(data);
    if (data && data.isSuccess) {
      setDoctors(data.result);
      console.log(doctors);
    }
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    console.log(searchQuery);
    const response = await searchDoctors(searchQuery);
    if(response.isSuccess === true){
      setDoctors(response.result);
    }
    console.log(response);
  };
  const handleReset = () => {
    setDoctors([]); 
    setSearchQuery('');
    fetchMyAPI();
  };

  return (
    <>
      <Header />
      <section className="doctor_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Doctors</h2>
            <p className="col-md-10 mx-auto px-0">
              Our platform empowers doctors with comprehensive patient
              management capabilities and intuitive communication tools to
              optimize treatment outcomes and foster meaningful patient-provider
              relationships.
            </p>
          </div>
          <br/>
          <div className="row">
            <div className="col-10">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a doctor..."
                  onChange={handleSearchQuery}
                />
              </div>
            </div>
            <div className="col-1">
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
            <div className="col-1">
              <button className="btn btn-warning" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
          <div className="row">
            {doctors &&
              doctors.map((Doc, index) => (
                <div className="col-sm-6 col-lg-4 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img
                        src={`https://avatar.iran.liara.run/public/boy?username=${Doc.name}`}
                        alt=""
                      />
                    </div>
                    <div className="detail-box">
                      <div className="social_box">Book Appointment</div>
                      <h5>
                        <strong>{Doc.name}</strong>
                      </h5>
                      <h5>{Doc.departmentDto.name}</h5>
                      <h6 className="">
                        {Doc.state} {Doc.country}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="btn-box">
            <a href="">View All</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Doctors;
