import { combineReducers } from 'redux';
import balanceReducer from './balance';
import pricesReducer from './prices';

const allReducers = combineReducers({
  balance: balanceReducer,
  prices: pricesReducer,
});

export default allReducers;
