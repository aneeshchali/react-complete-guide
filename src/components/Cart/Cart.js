import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  
  let content = "Your Shopping Cart"
  if(totalAmount===0){
    content="Your Shopping Cart is Empty!"
  }
  return (
    <Card className={classes.cart}>
      <h2>{content}</h2>
      <ul>
        {cartItems.map((val) => {
          return (
            <CartItem
              key={val.itemId}
              item={{
                id: val.itemId,
                title: val.itemTitle,
                quantity: val.itemQuantity,
                itemTotal: val.itemTotal,
                price: val.itemPrice,
              }}
            />
          );
        })}
      </ul>

      {totalAmount > 0 && (
        <h1 style={{ textAlign: "right" }}>Grand total ${totalAmount}</h1>
      )}
    </Card>
  );
};

export default Cart;
