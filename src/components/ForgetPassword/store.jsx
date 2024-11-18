import { configureStore } from "@reduxjs/toolkit";
import OtpSlice from "./OtpSlice";

const store = configureStore({
  reducer: {
    otp: OtpSlice,
  },
});

export default store;
