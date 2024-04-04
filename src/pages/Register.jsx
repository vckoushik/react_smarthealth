import React from "react";
import Footer from "../components/Footer";
import { useRegisterUserMutation } from "../Apis/authApi";
import { useState } from "react";
import { inputHelper } from "../Helper/inputHelper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {SD_Roles} from "../Utility/StaticDetail.js";
import MainLoader from "../components/Loader.jsx";

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
      // Regular expressions for validation
      const phoneNumberRegex = /^\d+$/; // Only digits allowed
      const nameRegex = /^[a-zA-Z ]*$/; // Only alphabets and spaces allowed
    
      // Validation checks
      if (!phoneNumberRegex.test(userInput.phoneNumber)) {
        setLoading(false);
        return toast.error("Phone number should only contain digits.");
      }
    
      if (!nameRegex.test(userInput.firstName) || !nameRegex.test(userInput.lastName)) {
        setLoading(false);
        return toast.error("Names should only contain alphabets and spaces.");
      }

    const response = await registerUser({
      Email: userInput.email,
      firstName: userInput.firstName,
      lastName: userInput.lastName,
      phoneNumber: userInput.phoneNumber,
      password: userInput.password,
      role: userInput.role,
      name: userInput.firstName,
    });
    if (response.data) {
      toast.success("Registeration successful! Please login to continue.");
      navigate("/login");
    } else if (response.error) {
      console.log(response);
      toast.error(response.error.data.message);
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
                          required
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
                          required
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
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={userInput.email}
                      onChange={handleUserInput}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      value={userInput.password}
                      onChange={handleUserInput}
                      placeholder="Enter your password"
                      required
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
                  <div className="btn_box">
                       Already have an account! <a href="#" className="ml-1" onClick={()=>navigate("/login")}>Login Here</a>
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
