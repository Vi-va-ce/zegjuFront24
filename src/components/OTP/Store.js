import { configureStore } from "@reduxjs/toolkit";
import OtpSlice from "./OtpSlice";

const Store = configureStore({
  reducer: {
    otp: OtpSlice,
  },
});

export default Store;
