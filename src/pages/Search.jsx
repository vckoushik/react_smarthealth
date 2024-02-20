import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  return (
    <div>
      <Header />

      <div className="container-fluid px-1 px-sm-4 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-lg-9 col-xl-8">
            <div className="card border-0">
              <div className="card-header bg-white">
                <h4 className="mb-1">Advanced Search </h4>
                <small className="text-muted">
                Find Answers, Find Relief: Search Symptoms, Discover Solutions.
                </small>
              </div>
              <div className="card-body px-3 px-md-5">
                <h5>FILTER LIST</h5>
                <div className="card mb-3">
                  <div className="card-header">
                    <h6>
                      <span className="fa fa-star icon-star mr-3"></span>Search Bar
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row px-4 mb-2">
                      <div className="col-12 text-center px-0 hotel active">
                        <input
                          type="textarea"
                          rows="4" cols="50"
                          placeholder="Enter Your Symptoms"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header">
                    <h6>
                      <span className="fa fa-calendar mr-3"></span>Personal Information
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row px-4">
                    <div className="col-6 col-lg-3 text-center px-0 arrival">
                        <div className="block py-1">None</div>
                      </div>
                      <div className="col-6 col-lg-3 text-center px-0 arrival">
                        <div className="block py-1">Male</div>
                      </div>
                      <div className="col-6 col-lg-3 text-center px-0 arrival">
                        <div className="block py-1">Female</div>
                      </div>
                      <div className="col-6 col-lg-3 text-center px-0 arrival">
                        <div className="block py-1">Between</div>
                      </div>
                    </div>
                    <div className="row px-4 mt-3">
                      <div className="col-md-6 pl-0 pr-0 pr-md-2 mb-2">
                        <label>Date of Birth</label>
                      </div>
                      <div className="col-md-6 pl-0 pl-md-2 pr-0">
                        <input
                          type="date"
                          name="end-date"
                          value="2019-12-21"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header">
                    <h6>
                      <span className="fa fa-star icon-star mr-3"></span>Symptoms Severity
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row px-4 mb-2">
                      <div className="col-4 text-center px-0 hotel active">
                        <div className="block py-1">Low</div>
                      </div>
                      <div className="col-4 text-center px-0 hotel">
                        <div className="block py-1">Medium</div>
                      </div>
                      <div className="col-4 text-center px-0 hotel">
                        <div className="block py-1">High</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-white row mx-0 mb-2 justify-content-between">
                <button className="btn btn-secondary px-4">Cancel</button>
                <button className="btn btn-success ml-auto">
                  <span className="fa fa-filter"></span> &nbsp;&nbsp;Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Search;
