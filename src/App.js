import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Link } from "react-router-dom";
import { Sharks } from "./components/Sharks";
import { SharkLevels } from "./components/SharkLevels";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuTitle: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  const API_URL = process.env.REACT_APP_API_URL;
  const [levels, setLevels] = useState([]);
  const [loadingLevels, setLoadingLevels] = useState(true);

  const [title, setTitle] = useState("Sharks");

  useEffect(() => {
    fetch(API_URL + "/sharklevel").then((resp) => {
      if (resp.status !== 200) {
        console.log(`Error occured, status code: ${resp.status}`);
        return;
      }

      resp
        .json()
        .then((data) => {
          setLevels(data);
          setLoadingLevels(false);
        })
        .catch((err) => console.error("Couldn't convert JSON:", err));
    });
  }, [setLevels, setLoadingLevels, API_URL]);

  return (
    <div>
      <AppBar position='static' className={classes.menu}>
        <Toolbar>
          <Typography variant='h6' className={classes.menuTitle}>
            {title}
          </Typography>
          <Button color='inherit' component={Link} to='/'>
            Sharks
          </Button>
          <Button color='inherit' component={Link} to='/levels'>
            Shark levels
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth='lg'>
        <Switch>
          <Route exact path='/'>
            <Sharks
              levels={levels}
              loadingLevels={loadingLevels}
              setTitle={setTitle}
            />
          </Route>
          <Route exact path='/levels'>
            <SharkLevels
              levels={levels}
              loadingLevels={loadingLevels}
              setTitle={setTitle}
            />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
