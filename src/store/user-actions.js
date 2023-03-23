import { authActions } from "./auth-slice";

export const sendUserSignupData = (userData) => {
  return async (dispatch) => {
    const sendUserData = async () => {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Sending user data failed");
      }

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
      }

      return data;
    };

    try {
      const userData = await sendUserData();
      dispatch(authActions.login(userData));
    } catch (error) {
      console.error(error);
    }
  };
};

export const sendUserLoginData = (userData) => {
  return async (dispatch) => {
    const sendUserData = async () => {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("login failed");
      }
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
      }

      return data;
    };
    try {
      const userLoginData = await sendUserData();
      dispatch(authActions.login(userLoginData));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addProgramToFavorites = (programId, username) => {
  return async (dispatch) => {
    const sendProgramId = async () => {
      const response = fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(programId, username),
      });

      if (!response.ok) {
        throw new Error("adding program to favorites failed");
      }
    };
    try {
      await sendProgramId();
      dispatch(authActions.addToFavorite(programId));
    } catch (error) {
      console.error(error);
    }
  };
};
