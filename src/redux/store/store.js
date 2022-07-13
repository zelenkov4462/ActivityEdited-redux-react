import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "../reducers/slices/toolkitSlice";

// const rootReducer = combineReducers({
//   toolkit: toolkitSlice,
// });

export const store = configureStore({
  reducer: {
    toolkit: toolkitSlice,
  },
});
