import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from './ErrorPage.tsx';
import SuspenseWrapper from './SuspenseWrapper.tsx';
import { PrivateOutlet } from './utils/PrivateOutlet.tsx';

const Layout = lazy(() => import('./Layout'));
const Login = lazy(() => import('./services/auth/Login'));
const Logos = lazy(() => import('./Logos'));
const Form = lazy(() => import('./Form'));
const Pokemon = lazy(() => import('./services/pokemon/Pokemon.tsx'));
const Pokemons = lazy(() => import('./services/pokemon/Pokemons'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/login"
        element={
          <SuspenseWrapper>
            <Login />
          </SuspenseWrapper>
        }
      />
      <Route path="*" element={<PrivateOutlet />}>
        <Route element={<Layout />} errorElement={<ErrorPage />}>
          <Route
            path=""
            element={
              <SuspenseWrapper>
                <Logos />
              </SuspenseWrapper>
            }
          />
          <Route
            path="pokemons"
            element={
              <SuspenseWrapper>
                <Pokemons />
              </SuspenseWrapper>
            }
          />
          <Route
            path="pokemons/:id"
            element={
              <SuspenseWrapper>
                <Pokemon />
              </SuspenseWrapper>
            }
          />
          <Route
            path="feedback"
            element={
              <SuspenseWrapper>
                <Form />
              </SuspenseWrapper>
            }
          />
        </Route>
      </Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
