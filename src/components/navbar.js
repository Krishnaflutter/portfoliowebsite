import React, { useState} from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './ham-menu.scss';
import NavMenu from './navMenu'


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
        <AppBar position="fixed"  elevation="0" style={{backgroundColor:'#333'}} >
            <Toolbar>
                <Typography className="addWriting">
                    Krishna Ashok
                </Typography>
                <span className="navigation-links">
                    <button
                        aria-label="menu button"
                        className={active}
                        style={{zIndex:'100'}}
                        onClick={()=> setNavMenuOpen(!navMenuOpen)}

                    >
                        <div className="bar-one"></div>
                        <div className="bar-two"></div>
                        <div className="bar-three"></div>
                    </button>
                </span>
            </Toolbar>
        </AppBar>
        <NavMenu open={navMenuOpen}/>
        </div>
    );
}
