import React from "react";
import {  useSelector } from "react-redux";
function SearchResult() {
  const userSearch = useSelector(state => state.userSearchStore ?? null);
  if(userSearch === null){
    return (
      <div class="results">
        <div class="text-center m-5">
          <blockquote class="blockquote">
            <h3 className="bold">Search Results</h3>
          </blockquote>
          
          <div class="text-center">
              Search Again
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div class="results">
        <div class="text-center m-5">
          <blockquote class="blockquote">
            <h2 className="bold">Search Results</h2>
          </blockquote>
          
          <div class="text-center">
              <h3><strong>Disease :</strong> {userSearch.disease}</h3>
              <br></br>
              <h5><strong>Department to Consult:</strong>{userSearch.doctorDepartment}</h5>
              <br/>
              <h5><strong>Medications:</strong></h5>
              <ul className="list-group">
              {userSearch.medications.map((M, index) =>
                <li className="list-group-item" key={index}>{M}</li>
                )}
              </ul>
              <br/>
              <h5><strong>Treatments:</strong></h5>
              <ul className="list-group">
              {userSearch.treatments.map((M, index) =>
                <li className="list-group-item" key={index}>{M}</li>
                )}
              </ul>
              <br/>
              <h5><strong>Home Remedies:</strong></h5>
              <ul className="list-group">
              {userSearch.homeRemedies.map((M, index) =>
                <li className="list-group-item" key={index}>{M}</li>
                )}
              </ul>
              <br/>
              <h5><strong>Prevention Measures:</strong></h5>
              <ul className="list-group">
              {userSearch.preventionMeasures.map((M, index) =>
                <li className="list-group-item" key={index}>{M}</li>
                )}
              </ul>
              <br/>
          </div>
        </div>
      </div>
    );
  }

}

export default SearchResult;
