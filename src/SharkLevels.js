import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SharkLevelCard } from "./SharkLevelCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const SharkLevels = ({ levels, loadingLevels, setTitle }) => {
  useEffect(() => {
    setTitle("Shark Levels");
  }, [setTitle]);

  const classes = useStyles();

  if (loadingLevels) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2} className={classes.root}>
      {levels.map((level) => (
        <Grid item xs={12} s={6} md={4} lg={3} key={level.id}>
          <SharkLevelCard level={level} />
        </Grid>
      ))}
    </Grid>
  );
};
