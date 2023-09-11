import { useEffect, useState } from 'react';
import { useDelayedValue } from '../../hooks/useDelayedValue.ts';
import { usePointerPosition } from '../../hooks/usePointerPosition.ts';
import { Dot } from '../dot/Dot.tsx';

export const Canvas = () => {
  const [show, setShow] = useState(true);
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos4, 50);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);

  if (show) {
    return (
      <div className="canvas">
        <Dot position={pos1} opacity={1} />
        <Dot position={pos2} opacity={0.8} />
        <Dot position={pos3} opacity={0.6} />
        <Dot position={pos4} opacity={0.4} />
        <Dot position={pos5} opacity={0.2} />
      </div>
    );
  }

  return null;
};
