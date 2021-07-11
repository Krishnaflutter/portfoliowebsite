import React , {useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './navbar'

function Layout(props) {
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    
    const [dark,setDark] = useState(true);

    // const handleTheme =(event) => {
    //     setDark(event.target.checked);
    // }

    const theme = createTheme({
        palette: {
        type: "dark",
        }
    });
  

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar setDark={setDark} dark={dark}/>
            {props.children?props.children:<></>}
        </ThemeProvider>
    );
}

export default Layout