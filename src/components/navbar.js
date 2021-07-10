import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
            <div>
                {/* <FormGroup>
                    <label>{<WbSunnyIcon />}</label>
                    <FormControlLabel
                        control={<Switch checked={props.dark} onChange={()=> props.setDark(!props.dark)} aria-label="theme switch"/>}
                        label={<NightsStayIcon />}
                    />
                </FormGroup> */}
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>{<WbSunnyIcon />}</Grid>
                    <Grid item>
                        <Switch 
                            checked={props.dark} 
                            onChange={()=> props.setDark(!props.dark)} 
                            aria-label="theme switch"
                        />
                    </Grid>
                    <Grid item>{<NightsStayIcon />}</Grid>
                </Grid>

            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
