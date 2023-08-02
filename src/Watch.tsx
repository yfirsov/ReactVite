import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { getTime } from './utils.ts';


export const Watch = () => {
  const [ currentTime, setCurrentTime ] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()));
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{fontSize: '1.5rem', fontWeight: 'bold'}}>{ getTime(currentTime) }</Box>
  );
};
