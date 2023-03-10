import { createSlice } from "@reduxjs/toolkit";

const DUMMY_PROGRAMS = [
  {
    youtubeLink: "https://www.youtube.com/watch?v=jj2AAH6jbHk",
    title: "hip mobility",
    description: "Mobility routine to work on your hips!",
    exercises: [
      { name: "figure 4 stretch", sets: 3, repsOrDurationPerSet: 30 },
    ],
    category: "mobility",
    durationInMins: 15,
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=eQHmKJh20_c",
    title: "general stretches",
    description: "stretch routine for general well being!",
    exercises: [
      { name: "figure 4 stretch", sets: 3, repsOrDurationPerSet: 30 },
    ],
    category: "stretching",
    durationInMins: 10,
  },
];

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
