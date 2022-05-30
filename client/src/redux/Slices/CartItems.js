import { createSlice } from "@reduxjs/toolkit";
import { CART_ITEMS } from "../../constant";

const cartItemsLocal = JSON.parse(localStorage.getItem(CART_ITEMS))
  ? JSON.parse(localStorage.getItem(CART_ITEMS))
  : [];
export const cartItems = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [...cartItemsLocal],
    stateAdd: null,
  },
  reducers: {
    //Thêm vào giỏ hàng
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload.newItems);
      if (action.payload.actionType === "addcart") {
        state.stateAdd = true;
      }
      localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
    },
    //Xóa khỏi giỏ hàng
    removeCartItem: (state, action) => {
      state.cartItems.splice(action.payload.index, 1);
      localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
    },
    //Set lại trạng thái thêm giỏ hàng
    setStateAdd: (state, action) => {
      state.stateAdd = null;
    },
  },
});
const { reducer, actions } = cartItems;
export default reducer;
export const { addCartItem, removeCartItem, setStateAdd } = actions;
