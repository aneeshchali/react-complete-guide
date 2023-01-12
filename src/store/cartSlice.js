import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart-items",
  initialState: initialCartState,
  reducers: {
    refreshCart(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addCart(state, action) {
      const newItem = action.payload;
      const ItemExist = state.items.find((val) => val.itemId === newItem.id);
      state.changed = true;
      if (!ItemExist) {
        state.items.push({
          itemId: newItem.id,
          itemPrice: newItem.price,
          itemQuantity: 1,
          itemTitle: newItem.title,
          itemTotal: newItem.price * 1,
        });
        state.totalQuantity = state.items.length;
        state.totalAmount = 0;
        state.items.forEach((val) => {
          return (state.totalAmount = val.itemTotal + state.totalAmount);
        });
      } else {
        ItemExist.itemQuantity = ItemExist.itemQuantity + 1;
        ItemExist.itemTotal = ItemExist.itemPrice * ItemExist.itemQuantity;
        state.totalQuantity = state.items.length;
        state.totalAmount = 0;
        state.items.forEach((val) => {
          return (state.totalAmount = val.itemTotal + state.totalAmount);
        });
      }
    },
    removeCart(state, action) {
      state.changed = true;
      const ItemExist = state.items.find(
        (val) => val.itemId === action.payload.id
      );
      if (ItemExist) {
        if (ItemExist.itemQuantity > 1) {
          ItemExist.itemQuantity = ItemExist.itemQuantity - 1;
          ItemExist.itemTotal = ItemExist.itemPrice * ItemExist.itemQuantity;
        } else {
          console.log("hello");
          state.items = state.items.filter((val) => {
            console.log(ItemExist);
            return val.itemId !== action.payload.id;
          });
          console.log(state.items);
        }
        state.totalQuantity = state.items.length;
        state.totalAmount = 0;
        state.items.forEach((val) => {
          return (state.totalAmount = val.itemTotal + state.totalAmount);
        });
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
