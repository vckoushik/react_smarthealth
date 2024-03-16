import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGetMedicinesQuery } from "../Apis/searchApi";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { searchMedicines } from "../Apis/AxiosApi";
import withAuth from "../Utility/withAuth";


function Medicine() {
  const [medicines, setMedicines] = useState([]);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetMedicinesQuery(page);
  const [searchQuery, setSearchQuery] = useState("");
 

  useEffect(() => {
    if (data && data.isSuccess) {
      setMedicines((prevMedicines) => [...prevMedicines, ...data.result]);
    }
  }, [data]);

  const handleViewMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearch= async()=>{
    console.log(searchQuery);
    const response = await searchMedicines(searchQuery);
    if(response.isSuccess == true){
      setMedicines(response.result);
    }
    console.log(response);
  }
  const handleReset = ()=>{
    setMedicines([]); 
    setPage(1); 
    setSearchQuery(''); 
  }
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
            <div className="row">
              <div className="col-10">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a medicine..."
                    onChange={handleSearchQuery}
                  />
                </div>
              </div>
              <div className="col-1">
                <button className="btn btn-success" onClick={handleSearch} >Search</button>
              </div>
              <div className="col-1">
                <button className="btn btn-warning" onClick={handleReset} >Reset</button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicines &&
                      medicines.map((M, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{M.name}</td>
                          <td>
                            <Popup
                              trigger={
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  <i className="far fa-eye"></i>
                                </button>
                              }
                              position="right center"
                              style={{ width: "400px", height: "300px" }}
                              modal
                              nested
                            >
                              {(close) => (
                                <div
                                  className="jumbotron"
                                  style={{ height: '800px', width: "100%",  position: "relative", overflowY:"scroll"}}
                                >
                                  <div className="content" >
                                    <h1>Medicine Details</h1>
                                    <hr/>
                                    <h5><strong>Id: </strong>{M.id}</h5>
                                    <h5><strong>Name: </strong> {M.name}</h5>
                                    <p><strong>Precautions: </strong> {M.precaution}</p>
                                    <p><strong>Dose: </strong> {M.dose}</p>
                                    <p><strong>Mode of Action: </strong> {M.modeOfAction}</p>
                                    <p><strong>Side Effect: </strong> {M.sideEffect}</p>
                                    <p><strong>Interaction: </strong> {M.interaction}</p>
                                  </div>
                                  <div>
                                    <button className="btn btn-danger" onClick={() => close()}>
                                      Close
                                    </button>
                                  </div>
                                </div>
                              )}
                            </Popup>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div
              onClick={handleViewMore}
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

export default withAuth(Medicine);
