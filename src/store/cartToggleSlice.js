import { createSlice } from "@reduxjs/toolkit";

const initialCartShowState = { isShow: false };

const cartToggleSlice = createSlice({
  name: "cartToggle",
  initialState: initialCartShowState,
  reducers: {
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const cartToggleActions = cartToggleSlice.actions;
export default cartToggleSlice.reducer;
