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
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>Random Pokemon - { data.species.name.toUpperCase() }</h3>
          <NavLink to={`${id}`}>
            <img src={ data.sprites.front_shiny } alt={ data.species.name } />
          </NavLink>
          <Counter />
        </>
      ) : null }
    </div>
  );
};
