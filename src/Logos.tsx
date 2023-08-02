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
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <h1>Vite + React</h1>
    </>
  );
};
