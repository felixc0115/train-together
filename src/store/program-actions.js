import { allProgramsActions } from "./all-programs-slice";

export const fetchProgramData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/programs");

      if (!response.ok) {
        throw new Error("Could not fetch programs");
      }
      const data = await response.json();
      return data;
    };

    try {
      const programData = await fetchData();
      dispatch(
        allProgramsActions.replaceProgram({
          programs: programData.programs,
          totalPrograms: programData.totalPrograms,
        })
      );
    } catch (error) {
      alert("Fetching program data failed");
    }
  };
};
