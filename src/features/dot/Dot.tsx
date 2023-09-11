import { useMemo } from 'react';

interface DotProps {
  position: {
    x: number;
    y: number;
  };
  opacity: number;
}

export const Dot = ({ position, opacity }: DotProps) => {
  const randomColor = useMemo(
    () => `hsla(${Math.random() * 360}, 100%, 50%, 0.9)`,
    [],
  );
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: randomColor,
        borderRadius: '50%',
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
};
