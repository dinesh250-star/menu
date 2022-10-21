import ReactDOM from "react-dom";
import style from "./Modal.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalChild from "./ModalChild";
import { cartActions } from "../store/cart-slice";
const Backdrop = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const finalPrice = useSelector((state) => state.cart.finalPrice);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(cartActions.close());
  };
  const closeHandler = () => {
    dispatch(cartActions.close());
  };
  let empty = "";
  if (cartItems == 0) {
    empty = "Empty";
  }
  return (
    <div
      className={`${style.modal} ${style.backdrop}`}
      style={{ textAlign: "center" }}
    >
      <h1 style={{ color: "#1ad1b9", borderBottom: "2px solid #1ad1b9" }}>
        Your Cart
      </h1>
      <ul className={style.scrollable}>
        {empty && (
          <h1
            style={{
              color: "#1ad1b9",
              textAlign: "center",
              marginRight: "1rem",
              padding: "100px",
              paddingTop: "2px",
            }}
          >
            {empty}
          </h1>
        )}
        {cartItems.map((item) => (
          <ModalChild
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.totalPrice}
          />
        ))}
      </ul>
      <h1 style={{ color: "#1ad1b9", borderTop: "2px solid #1ad1b9" }}>
        Total = {finalPrice}&#x20B9;
      </h1>
      <button
        onClick={closeModal}
        style={{
          color: "#1ad1b9",
          backgroundColor: "#313131",
          padding: "0.5rem",
          borderRadius: "16px 0 16px 0",
        }}
      >
        Close
      </button>
    </div>
  );
};
const Modal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
