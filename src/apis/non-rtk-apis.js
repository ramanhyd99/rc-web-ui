import { api } from ".";

export const googleLoginApiCall = async (idToken) => {
  const response = await api.post(
    "login/google/",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const logoutApiCall = async () => {
  const response = await api.post(
    "logout/",
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const getUserInfo = async () => {
  const response = await api.get("users/userProfile/");

  return response.data;
};
