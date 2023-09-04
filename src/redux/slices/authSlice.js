import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUserInfo,
  googleLoginApiCall,
  logoutApiCall,
} from "../../apis/non-rtk-apis";
import { userApi } from "../../apis/rtk-apis";
import { LocalStorageLoggedInKey } from "../../utils/constants";

const initialState = {
  userInfo: null,
};

export const loginAsyncGoogle = createAsyncThunk(
  "auth/googleLogin",
  async (idToken, { rejectWithValue, dispatch }) => {
    try {
      const response = await googleLoginApiCall(idToken.token);
      dispatch(userApi.util.resetApiState()); // globally reset rtk cache upon login to prevent previous cached api values to be shown
      return response;
    } catch (error) {
      return rejectWithValue("Could not log you in, please try again!");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (args, { rejectWithValue }) => {
    try {
      const response = await logoutApiCall();

      return response;
    } catch (error) {
      return rejectWithValue("Could not log you out, please try again later.");
    }
  }
);

export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async (args, { rejectWithValue }) => {
    try {
      const response = await getUserInfo();
      return response;
    } catch (error) {
      return rejectWithValue("Could not verify logged in user.");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, payload) => {
      state.userInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncGoogle.pending, (state) => {
        state.userInfo = null;
      })
      .addCase(loginAsyncGoogle.fulfilled, (state, action) => {
        state.userInfo = action.payload.data;
        localStorage.setItem(LocalStorageLoggedInKey, "16108");
      })
      .addCase(loginAsyncGoogle.rejected, (state, { payload }) => {
        state.userInfo = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null;
        localStorage.removeItem(LocalStorageLoggedInKey);
      })
      .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
        state.userInfo = payload.data;
      });

    // builder.addMatcher(
    //   userApi.endpoints.googleLogin.matchFulfilled,
    //   (state, { payload }) => {
    //     state.userInfo = payload.data;
    //     localStorage.setItem("rc_logged_in", "16108");
    //   }
    // );
    // builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
    //   state.userInfo = null;
    //   localStorage.removeItem("rc_logged_in");
    // });
    // builder.addMatcher(
    //   userApi.endpoints.refreshUserProfile.matchFulfilled,
    //   (state, { payload }) => {
    //     state.userInfo = payload.data;
    //   }
    // );
    // builder.addMatcher(
    //   userApi.endpoints.refreshUserProfile.matchRejected,
    //   (state, { payload }) => {
    //     // state.userInfo = null;
    //     // localStorage.removeItem("rc_logged_in");
    //   }
    // );
  },
});
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAsyncGoogle.pending, (state) => {
//         state.userInfo = null;
//       })
//       .addCase(loginAsyncGoogle.fulfilled, (state, action) => {
//         state.userInfo = action.payload;
//       })
//       .addCase(loginAsyncGoogle.rejected, (state, { payload }) => {
//         state.userInfo = null;
//       })
//       // .addCase(fetchUserInfo.pending, (state) => {})
//       // .addCase(fetchUserInfo.fulfilled, (state, action) => {
//       //   state.userInfo = action.payload;
//       // })
//       // .addCase(fetchUserInfo.rejected, (state, { payload }) => {
//       //   state.userInfo = null;
//       // })
//       .addCase(logout.pending, (state) => {})
//       .addCase(logout.fulfilled, (state) => {
//         alert('hi')
//         state.userInfo = null;
//         localStorage.removeItem("rc_logged_in");
//       })
//       .addCase(logout.rejected, (state, { payload }) => {});
//   },
// });

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
