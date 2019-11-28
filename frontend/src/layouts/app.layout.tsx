import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Home } from '@material-ui/icons';
import Moment from 'react-moment';
import 'moment-timezone';
import Spacer from 'react-spacer';
import { useStyles } from './app.layout.styles';

export const AppLayout: React.FunctionComponent = props => {
 
  const classes = useStyles({});

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="regular" className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            <Home />
            Register enter and exit 
          </Typography>
          <Typography variant="h6" color="inherit" align="right">
            <Moment local format="YYYY/MM/DD" />
            <Spacer width="12px" />
            <Moment local format="HH:mm" />
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
      <AppBar position="static">
        <Toolbar variant="regular">
          <Typography variant="h6" color="inherit">
            Contact 
          </Typography>
        </Toolbar>
      </AppBar>
    </>

  );
};
