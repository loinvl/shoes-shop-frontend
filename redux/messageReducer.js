import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state = action.payload;
      return state;
    }
  },
});

// actions to dispatch
const { showMessage } = messageSlice.actions;

// reducer to create store redux
const messageReducer = messageSlice.reducer;

export default messageReducer;
export { showMessage };
