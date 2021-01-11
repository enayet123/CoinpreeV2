export const UPDATE_PRICES = 'UPDATE_PRICES';

const pricesReducer = (state = { BTC: 17393.0 }, action) => {
  switch (action.type) {
    case UPDATE_PRICES:
      return action.prices;
    default:
      return state;
  }
};

export default pricesReducer;
