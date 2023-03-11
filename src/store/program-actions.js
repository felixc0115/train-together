import { allProgramsActions } from "./all-programs-slice";

export const fetchProgramData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("/api/programs"); //GET request to the server API

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
          programs: programData,
        })
      );
    } catch (error) {
      alert("Fetching program data failed");
    }
  };
};

export const sendProgramData = (newProgram) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch("/api/programs", {
        method: "POST",
        body: JSON.stringify(newProgram),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Sending program data failed");
      }
    };
    try {
      await sendRequest();
      console.log("hello");
    } catch (error) {
      console.error(error);
    }
  };
};
