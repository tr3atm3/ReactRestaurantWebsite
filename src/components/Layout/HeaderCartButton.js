import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const nofCartItems = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your cart</span>
      <span className={classes.badge}>{nofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
