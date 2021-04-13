
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


function Header() {
  const classes = useStyles();
  return (

    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Atomic
      </Typography>
        {/* Site Description */}
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Visualizer developer tool for React applications using Jotai
      </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Install
            </Button>
            </Grid>
            {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Header;