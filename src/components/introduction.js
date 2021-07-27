import React from 'react'
import { Container , Grid ,Typography ,Button } from "@material-ui/core";
import PortFolio from "../images/svg/portfolio.svg";
import resume from '../Pdf/Krishna_Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub ,faFacebook , faLinkedin, faWhatsappSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

function introduction({name}) {
    return (
        <Grid container data-scroll-section style={{width:"100vw",height:"95vh"}}>
            <Grid item xs={12} spacing={2} style={{margin:'3% 10%',padding:"2%"}} >
                <Typography variant="h2" className="textheaders" data-scroll data-scroll-speed={0}>
                    Hello 👋🏻
                </Typography><br/>
                <Typography variant="h3" className="textheaders" data-scroll data-scroll-speed={2} data-scroll-position="top">
                    I am {name} 
                </Typography><br/>
                <Container style={{width:"100%",height:"10%",display:"flex",margin:"0",marginTop:'4vh',marginBottom:"4vh",padding:"0"}} data-scroll data-scroll-speed={3}>
                    <span ><a><FontAwesomeIcon icon={faGithub} className="awsicon" ></FontAwesomeIcon></a></span>
                    <span ><a><FontAwesomeIcon icon={faFacebook} className="awsicon"></FontAwesomeIcon></a></span>
                    <span ><a><FontAwesomeIcon icon={faLinkedin} className="awsicon"></FontAwesomeIcon></a></span>
                    <span ><a href="https://wa.me/+919304055303"><FontAwesomeIcon icon={faWhatsappSquare} className="awsicon"></FontAwesomeIcon></a></span>
                    <span ><a><FontAwesomeIcon icon={faInstagramSquare} className="awsicon" style={{marginRight:"0"}}></FontAwesomeIcon></a></span>
                </Container>
                <Container data-scroll data-scroll-speed={6} style={{padding:"0",margin:"0"}}>
                   <a href={resume} target="_blank" style={{textDecoration:'none'}}>
                    <Button 
                            variant="outlined"  
                            size="large"
                            className="otlbutton" 
                            style={{marginRight:"4vw",borderColor:"white",borderWidth:'0.2em'}}
                        >
                            Resume
                    </Button>
                   </a>
                   <a href="mailto:krishna858775@gmail.com" target="_blank" style={{textDecoration:"none"}}>
                        <Button variant="contained" size="large" className="btn">
                                Let's Talk !
                        </Button>
                   </a>
                </Container>

            </Grid>
            {/* <Grid item xs={6} style={{marginTop:'9vh'}} data-scroll data-scroll-speed={1}>
                <div data-scroll data-scroll-speed={3} data-scroll-position="top" data-scroll-direction="vertical">
                    <PortFolio style={{width:"80%",opacity:'0.9',height:'90%',zIndex:'5'}} alt="Portfolio Website" />  
                </div>
            </Grid> */}
        </Grid>
    )
}

export default introduction
