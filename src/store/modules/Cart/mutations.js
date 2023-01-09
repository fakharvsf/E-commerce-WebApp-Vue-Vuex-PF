export default {
  initializeStore(state, carts) {
    let products = carts.value[0].products;

    if (localStorage.getItem('cart')) {
      state.cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      for (let i = 0; i < products.length; i++) {
        console.log(products[i].id);

        let item = {
          id: products[i].id,
          product: products[i].title,
          quantity: products[i].quantity,
          // thumbnail: products[i].thumbnail,
          // category: products[i].category,
          price: products[i].price,
          discountPercentage: products[i].discountPercentage,
        };
        state.cart.items.push(item);
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  addToCart(state, item) {
    const exists = state.cart.items.filter((i) => i.id === item.id);

    const exists2 = state.cart.items.filter((i) => i.product === item.product);
    if (exists.length > 0) {
      exists[0].quantity =
        parseInt(exists[0].quantity) + parseInt(item.quantity);
    } else {
      state.cart.items.push(item);
      console.log('🚀 ~ file: mutations.js:16 ~ addToCart ~ itemssssss', item);
    }
    // console.log(
    //   '🚀 ~ file: mutations.js:25 ~ addToCart ~ state.cart',
    //   state.cart
    // );

    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  cartLengthDecrease(state, item) {
    const exists = state.cart.items.filter((i) => i.id === item.id);
    if (exists.length > 0) {
      exists[0].quantity =
        parseInt(exists[0].quantity) - parseInt(item.quantity);
    }

    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  newProduct(state, payload) {
    state.newProduct = payload.value;
    console.log(
      '🚀 ~ file: mutations.js:45 ~ newProduct ~ payload.value',
      state.newProduct
    );
    localStorage.setItem('New Product', JSON.stringify(state.newProduct));
  },
  cartLengthUpdate(state, payload) {
    state.cartLength = payload.value;
    console.log(
      '🚀 ~ file: mutations.js:50 ~ cartLengthUpdate ~ state.cartLength',
      state.cartLength
    );
  },
};
