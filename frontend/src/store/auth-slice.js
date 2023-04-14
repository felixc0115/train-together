import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.user = { ...action.payload.user, token: action.payload.token };
    },
    logout(state) {
      state.user = null;
    },
    setFavoritePrograms(state, action) {
      state.user.favoritedPrograms = action.payload;
    },
  },
});

export const authActions = authSlice.actions; //Used to export action creators to be called inside components

export default authSlice.reducer; //export the reducer to be available to configureStore
