import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userName: "Elon Musk",
    error: null,
  },
  reducers: {
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
