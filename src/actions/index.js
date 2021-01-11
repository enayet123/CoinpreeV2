import { UPDATE_BALANCE } from '../reducers/balance';
import { UPDATE_PRICES } from '../reducers/prices';

export const updateBalance = (balance) => ({
  type: UPDATE_BALANCE,
  balance,
});

export const updatePrices = (prices) => ({
  type: UPDATE_PRICES,
  prices,
});
