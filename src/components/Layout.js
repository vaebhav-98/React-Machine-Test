import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar';
import TextInput from './TextInput';

const Layout = (props) => {
    return (
        <Box sx={{ display: 'flex', maxWidth : 'xl' }}>
            {/* <CssBaseline /> */}
            <TopBar />
            <Box component="main" sx={{ p: 3, maxWidth : 'xl', margin: 'auto' }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    )
}

export default Layout