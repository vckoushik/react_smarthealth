import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import MainLoader from "./Loader";
import { useSearchDiseaseMutation } from "../Apis/searchApi";
import { setUserSearchResponse } from "../redux/userSearchSlice";
import {toast} from "react-toastify";
function SearchForm() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [searchDisease] = useSearchDiseaseMutation();
    const [userInput, setUserInput] = useState({
      query: "",
      severity: "",
      gender: "",
      isSmoker: "",
      isAlcholic: "",
      age: "",
      height: null,
      weight: null,
      city:"",
      country:"",
    });

    const handleUserInput = (e) => {
      const { name, value } = e.target;
      
      setUserInput({ ...userInput, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userInput);
        setLoading(true);
        const nameRegex = /^[a-zA-Z ]*$/; // Only alphabets and spaces allowed
    
        if (!nameRegex.test(userInput.query)) {
          setLoading(false);
          return toast.error("Symptoms should only contain alphabets and spaces.");
        }
        const response = await searchDisease(userInput);
        try{
          
          console.log(response);
          const {disease,treatments,homeRemedies,doctorDepartment,medications,preventionMeasures} = response.data.result;
        
          dispatch(setUserSearchResponse({disease,treatments,homeRemedies,doctorDepartment,medications,preventionMeasures}));
        }
        catch(e){
          toast.error("Invalid Details provided try again.");
        }
        
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
              name="query"
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
                <select className="form-select" onChange={handleUserInput} name="severity">
                  <option placeholder="" value="">
                    Severity
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" onChange={handleUserInput} name="gender">
                  <option placeholder="" value="">
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" onChange={handleUserInput} name="isSmoker">
                  <option placeholder="" value="">
                    IsSmoker
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row second mb-3">
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" onChange={handleUserInput} name="isAlcholic">
                  <option placeholder="" value="">
                    IsAlcholic
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="input-select">
                <select className="form-select" onChange={handleUserInput} name="age">
                  <option placeholder="" value="">
                    Age
                  </option>
                  <option value={"0-10"}>0-10</option>
                  <option value={"11-20"}>11-20</option>
                  <option value={"21-40"}>21-40</option>
                  <option value={"41-60"}>41-60</option>
                  <option value={"61+"}>61+</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="">
                <input
                  type="number"
                  name="height"
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
                  name="weight"
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
                  name="city"
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
                  name="country"
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
