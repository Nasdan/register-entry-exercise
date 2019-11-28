import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldForm } from 'common/components/text-field-form';
import { createEmptyEntryRegistry } from './entry-registry.vm';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export const EntryRegistryComponent = () => {
  const [entry, setEntry] = React.useState(createEmptyEntryRegistry());

  const onChangeField = (id, value) => {
    setEntry({
      ...entry,
      [id]: value,
    });
  };

  const onSave = ()=>{};

  return (
    <div>
      <TextFieldForm
        label="Card number"
        name="cardNumber"
        value={entry.cardNumber}
        onChange={onChangeField}
      />

      <TextFieldForm
        label="Name"
        name="name"
        value={entry.name}
        onChange={onChangeField}
      />

      <TextFieldForm
        label="Lastname"
        name="lastname"
        value={entry.lastname}
        onChange={onChangeField}
      />

      <TextFieldForm
        label="DNI"
        name="dni"
        value={entry.dni}
        onChange={onChangeField}
      />

      <TextFieldForm
        label="Company"
        name="company"
        value={entry.company}
        onChange={onChangeField}
      />

      <TextFieldForm
        label="Signature"
        name="signature"
        value={entry.signature}
        onChange={onChangeField}
      />

      <TextFieldForm
        label="Visits"
        name="visits"
        value={entry.visits}
        onChange={onChangeField}
      />

      {/* TODO: Add signatureCompnent */}

      <Button variant="contained" color="primary" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};
