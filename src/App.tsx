import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Avatar, Button, Divider, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from './ErrorPage.tsx';
import { resetCredentials } from './features/auth/authSlice.tsx';
import { Footer } from './Footer.tsx';
import { Form } from './Form.tsx';
import { useAuth } from './hooks/useAuth.ts';
import { Nav } from './Nav.tsx';
import { Logos } from './Logos.tsx';
import { Login } from './services/auth/Login.tsx';
import { Pokemon } from './services/pokemon/Pokemon.tsx';
import { Pokemons } from './services/pokemon/Pokemons.tsx';
import { PrivateOutlet } from './utils/PrivateOutlet.tsx';

const Layout = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const logOut = () => dispatch(resetCredentials());

  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Nav />
        <Stack direction="row" gap={1}>
          <Avatar>{user?.avatarName}</Avatar>
          <Button variant="outlined" onClick={logOut}>
            Log Out
          </Button>
        </Stack>
      </Stack>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PrivateOutlet />}>
        <Route element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="" element={<Logos />} />
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="pokemons/:id" element={<Pokemon />} />
          <Route path="feedback" element={<Form />} />
        </Route>
      </Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
