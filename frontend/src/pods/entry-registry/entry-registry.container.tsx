import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { EntryRegistryComponent } from './entry-registry.component';
import {RouterComponent} from 'core/router';
import { EntryRegistryVm, createEmptyEntryRegistry } from './entry-registry.vm';
import { saveEntryRegistry } from './entry-registry.api';

export const EntryRegistryContainer = () => 
{
  const history = useHistory();
  const [initialEntryRegistry] = React.useState<EntryRegistryVm>(createEmptyEntryRegistry());

  const handleSubmit = (entryRegistryInfo: EntryRegistryVm) => 
  {
    saveEntryRegistry(entryRegistryInfo).then(history.push(linkRoutes.hotelCollection));
  };

  return <EntryRegistryComponent onSubmit={handleSubmit} initialLogin={initialEntryRegistry} />;
};
