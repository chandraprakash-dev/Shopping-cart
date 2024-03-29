import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function ShopItemDetails(props) {
  console.log(props)
  const [item ,setItem] = useState();
  useEffect(() => {
    fetchItem();

  }, [])

  const cartItems = props.cartItems;
  const id = props.match.params.id;

  const itemIndex = cartItems.findIndex(cartItem => cartItem.itemId === id);
  const cartItem = cartItems[itemIndex];

  const quantityComponent = itemIndex >= 0 ?
    <div>
      <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
      <p>{cartItem.quantity}</p>
      <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
      <div>
        <Link to="/cart">
          <button>Go to cart</button>
        </Link>
        <Link to="/buy">
          <button>Proceed to buy</button>
        </Link>
      </div>
    </div> :
    <button onClick={() => props.addToCart(id)}>Add to cart</button>;


  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`, {mode: 'cors'});
    const response = await data.json();
    const item = response.data;

    console.log(item);
    setItem(item);
  }

  if(!item) {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  return(
    <div>
      <h1>{item.item.name}</h1>
      <img src={item.item.images.icon} alt={item.name}/>
      <div>
        <p>{item.item.cost}</p>
        <p>{item.item.rarity}</p>
        <p>{item.item.ratings.avgStars}</p>
        <p>{item.item.ratings.numberVotes} ratings</p>
        <p>{item.itemOccurrences.firstOccurrences}</p>
        <p>{item.itemOccurrences.lastOccurrences}</p>
      </div>
      {quantityComponent}
    </div>
  )
}

export default ShopItemDetails;
