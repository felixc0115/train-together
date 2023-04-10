import { allProgramsActions } from "./all-programs-slice";

export const fetchAllProgramsData = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("/api/programs", {
        headers: { Authorization: `Bearer ${token}` },
      }); //GET request to the server API

      if (!response.ok) {
        throw new Error("Could not fetch programs");
      }
      const data = await response.json();
      return data;
    };

    try {
      const programsData = await fetchData();
      dispatch(
        allProgramsActions.replaceProgram({
          programs: programsData,
        })
      );
    } catch (error) {
      alert("Fetching program data failed");
    }
  };
};

export const sendProgramData = (newProgram, token) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("/api/programs", {
        method: "POST",
        body: JSON.stringify(newProgram),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Sending program data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(allProgramsActions.addProgram(newProgram));
    } catch (error) {
      console.error(error);
    }
  };
};

export const sendExerciseDetail = (newExercise, token, programId) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`/api/programs/${programId}`, {
        method: "PATCH",
        body: JSON.stringify(newExercise),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Sending exercise detail failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        allProgramsActions.addExerciseToProgram({ newExercise, programId })
      );
    } catch (error) {
      console.error(error);
    }
  };
};
