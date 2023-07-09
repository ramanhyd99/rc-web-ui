//using RTK query https://redux-toolkit.js.org/tutorials/rtk-query

import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from ".";
import CONFIG from "../config";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await api({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const userApi = createApi({
  reducerPath: "userAPI",
  refetchOnReconnect: true,
  baseQuery: axiosBaseQuery({
    baseUrl: `${CONFIG["WEB_BFF"]}/`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Users", "DayTypes"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ role, search, offset, limit, sort_field, sort_dir }) => ({
        url: "users/",
        timeout: 20000,
        params: {
          role,
          search,
          offset,
          limit,
          sort_field,
          sort_dir,
        },
      }),
      providesTags: ["Users"],
    }),
    updateFreeFollowUp: builder.mutation({
      query: ({ userId }) => ({
        url: "users/updateFreeFollowUp",
        method: "POST",
        timeout: 10000,
        params: {
          userId,
        },
      }),
      invalidatesTags: ["Users"],
    }),
    uploadAssignments: builder.mutation({
      query: ({ fileList }) => ({
        headers: {
          "Content-Type": null,
        },
        url: "assignments/upload",
        method: "POST",
        timeout: 20000,
        data: fileList,
      }),
      // invalidatesTags: ["Users"],
    }),
    getDayTypes: builder.query({
      query: () => ({
        url: "settings/getDayTypes",
        timeout: 20000,
      }),
      providesTags: ["DayTypes"],
    }),
    updateDayTypes: builder.mutation({
      query: ({ formData }) => ({
        headers: {
          "Content-Type": null,
        },
        url: "settings/updateDayTypes",
        method: "PATCH",
        timeout: 20000,
        data: formData,
      }),
      invalidatesTags: ["DayTypes"],
    }),
    getSlotsForDate: builder.query({
      query: ({ date_str }) => ({
        url: "slots/",
        timeout: 20000,
        params: {
          date_str,
        },
      }),
    }),
  }),
});

// append use and query to the endpoint above to generate the hook
export const {
  useGetAllUsersQuery,
  useUpdateFreeFollowUpMutation,
  useUploadAssignmentsMutation,
  useGetDayTypesQuery,
  useUpdateDayTypesMutation,
  useGetSlotsForDateQuery
} = userApi;
