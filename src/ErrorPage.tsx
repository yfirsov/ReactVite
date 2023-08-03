import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('/'), 5000);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography variant="h3">Oops! This page does not exist!</Typography>
      <Typography variant="h3">
        You will be redirected to the Home Page
      </Typography>
    </Box>
  );
};
