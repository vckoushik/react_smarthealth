import { configureStore } from "@reduxjs/toolkit";
import authApi from '../Apis/authApi';
export const store  =  configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware),
    
});