import { createSlice } from "@reduxjs/toolkit";

export const emptySearchState = {
  disease: "",
  doctorDepartment: "",
  medications: null,
  treatments: null,
  homeRemedies: null,
  preventionMeasures:null ,
};

export const userSearchSlice = createSlice({
  name: "userSearch",
  initialState: emptySearchState,
  reducers: {
    setUserSearchResponse: (state, action) => {
      state.disease = action.payload.disease;
      state.doctorDepartment = action.payload.doctorDepartment;
      state.medications = action.payload.medications;
      state.treatments = action.payload.treatments;
      state.homeRemedies = action.payload.homeRemedies;
      state.preventionMeasures = action.payload.preventionMeasures;
   
    },
  },
});

export const { setUserSearchResponse } = userSearchSlice.actions;
export const userSearchReducer = userSearchSlice.reducer;