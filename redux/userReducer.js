import authUtil from "@/utils/authUtil";
import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        const user = action.payload;
        console.log(user);

        state = user;
        return state;
    },
    logoutSuccess: (state) => {
      state = null;
      return state;
    }
  },
});

// actions to dispatch
const { loginSuccess,  logoutSuccess } = userSlice.actions;

// reducer to create store redux
const userReducer = userSlice.reducer;

export default userReducer;
export { loginSuccess, logoutSuccess };
