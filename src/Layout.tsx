import { Avatar, Button, Divider, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { resetCredentials } from './features/auth/authSlice.tsx';
import { Footer } from './Footer.tsx';
import { useAuth } from './hooks/useAuth.ts';
import { Nav } from './Nav.tsx';

const Layout = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const logOut = () => dispatch(resetCredentials());
  console.log(import.meta.env);

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

export default Layout;
