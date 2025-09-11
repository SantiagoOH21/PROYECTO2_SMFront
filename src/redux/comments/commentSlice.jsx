import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";

const initialState = {
  commentList: [],
  isLoading: false,
  error: null,
};

export const getAll = createAsyncThunk("comments/getAll", async () => {
  try {
    return await commentService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (commentData, thunkAPI) => {
    try {
      const response = await commentService.createComment(commentData);
      return response.newComment;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Error al crear comentario"
      );
    }
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.commentList = action.payload;
      })
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.commentList.push(action.payload);
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default commentSlice.reducer;
