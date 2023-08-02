import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider, useLocation
} from 'react-router-dom';
import { ErrorPage } from './ErrorPage.tsx';
import { Form } from './Form.tsx';
import { Header } from './Header.tsx';
import { Logos } from './Logos.tsx';
import { Pokemon } from './services/Pokemon.tsx';
import { Pokemons } from './services/Pokemons.tsx';
import { Watch } from './Watch.tsx';


const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>
        <Watch />
        <div>Current location: { location.pathname }</div>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout /> } errorElement={ <ErrorPage /> }>
      <Route path='docs' element={ <Logos /> } />
      <Route path='pokemons' element={ <Pokemons /> } />
      <Route path='pokemons/:id' element={ <Pokemon /> } />
      <Route path='feedback' element={ <Form /> } />
    </Route>
  )
);

function App () {
  return <RouterProvider router={ router } />;
}

export default App;
