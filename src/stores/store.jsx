import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/Login";
import registerReducer from "./slices/register";



const store = configureStore({
  reducer: {
    login: loginReducer,
    register : registerReducer
  }
});

export default store;
