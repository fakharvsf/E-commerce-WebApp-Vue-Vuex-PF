export default {
  // initializing Cart Globally
  initializeStore(state, carts) {
    console.log(
      '🚀 ~ file: mutations.js:4 ~ initializeStore ~ carts',
      carts.value
    );

    let products = carts.value;
    // checking if cart already exists or we have to create new in local storage
    if (localStorage.getItem('cart')) {
      state.cart = JSON.parse(localStorage.getItem('cart'));
      console.log(
        '🚀 ~ file: mutations.js:13 ~ initializeStore ~ state.cart',
        state.cart
      );
    } else {
      for (let i = 0; i < products.length; i++) {
        console.log(products[i].id);
        console.log(
          '🚀 ~ file: mutations.js:16 ~ initializeStore ~ products[i].id',
          products[i].id
        );

        let item = {
          id: products[i].id,
          product: products[i].title,
          quantity: products[i].quantity,
          thumbnail: products[i].thumbnail,
          category: products[i].category,
          price: products[i].price,
          discountPercentage: products[i].discountPercentage,
        };
        state.cart.items.push(item);
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  // Mutation to handle Add to cart process
  addToCart(state, item) {
    // Checking if the item to be added already exists in Cart
    const exists = state.cart.items.filter((i) => i.id === item.id);
    // if exists then we will only increase quantity
    if (exists.length > 0) {
      exists[0].quantity =
        parseInt(exists[0].quantity) + parseInt(item.quantity);
    } else {
      // if does not exists then we will add new one in item array
      state.cart.items.push(item);
      console.log('🚀 ~ file: mutations.js:16 ~ addToCart ~ itemssssss', item);
    }

    // at Last keeping cart in the local storage to keep data even after reload
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  // Mutation to handle Decrease in length of cart
  cartLengthDecrease(state, item) {
    const exists = state.cart.items.filter((i) => i.id === item.id);
    if (exists.length > 0) {
      // if exists then we will only decrease quantity
      exists[0].quantity =
        parseInt(exists[0].quantity) - parseInt(item.quantity);
    }
    // at Last keeping cart in the local storage to keep data even after reload

    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  // Mutation to handle New Product
  newProduct(state, payload) {
    state.newProduct.push(payload.value);

    localStorage.setItem('New Product', JSON.stringify(state.newProduct));
  },

  // Mutation to handle Update in length of cart
  cartLengthUpdate(state, payload) {
    state.cartLength = payload.value;
  },
};
