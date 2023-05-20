import { useContext } from "react";

import cartContext from "../../../utils/CartContext";
import { removeItemToCart, clearCart } from "../../../utils/CartSlice";
import { useSelector, useDispatch } from "react-redux";

import { IMG_URL } from "../../../config";
const CartItem = () => {
  const { cart, removeFromCart, setCart } = useContext(cartContext);

  console.log(cart);

  const cartItems = useSelector((store) => store.cart.items);

  console.log("Im in cart item", cartItems);
  const dispatch = useDispatch();
  const removeItems = (id) => {
    dispatch(removeItemToCart(id));
  };
  const removeAllItems = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h2>Cart Items</h2>
      <button
        className="btn btn-danger p-2 m-2"
        onClick={() => removeAllItems()}
      >
        Remove All Items
      </button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={IMG_URL + item?.card?.info?.imageId} alt="food" />
              <h2>{item.card.info.id}</h2>
              <h2>{item?.card?.info?.name}</h2>
              <p>{item?.card?.info?.description}</p>
              <p>{item?.card?.info?.price}</p>
              <button onClick={() => removeItems(item?.card?.info?.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default CartItem;
