import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({

    reducerPath: "authApi",

    baseQuery: fetchBaseQuery({
      baseUrl: "https://smart-health-001-7e72a5e2a7a1.herokuapp.com/api/",
    }),

    endpoints: (builder) => ({
        
      registerUser: builder.mutation({
        query: (userData) => ({
          url: "auth/register",
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: userData,
        }),
      }),
      loginUser: builder.mutation({
        query: (userCredentials) => ({
          url: "auth/login",
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: userCredentials,
        }),
      }),
    }),
  });
  
  export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
  export default authApi;
  