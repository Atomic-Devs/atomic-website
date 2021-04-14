

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  grid: {
    textAlign: 'center',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '90%',
    border: "10px solid #ebebeb",
  },
  cardContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  socialLinks: {
    paddingRight: `10px`,
    fill: `#000000`,
    fontSize: `35px`,
  },
  title: {
    fontSize: "45px",
    fontWeight: "bold",
  },
}));

function Team() {
  const classes = useStyles();
  return (
    <>
      <Typography align="center" className={classes.title}>
        OUR DEVELOPER TEAM
      </Typography>
      <Typography align="center" >Interested in contributing? Atomic is open-source. Help make Jotai state debugging easier</Typography>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={3} className={classes.grid}>

          <Grid item xs={12} sm={6} md={3}>

            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
              style={{ borderRadius: "50%" }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Chandni Patel
                </Typography>
              <Typography>
                Software Engineer
                </Typography>
              <GitHubIcon className={classes.socialLinks} />
              <LinkedInIcon className={classes.socialLinks} />
            </CardContent>

          </Grid>

          <Grid item xs={12} sm={6} md={3} >

            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
              style={{ borderRadius: "50%" }}
            />

            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Giovanni Lituma
                </Typography>
              <Typography>
                Software Engineer
                </Typography>
              <GitHubIcon className={classes.socialLinks} />
              <LinkedInIcon className={classes.socialLinks} />
            </CardContent>

          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
              style={{ borderRadius: "50%" }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Logan Thies
                </Typography>
              <Typography>
                Software Engineer
                </Typography>
              <GitHubIcon className={classes.socialLinks} />
              <LinkedInIcon className={classes.socialLinks} />
            </CardContent>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>

            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
              style={{ borderRadius: "50%" }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Stanley Huang
                </Typography>
              <Typography>
                Software Engineer
                </Typography>
              <GitHubIcon className={classes.socialLinks} />
              <LinkedInIcon className={classes.socialLinks} />
            </CardContent>

          </Grid>

        </Grid>
      </Container>

    </>
  );
}

export default Team;