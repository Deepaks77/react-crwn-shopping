//this is the action which we will give to component which eventually help to set the state

import { CartActionTypes } from "./cart.types";
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
