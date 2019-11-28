import * as React from 'react';
import { UserVm } from '../user-collection.vm';
import { TableCell, TableBody, TableRow, Button } from '@material-ui/core';

interface Props {}

interface Props {
  userCollection: UserVm[];
}

export const TableBodyComponent: React.FunctionComponent<Props> = props => {
  const { userCollection } = props;

  return (
    <>
      <TableBody>
        {userCollection.map(userCollection => (
          <TableRow key={userCollection.cardNumber}>
            <TableCell align="center" component="th" scope="row">
              {userCollection.cardNumber}
            </TableCell>
            <TableCell align="center">{userCollection.date}</TableCell>
            <TableCell align="center">{userCollection.firtsName}</TableCell>
            <TableCell align="center">{userCollection.lastName}</TableCell>
            <TableCell align="center">{userCollection.dni}</TableCell>
            <TableCell align="center">{userCollection.company}</TableCell>
            <TableCell align="center">{userCollection.visits}</TableCell>
            <TableCell align="center">{userCollection.entryTime}</TableCell>
            <TableCell align="center">{userCollection.exitTime}</TableCell>
            <TableCell align="center">
              <Button size="small" variant="contained" color="primary">
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};
