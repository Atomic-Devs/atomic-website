

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import giovanni from '../../assets/images/team/giovanni.png'
import stanley from '../../assets/images/team/stanley.png'
import chandni from '../../assets/images/team/chandni.png'
import logan from '../../assets/images/team/logan.jpg'
import Link from '@material-ui/core/Link';


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
  const preventDefault = (event) => event.preventDefault();

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
              image={chandni}
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
              <Link href="https://github.com/chandnikat" target="_blank" rel="noreferrer">
                <GitHubIcon className={classes.socialLinks} />
              </Link>
              <Link href="https://www.linkedin.com/in/chandnip6/" target="_blank" rel="noreferrer">
                <LinkedInIcon className={classes.socialLinks} />
              </Link>
            </CardContent>

          </Grid>

          <Grid item xs={12} sm={6} md={3} >

            <CardMedia
              className={classes.cardMedia}
              image={giovanni}
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
              <Link href="https://github.com/giovannixdev" target="_blank" rel="noreferrer">
                <GitHubIcon className={classes.socialLinks} />
              </Link>
              <Link href="https://www.linkedin.com/in/giovanni-lituma/" target="_blank" rel="noreferrer">
                <LinkedInIcon className={classes.socialLinks} />
              </Link>
            </CardContent>

          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CardMedia
              className={classes.cardMedia}
              image={logan}
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
              <Link href="https://github.com/Thiesl137" target="_blank" rel="noreferrer">
                <GitHubIcon className={classes.socialLinks} />
              </Link>
              <Link href="https://www.linkedin.com/in/loganthies137/" target="_blank" rel="noreferrer">
                <LinkedInIcon className={classes.socialLinks} />
              </Link>

            </CardContent>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CardMedia
              className={classes.cardMedia}
              image={stanley}
              title="Image title"
              style={{ borderRadius: "50%" }}
            >
            </CardMedia>

            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Stanley Huang
                </Typography>
              <Typography>
                Software Engineer
              </Typography>
              <Link href="https://github.com/stanleyhuang16" target="_blank" rel="noreferrer">
                <GitHubIcon className={classes.socialLinks} />
              </Link>
              <Link href="https://www.linkedin.com/in/stanleyhuang16/" target="_blank" rel="noreferrer">
                <LinkedInIcon className={classes.socialLinks} />
              </Link>
            </CardContent>

          </Grid>

        </Grid>
      </Container>

    </>
  );
}

export default Team;