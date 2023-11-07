import { createSlice } from "@reduxjs/toolkit";

// Note! When working with multiple states is a good idea to have small slices for it
const initialState = {
  flour: "100",
  milk: "600",
  eggs: "2",
  butter: "360",
  sugar: "200",
};

export const ingredientsSlice = createSlice({
  name: "ingredients", //name of the slice
  initialState, // initial states defined on the line #4
  reducers: {
    updateIngredients: (state, action) => {
      // We can access to the passed date using the payload
      const sentData = action.payload;

      // We can overwrite the state thanks to redux/toolkit
      // If we were using the regular redux it would not be possible.
      state.flour = sentData.flour;
      state.milk = sentData.milk;
      state.eggs = sentData.eggs;
      state.butter = sentData.butter;
      state.sugar = sentData.sugar;
    },
  },
});

// When using slides you can extract the acctions
export const { updateIngredients } = ingredientsSlice.actions;

// Finally the reducer is exported as defaul!
export default ingredientsSlice.reducer;
