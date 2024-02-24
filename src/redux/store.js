import { configureStore } from "@reduxjs/toolkit";
import authApi from '../Apis/authApi';
import { userAuthReducer } from "./userAuthSlice";

export const store  =  configureStore({
    reducer: {
        userAuthStore: userAuthReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware),
    
});