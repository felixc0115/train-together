import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions; //Used to export action creators to be called inside components

export default authSlice.reducer; //export the reducer to be available to configureStore
