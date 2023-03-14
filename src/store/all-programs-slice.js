import { createSlice } from "@reduxjs/toolkit";

const allPrograms = createSlice({
  name: "allPrograms",
  initialState: {
    programs: [],
    totalPrograms: 0,
  },
  reducers: {
    replaceProgram(state, action) {
      state.programs = action.payload.programs;
      state.totalPrograms = action.payload.programs.length;
    },
    addProgram(state, action) {
      state.programs.push(action.payload);
    },
  },
});

export const allProgramsActions = allPrograms.actions;
export default allPrograms.reducer;
