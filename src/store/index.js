import { configureStore } from "@reduxjs/toolkit";
import { uiReducer, uiActions } from "./slices/ui";
import { cartReducer, cartActions } from "./slices/cart";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
export { uiActions, cartActions };
