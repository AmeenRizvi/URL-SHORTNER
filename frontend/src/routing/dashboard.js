import {createRoute} from '@tanstack/react-router';

import App from '../App';
import AuthPage from '../pages/AuthPage';
import Dashboard from '../pages/Dashboard';
import { rootRoute } from './routeTree';
import { checkAuth } from '../utils/helper';

export const dashboard = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
  beforeLoad: checkAuth
  
})
