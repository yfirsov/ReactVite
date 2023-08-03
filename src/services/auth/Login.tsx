import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../../features/auth/authSlice.tsx';
import { LoginRequest, useLoginMutation } from './auth.ts';

const PasswordInput = ({
  name,
  onChange,
}: {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={show ? 'text' : 'password'}
        name={name}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClick}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<LoginRequest>({
    username: '',
    password: '',
  });
  const [open, setOpen] = useState(false);

  const [login, { isLoading }] = useLoginMutation();

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState(prev => ({ ...prev, [name]: value }));
  const onLogin = async () => {
    try {
      const user = await login(formState).unwrap();
      dispatch(setCredentials(user));
      navigate('/');
    } catch (err) {
      setOpen(true);
    }
  };
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Box>
      <Stack spacing={2}>
        <Box>Hint: enter anything, or leave it blank and hit login</Box>
        <TextField
          onChange={handleChange}
          name="username"
          type="text"
          label="Email"
          variant="outlined"
        />

        <PasswordInput onChange={handleChange} name="password" />
        <LoadingButton
          variant="contained"
          color="success"
          onClick={onLogin}
          loading={isLoading}
        >
          Login
        </LoadingButton>
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Error occured"
        action={action}
      />
    </Box>
  );
};
