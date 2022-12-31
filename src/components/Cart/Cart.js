import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartitem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return (
          <li>
            {item.name} {item.amount} {item.price}
          </li>
        );
      })}
    </ul>
  );
  return (
    <Modal CloseCart={props.CloseCart}>
      {cartitem}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.52</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.CloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
