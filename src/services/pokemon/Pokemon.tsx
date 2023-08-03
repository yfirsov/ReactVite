import {
  Button,
  CircularProgress,
  List,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemonByIdQuery } from './pokemon.ts';

export const Pokemon = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPokemonByIdQuery(id);
  const navigate = useNavigate();

  return (
    <>
      {isLoading && <CircularProgress />}
      {error && <h1>Something went wrong</h1>}
      {data && (
        <>
          <Typography variant="h4">
            Pokemon - {data.species.name.toUpperCase()}
          </Typography>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
          <Typography variant="h4">Abilities</Typography>
          <List>
            {data.abilities.map(ability => (
              <ListItemText
                key={ability.ability.name}
                primary={ability.ability.name}
              />
            ))}
          </List>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </>
      )}
    </>
  );
};
