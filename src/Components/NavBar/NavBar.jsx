import React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import mark from '../../assets/images/branding/mark.png';


const useStyles = makeStyles({


  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    // background: "red",

  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,


  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  socialLinks: {
    marginRight: `10px`,
    fill: `#1cb5c9`,
    fontSize: `35px`,

  },

});

const navLinks = [
  { title: `home`, path: `#home` },
  { title: `features`, path: `#features` },
  { title: `demo`, path: `#demo` },
  { title: `team`, path: `#team` },
];

function NavBar() {
  const classes = useStyles();

  return (
    <div id="home">
      <CssBaseline />
      <AppBar position="fixed" style={{ background: '#202020' }} >
        <Toolbar >
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              <img src={mark} alt="atomic logo" height="40px" style={{ paddingRight: 16, marginTop: 4 }} />
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}

            </List>
            <div>
              <Link href="https://github.com/oslabs-beta/atomic" target="_blank" rel="noreferrer">
                <GitHubIcon className={classes.socialLinks} />
              </Link>
              <Link href="https://www.linkedin.com/in/atomic-devtool/" target="_blank" rel="noreferrer">
                <LinkedInIcon className={classes.socialLinks} />
              </Link>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;