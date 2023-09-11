import { useEffect, useState } from 'react';
import { Point } from './usePointerPosition.ts';

export const useDelayedValue = (value: Point, delay: number) => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);

  return delayedValue;
};
