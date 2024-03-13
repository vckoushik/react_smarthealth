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

      getMedicines: builder.query({
        query: (pageNumber ) => ({
          url: `medicines/GetMedicines?pageNumber=${pageNumber}`, // Include the pageNumber in the query URL
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
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


      }),
    }),
  });
  
  export const { useSearchDiseaseMutation, useGetMedicinesQuery , useSearchMedicinesQuery } = searchApi;
  export default searchApi;
  