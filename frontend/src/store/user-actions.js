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

export const modifyFavoritePrograms = (favoritedPrograms, username) => {
  return async (dispatch) => {
    const sendFavoritedProgramIds = async () => {
      const response = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favoritedPrograms, username }),
      });

      if (!response.ok) {
        throw new Error("adding program to favorites failed");
      }
    };
    try {
      await sendFavoritedProgramIds();
      dispatch(authActions.setFavoritePrograms(favoritedPrograms));
    } catch (error) {
      console.error(error);
      console.log(error.message);
    }
  };
};
