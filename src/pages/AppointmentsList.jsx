import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "reactjs-popup/dist/index.css";
import { useGetDoctorByIdQuery, useGetPatientAppointmentIdQuery } from '../Apis/searchApi';
import { Appointment_Status } from '../Utility/StaticDetail';
import { getDoctorById } from '../Apis/AxiosApi';


function AppointmentsList() {
    const [appointments, setAppointments] = useState([]);
    const userdata = useSelector((state)=>state.userAuthStore);
    const { data } = useGetPatientAppointmentIdQuery(userdata.id);
   
    useEffect(() => {
        if (data) {
            setAppointments(data.result);
        }
      }, [data]);

    const getDoctorName =async (id)=>{
        var result;
        try{
            result = await getDoctorById(id);
           return result.result.name;
        }
        catch(e){

        }
        return "";
    }
  return (
    <div>
    <Header />
    <section className="department_section layout_padding">
      <div className="department_container">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>Appointments</h2>
            <p>
              Your Scheduled Appointment
            </p>
          </div>

          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Appointment Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments &&
                    appointments.map((A, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{A.title}</td>
                        <td>
                         {A.description}
                        </td>
                        <td>
                         {A.startTime}
                        </td>
                        <td>
                         {A.endTime}
                        </td>
                        <td>
                         {A.doctorId}
                        </td>
                        <td>
                         {Appointment_Status[A.status]}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>
    </section>
    <Footer />
  </div>
  )
}

export default AppointmentsList