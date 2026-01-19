import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,        // user info
    isLoggedIn: false, // auth status
  },
  reducers: {
    setLogin: (state, action) => {
      // action.payload should be { name, email, avatar }
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setLogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
