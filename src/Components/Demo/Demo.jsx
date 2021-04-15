import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "45px",
    fontWeight: "bold",
    paddingTop: "90px",
    marginBottom:"0px"
  },
}));


function Demo() {
  const classes = useStyles();

    return (
      <div id="demo">
      <Typography align="center" className={classes.title}>
        DEMO
      </Typography>
      </div>
    );
  }
  
  export default Demo;