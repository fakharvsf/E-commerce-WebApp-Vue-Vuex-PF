export default {
  initializeStore(state) {
    if (localStorage.getItem('cart')) {
      state.cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  addToCart(state, item) {
    const exists = state.cart.items.filter(
      (i) => i.id === item.id
      // console.log('🚀 ~ file: mutations.js:10 ~ addToCart', item.id);
      // console.log('🚀 ~ file: mutations.js:10 ~ addToCart i.id', i.id);
    );
    // console.log('🚀 ~ file: mutations.js:18 ~ addToCart ~ exists', exists);
    const exists2 = state.cart.items.filter(
      (i) => i.product === item.product
      // console.log('🚀 ~ file: mutations.js:10 ~ addToCart', item.id);
      // console.log('🚀 ~ file: mutations.js:10 ~ addToCart i.id', i.id);
    );
    // console.log('🚀 ~ file: mutations.js:23 ~ addToCart ~ exists2', exists2);
    // console.log('🚀 ~ file: mutations.js:10 ~ addToCart', item.id);

    // console.log('🚀 ~ file: mutations.js:16 ~ addToCart ~ exists', exists);
    // console.log(
    // '🚀 ~ file: mutations.js:18 ~ addToCart ~ exists.length',
    // exists.length
    // );
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
  newProduct(state, payload) {
    state.newProduct = payload.value;
    console.log(payload.value.title);
    console.log(state.newProduct, 'jjj');
  },
};
