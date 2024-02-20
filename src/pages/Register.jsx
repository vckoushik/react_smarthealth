import React from "react";
import Footer from "../components/Footer";
import { useRegisterUserMutation } from "../Apis/authApi";
import { useState } from "react";
import { inputHelper } from "../Helper/inputHelper";
import { useNavigate } from "react-router-dom";
import {SD_Roles} from "../Utility/StaticDetail.js";
import MainLoader from "../components/Loader.jsx";
import toastNotify from "../Helper/toastHelper.js";

function Register() {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await registerUser({
      userName: userInput.email,
      password: userInput.password,
      role: userInput.role,
      name: userInput.firstName,
    });
    if (response.data) {
      toastNotify("Registeration successful! Please login to continue.");
      navigate("/login");
    } else if (response.error) {
      toastNotify(response.error.data.errorMessages[0], "error");
    }

    setLoading(false);
  };
  return (
    <div>
      {loading && <MainLoader />}
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Register</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container contact-form">
                <form method="post" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-lg-6">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          value={userInput.firstName}
                          onChange={handleUserInput}
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          value={userInput.lastName}
                          onChange={handleUserInput}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={userInput.phoneNumber}
                      onChange={handleUserInput}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={userInput.email}
                      onChange={handleUserInput}
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      value={userInput.password}
                      onChange={handleUserInput}
                      placeholder="Enter your password"
                    />
                  </div>
                  <div>
                    <select
                      className="form-control form-select"
                      required
                      value={userInput.role}
                      name="role"
                      onChange={handleUserInput}
                    >
                      <option value="">--Select Role--</option>
                      <option value={`${SD_Roles.PATIENT}`}>Patient</option>
                      <option value={`${SD_Roles.DOCTOR}`}>Doctor</option>
                      <option value={`${SD_Roles.ADMIN}`}>Admin</option>
                    </select>
                  </div>
                  <div className="mt-5"></div>
                  <div className="btn_box">
                    <button type="submit">Register</button>
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
      <Footer />
    </div>
  );
}

export default Register;
