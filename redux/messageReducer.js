import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state = {type: "success", content: action.payload};
      return state;
    },
    showErrorMessage: (state, action) => {
      state = {type: "error", content: action.payload};
      return state;
    },
    hideMessage: (state) => {
      state = null;
      return state;
    }
  },
});

// actions to dispatch
const { showMessage, showErrorMessage, hideMessage } = messageSlice.actions;

// reducer to create store redux
const messageReducer = messageSlice.reducer;

export default messageReducer;
export { showMessage, showErrorMessage, hideMessage };
