import { createSlice } from "@reduxjs/toolkit";

const initialCartShowState = { isShow: false, notification: null };

const cartToggleSlice = createSlice({
  name: "cartToggle",
  initialState: initialCartShowState,
  reducers: {
    toggle(state) {
      state.isShow = !state.isShow;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartToggleActions = cartToggleSlice.actions;
export default cartToggleSlice.reducer;
