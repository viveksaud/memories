import { makeStyles } from '@material-ui/core/styles';
// import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    // color: "rgba(0,183,255, 1)",
    color: "rgb(25 101 131)",
    [theme.breakpoints.down("sm")]: {
      fontSize:"3.3rem",
    },
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));

export default useStyles;