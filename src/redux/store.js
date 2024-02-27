import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User/UserSlice";
import countSlice from "./counter/countSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    counter: countSlice,
  },
});

export default store;
