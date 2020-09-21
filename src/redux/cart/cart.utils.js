export const addItemToCart = (cartItems, cartItemtoAdd) => {
  const existingcartItems = cartItems.find(
    (cartitem) => cartitem.id === cartItemtoAdd.id
  );

  if (existingcartItems) {
    return cartItems.map((cartitem) =>
      cartitem.id === cartItemtoAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  } else {
    return [...cartItems, { ...cartItemtoAdd, quantity: 1 }];
  }
};

export const clearItemFromCart = (cartItems, { id }) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};

export const removeItem = (cartItems, cartItemtoRemove) => {
  let matchedCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoRemove.id
  );

  console.log("Matched Cart", matchedCart);
  if (matchedCart.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemtoRemove);
  } else {
    return cartItems.map((cartitem) =>
      cartitem.id === cartItemtoRemove.id
        ? { ...cartitem, quantity: cartitem.quantity - 1 }
        : cartitem
    );
  }
};
