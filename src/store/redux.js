import { configureStore } from "@reduxjs/toolkit";

import cartToggleReducer from "../store/cartToggleSlice";
import cartReducer from "../store/cartSlice";

const store = configureStore({
  reducer: { cartToggle: cartToggleReducer, cart: cartReducer },
});

export default store;
