import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainLoader from "../../components/Loader";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useCreateMedicineMutation,
  useGetMedicineByIdQuery,
  useUpdateMedicineMutation,
} from "../../Apis/searchApi";
import withAdmin from "../../Utility/withAdmin";

const medicineData = {
  name: "",
  precaution: "",
  indication: "",
  contraIndication: "",
  dose: "",
  sideEffect: "",
  modeOfAction: "",
  interaction: "",
};

function MedicineUpsert() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [medicineInput, setMedicineInput] = useState(medicineData);
  const [createMedicine] = useCreateMedicineMutation();
  const [updateMedicine] = useUpdateMedicineMutation();
  const { data } = useGetMedicineByIdQuery(id);

  useEffect(() => {
    if (data && data.result) {
      const tempData = {
        name: data.result.name,
        precaution: data.result.precaution,
        indication: data.result.indication,
        contraIndication: data.result.contraIndication,
        dose: data.result.dose,
        sideEffect: data.result.sideEffect,
        modeOfAction: data.result.modeOfAction,
        interaction: data.result.interaction,
      };
      setMedicineInput(tempData);
    }
  }, [data]);

  const handleMedicineInput = (e) => {
    const { name, value } = e.target;

    setMedicineInput({ ...medicineInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    let response;

    if (id) {
      //update
      response = await updateMedicine({ medicineInput, id });
      toast.success("Medicine Updated Successfully");
    } else {
      //create
      response = await createMedicine(medicineInput);
      toast.success("Medicine created successfully");
    }
 
    if (response) {
      setLoading(false);
      navigate("/medicine-panel");
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
            <h2>{id ? "Edit Medicine" : "Add New Medicine"} </h2>
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
                      value={medicineInput.name}
                      placeholder="Name"
                      onChange={handleMedicineInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="precaution"
                      value={medicineInput.precaution}
                      placeholder="Precaution"
                      onChange={handleMedicineInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="indication"
                      value={medicineInput.indication}
                      placeholder="Indication"
                      onChange={handleMedicineInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="contraIndication"
                      value={medicineInput.contraIndication}
                      placeholder="ContraIndication"
                      onChange={handleMedicineInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="dose"
                      value={medicineInput.dose}
                      placeholder="Dose"
                      onChange={handleMedicineInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="sideEffect"
                      value={medicineInput.sideEffect}
                      placeholder="Side Effect"
                      onChange={handleMedicineInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="modeOfAction"
                      value={medicineInput.modeOfAction}
                      placeholder="Mode of Action"
                      onChange={handleMedicineInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="interaction"
                      value={medicineInput.interaction}
                      placeholder="Interaction"
                      onChange={handleMedicineInput}
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
      <Footer />
    </div>
  );
}

export default withAdmin(MedicineUpsert);
