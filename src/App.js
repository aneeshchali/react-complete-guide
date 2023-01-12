import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { fetchCartData, sendCartData } from "./store//cart-actions";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

let isInitialized = true;

function App() {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.cartToggle.isShow);

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cartToggle.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialized) {
      isInitialized = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {isShow && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
