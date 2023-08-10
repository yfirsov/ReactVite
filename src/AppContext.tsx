import React, { useState } from 'react';
import { AppContext } from './hooks';

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState('light');
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme: () => setTheme(theme === 'light' ? 'lightcyan' : 'light'),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
