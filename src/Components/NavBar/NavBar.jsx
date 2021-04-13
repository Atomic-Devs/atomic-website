

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from '../NavBar/logo.png'
import CssBaseline from '@material-ui/core/CssBaseline';
import "../../styles.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  socialLinks: {
    paddingRight: `10px`,
    fill: `#fff`,
    fontSize: `40px`,
  },
});

const navLinks = [
  { title: `home`, path: `/home` },
  { title: `about`, path: `/about` },
  { title: `features`, path: `/features` },
  { title: `demo`, path: `/demo` },
  { title: `team`, path: `/team` },
];

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}

            </List>
            <div>
              <GitHubIcon className={classes.socialLinks} />
              <LinkedInIcon className={classes.socialLinks} />
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;

{/* <Router>
  <div class="site-nav-left-wrapper">
    <div class="site-nav-left">
      <Link class="site-nav-logo" to="/"><img src={logo} width="32" height="32" alt="Atomic Logo" /></Link>
      <div class="site-nav-content">
        <ul class="nav" role="menu">
          <li class="nav-home" role="menuitem">
            <Link aria-current="page" class="nav-home nav-current" to="/about">About</Link>
          </li>
          <li class="nav-tag" role="menuitem">
            <Link class="nav-home nav-current" to="/features">Features</Link>
          </li>
          <li class="nav-author" role="menuitem">
            <Link class="nav-home nav-current" href="/demo">Demo</Link>
          </li>
          <li class="nav-help" role="menuitem">
            <Link class="nav-home nav-current" href="/team">Team</Link>
          </li>
          <li class="nav-blogody" role="menuitem">
            <a class="nav-home nav-current" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  // </Router>A < Switch > looks through its children < Route > s and
  //          renders the first one that matches the current URL.
  < Switch >
    // <Route path="/"></Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/features">
      <Features />
    </Route>
    <Route path="/demo">
      <Demo />
    </Route>
    <Route path="/team">
      <Team />
    </Route>
    <Route path="/contact">
      <Footer />
    </Route>
  </ >
</Router > */}