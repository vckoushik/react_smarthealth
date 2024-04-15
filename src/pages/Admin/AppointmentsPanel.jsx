import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "reactjs-popup/dist/index.css";
import { useGetAppointmentsQuery,useApproveAppointmentMutation,useCancelAppointmentMutation,useCompleteAppointmentMutation } from "../../Apis/searchApi";
import { Appointment_Status } from "../../Utility/StaticDetail";
import {toast} from "react-toastify";
function AppointmentsPanel() {
  const [appointments, setAppointments] = useState([]);
  const userdata = useSelector((state) => state.userAuthStore);
  const { data } = useGetAppointmentsQuery();
  const [approveAppointment] = useApproveAppointmentMutation();
  const [cancelAppointment] = useCancelAppointmentMutation();
  const [completeAppointment] = useCompleteAppointmentMutation();
  useEffect(() => {
    if (data) {
      setAppointments(data.result);
    }
  }, [data]);

  const handleStatus=async(id,status)=>{
    try{
        console.log(id);
        console.log(status);
        switch (status) {
            case "CANCEL":
              await cancelAppointment(id);
              break;
            case "APPROVE":
              await approveAppointment(id);
              break;
            case "COMPLETE":
              await completeAppointment(id);
              break;
          }
        toast.success("Updated Status successfully");
        
    }
    catch(e){
        toast.error("Failed to change Status");
    }
  }

  return (
    <div>
      <Header />
      <section className="department_section layout_padding">
        <div className="department_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>Appointments</h2>
              <p>All Appointments</p>
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
                      <th scope="col">Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments &&
                      appointments.map((A, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{A.title}</td>
                          <td>{A.description}</td>
                          <td>{A.startTime}</td>
                          <td>{A.endTime}</td>
                          <td>{A.doctorId}</td>
                            <td>{Appointment_Status[A.status]}</td>
                            <td>
                                <button key={`${A.id}_CANCEL`} type="button" className="btn btn-warning m-1"
                                    onClick={()=>{handleStatus(A.id,"CANCEL")}}
                                >
                                Cancel
                                </button>
                                <button key={`${A.id}_APPROVE`}  type="button" className="btn btn-success m-1"
                                onClick={()=>{handleStatus(A.id,"APPROVE")}}
                                >
                                Approve
                                </button>
                                <button key={`${A.id}_COMPLETE`} type="button" className="btn btn-primary"
                                onClick={()=>{handleStatus(A.id,"COMPLETE")}}
                                >
                                Complete
                                </button>
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
  );
}

export default AppointmentsPanel;
