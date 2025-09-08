import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const create = createAsyncThunk("posts/create", async (post) => {
  try {
    return await postsService.create(post);
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById", async (id) => {
  try {
    return await postsService.getById(id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (postName) => {
    try {
      return await postsService.getPostByName(postName);
    } catch (error) {
      console.error(error);
    }
  }
);

export const deletePost = createAsyncThunk("posts/delete", async (id) => {
  try {
    await postsService.deletePost(id);
    return id;
  } catch (error) {
    console.error(error);
  }
});

export const update = createAsyncThunk("posts/update", async (post) => {
  try {
    return await postsService.update(post);
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.posts = [action.payload, ...state.posts];
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(update.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post.id === action.payload.post._id) {
            post = action.payload;
          }
          return post;
        });
        state.posts = posts;
      });
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
