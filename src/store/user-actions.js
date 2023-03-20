import { authActions } from "./auth-slice";

export const sendUserSignupData = (userSignupData) => {
  return async (dispatch) => {
    const sendUserData = async () => {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userSignupData),
      });

      if (!response.ok) {
        throw new Error("Sending user data failed");
      }

      const data = await response.json();
      console.log(data);
      return data;
    };

    try {
      const userData = await sendUserData();
      dispatch(authActions.login(userSignupData));
    } catch (error) {
      console.error(error);
    }
  };
};
