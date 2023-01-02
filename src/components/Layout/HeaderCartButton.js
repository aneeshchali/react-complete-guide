import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [isBump, setIsBump] = useState(false);

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBump(true);
    const setTimeOut = setTimeout(() => {
      setIsBump(false);
    }, 300);
    return () => {
      clearTimeout(setTimeOut);
    };
  }, [items]);

  const ClassBump = `${classes.button} ${isBump ? classes.bump : ""}`;
  return (
    <button className={ClassBump} onClick={props.ShowCart}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
