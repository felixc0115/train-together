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
