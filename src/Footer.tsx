import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Watch } from './Watch.tsx';


export const Footer = () => {
  const location = useLocation();

  return (
    <Box sx={{display: 'flex', gap: '5px', flexDirection: 'column'}}>
      <Typography>Current location: { location.pathname }</Typography>
      <Watch />
    </Box>
  )
}
