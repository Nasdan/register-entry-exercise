export interface EntryRegistryVm {
  login: string;
  password: string;
}

export const createEmptyLogin = (): EntryRegistryVm => ({
  login: '',
  password: '',
});
