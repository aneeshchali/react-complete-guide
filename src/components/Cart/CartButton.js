import classes from "./CartButton.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartToggleActions } from "../../store/cartToggleSlice";

const CartButton = (props) => {
  const cartCount = useSelector((state) => state.cart.totalQuantity);
  const changeFind = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(cartToggleActions.toggle());
  };

  const [isBump, setIsBump] = useState(false);

  useEffect(() => {
    if (changeFind.itemQuanity === 0) {
      return;
    }
    setIsBump(true);
    const setTimeOut = setTimeout(() => {
      setIsBump(false);
    }, 300);
    return () => {
      clearTimeout(setTimeOut);
    };
  }, [changeFind]);

  const ClassBump = `${classes.button} ${isBump ? classes.bump : ""}`;
  return (
    <button onClick={cartToggleHandler} className={ClassBump}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
