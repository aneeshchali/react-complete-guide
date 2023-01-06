import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [disSubmit, setdisSubmit] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const isCartEmpty = cartCtx.items.length <= 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartitem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          ></CartItem>
        );
      })}
    </ul>
  );

  const onSubmitHandler = (userData) => {
    setIsCheckout(true);
  };

  const onConfirmHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-a697d-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setdisSubmit(true);
    cartCtx.clearCart();
  };

  const ModalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.CloseCart}>
        Close
      </button>
      {!isCartEmpty && (
        <button onClick={onSubmitHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartitem}
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={onConfirmHandler} onCancel={props.CloseCart} />
      )}
      {!isCheckout && ModalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Sucessfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.CloseCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal CloseCart={props.CloseCart}>
      {!isSubmitting && !disSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && disSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
