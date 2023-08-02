import { Typography } from '@mui/material';
import viteLogo from '../public/vite.svg';
import reactLogo from './assets/react.svg';


export const Logos = () => {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={ viteLogo } className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={ reactLogo } className='logo react' alt='React logo' />
        </a>
      </div>
      <Typography variant='h6' className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </Typography>
      <Typography variant='h2'>Vite + React</Typography>
    </>
  );
};
