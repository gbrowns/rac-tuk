import { useNavigate, useLocation } from 'react-router-dom';

export function navigateToRoute(route) {
  //const history = useHistory();
  const navigate = useNavigate();

  if (route) {
    navigate(route);
  } else {
    console.error('Route not available. Are you using a Router component?');
  }
}

export function getCurrentRoute() {
  const location = useLocation();
  return location.pathname;
}

export function isRouteActive(route) {
  const currentRoute = getCurrentRoute();
  return currentRoute === route;
}
