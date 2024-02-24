import React from 'react'
import Footer from '../components/Footer';
import { useState } from 'react';
import { inputHelper } from '../Helper/inputHelper';
import MainLoader from '../components/Loader';
import { useLoginUserMutation } from '../Apis/authApi';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { setLoggedInUser } from '../redux/userAuthSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    email:"",
    password:"",
  });

  const handleUserInput = (e) => {
    const tempData = inputHelper(e, userInput);
    
    setUserInput(tempData);
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true);

    const response = await loginUser({
        userName : userInput.email,
        password: userInput.password,
      
    });

    if(response.data)
    {
      try{
        const { token } = response.data.result;
        const {firstName,lastName,id,email,phoneNumber,role} = response.data.result.userDto;
        localStorage.setItem("token", token);
        const fullName =  firstName+" "+lastName;
        dispatch(setLoggedInUser({fullName , id, email,role }));
        navigate("/");
      }
      catch(ex){
        setError(response.data.message);
      }
      
    }else{
      setError(response.data.message);
    }

    setLoading(false);
  }

  return (
       
        <div>
           {loading && <MainLoader/>}
          <section className="contact_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>Login</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form_container contact-form">
                    <form method="post" onSubmit={handleSubmit}>
                      <div>
                        <input type="email" name="email" value={userInput.email} onChange={handleUserInput} placeholder="Email" />
                      </div>
                      <div>
                        <input type="password" name="password" value={userInput.password} onChange={handleUserInput} placeholder="password"/>
                      </div>
                      <div className="btn_box">
                        <button type="submit">Log In</button>
                      </div>
                      <div className="btn_box">
                        Don't have an account?<a href="#" className="ml-1" onClick={()=>navigate("/register")}>Register Here</a>
                      </div>
                      <div>
                        {error && <p className="text-danger">{error}</p>}
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
        <Footer/>
        </div>
      );
}

export default Login