import React from "react";
import {Link} from "react-router-dom";
import ShopItemCard from "../render components/ShopItemCard";

function Shop(props) {
  const {cartItems, shopItems} = props;

  const shopItemCards = shopItemsArray.map(shopItem => <ShopItemCard
    key={shopItem.id}
    values={shopItem}
    cartItems={cartItemsArray}
    updateCart={updateCart}
    addToCart={addToCart}
  />);

  if (Array.isArray(cartItems) && cartItems.length) {
    return (
      <div className="shop">
        <h1>this is shop</h1>
        <div>
          {shopItems}
        </div>
        <Link to="/cart">
          <button>Go to cart</button>
        </Link>
        <Link to="/buy">
          <button>Proceed to buy</button>
        </Link>
      </div>
    )
  }
  return (
    <div className="shop">
      <h1>this is shop</h1>
      <div>
        {shopItems}
      </div>
    </div>
  )

}

export default Shop;
