import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth/authService";

export const fetchProfile = createAsyncThunk(
  "profile/fetch",
  async (_, thunkAPI) => {
    try {
      return await authService.getMe();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    posts: [],
    followersCount: 0,
    followingCount: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.posts = action.payload.posts;
        state.followersCount = action.payload.followersCount;
        state.followingCount = action.payload.followingCount;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error al cargar el perfil";
      });
  },
});

export default profileSlice.reducer;
