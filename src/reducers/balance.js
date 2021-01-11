export const UPDATE_BALANCE = 'UPDATE_BALANCE';

const balanceReducer = (state = 1, action) => {
  switch (action.type) {
    case UPDATE_BALANCE:
      return action.balance;
    default:
      return state;
  }
};

export default balanceReducer;
