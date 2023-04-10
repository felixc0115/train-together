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
    addExerciseToProgram(state, action) {
      const programIndex = state.programs.findIndex(
        (program) => program._id === action.payload.programId
      );

      if (!state.programs[programIndex].exercises) {
        state.programs[programIndex].exercises = [action.payload.newExercise];
      } else {
        state.programs[programIndex].exercises.push(action.payload.newExercise);
      }
    },
  },
});

export const allProgramsActions = allPrograms.actions;
export default allPrograms.reducer;
