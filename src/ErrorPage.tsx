import { NavLink, useRouteError } from 'react-router-dom';


type RouteError = {
  statusText: string,
  message: string,
}
export const ErrorPage = () => {
  const error = useRouteError() as RouteError;

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ error.statusText || error.message }</i>
      </p>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
};
