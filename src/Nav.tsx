import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/feedback">Feedback</NavLink>
      <NavLink to="/pokemons">Pokemons</NavLink>
      <NavLink to="/frames">Frames</NavLink>
    </nav>
  );
};
