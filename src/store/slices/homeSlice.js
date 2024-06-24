import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../utils/api";

export const getAllPost = createAsyncThunk(
  "/posts",
  async ({ rejectWithValue }) => {
    try {
      const response = await API.getAllPost();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    loading: false,
    postData: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.postData = payload;
    });
    builder.addCase(getAllPost.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default homeSlice.reducer;
