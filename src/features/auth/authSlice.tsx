import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../services/auth/auth.ts';
import { RootState } from '../../store.ts';

type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<AuthState>,
    ) => {
      state.user = user;
      state.token = token;
    },
    resetCredentials: state => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, resetCredentials } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
