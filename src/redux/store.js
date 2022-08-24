import { configureStore } from '@reduxjs/toolkit';
import { contactReducers } from './contacts/contactsReducers';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  // persistReducer,
  // persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import authSlice from './auth/authSlice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authSlice),
    contacts: contactReducers,
  },
  // Чтобы избежать ошибок сериализации, промежуточное ПО настроено на игнорирование действий redux-persist:
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

// export const persistor = persistStore(store);
