import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFinalFormValidation } from '@lemoncode/fonk-final-form';

const validationSchema: ValidationSchema = {
  field: {
    cardNumber: [Validators.required.validator],
    name : [Validators.required.validator],
    lastname : [Validators.required.validator],
    DNI : [Validators.required.validator],
    company : [Validators.required.validator],
    visits : [Validators.required.validator],
    signature : [Validators.required.validator],    
  },
};

export const formValidation = createFinalFormValidation(validationSchema);
