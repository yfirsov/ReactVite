import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetPokemonByIdQuery } from './pokemon.ts';


export const Pokemon = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPokemonByIdQuery(id);

  return (
    <>
      { isLoading && <CircularProgress /> }
      { error && <h1>Something went wrong</h1> }
      { data &&
        <>
          <h3>Pokemon - { data.species.name.toUpperCase() }</h3>
          <img src={ data.sprites.front_shiny } alt={ data.species.name } />
          <h3>Abilities</h3>
          { data.abilities.map(ability => (
            <div key={ability.ability.name}>{ ability.ability.name }</div>
          )) }
        </> }
    </>
  );
};
