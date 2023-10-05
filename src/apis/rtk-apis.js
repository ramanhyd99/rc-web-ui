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
  tagTypes: ["Users", "DayTypes", "Slots", "Assignments", "Bookings", "Notes"],
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
    getSpecificUserDetails: builder.query({
      query: ({ userId }) => ({
        url: "users/userProfile/",
        timeout: 20000,
        params: {
          userId,
        },
      }),
      providesTags: ["Users"],
    }),
    getAllSessionsForUser: builder.query({
      query: ({ userId, search }) => ({
        url: `bookings/`,
        params: {
          userId,
          search,
        },
        timeout: 20000,
      }),
      providesTags: ["Bookings"],
    }),
    getAllSessionsByDate: builder.query({
      query: ({ date }) => ({
        url: `bookings/admin`,
        params: {
          date,
        },
        timeout: 20000,
      }),
      providesTags: ["Bookings"],
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
      query: ({ date_str, timeZone }) => ({
        url: "slots/",
        timeout: 20000,
        params: {
          date_str,
          timeZone,
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
      query: ({ date_str, start_str, end_str, timeZone }) => {
        return {
          method: "POST",
          url: "slots/create",
          params: {
            date_str,
            start_str,
            end_str,
            timeZone,
          },
          timeout: 20000,
        };
      },
      invalidatesTags: ["Slots"],
    }),
    getDashboardMetrics: builder.query({
      query: () => ({
        url: "dashboard/",
        timeout: 20000,
      }),
    }),
    getReviews: builder.query({
      query: () => ({
        url: "reviews/",
        timeout: 20000,
      }),
    }),
    uploadReview: builder.mutation({
      query: ({ form }) => {
        const bodyFormData = new FormData();

        for (const key in form) {
          if (form.hasOwnProperty(key)) {
            bodyFormData.append(key, form[key]);
          }
        }

        return {
          method: "POST",
          url: "reviews/upload",
          headers: {
            "Content-Type": "multipart/form-data;",
          },
          timeout: 20000,
          data: bodyFormData,
          formData: true,
        };
      },
    }),
    checkout: builder.mutation({
      query: ({ form }) => {
        const bodyFormData = new FormData();

        for (const key in form) {
          if (form.hasOwnProperty(key)) {
            bodyFormData.append(key, form[key]);
          }
        }

        return {
          method: "POST",
          url: "bookings/",
          headers: {
            "Content-Type": "multipart/form-data;",
          },
          timeout: 20000,
          data: bodyFormData,
          formData: true,
        };
      },
      invalidatesTags: ["Bookings", "Users"],
    }),
    cancelBooking: builder.mutation({
      query: ({ bookingId, reason }) => {
        return {
          method: "POST",
          url: "bookings/cancel",
          params: {
            bookingId,
            reason,
          },
          timeout: 20000,
        };
      },
      invalidatesTags: ["Bookings"],
    }),
    getNotes: builder.query({
      query: ({ userId }) => ({
        url: "notes/",
        timeout: 20000,
        params: {
          userId,
        },
      }),
      providesTags: ["Notes"],
    }),
    deleteNoteByNoteId: builder.mutation({
      query: ({ noteId }) => {
        return {
          method: "DELETE",
          url: "notes/",
          params: {
            noteId,
          },
          timeout: 20000,
        };
      },
      invalidatesTags: ["Notes"],
    }),
    createNoteForUserId: builder.mutation({
      query: ({ user_id, note }) => {
        return {
          method: "POST",
          url: "notes/",
          params: {
            user_id,
            note,
          },
          timeout: 20000,
        };
      },
      invalidatesTags: ["Notes"],
    }),
    updateNoteByNoteId: builder.mutation({
      query: ({ note_id, note }) => {
        return {
          method: "PATCH",
          url: "notes/",
          params: {
            note_id,
            note,
          },
          timeout: 20000,
        };
      },
      invalidatesTags: ["Notes"],
    }),
  }),
});

// append use and query to the endpoint above to generate the hook
export const {
  useGetAllUsersQuery,
  useGetAllSessionsForUserQuery,
  useGetSpecificUserDetailsQuery,
  useGetAllSessionsByDateQuery,
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
  useGetDashboardMetricsQuery,
  useUploadReviewMutation,
  useGetReviewsQuery,
  useCheckoutMutation,
  useCancelBookingMutation,
  useGetNotesQuery,
  useDeleteNoteByNoteIdMutation,
  useCreateNoteForUserIdMutation,
  useUpdateNoteByNoteIdMutation,
} = userApi;
