import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
