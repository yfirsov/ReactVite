import { CircularProgress, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Counter } from '../features/counter/Counter.tsx';
import { useAppSelector } from '../hooks.ts';
import { useGetPokemonByIdQuery } from './pokemon.ts';


export const Pokemons = () => {
  const id = useAppSelector((state) => state.counter.value);
  const { data, error, isLoading } = useGetPokemonByIdQuery(id);

  return (
    <div>
      { error ? (
        <Typography>Oh no, there was an error</Typography>
      ) : isLoading ? (
        <CircularProgress />
      ) : data ? (
        <>
          <Typography variant='h5' fontWeight={700}>Random Pokemon - { data.species.name.toUpperCase() }</Typography>
          <NavLink to={`${id}`}>
            <img src={ data.sprites.front_shiny } alt={ data.species.name } />
          </NavLink>
          <Counter />
        </>
      ) : null }
    </div>
  );
};
