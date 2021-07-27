import React from 'react'
import {Container, Paper} from '@material-ui/core';

function colorFull({ele,color}) {
    return (
        <Container style={{width:"100%",height:"50%",backgroundColor:'inherit',padding:"0",margin:'0'}} data-scroll-section>
            <Paper elevation={4} style={{backgroundColor:"#00665c",width:"100vw",height:"30vh"}}
                data-scroll 
                data-scroll-speed={4}
                data-scroll-position="top"
                data-scroll-call="backgroundColor,#99fff5,#00665c"
            >
            </Paper>
            <Paper elevation={3} style={{backgroundColor:"#00ccb8",width:"100vw",height:"30vh"}}
                data-scroll 
                data-scroll-speed={6}
                data-scroll-position="top"
            >
            </Paper>
            <Paper elevation={2} style={{backgroundColor:"#00f5dc",width:"100vw",height:"30vh"}}
                data-scroll 
                data-scroll-speed={8}
                data-scroll-position="top"
            >
            </Paper>
        </Container>
    )
}

export default colorFull
