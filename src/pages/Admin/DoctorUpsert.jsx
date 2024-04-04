import React, { useState } from 'react'
import Header from '../../components/Header';
import MainLoader from '../../components/Loader';
import Footer from '../../components/Footer';
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateDoctorMutation, useUpdateDoctorMutation } from '../../Apis/searchApi';
const doctorData = {
  name: "",
  departmentId: "",
  state: "",
  country: "",
};

function DoctorUpsert() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [createDoctor] = useCreateDoctorMutation();
  const [updateDoctor] = useUpdateDoctorMutation();
  const [loading,setLoading] = useState(false);
  const [doctorInput, setDoctorInput] = useState(doctorData);
  const handleDoctorInput = (e) => {
    const { name, value } = e.target;

    setDoctorInput({ ...doctorInput, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    let response;

    try {
      if (id) {
          // Update
          response = await updateDoctor({ doctorInput, id });
          toast.success("Doctor Updated Successfully");
      } else {
          // Create
          response = await createDoctor(doctorInput);
          toast.success("Doctor created successfully");
      }
  } catch (error) {
      // Handle errors
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
  }
 
    if (response) {
      setLoading(false);
      navigate("/doctor-panel");
    }
    setLoading(false);
  };
  return (
    <div>
    <Header/>
    {loading && <MainLoader/>}
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>{id ? "Edit Doctor" : "Add New Doctor"} </h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container contact-form">
              <form method="post" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    required
                    name="name"
                    value={doctorInput.name}
                    placeholder="Name"
                    onChange={handleDoctorInput}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="departmentId"
                    value={doctorInput.departmentId}
                    placeholder="DepartmentId"
                    onChange={handleDoctorInput}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="state"
                    value={doctorInput.state}
                    placeholder="State"
                    onChange={handleDoctorInput}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="country"
                    value={doctorInput.country}
                    placeholder="Country"
                    onChange={handleDoctorInput}
                  />
                </div>
                <div className="btn_box">
                  <button
                    type="submit"
                    className="btn btn-success form-control mt-3 p-2"
                  >
                    {id ? "Update" : "Create"}
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
    <Footer/>
  </div>
  )
}

export default DoctorUpsert