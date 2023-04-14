import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const progressBarSlice = createSlice({
  name: "progressBar",
  initialState,
  reducers: {
    triggerProgressBar: (state) => {
      state = !state;
      return state;
    }
  },
});

// actions to dispatch
const { triggerProgressBar } = progressBarSlice.actions;

// reducer to create store redux
const progressBarReducer = progressBarSlice.reducer;

export default progressBarReducer;
export { triggerProgressBar };
