import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SharkCard } from "./SharkCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const Sharks = ({ levels, loadingLevels, setTitle }) => {
  const classes = useStyles();
  const API_URL = process.env.REACT_APP_API_URL;

  const [sharks, setSharks] = useState([]);
  const [loadingSharks, setLoadingSharks] = useState(true);

  useEffect(() => {
    setTitle("Sharks");
  }, [setTitle]);

  useEffect(() => {
    fetch(API_URL + "/shark").then((resp) => {
      if (resp.status !== 200) {
        console.log(`Error occured, status code: ${resp.status}`);
        return;
      }

      resp
        .json()
        .then((data) => {
          setSharks(data);
          setLoadingSharks(false);
        })
        .catch((err) => console.error("Couldn't convert JSON:", err));
    });
  }, [setLoadingSharks, setSharks, API_URL]);

  const findLevelForShark = (levels, id) => {
    const filtered = levels.filter((obj) => {
      return obj.id === id;
    });

    if (filtered[0]) return filtered[0];

    return {};
  };

  if (loadingLevels || loadingSharks) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2} className={classes.root}>
      {sharks.map((shark) => (
        <Grid item xs={12} s={6} md={4} lg={3} key={shark.id}>
          <SharkCard
            shark={shark}
            level={findLevelForShark(levels, shark.sharkLevelId)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
