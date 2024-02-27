import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, // User data
    token: localStorage.getItem("accessToken") || null, // Access token
  },
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("accessToken", action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = userSlice.actions;
export default userSlice.reducer;
