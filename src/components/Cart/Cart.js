import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((val) => {
          return (
            <CartItem
              key={val.itemId}
              item={{
                title: val.itemTitle,
                quantity: val.itemQuantity,
                itemTotal: val.itemTotal,
                price: val.itemPrice,
              }}
            />
          );
        })}
      </ul>
      grand total {totalAmount}
    </Card>
  );
};

export default Cart;
