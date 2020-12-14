import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { SharkCard } from "./SharkCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  const sharks = [
    {
      id: 1,
      name: "Valaki",
      description: "lorem Ipsum dolor sit amet ...",
      sharkLevelId: 1,
    },
    {
      id: 2,
      name: "Valaki2",
      description: "asd as lorem Ipsum dolor sit amet ...",
      sharkLevelId: 1,
    },
    {
      id: 3,
      name: "Valaki3 Capa",
      description: "dolor sit amet ...",
      sharkLevelId: 1,
    },
    {
      id: 4,
      name: "Valaki4",
      description: "lorem Ipsum dolor sit amet ...",
      sharkLevelId: 1,
    },
  ];

  const levels = [
    {
      id: 1,
      name: "veszelyes capak`",
      description: "lorem Ipsum dolor sit amet ...",
    },
  ];

  const findLevelForShark = (levels, id) => {
    const filtered = levels.filter((obj) => {
      return obj.id === id;
    });

    if (filtered[0]) return filtered[0];

    return {};
  };

  return (
    <div>
      <AppBar position='static' className={classes.menu}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>Sharks</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth='lg'>
        <Grid container spacing={2} className={classes.root}>
          {sharks.map((shark) => (
            <Grid item xs={12} md={4} key={shark.id}>
              <SharkCard
                shark={shark}
                level={findLevelForShark(levels, shark.sharkLevelId)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
