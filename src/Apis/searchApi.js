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

    }),
  });
  
  export const { useSearchDiseaseMutation } = searchApi;
  export default searchApi;
  