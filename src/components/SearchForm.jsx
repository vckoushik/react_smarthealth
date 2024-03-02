import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLoader from "./Loader";
import { inputHelper } from "../Helper/inputHelper";

function SearchForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState({
      query: "",
      severity: "",
      gender: "",
      isSmoker: "",
      isAlcholic: "",
      age: "",
      height: 0,
      weight: 0,
      city:"",
      country:"",
    });

    const handleUserInput = (e) => {
        console.log(e);
        const tempData = inputHelper(e, userInput);
        setUserInput(tempData);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
    
        setLoading(false);
      };
    
      const handleReset = async (e) => {
        e.preventDefault();
        setUserInput({
            query: "",
            severity: "",
            gender: "",
            isSmoker: "",
            isAlcholic: "",
            age: "",
            height: 0,
            weight: 0,
            city:"",
            country:"",
        })
      };
    

  return (
    <form method="post" onSubmit={handleSubmit}>
     {loading && <MainLoader />}
      <div className="inner-form">
        <div className="basic-search">
          <div className="input-field">
            <input
              id="search"
              type="text"
              value={userInput.query}
              onChange={handleUserInput}
              placeholder="Enter your symptoms"
              autoComplete="off"
            />
            <div className="icon-wrap">
              <svg
                className="svg-inline--fa fa-search fa-w-16"
                fill="#ccc"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="advance-search">
          <span className="desc">ADVANCED SEARCH</span>
          <div className="row">
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Severity
                  </option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" name="choices-single-defaul">
                  <option placeholder="" value="">
                    IsSmoker
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row second mb-3">
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" name="choices-single-defaul">
                  <option placeholder="" value="">
                    IsAlcholic
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" name="choices-single-defaul">
                  <option placeholder="" value="">
                    Age
                  </option>
                  <option value={"0-10"}>0-10</option>
                  <option>11-20</option>
                  <option>21-40</option>
                  <option>41-60</option>
                  <option>61+</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Height(cm)"
                  value={userInput.height}
                  onChange={handleUserInput}
                ></input>
              </div>
            </div>
          </div>
          <div className="row mt-0">
            <div className="col-4">
              <div className="">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Weight(Kg)"
                  value={userInput.weight}
                  onChange={handleUserInput}
                ></input>
              </div>
            </div>

            <div className="col-4">
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  value={userInput.city}
                 onChange={handleUserInput}
                ></input>
              </div>
            </div>
            <div className="col-4">
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  value={userInput.country}
                  onChange={handleUserInput}
                ></input>
              </div>
            </div>
          </div>
          <div class="row third">
            <div class="input-field">
              <div class="result-count">
                <span>108 </span>results
              </div>
              <div class="group-btn">
                <button class="btn-delete" onClick={handleReset} id="delete">
                  RESET
                </button>
                <button class="btn-search">SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
