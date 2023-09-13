import { useEffect, useState } from 'react';

export interface Point {
  x: number;
  y: number;
}

export const usePointerPosition = () => {
  const [position, setPosition] = useState<Point>({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return position;
};
