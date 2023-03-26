const setItem = (id) => {
  let shoppingCart;
  const getItem = localStorage.getItem("shopping-cart");
  if (!getItem) {
    shoppingCart = {};
  } else {
    shoppingCart = JSON.parse(getItem);
  }

  //update quantity
  if (shoppingCart[id]) {
    shoppingCart[id] += 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeItem = (id) => {
  const cartItem = localStorage.getItem("shopping-cart");
  const shoppingCart = JSON.parse(cartItem);
  delete shoppingCart[id];
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export { setItem, removeItem };
