import React from "react";
import {Link} from "react-router-dom";
import CartItemCard from "../render components/CartItemCard";
import './Cart.css'

function Cart(props) {

  console.log(process.env.PUBLIC_URL);
  const {cartItems} = props;

  const cartItemCards = cartItems.map(cartItem => <CartItemCard
    key={cartItem.itemId}
    values={cartItem}
    cartItems={cartItems}
    updateCart={props.updateCart}
  />);

  if (Array.isArray(cartItems) && !cartItems.length) {
    return (
      <div className="cart cart-empty">
        <h1>Cart is empty</h1>
        <p>Go to shop to add items!</p>
        <img src={process.env.PUBLIC_URL + "/assets/images/empty_cart.png"} alt="empty cart"/>
      </div>
    )
  }
  return (
    <div className="cart">
      <div className="cartList">
        {cartItemCards}
      </div>
      <div className="cart-total">
        <p className="total">Grand total</p>
        <p>{props.total}</p>
      </div>

      <Link to="buy">
        <button className="buyButton">Proceed to Buy</button>
      </Link>
    </div>
  )
}

export default Cart;
