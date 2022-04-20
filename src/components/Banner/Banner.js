import { Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useGlobalContext } from "../../context";
const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: 800,
    backgroundColor: theme.palette.secondary.main,
  },
}));
const Banner = () => {
  const { dark } = useGlobalContext();

  const classes = useStyles(dark);
  return (
    <section className={classes.banner}>
      <Container className={classes.bigCont}>
        <Typography variant="h2">Coins</Typography>
      </Container>
    </section>
  );
};

export default Banner;
