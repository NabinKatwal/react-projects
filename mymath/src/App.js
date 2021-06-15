import './App.css';
import AppBar from "@material-ui/core/AppBar"
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow: 1,
  },
  menuButton:{
    marginRight: theme.spacing(2),
  },
  title:{
    flexGrow:1,
  },
}))


function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MyMath
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="main">
        <Button variant="contained" color="primary">Basic</Button>
      </div>
    </div>
  );
}

export default App;
