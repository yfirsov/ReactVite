import { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

interface IThemeContext {
  theme: string;
  setTheme?: () => void;
}

export const AppContext = createContext<IThemeContext>({
  theme: '',
  setTheme: () => true,
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppContext = () => useContext(AppContext);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
