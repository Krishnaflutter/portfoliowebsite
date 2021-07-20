import React from 'react'
import {Container} from '@material-ui/core'
import Waves from '../images/svg/wave-haikei.svg';
// import Waves from '../images/svg/wave2.svg';
import './ham-menu.scss';

const footer=() => {
    return (
        <Container style={{margin:"0px",padding:"0px",maxWidth:"100vw",position:"fixed",bottom:"-0.5vh",zIndex:"-5"}} >
            <Waves style={{width:"100vw",padding:"0px"}}/>
        </Container>
    )
}

export default footer
