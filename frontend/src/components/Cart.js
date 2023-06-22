import { React, useState } from "react";
import { useSelector } from "react-redux";
import { BiBasket } from "react-icons/bi";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const productImg = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const [hidden, setHide] = useState(true);

  return (
    <div id="cart" onClick={() => (!hidden ? setHide(true) : setHide(false))}>
      <div id="bubble">
        <BiBasket id="icon" />
        <div id="quantity-number">{quantity}</div>
      </div>
      {quantity ? (
        <div className="cart_box" hidden={hidden}>
          <h2 id="cart_name">Cart</h2>
          {quantity &&
            productImg.map((product, i) => {
              return (
                <div id="cart_display" key={i}>
                  <img
                    id="cart_img"
                    src={product.product.img}
                    alt={[product.product.title]}
                  />
                  <div>
                    <p id="cart_title">{product.product.title}</p>
                    <p id="cart_price">${product.product.price}</p>
                  </div>
                </div>
              );
            })}
          <div className="total_checkout">
            <h2 id="cart_total">Total: ${total}</h2>
            <button id="checkout_cart_btn">Checkout</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
