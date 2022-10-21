import { useDispatch } from "react-redux";
import style from "./Body.module.css";
import { cartActions } from "../store/cart-slice";
const Body = (props) => {
  const { id, title, price } = props;
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price,
      })
    );
  };
  return (
    <li className={style.full} key={id}>
      <h2 style={{ marginRight: "2rem" }}>{title}</h2>
      <h2>{price} &#x20B9;</h2>
      <button className={style.btn} onClick={addItem}>
        Add to Cart
      </button>
    </li>
  );
};
export default Body;
