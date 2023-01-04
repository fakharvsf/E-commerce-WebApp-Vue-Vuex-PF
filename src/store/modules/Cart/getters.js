export default {
  newAddedProduct(state) {
    console.log(
      '🚀 ~ file: getters.js:5 ~ newAddedProduct ~ state.newProduct',
      state.newProduct
    );
    return state.newProduct;
  },
};
