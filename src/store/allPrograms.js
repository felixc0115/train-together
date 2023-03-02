import { createSlice } from "@reduxjs/toolkit";

const DUMMY_PROGRAMS = [
  {
    youtubeLink: "https://img.youtube.com/vi/jj2AAH6jbHk/0.jpg",
    title: "hip mobility routine",
    description: "Mobility routine to work on your hips!",
    exercises: [
      { name: "figure 4 stretch", sets: 3, repsOrDurationPerSet: 30 },
    ],
    category: "mobility",
    durationInMins: 15,
  },
];

const allPrograms = createSlice({
  name: "allPrograms",
  initialState: {
    programs: DUMMY_PROGRAMS,
    totalPrograms: 0,
  },
});

export const allProgramsActions = allPrograms.actions;
export default allPrograms.reducer;
