import React, { useState} from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Grid from '@material-ui/core/Grid';
import './ham-menu.scss';


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
    const [navMenuOpen,setNavMenuOpen] = useState(false);
    const active = classNames('nav-ham-menu',{
        open:navMenuOpen,
    })
    return (
        <div className={classes.root}>
        <AppBar position="static" color="transparent" elevation="0">
            <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            <span className="navigation-links">
                <button
                    aria-label="menu button"
                    className={active}
                    onClick={()=> setNavMenuOpen(!navMenuOpen)}

                >
                    <div className="bar-one"></div>
                    <div className="bar-two"></div>
                    <div className="bar-three"></div>
                </button>
            </span>
            <Typography variant="h4" className="addWriting">
                Krishna Ashok
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
