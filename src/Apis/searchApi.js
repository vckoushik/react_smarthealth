import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const searchApi = createApi({
  reducerPath: "searchApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7182/api/",
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
      query: ({ data, id }) => ({
        url: "medicines/updatemedicine/" + id,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Medicines"],
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
          query: ({ data, id }) => ({
            url: "doctor/updatedoctor/" + id,
            method: "PUT",
            body: data,
          }),
          invalidatesTags: ["Doctors"],
        }),
        deleteDoctor: builder.mutation({
          query: (id) => ({
            url: `doctor/${id}`,
            method: "DELETE",
          }),
        }),

        /*Appointment APIs */
        /* DOCTOR APIS */

        getAppointmentId: builder.query({
          query: (id) => ({
            url: `appointment/GetById/${id}`,
          }),
          providesTags: ["Medicines"],
        }),
        getPatientAppointmentId: builder.query({
          query: (id) => ({
            url: `appointment/GetPaitentAppointments/${id}`,
          }),
          providesTags: ["Medicines"],
        }),
        createAppointment: builder.mutation({
          query: (data) => ({
            url: "appointment/createappointment/",
            method: "POST",
            body: data,
          }),
          invalidatesTags: ["Appointments"],
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
  useGetAppointmentIdQuery,
  useGetPatientAppointmentIdQuery,
  useCreateAppointmentMutation
} = searchApi;
export default searchApi;
