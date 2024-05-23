import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';


type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children} : PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth as string
      ? children
      : <Navigate to={AppRoute.login} />
  );
}

export default PrivateRoute;
