import { api } from ".";
import CONFIG from "../config";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query";

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

// export const authApi = createApi({
//   reducerPath: "authAPI",
//   refetchOnReconnect: true,
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${CONFIG["WEB_BFF"]}/`,
//     prepareHeaders: (headers) => {
//       headers.set("Content-Type", "application/json");
//       return headers;
//     },
//     credentials: "include",
//   }),
//   endpoints: (builder) => ({
//     googleLogin: builder.mutation({
//       query: ({ token }) => ({
//         url: "login/google/",
//         method: "POST",
//         Authorization: `Bearer ${token}`,
//         timeout: 20000,
//         body: {},
//       }),
//     }),
//   }),
// });

// append use and query to the endpoint above to generate the hook
// export const { useGoogleLoginMutation } = authApi;
