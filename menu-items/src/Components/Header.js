import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import style from "./Header.module.css";
import Modal from "./Modal";
const Header = (props) => {
  const dispatch = useDispatch();
  const itemQuantityInCart = useSelector((state) => state.cart.totalQuantity);
  const toggler = useSelector((state) => state.cart.visible);
  const toggleHandler = () => {
    dispatch(cartActions.toggle());
  };
  return (
    <div className={style.nav}>
      <h1 style={{ color: "#1ad1b9" }}>My Shopping Cart</h1>
      <div className={style.btnPosition}>
        <button className={style.btn} onClick={toggleHandler}>
          <span>My Cart</span>
          <span className={style.no}>{itemQuantityInCart}</span>
        </button>
      </div>
      {toggler && <Modal />}
    </div>
  );
};
export default Header;
