import React from 'react'
import { Container , Grid ,Typography  } from "@material-ui/core";
import PortFolio from "../images/svg/portfolio.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function introduction({name}) {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} spacing={2} style={{marginTop:'10vh',padding:'6vh'}} >
                <Typography variant="h3" className="textheaders" data-scroll data-scroll-speed={0}>
                    Hello 👋🏻
                </Typography><br/><br/>
                <Typography variant="h4" className="textheaders" data-scroll data-scroll-speed={2}>
                    I am {name} 
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{marginTop:'9vh'}}>
                <div data-scroll data-scroll-speed={3} data-scroll-position="bottom" data-scroll-direction="vertical">
                    <PortFolio style={{width:"80%",opacity:'0.9',height:'90%',zIndex:'5'}} alt="Portfolio Website" />  
                </div>
            </Grid>
        </Grid>
    )
}

export default introduction
