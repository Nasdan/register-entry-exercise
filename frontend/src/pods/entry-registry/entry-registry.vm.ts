
export interface EntryRegistryVm 
{
  cardNumber: string;
  name : string;
  lastname : string;
  dni : string;
  company : string;
  visits : string;
  signature : string;
} 

export const createEmptyEntryRegistry = (): EntryRegistryVm => ({
  cardNumber: "",
  name : "",
  lastname : "",
  dni : "",
  company : "",
  visits : "",
  signature : "",

});
