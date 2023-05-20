import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemTocart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemToCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItemTocart, removeItemToCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
