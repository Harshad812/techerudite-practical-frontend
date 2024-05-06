import { createSlice } from "@reduxjs/toolkit";

interface initialValType {
  isLoggedIn: boolean;
  data: any;
}

export const authIntialValues: initialValType = {
  isLoggedIn: false,
  data: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: authIntialValues,
  reducers: {
    login(state, action) {
      console.log("🚀 ~ file: AuthSlice.tsx:24 ~ login ~ action:", action);
      state.isLoggedIn = action.payload;
    },
    userData(state, action) {
      console.log("🚀 ~ file: AuthSlice.tsx:34 ~ userData ~ action:", action);
      state.data = action.payload;
    },
    logout(state, action) {
      console.log("🚀 ~ file: AuthSlice.tsx:36 ~ logout ~ action:", action);
      state.isLoggedIn = false;
      state.data = action.payload;
    },
  },
});

export const { login, logout, userData } = AuthSlice.actions;

export default AuthSlice.reducer;
