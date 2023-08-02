import {
  Box,
  Button, Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField, Typography
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './Form.module.scss';


type Inputs = {
  firstName: string,
  email: string,
  gender: number,
  age: number,
  subscribed: boolean,
}

const genders = [
  {
    id: 1, gender: 'Male'
  },
  {
    id: 2, gender: 'Female'
  }
];

const ages = [
  {
    id: 1, age: '18-'
  },
  {
    id: 2, age: '18+'
  }
];

const exampleState: Inputs = {
  firstName: 'John',
  email: 'johndoe@gmail.com',
  gender: 1,
  age: 2,
  subscribed: true
};

export const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      email: '',
      gender: 1,
      age: 1,
      subscribed: false
    }
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const fillExampleState = () => {
    Object.keys(exampleState).forEach(key => setValue(key as keyof Inputs, exampleState[key as keyof Inputs]));
  };

  return (
    <Card sx={ { padding: 2 } } variant='outlined'>
      <Typography variant='h4'>Feedback Form</Typography>
      <form onSubmit={ handleSubmit(onSubmit) } className={ styles.form }>
        <Controller
          control={ control }
          rules={ {
            validate: {
              required: (v) => !v ? 'Required' : true,
              maxLength: (v) => v.length > 9 ? 'Length must be less than 10' : true
            }
          } }
          render={ ({ field: { onChange, onBlur, value } }) => (
            <TextField
              error={ !!errors.firstName?.message }
              label='First name'
              helperText={ errors.firstName?.message }
              variant='standard'
              onBlur={ onBlur }
              onChange={ onChange }
              value={ value }
            />
          ) }
          name='firstName'
        />
        <Controller
          control={ control }
          rules={ {
            validate: {
              required: (v) => !v ? 'Required' : true,
              pattern: (v) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'Not a valid email'
            }
          } }
          render={ ({ field: { onChange, onBlur, value } }) => (
            <TextField
              error={ !!errors.email?.message }
              label='Email'
              helperText={ errors.email?.message }
              variant='standard'
              onBlur={ onBlur }
              onChange={ onChange }
              value={ value }
            />
          ) }
          name='email'
        />
        <Controller
          control={ control }
          rules={ {
            required: 'Required'
          } }
          render={ ({ field: { onChange, onBlur, value } }) => (
            <FormControl fullWidth sx={ { m: 1 } } error={ !!errors.gender?.message }>
              <InputLabel id='gender'>Gender</InputLabel>
              <Select
                label='Gender'
                id='gender'
                onChange={ onChange }
                onBlur={ onBlur }
                value={ value }
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                { genders.map(({ id, gender }) => <MenuItem value={ id } key={ id }>{ gender }</MenuItem>) }
              </Select>
              { errors.gender?.message && <FormHelperText>{ errors.gender?.message }</FormHelperText> }
            </FormControl>
          ) }
          name='gender'
        />

        <Controller
          control={ control }
          render={ ({ field: { onChange, value } }) => (
            <FormControl>
              <FormLabel id='radio-buttons-group'>Age</FormLabel>
              <RadioGroup
                row
                aria-labelledby='radio-buttons-group'
                value={ value }
                onChange={ onChange }
              >
                { ages.map((item) =>
                  <FormControlLabel value={ item.id }
                                    key={ item.id }
                                    control={ <Radio /> }
                                    label={ item.age } />) }
              </RadioGroup>
            </FormControl>
          ) }
          name='age' />

        <Controller
          control={ control }
          render={ ({ field: { onChange, value } }) => (
            <FormControlLabel
              control={ <Checkbox onChange={ onChange } checked={ value } /> }
              label='Subscribe to news'
              labelPlacement='end'
            />
          ) }
          name='subscribed' />

        <Box sx={ { display: 'flex', gap: 1 } }>
          <Button type='button' variant='contained' color='error' onClick={ () => reset() }>Reset</Button>
          <Button type='button' variant='contained' color='success' onClick={ () => fillExampleState() }>Fill
            example</Button>
          <Button type='submit' variant='contained'>Submit Form</Button>
        </Box>
      </form>
    </Card>
  );
};
