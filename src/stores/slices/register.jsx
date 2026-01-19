import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: null,          // store registered user info
    isRegistered: false, // registration status
    error: null,         // optional error message
  },
  reducers: {
    registerSuccess: (state, action) => {
      state.user = action.payload;   // store user object: { name, email, avatar }
      state.isRegistered = true;
      state.error = null;
    },
    registerFail: (state, action) => {
      state.error = action.payload;  // error message
      state.isRegistered = false;
    },
    clearRegister: (state) => {
      state.user = null;
      state.isRegistered = false;
      state.error = null;
    },
  },
});

export const { registerSuccess, registerFail, clearRegister } = registerSlice.actions;
export default registerSlice.reducer;
