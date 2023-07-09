import { api } from ".";

export const getUsersApiCall = async (role, search, limit, offset) => {
  const response = await api.get("users/", {
    params: {
      role: role,
      search: search,
      limit: limit,
      offset: offset,
    },
  });

  return response.data;
};

export const getUserInfo = async () => {
  const response = await api.get("users/userProfile/");

  return response.data;
};
