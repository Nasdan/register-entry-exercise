import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    top: '10%',
    left: '10%'
  },
  sigContainer: {
    width: '100%',
    height: '80%',
    margin: '0 auto',
    backgroundColor: '#fff'
  },
  sigPad: {
    width: '100%',
    height: '100%'
  }

});

/*
body {
  background-color: gray;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.container {
  width: 100%;
  height: 100vh;
  top: 10%;
  left: 10%;
}

.sigContainer {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background-color: #fff;
}

.sigPad {
  width: 100%;
  height: 100%;
}

.buttons {
  width: 100%;
  height: 30px;
}

.sigImage {
  background-size: 200px 50px;
  width: 200px;
  height: 50px;
  background-color: white;
}

*/
