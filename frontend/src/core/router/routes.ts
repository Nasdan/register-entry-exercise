import { generatePath } from 'react-router';

interface BaseRoutes {
  root: string;
  entries: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  entries: '/entries',
};

interface Routes extends BaseRoutes {}

export const routes: Routes = {
  ...baseRoutes,
};
