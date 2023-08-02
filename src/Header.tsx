import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/feedback">Feedback</NavLink>
      <NavLink to="/pokemons">Pokemons</NavLink>
    </nav>
  );
};
