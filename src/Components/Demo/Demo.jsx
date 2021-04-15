import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "45px",
    fontWeight: "bold",
    paddingTop: "80px",
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
      <Typography variant="h5" align="center" style={{ color: "black", paddingTop: "10px" }}>
        Check out our demo application! <Link
          href="https://atomic-devs.github.io/jotai-tic-tac-toe-demo/"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration: "none", color:"#1cb5c9"}}
        >
          here
        </Link>{" "}
        </Typography>
      </div>
    );
  }
  
  export default Demo;