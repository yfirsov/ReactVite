import React, { useState } from 'react';
import { Theme } from './enums/theme.ts';
import { AppContext } from './hooks';

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme: () =>
          setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
