export default {
  checkCartLength(context) {
    // console.log(payload);

    // console.log(context.state.cart.items.length);
    let totalLength = 0;

    for (let i = 0; i < context.state.cart.items.length; i++) {
      totalLength += context.state.cart.items[i].quantity;
    }
    // this.cartLength = totalLength;
    context.commit({
      type: 'cartLengthUpdate',
      value: totalLength,
    });

    console.log(
      '🚀 ~ file: App.vue:48 ~ cartTotalLength ~ this.cartLength',
      totalLength
    );
  },
};
