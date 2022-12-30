import React from "react";
import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const price = `$${props.meals.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meals.name}</h3>
        <div className={classes.description}>{props.meals.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealsItem;
