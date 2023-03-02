import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import allProgramsReducer from "./allPrograms";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allPrograms: allProgramsReducer,
  },
});

export default store;
