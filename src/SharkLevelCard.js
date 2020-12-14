import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: theme.spacing(2),
  },
}));

export const SharkLevelCard = ({ level }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {level.name}
        </Typography>
        <Typography variant='body2' component='p'>
          {level.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
