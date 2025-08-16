import {createRoute} from '@tanstack/react-router';

import App from '../App';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import { rootRoute } from './routeTree';

export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage ,
})
