import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import allProgramsReducer from "./all-programs-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allPrograms: allProgramsReducer,
  },
});

export default store;
