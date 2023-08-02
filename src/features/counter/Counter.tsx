import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks.ts';

import { decrement, increment, setAmount } from './counterSlice';


export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'column'}}>
      <Typography variant='h5'>{ count }</Typography>
      <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
        <button onClick={ () => dispatch(increment()) }>Inc</button>
        <button onClick={ () => dispatch(decrement()) }>Dec</button>
        <button onClick={ () => dispatch(setAmount(Math.floor(Math.random() * 100))) }>Random</button>
      </div>
    </div>
  );
};
