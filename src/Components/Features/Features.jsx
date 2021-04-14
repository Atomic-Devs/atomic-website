import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import stateDiff from "./stateDiff.gif";
import componentTree from "./componentTree.gif";
import componentGraph from "./componentGraph.gif";
import atomNetwork from "./atomNetwork.gif";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: "45px",
    fontWeight: "bold",
    paddingTop: "40px",
  },
  cardDiscription: {
    fontSize: "13px",
    alignContent: "center"
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#1cb5c9",
  },
  upcomingFeaturesTitle: {
    fontSize: "30px",
    fontWeight: "bold",
    paddingTop: "25px",
    color: "white"
    
  },
  upcomingFeaturesTitleCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "#202020"
  },
}));

function Features() {
  const classes = useStyles();

  return (
    <>
      <Typography align="center" className={classes.title}>
        FEATURES
      </Typography>
      

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardTitle}
                >
                  State Change Display
                </Typography>
                <Typography className={classes.cardDiscription}>
                  Easily compare atom state changes between snapshots in
                  real-time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Card className={classes.card}>
              <img className="gif" src={stateDiff} alt="" />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Card className={classes.card}>
              <img className="gif" src={componentGraph} alt="" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardTitle}
                >
                  Component Graph Visualization
                </Typography>
                <Typography className={classes.cardDiscription}>
                  Atomic provides a data visualization of an applications
                  component tree. Have the ability to see a hierarchical view of
                  all the React components in an application. The component
                  graph also provides information on which components are
                  subscribed to a particular atom as well as provides real-time
                  data on an atom's value, dependents, and read dependencies for
                  a specific snapshot.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardTitle}
                >
                  Atom Network
                </Typography>
                <Typography className={classes.cardDiscription}>
                  Visualize a specfic atom's dependents (displays all atoms
                  affected by the parent atom) and read dependencies (displays
                  all atoms that affect the parent atom) relationships.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Card className={classes.card}>
              <img className="gif" src={atomNetwork} alt="" />
            </Card>
          </Grid>

          <Grid item  xs={12} sm={6} md={8}>
            <Card className={classes.card}>
              <img className="gif" src={componentTree} alt="" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardTitle}
                >
                  Component Tree
                </Typography>

                <Typography className={classes.cardDiscription}>
                  Displays a Jotai-built application component tree structure
                  with subscribed atom(s) for a given snapshot.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <Card className={classes.upcomingFeaturesTitleCard} >
              <Typography
                align="center"
                className={classes.upcomingFeaturesTitle}
              
              >
                UPCOMING FEATURES
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardTitle}
                >
                  Time Travel
                </Typography>
                <Typography className={classes.cardDiscription}>
                  The ability to jump between state changes within the devtool.
                  The snapshot list provides the state throughout the
                  Jotai-built application runtime and each time state changes, a
                  new snapshot is added. By pressing the jump button next to
                  each snapshot, you are able to visualize state for a specific
                  snapshot.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Features;
