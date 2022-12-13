import { configureStore as createStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export function configureStore() {
  let store = createStore({
    reducers: {
      contacts: persistedContactsReducer,
      filter: filterReducer,
    },
  });

  let persistor = persistStore(store);

  return { store, persistor };
}
