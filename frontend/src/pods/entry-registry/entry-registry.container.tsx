import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { EntryRegistryComponent } from './entry-registry.component';
import {RouterComponent} from 'core/router';
import { LoginEntityVm, createEmptyLogin } from './entry-registry.vm';
import { validateCredentials } from './entry-registry.api';

// export const EntryRegistryContainer = () => {
//   const history = useHistory();
//   const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());

//   // const handleLogin = (loginInfo: LoginEntityVm) => {
//   //   validateCredentials(loginInfo.login, loginInfo.password).then(
//   //     areValidCredentials => {
//         // areValidCredentials
//         //   ? history.push(linkRoutes.hotelCollection)
//         //   : alert(
//         //       'invalid credentials, use admin/test, excercise: display a mui snackbar instead of this alert.'
//         //     );
//       }
//     );
//   };

//   return <EntryRegistryComponent onLogin={handleLogin} initialLogin={initialLogin} />;
// };
