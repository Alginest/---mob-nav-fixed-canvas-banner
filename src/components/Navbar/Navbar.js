import {
  AppBar,
  Container,
  Link,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import BitCoinLogo from "../../images/BTC_Logo.svg";
const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: "#f50057",
    "&.Mui-disabled": {
      color: "#e886a9",
    },
    "&.Mui-checked": {
      color: "#95cc97",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#222",
    },
  },
  switch_track: {
    backgroundColor: "#fff",
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4CAF50",
    },
  },
  AppBar: {
    height: "100px",
  },
  bigCont: {
    height: "inherit",
    alignItems: "center",
  },
  toolbar: {
    height: "inherit",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  list: {
    height: "inherit",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  link: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "#f7931a",
    },
  },
  img: {
    width: 50,
    height: 50,
  },
}));
const Navbar = () => {
  const [switchState, setSwitchState] = React.useState(false);
  const [scrolledY, setScrolledY] = useState(0);
  const { dark, setDark } = useGlobalContext();

  const classes = useStyles(dark);

  const handleChange = () => {
    setSwitchState(!switchState);
    setDark(!dark);
  };
  const scrollWindow = () => {
    let winY = window.scrollY;
    setScrolledY(winY);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);

    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  return (
    <section className={classes.header}>
      <AppBar
        color={scrolledY <= 110 ? "transparent" : "default"}
        position="fixed"
        elevation={scrolledY <= 110 ? 0 : 4}
        className={classes.AppBar}
      >
        <Container className={classes.bigCont}>
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.logo} color="secondary" variant="h4">
              <img src={BitCoinLogo} alt="" className={classes.img} />
              <Typography
                variant="h4"
                component="span"
                style={{ marginLeft: 5 }}
              >
                icon
              </Typography>
            </Typography>
            <div className={classes.list}>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/about"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Service
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Shop
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Blog
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.link}
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </div>
            <Switch
              checked={switchState}
              onChange={handleChange}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                track: classes.switch_track,
              }}
              inputProps={{ "aria-label": "secondary checkbox" }}
              style={{ color: dark ? "#fff" : "#222" }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};

export default Navbar;
