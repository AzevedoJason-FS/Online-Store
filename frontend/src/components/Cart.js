import { useSelector } from "react-redux";
import { BiBasket } from "react-icons/bi";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <span id="cart">
      <span id="bubble">
        <BiBasket id="icon" />
        <span id="quantity-number">{quantity}</span>
      </span>
    </span>
  );
};

export default Cart;
