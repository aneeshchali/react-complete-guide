import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart-items",
  initialState: initialCartState,
  reducers: {
    addCart(state, action) {
      const newItem = action.payload;
      const ItemExist = state.items.find((val) => val.itemId === newItem.id);
      if (!ItemExist) {
        state.items.push({
          itemId: newItem.id,
          itemPrice: newItem.price,
          itemQuantity: 1,
          itemTitle: newItem.title,
          itemTotal: newItem.price * 1,
        });
        let value = 0;
        state.totalAmount = state.items.map((val) => {
          return val.itemTotal + value;
        });
      } else {
        ItemExist.itemQuantity = ItemExist.itemQuantity + 1;
        ItemExist.itemTotal = ItemExist.itemPrice * ItemExist.itemQuantity;
        state.totalQuantity = state.items.length;
      }
    },
    removeCart(state, action) {},
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
