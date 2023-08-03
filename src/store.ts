import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { authSlice } from './features/auth/authSlice.tsx';
import { counterSlice } from './features/counter/counterSlice.ts';
import { authApi } from './services/auth/auth.ts';
import { pokemonApi } from './services/pokemon/pokemon.ts';

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(authApi.middleware, pokemonApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
