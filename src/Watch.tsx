import { useEffect, useState } from 'react';
import { getTime } from './utils.ts';


export const Watch = () => {
  const [ currentTime, setCurrentTime ] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()));
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h2>{ getTime(currentTime) }</h2>
  );
};
