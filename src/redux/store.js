import { configureStore } from "@reduxjs/toolkit";
import authApi from '../Apis/authApi';
import { userAuthReducer } from "./userAuthSlice";
import searchApi from "../Apis/searchApi";
import { userSearchReducer } from "./userSearchSlice";

export const store  =  configureStore({
    reducer: {
        userAuthStore: userAuthReducer, 
        userSearchStore: userSearchReducer,
        [authApi.reducerPath]: authApi.reducer,
        [searchApi.reducerPath]:searchApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(searchApi.middleware),
    
});