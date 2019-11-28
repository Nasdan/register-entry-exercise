import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Paper, Button } from '@material-ui/core';
import { TableHeadComponent } from './table-head.component';
import { TableBodyComponent } from './table-body.component';
import { userMock } from '../../user.mock';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

interface Props {
  onNewUser: () => void;
}

export const UserCollectionComponent: React.FC<Props> = props => {
  const classes = useStyles({});
  const [userCollection] = React.useState(userMock);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHeadComponent />
          <TableBodyComponent
            userCollection={userCollection}
            onEditUser={id => alert(`UserID: ${id}`)}
          />
        </Table>
      </Paper>
      <Button variant="contained" color="secondary" onClick={props.onNewUser}>
        Add new entry
      </Button>
    </div>
  );
};
