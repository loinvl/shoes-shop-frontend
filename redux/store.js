import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userReducer'
import progressBarReducer from './progressBarReducer';
import messageReducer from './messageReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    progressBar: progressBarReducer,
    message: messageReducer
  }
});