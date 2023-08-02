import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom';
import { ErrorPage } from './ErrorPage.tsx';
import { Footer } from './Footer.tsx';
import { Form } from './Form.tsx';
import { Header } from './Header.tsx';
import { Logos } from './Logos.tsx';
import { Pokemon } from './services/Pokemon.tsx';
import { Pokemons } from './services/Pokemons.tsx';


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={ <Layout /> } errorElement={ <ErrorPage /> }>
      <Route path='' element={ <Logos />} />
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
