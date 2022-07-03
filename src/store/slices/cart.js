import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isShown: false,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart(state) {
      state.isShown = true;
    },
  },
});

export default cart;
export const cartReducer = cart.reducer;
export const cartActions = cart.actions;
