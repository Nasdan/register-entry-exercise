import * as React from 'react';
import { makeStyles, TableCell, TableHead, TableRow } from '@material-ui/core';

interface Props {}

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: 'bold',
  },
}));

export const TableHeadComponent: React.FC<Props> = props => {
  const classes = useStyles({});
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell align="center" className={classes.header}>
            Card Number
          </TableCell>
          <TableCell align="center" className={classes.header}>
            date
          </TableCell>
          <TableCell align="center" className={classes.header}>
            First name
          </TableCell>
          <TableCell align="center" className={classes.header}>
            Last name
          </TableCell>
          <TableCell align="center" className={classes.header}>
            DNI
          </TableCell>
          <TableCell align="center" className={classes.header}>
            Company
          </TableCell>
          <TableCell align="center" className={classes.header}>
            Visits
          </TableCell>
          <TableCell align="center" className={classes.header}>
            Entry
          </TableCell>
          <TableCell align="center" className={classes.header}>
            Exit time
          </TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
