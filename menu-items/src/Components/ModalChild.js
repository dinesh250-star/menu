import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import style from "./ModalChild.module.css";
const ModalChild = (props) => {
  const { title, quantity, totalPrice, price, id } = props;
  const dispatch = useDispatch();
  const add = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  const sub = () => {
    dispatch(
      cartActions.removeItemFormCart({
        id,
        price,
      })
    );
  };
  return (
    <div className={style.menu}>
      <li className={style.child}>
        <h1
          style={{
            color: "#1ad1b9",
            backgroundColor: "#313131",
            padding: "0.5rem",
            borderRadius: "16px 0 16px 0",
            display: "inline-block",
          }}
        >
          {title}
        </h1>
        <h1
          style={{
            color: "#1ad1b9",
            backgroundColor: "#313131",
            padding: "0.5rem",
            borderRadius: "16px 0 16px 0",
            display: "inline-block",
          }}
        >
          * {quantity}
        </h1>
        <h1
          style={{
            color: "#1ad1b9",
            backgroundColor: "#313131",
            padding: "0.5rem",
            borderRadius: "16px 0 16px 0",
            display: "inline-block",
          }}
        >
          {price}
        </h1>
      </li>
      <button
        style={{
          color: "#1ad1b9",
          backgroundColor: "#313131",
          padding: "0.5rem",
          borderRadius: "16px 0 16px 0",
        }}
        onClick={add}
      >
        Add
      </button>
      <button
        style={{
          color: "#1ad1b9",
          backgroundColor: "#313131",
          padding: "0.5rem",
          borderRadius: "16px 0 16px 0",
        }}
        onClick={sub}
      >
        Remove
      </button>
    </div>
  );
};
export default ModalChild;
