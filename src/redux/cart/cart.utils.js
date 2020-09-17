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
