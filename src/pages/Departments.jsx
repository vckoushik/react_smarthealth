import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getDepartments } from "../Apis/AxiosApi";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchMyAPI() {
    const data = await getDepartments();
    console.log(data);
    if (data && data.isSuccess) {
      setDepartments(data.result);
    }
  }
  useEffect(() => {
    fetchMyAPI();
  }, []);
  return (
    <div>
      <Header />
      <section className="department_section layout_padding">
        <div className="department_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>Our Departments</h2>
              <p>
              Our diverse range of departments offer specialized care and treatment across various medical fields, ensuring comprehensive healthcare solutions tailored to individual needs.
              </p>
            </div>
            <div className="row">
              {departments &&
                departments.map((D, index) => (
                  <div className="col-md-4">
                    <div className="box ">
                      <div className="img-box">
                        <img src={`${D.imgUrl}`} alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>{D.name}</h5>
                        <p>
                          {D.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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

export default Departments;
