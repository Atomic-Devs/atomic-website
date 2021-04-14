
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5];

function Features() {
  const classes = useStyles();

  return (
    <>
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        Features
      </Typography>
      {/* <Divider className={classes.divider} /> */}

      <Container className={classes.cardGrid} maxWidth="md">

        <Grid container spacing={6}>
          {cards.map((card) => (
            <>
              <Grid item key={card} md={8}>
                <Card className={classes.card}>
                  <Paper elevation={3}></Paper>
                  <p>gif goes here</p>
                </Card>
              </Grid>
              <Grid item key={card} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Feature {card}
                    </Typography>
                    <Typography>
                      Description
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>

    </>
  );
}

export default Features;