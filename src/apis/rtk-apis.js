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
  tagTypes: ["Users", "DayTypes", "Slots", "Assignments"],
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
    getAssignmentsForUserId: builder.query({
      query: ({ userId }) => ({
        url: "assignments/",
        timeout: 20000,
        params: {
          userId,
        },
      }),
      providesTags: ["Assignments"],
    }),
    uploadAssignments: builder.mutation({
      query: ({ file }) => {
        const bodyFormData = new FormData();
        bodyFormData.append("files", file);
        return {
          method: "POST",
          url: "assignments/upload",
          headers: {
            "Content-Type": "multipart/form-data;",
          },
          timeout: 20000,
          data: bodyFormData,
          formData: true,
        };
      },
      invalidatesTags: ["Assignments"],
    }),
    deleteAssignmentForAssignmentId: builder.mutation({
      query: ({ assignmentId }) => {
        return {
          method: "DELETE",
          url: "assignments/",
          headers: {
            "Content-Type": "multipart/form-data;",
          },
          params: {
            assignmentId,
          },
          timeout: 20000,
        };
      },
      invalidatesTags: ["Assignments"],
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
      providesTags: ["Slots"],
    }),
    lockSlotForDate: builder.mutation({
      query: ({ slot_id }) => ({
        url: "slots/processSlot",
        method: "POST",
        timeout: 10000,
        params: {
          slot_id,
        },
      }),
      invalidatesTags: ["Slots"],
    }),
    deleteSlotBySlotId: builder.mutation({
      query: ({ slotId }) => {
        return {
          method: "DELETE",
          url: "slots/",
          params: {
            slotId,
          },
          timeout: 20000,
        };
      },
      invalidatesTags: ["Slots"],
    }),
    generateSlotForDate: builder.mutation({
      query: ({ date_str, start_str, end_str }) => {
        return {
          method: "POST",
          url: "slots/create",
          params: {
            date_str,
            start_str,
            end_str,
          },
          timeout: 20000,
        };
      },
      invalidatesTags: ["Slots"],
    }),
  }),
});

// append use and query to the endpoint above to generate the hook
export const {
  useGetAllUsersQuery,
  useUpdateFreeFollowUpMutation,
  useGetAssignmentsForUserIdQuery,
  useUploadAssignmentsMutation,
  useDeleteAssignmentForAssignmentIdMutation,
  useGetDayTypesQuery,
  useUpdateDayTypesMutation,
  useGetSlotsForDateQuery,
  useLockSlotForDateMutation,
  useDeleteSlotBySlotIdMutation,
  useGenerateSlotForDateMutation,
} = userApi;
