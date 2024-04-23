import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MainLoader from "../../components/Loader";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";
import {
  useCreateMedicalRecordMutation,
} from "../../Apis/searchApi";
import { useSelector } from "react-redux";
import { SD_Roles } from "../../Utility/StaticDetail";

const medicalRecordData = {
  Name: "",
  Description: "",
  FileData: null,
  UserId: "",
};


function MedicalRecordUpsert() {

  const navigate = useNavigate();
  const [createMedicalRecord] = useCreateMedicalRecordMutation();
  const [loading, setLoading] = useState(false);
  const [medicalRecordInput, setMedicalRecordInput] = useState(medicalRecordData);

  const userdata = useSelector((state)=>state.userAuthStore);

  useEffect(()=>{
    if(userdata.role == 'patient'){
      medicalRecordData.UserId = userdata.id;
    }
  },[])

  const handleMedicalRecordInput = (e) => {
    const { name, value,files } = e.target;
    if (name === 'FileData') {
      setMedicalRecordInput({ ...medicalRecordInput, [name]: files[0] });
    } else {
      setMedicalRecordInput({ ...medicalRecordInput, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    let response;
  
    try {
      // Create a FormData object to hold the form data including the file
      console.log(medicalRecordInput);
      const formData = new FormData();
      formData.append("Name", medicalRecordInput.Name);
      formData.append("Description", medicalRecordInput.Description);
      formData.append("FileData", medicalRecordInput.FileData);
      formData.append("UserId", medicalRecordInput.UserId);
      formData.append("FileName",medicalRecordInput.FileData.name);
      console.log(formData);
      // Create the medical record with the FormData object
      response = await createMedicalRecord(formData);
      toast.success("Medical Record Created successfully");
    } catch (error) {
      // Handle errors
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  
    if (response) {
      setLoading(false);
      if(userdata.role == 'patient'){
        navigate("/medicalrecords");
      }
      else
        navigate("/medicalrecords-panel");
    }
    setLoading(false);
  };
  
  return (
    <div>
      <Header />
      {loading && <MainLoader />}
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Add New Medical Record </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container contact-form">
                <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      required
                      name="Name"
                      placeholder="Name"
                      onChange={handleMedicalRecordInput}
                    />
                  </div>
                  <div>
                  <label>Description</label>
                    <input
                      type="text"
                      required
                      name="Description"
                      placeholder="Description"
                      onChange={handleMedicalRecordInput}
                    />
                  </div>
                  <div>
                  <label>Choose a File</label>
                    <input
                      type="file"
                      required
                      name="FileData"
                      onChange={handleMedicalRecordInput}
                    />
                  </div>
                  <div>
                    <label>User Id</label>
                    <input
                      type="text"
                      required
                      name="UserId"
                      placeholder="User ID"
                      value={(userdata.role === 'patient' ? userdata.id : '')}
                      onChange={handleMedicalRecordInput}
                      disabled={userdata.role === 'patient'}
                    />
                  </div>
                  <div className="btn_box">
                    <button
                      type="submit"
                      className="btn btn-success form-control mt-3 p-2"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MedicalRecordUpsert;
