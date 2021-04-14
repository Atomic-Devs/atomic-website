
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  socialLinks: {
    paddingRight: `10px`,
    fill: `#000000`,
    fontSize: `40px`,
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Atomic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer} >
      <Typography align="center">
        <Link href="https://github.com/oslabs-beta/atomic" target="_blank" rel="noreferrer">
          <GitHubIcon className={classes.socialLinks} />
        </Link>
        <Link href="https://www.linkedin.com/in/atomic-devtool/" target="_blank" rel="noreferrer">
          <LinkedInIcon className={classes.socialLinks} />
        </Link>

      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Atomic is an open source product!
      </Typography>
      <Copyright />
    </footer>
  );
}

export default Footer;

