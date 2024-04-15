import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import MainLoader from '../components/Loader';
import Footer from '../components/Footer';
import { toast } from "react-toastify";
import { gettimeslots } from '../Apis/AxiosApi';
import { useSelector } from "react-redux";
import { useCreateAppointmentMutation } from '../Apis/searchApi';
import { useNavigate } from "react-router-dom";

const appointmentData = {
    title:"",
    description:"",
    startTime:"",
    endTime:"",
    userId:"",
    status: 0,
    doctorId:""
  }

function Appointment() {
  const { id } = useParams();
  const [loading,setLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [error,setError] = useState("");
  const [appointmentInput,setAppointmentInput] = useState(appointmentData);
  const userdata = useSelector((state)=>state.userAuthStore);
  const [createAppointment] = useCreateAppointmentMutation();
  const navigate = useNavigate();
  const handleInput =(e) =>{
    const { name, value } = e.target;
    setAppointmentInput({ ...appointmentInput, [name]: value });
  }

  const handleDateChange=async(e)=>{
    const selectedDate = e.target.value;
    setStartDate(selectedDate);
    let result;
    try{
        result = await gettimeslots(selectedDate);
        setError("");
        setTimeSlots(result);
    }
    catch(e){
        setError("Select a future date");
        setTimeSlots([]);
    }
  }
  const handleSubmit =async (e)=>{
    e.preventDefault();
    setLoading(true);
    appointmentInput.doctorId = id;
    appointmentInput.userId = userdata.id;
    
    console.log(appointmentInput);
    let response;
    try{
        response = createAppointment(appointmentInput);
        toast.success("Appointment Created Successfully");
    }  
    catch(e){
        toast.success("Failed to Create Appointment,Try Again!");
        setAppointmentInput(appointmentData);
    } 
    setLoading(false);
    if (response) {
        navigate("/");
      }
  }
  return (
    <div>
      <Header/>
      {loading && <MainLoader />}
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Schedule Appointment </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container contact-form">
                <form method="post" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      required
                      name="title"
                      value={appointmentInput.title}
                      placeholder="Enter the Appointment Reason"
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="description"
                      value={appointmentInput.description}
                      placeholder="Description"
                      onChange={handleInput}
                    />
                  </div>
                  <input type='date' value={startDate} onChange={handleDateChange}/>
                  <div>
                  <select
                      className="form-control form-select"
                      name="startTime"
                      value={appointmentInput.startTime}
                      onChange={handleInput}
                      required
                    >
                      <option value="">Select a Time Slot</option>
                      {timeSlots.map((timeSlot, index) => (
                        <option key={index} value={timeSlot}>
                          {new Date(timeSlot).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p>{error}</p>
                  <div className="btn_box">
                    <button
                      type="submit"
                      className="btn btn-success form-control mt-3 p-2"
                    >
                      Submit
                    </button>
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
  )
}

export default Appointment;