// Importing Dependencies
import axios from 'axios';
import { toast } from 'bulma-toast';

export default {
  // Cart Length checking
  checkCartLength(context) {
    let totalLength = 0; //Initializing it to zero

    for (let i = 0; i < context.state.cart.items.length; i++) {
      totalLength += context.state.cart.items[i].quantity;
      console.log(
        '🚀 ~ file: actions.js:13 ~ checkCartLength ~ totalLength',
        totalLength
      );
    }
    // Commiting the Mutation to save in state
    context.commit({
      type: 'cartLengthUpdate',
      value: totalLength,
    });
  },
  // Getting Cart of Specific User
  async getCartOfUser(context) {
    await axios
      .get('https://dummyjson.com/carts/user/15')
      .then((response) => {
        console.log(
          '🚀 ~ file: actions.js:29 ~ .then ~ response',
          response.data.carts
        );
        // Committing initialize store mutation to save it in store
        context.commit({
          type: 'initializeStore',
          value: response.data.carts,
        });
        // Dispatchin aanother action to check length
        context.dispatch('checkCartLength');
      })
      .catch((error) => {
        console.log(error);
        // Shwoing Error If Failed
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
