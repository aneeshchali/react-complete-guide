import classes from "./CartButton.module.css";

import { useDispatch } from "react-redux";
import { cartToggleActions } from "../../store/cartToggleSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(cartToggleActions.toggle());
  };

  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
