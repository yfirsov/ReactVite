import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Theme } from './enums/theme.ts';
import { resetCredentials } from './features/auth/authSlice.tsx';
import { Canvas } from './features/canvas/Canvas.tsx';
import { Nav } from './features/nav/Nav.tsx';
import { Footer } from './Footer.tsx';
import { useAppContext } from './hooks.ts';
import { useAuth } from './hooks/useAuth.ts';

const Layout = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const logOut = () => dispatch(resetCredentials());
  const { theme, setTheme } = useAppContext();

  return (
    <div className={`main ${theme}`}>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Nav />
        <Stack direction="row" gap={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={theme === Theme.DARK}
                onChange={() => setTheme?.()}
              />
            }
            label="Dark mode"
          />
          <Avatar>{user?.avatarName}</Avatar>
          <Button variant="outlined" onClick={logOut}>
            Log Out
          </Button>
        </Stack>
      </Stack>
      <main>
        <Outlet />
        <Canvas />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
