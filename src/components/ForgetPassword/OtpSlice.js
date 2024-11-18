import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  showComp: true,
  user: null,
  success: false,
  phoneNumber: null,
};

const OtpSlice = createSlice({
  name: "otp",
  initialState: initalState,
  reducers: {
    changeStateTrue: (state) => {
      state.showComp = true;
    },
    changeStateFalse: (state) => {
      state.showComp = false;
    },

    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },

    successTrue: (state) => {
      state.success = true;
    },

    addPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export default OtpSlice.reducer;
export const {
  changeStateFalse,
  changeStateTrue,
  addUser,
  removeUser,
  successTrue,
  addPhoneNumber,
} = OtpSlice.actions;
