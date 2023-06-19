import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const infoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = infoSlice.actions;

export default infoSlice.reducer;