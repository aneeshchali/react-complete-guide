import { cartToggleActions } from "./cartToggleSlice";
import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-http-9231c-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.refreshCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );
      dispatch(
        cartToggleActions.showNotification({
          status: "success",
          title: "success!",
          message: "Fetching cart data sucessful!",
        })
      );
    } catch (error) {
      dispatch(
        cartToggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartToggleActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-http-9231c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        cartToggleActions.showNotification({
          status: "success",
          title: "Success!.",
          message: "Sent cart data sucessfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartToggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
