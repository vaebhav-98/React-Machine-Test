import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const TextInput = (props) => {
    return (
        <Box
            component='div'
        >
            <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
            <TextField
                id={props.id}
                size='small'
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                fullWidth={true}
                multiline={props.multiline}
                rows={props.rows}
            />
        </Box>
    )
}

export default TextInput