import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from 'common/components/forms';
import Button from '@material-ui/core/Button';
import { LoginEntityVm } from './entry-registry.vm';
import { formValidation } from './entry-registry.validation';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

interface Props {
}

export const EntryRegistryComponent: React.FunctionComponent<Props> = props => {
  const classes = useStyles(props);
  const {  } = props;

  
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="cardName">Card name</label>
        <input id="cardName" name="cardName" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="birthdate">Enter your birth date</label>
        <input id="birthdate" name="birthdate" type="text" />

        <button>Save</button>
      </form>
    );
};
