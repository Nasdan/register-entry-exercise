export interface EntryRegistryVm 
{
  cardNumber: string;
  name : string;
  lastname : string;
  DNI : string;
  company : string;
  visits : string;
  signature : string;
} 

export const createEmptyEntryRegistry = (): EntryRegistryVm => ({
  cardNumber: "",
  name : "",
  lastname : "",
  DNI : "",
  company : "",
  visits : "",
  signature : "",
});
