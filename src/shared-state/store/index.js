import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from 'shared-state/reducers';
import rootSagas from 'shared-state/sagas';

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
  blacklist: ['sample'],
  // whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(rootSagas);

export {store, persistor};
