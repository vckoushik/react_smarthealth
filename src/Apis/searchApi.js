import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backendUrl } from "../Utility/StaticDetail";

const searchApi = createApi({
  reducerPath: "searchApi",

  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),

  endpoints: (builder) => ({
    searchDisease: builder.mutation({
      query: (userSearchInput) => ({
        url: "search",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userSearchInput,
      }),
    }),
    getMedicineById: builder.query({
      query: (id) => ({
        url: `medicines/GetById/${id}`,
      }),
      providesTags: ["Medicines"],
    }),
    createMedicine: builder.mutation({
      query: (data) => ({
        url: "medicines/createMedicine/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Medicines"],
    }),
    updateMedicine: builder.mutation({
      query: (args) => {
        const {data,id} = args;
        return {
        url: "medicines/updatemedicine/" + id,
        method: "PUT",
        body: JSON.stringify(data), // Serialize data to JSON string
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        }
      };
    }
    }),
    deleteMedicine: builder.mutation({
      query: (id) => ({
        url: `medicines/${id}`,
        method: "DELETE",
      }),
    }),

    getMedicines: builder.query({
      query: (pageNumber) => ({
        url: `medicines/GetMedicines?pageNumber=${pageNumber}`, // Include the pageNumber in the query URL
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),

      searchMedicines: builder.query({
        query: (searchQuery) => ({
          url: `medicines/SearchMedicine?query=${searchQuery}`, // Include the pageNumber in the query URL
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }),
      }),

        /* DOCTOR APIS */

        getDoctorById: builder.query({
          query: (id) => ({
            url: `doctor/GetById/${id}`,
          }),
          providesTags: ["Medicines"],
        }),
        createDoctor: builder.mutation({
          query: (data) => ({
            url: "doctor/createdoctor/",
            method: "POST",
            body: data,
          }),
          invalidatesTags: ["Doctors"],
        }),
        updateDoctor: builder.mutation({
          query: (args) => {
            const {data,id} = args;
            return {
            url: "doctor/updatedoctor/" + id,
            method: "PUT",
            body: JSON.stringify(data), // Serialize data to JSON string
            headers: {
              "Content-Type": "application/json", // Set content type to JSON
            }
          };
        }
        }),
        deleteDoctor: builder.mutation({
          query: (id) => ({
            url: `doctor/${id}`,
            method: "DELETE",
          }),
        }),

        /*Appointment APIs */
        getAppointments: builder.query({
          query: () => ({
            url: `appointment/GetAppointments/`,
          }),
          providesTags: ["Appointments"],
        }),

        getAppointmentId: builder.query({
          query: (id) => ({
            url: `appointment/GetById/${id}`,
          }),
          providesTags: ["Appointments"],
        }),
        getPatientAppointmentId: builder.query({
          query: (id) => ({
            url: `appointment/GetPaitentAppointments/${id}`,
          }),
          providesTags: ["Appointments"],
        }),
        createAppointment: builder.mutation({
          query: (data) => ({
            url: "appointment/createappointment/",
            method: "POST",
            body: data,
          }),
          invalidatesTags: ["Appointments"],
        }),
        cancelAppointment: builder.mutation({
          query: (id) => ({
            url: `appointment/cancelAppointment/${id}`,
            method: "PUT"
          }),
          invalidatesTags: ["Appointments"],
        }),
        approveAppointment: builder.mutation({
          query: (id) => ({
            url: `appointment/approveAppointment/${id}`,
            method: "PUT"
          }),
          invalidatesTags: ["Appointments"],
        }),
        completeAppointment: builder.mutation({
          query: (id) => ({
            url: `appointment/completeAppointment/${id}`,
            method: "PUT"
          }),
          invalidatesTags: ["Appointments"],
        }),

        /*medical Record APIs */
        getMedicalRecords: builder.query({
          query: () => ({
            url: `medicalrecords/GetRecords/`,
          }),
          providesTags: ["MedicalRecords"],
        }),
        deleteMedicalRecord: builder.mutation({
          query: (id) => ({
            url: `medicalrecords/DeleteRecord/${id}`,
            method: "DELETE",
          }),
        }),
        createMedicalRecord: builder.mutation({
          query: (data) => ({
            url: "MedicalRecords",
            method: "POST",
            body: data,
          }),
          invalidatesTags: ["Medical Record"],
        }),

  }),
});

export const {
  useSearchDiseaseMutation,
  useGetMedicineByIdQuery,
  useCreateMedicineMutation,
  useUpdateMedicineMutation,
  useDeleteMedicineMutation,
  useGetMedicinesQuery,
  useSearchMedicinesQuery,
  useGetDoctorByIdQuery,
  useCreateDoctorMutation,
  useUpdateDoctorMutation,
  useDeleteDoctorMutation,
  useGetAppointmentsQuery,
  useGetAppointmentIdQuery,
  useGetPatientAppointmentIdQuery,
  useCreateAppointmentMutation,
  useApproveAppointmentMutation,
  useCancelAppointmentMutation,
  useCompleteAppointmentMutation,
  useGetMedicalRecordsQuery,
  useDeleteMedicalRecordMutation,
  useCreateMedicalRecordMutation
} = searchApi;
export default searchApi;
