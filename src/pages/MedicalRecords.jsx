import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import withAuth from "../Utility/withAuth";
import { useNavigate } from "react-router-dom";
import {getMedicalRecordsByUserId} from "../Apis/AxiosApi";
import { useSelector } from "react-redux";
import { backendUrl } from "../Utility/StaticDetail";

function MedicalRecords() {
  const navigate = useNavigate();
  const [medicalRecords, setMedicalRecords] = useState([]);
  const userdata = useSelector((state)=>state.userAuthStore);



  async function fetchMyAPI() {
    try{
      console.log(userdata.id);
      const data = await getMedicalRecordsByUserId(userdata.id);
      console.log(data);
      if (data && data.isSuccess) {
        setMedicalRecords(data.result);
      } 
    }
    catch(e){
      console.log(e)
      setMedicalRecords([])
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
              <h2>Medical Records</h2>
              <p>
                Medical Records Admin Page
              </p>
            </div>

            <div className="row">
            <div className="col-5">
                <button className="btn btn-success m-1"  onClick={() => navigate("/medicalrecord/medicalrecordupsert")}>Add Medical Record</button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Created Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicalRecords &&
                      medicalRecords.map((M, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{M.name}</td>
                          <td>{M.description}</td>
                          <td>{M.createdDate}</td>
                          <td>
                            
                            <button
                                  type="button"
                                  className="btn btn-success m-1"
                                >
                                  <a style={{color:"inherit"}} href= {backendUrl+"MedicalRecords/Download/"+M.id} className="fa-solid fa-download"></a>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="btn btn-success text-center"
            >
              View More
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default withAuth(MedicalRecords);
