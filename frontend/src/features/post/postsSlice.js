import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  post: null,
  newPost: null,
  deletedPost: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all posts
export const allPosts = createAsyncThunk("posts", async (_, thunkAPI) => {
  try {
    return await postsService.getPosts();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Get post
export const findPost = createAsyncThunk("Posts/find", async (id, thunkAPI) => {
  try {
    return await postsService.getPost(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const addPost = createAsyncThunk("posts/add", async (data, thunkAPI) => {
  try {
    return await postsService.setPost(data);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const updatePost = createAsyncThunk(
  "posts/update",
  async (data, thunkAPI) => {
    try {
      return await postsService.postUpdate(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updatePostComments = createAsyncThunk(
  "posts/updateComments",
  async (data, thunkAPI) => {
    try {
      return await postsService.commentsUpdate(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (data, thunkAPI) => {
    try {
      return await postsService.removePost(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.newPost = null;
      state.deletedPost = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(allPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(findPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(findPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.post = action.payload;
      })
      .addCase(findPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newPost = action.payload;
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.deletedPost = action.payload;
        state.posts = state.posts.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts[
          state.posts.findIndex((item) => item._id === action.payload._id)
        ] = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updatePostComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePostComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts[
          state.posts.findIndex((item) => item._id === action.payload._id)
        ] = action.payload;
      })
      .addCase(updatePostComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
