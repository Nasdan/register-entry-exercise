import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldForm } from 'common/components/text-field-form';
import { createEmptyEntryRegistry } from './entry-registry.vm';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});


export const EntryRegistryComponent = () => {
  const [entry,setEntry] =  React.useState(createEmptyEntryRegistry());

  return (
    <div>
     
      <TextFieldForm
        label="Card number"
        name="cardNumber"
        value={entry.cardNumber}
        onChange={(value) => setEntry({
          ...entry,
          cardNumber : value
        })}
      />

      {/* <TextFieldForm
        label="Name"
        name="name"
        value={entryRegistry.name}
        onChange={onFieldUpdate}
      />

      <TextFieldForm
        label="Lastname"
        name="lastname"
        value={entryRegistry.lastname}
        onChange={onFieldUpdate}
      />
      for multilanguage support rather use formErrors.name.type */}


    </div>
  );
};