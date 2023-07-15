import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';


const Shipping = ({ name, value, options, onChange }) => {
    return (
        <Grid item xs={12} sm={6}>
            <InputLabel>{name}</InputLabel>
            <Select value={value} fullWidth onChange={onChange}>
                {Object.entries(options).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </Grid>
    )
}

export default Shipping