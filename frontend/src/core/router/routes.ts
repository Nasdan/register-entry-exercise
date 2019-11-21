import { generatePath } from 'react-router';

interface BaseRoutes {
  root: string;
  entries: string;
  newEntry : string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  entries: '/entries',
  newEntry : '/entry-registry'
};

interface Routes extends BaseRoutes {}

export const routes: Routes = {
  ...baseRoutes,
};
