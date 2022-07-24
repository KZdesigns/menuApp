import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCardButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const Cartctx = useContext(CartContext);

  const numberOfCartItems = Cartctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
