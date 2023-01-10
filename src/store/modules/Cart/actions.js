import axios from 'axios';
import { toast } from 'bulma-toast';

export default {
  checkCartLength(context) {
    // console.log(payload);

    // console.log(context.state.cart.items.length);
    let totalLength = 0;

    for (let i = 0; i < context.state.cart.items.length; i++) {
      totalLength += context.state.cart.items[i].quantity;
      console.log(
        '🚀 ~ file: actions.js:13 ~ checkCartLength ~ totalLength',
        totalLength
      );
    }

    context.commit({
      type: 'cartLengthUpdate',
      value: totalLength,
    });
  },
  async getCartOfUser(context) {
    await axios
      .get('https://dummyjson.com/carts/user/15')
      .then((response) => {
        console.log(
          '🚀 ~ file: actions.js:29 ~ .then ~ response',
          response.data.carts
        );
        context.commit({
          type: 'initializeStore',
          value: response.data.carts,
        });

        context.dispatch('checkCartLength');
      })
      .catch((error) => {
        console.log(error);
        toast({
          message: 'Something went wrong.Please try again! 😒',
          type: 'is-danger',
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: 'bottom-right',
        });
      });
  },
};
