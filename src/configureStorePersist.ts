import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducers } from './rootReducers';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
	reducer: persistedReducer,
});

export let persistor = persistStore(store);
