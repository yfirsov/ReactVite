import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store.ts';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 5,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, setAmount, incrementByAmount } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
