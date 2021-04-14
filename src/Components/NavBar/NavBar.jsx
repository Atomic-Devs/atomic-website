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
    paddingRight: `10px`,
    fill: `#fff`,
    fontSize: `40px`,
    '&:hover': {
     color: "red",
    }
  },
});

const navLinks = [
  { title: `home`, path: `/home` },
  { title: `features`, path: `/features` },
  { title: `demo`, path: `/demo` },
  { title: `team`, path: `/team` },
];

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" style={{background: '#202020'}} >
        <Toolbar >
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