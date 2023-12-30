import React, { useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const DropdownInput = (props) => {
    const [personName, setPersonName] = React.useState([]);
    const [person, setPerson] = useState('');

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPerson(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <InputLabel id="demo-multiple-name-label">Button Label</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder='Select a label that best suits your ad'
                value={person}
                // label="Age"
                size='small'
                fullWidth={true}
                onChange={handleChange}
            >
                {props.data.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    // defaultValue={'Select a label that best suits your ad'}
                    // style={getStyles(name, personName, theme)}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default DropdownInput