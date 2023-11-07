import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "./ingredientsSlice";

// Create a new store object using toolkit
// this function loads the recuders
export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
  },
});
