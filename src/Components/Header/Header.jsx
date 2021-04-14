
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    background: "linear-gradient(0deg, rgba(69,69,69,1) 0%, rgba(32,32,32,1) 100%)",
    padding: theme.spacing(8, 0, 6),
    height: "70vh",
    paddingTop: "200px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent} >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          style={{ color: "white", fontWeight:"bold"}}
        >
          Atomic
        </Typography>
        {/* Site Description */}
        <Typography variant="h5" align="center" style={{ color: "white" }}>
        Developer tool visualizer for React applications built with Jotai
        </Typography>
        {/* <Typography  align="center" style={{ color: "white" }}>
        Provides real-time snapshots of a Jotai application's atomic state and component structure allowing developers to easily debug and build an application that is more performant.
        </Typography> */}
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#1cb5c9",
                  color: "black",
                  border: "1px solid #1cb5c9",
                }}
              >
                Install
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                style={{ color: "white", border: "1px solid white" }}
              >
                Download
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    
    </div >
  );
}

export default Header;
