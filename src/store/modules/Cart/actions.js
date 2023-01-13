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
        // Dispatching action to get the thumbnail and category
        context.dispatch('getCartProductThumbnail', response.data);
      })
      .catch((error) => {
        console.log(error);
        // Showing Error If Failed
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

  async getCartProductThumbnail(context, payload) {
    console.log(payload.carts[0].products, 'im length');
    let products = payload.carts[0].products;
    for (let i = 0; i < products.length; i++) {
      await axios
        .get(`https://dummyjson.com/products/${products[i].id}`)
        .then((response) => {
          products[i].thumbnail = response.data.thumbnail;
          products[i].category = response.data.category;

          console.log(
            '🚀 ~ file: actions.js:59 ~ awaitaxios.get ~ response',
            products[i]
          );
        });
    }
    console.log(
      '🚀 ~ file: actions.js:59 ~ awaitaxios.get ~ response',
      products
    );

    // Committing initialize store mutation to save it in store
    context.commit({
      type: 'initializeStore',
      value: products,
    });
    // Dispatchin aanother action to check length
    context.dispatch('checkCartLength');
  },
};
