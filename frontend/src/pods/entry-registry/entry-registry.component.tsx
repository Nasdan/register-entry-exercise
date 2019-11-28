import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from 'common/components/forms';
import Button from '@material-ui/core/Button';
import { EntryRegistryVm } from './entry-registry.vm';
import { formValidation } from './entry-registry.validation';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

interface Props extends WithStyles<typeof styles> {
  registryEntry: EntryRegistryVm;
  onFieldUpdate: (id: string, value: any) => void;
  onSave: () => void;
}



  
  export const EntryRegistryComponent = (props: Props) => {
    const { classes, hotel, cities, onFieldUpdate, onSave } = props;
  
    return (
      <div className={classes.formContainer}>
        <TextFieldForm
          label="Name"
          name="name"
          value={hotel.name}
          onChange={onFieldUpdate}
        />
        {/* for multilanguage support rather use formErrors.name.type */}
  
        <img className={classes.picture} src={hotel.picture} />
  
        <RatingForm
          name="rating"
          value={hotel.rating}
          max={5}
          onChange={onFieldUpdate}
        />
  
        <DropdownForm
          name="city"
          label="city"
          onChange={onFieldUpdate}
          value={hotel.city}
          list={cities}
        />
  
        <TextAreaForm
          placeholder="Description"
          name="description"
          label="description"
          value={hotel.description}
          onChange={onFieldUpdate}
        />
  
        <Button variant="contained" color="primary" onClick={onSave}>
          Save
        </Button>
      </div>
    )};
  
