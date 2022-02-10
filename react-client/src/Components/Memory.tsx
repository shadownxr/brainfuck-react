import React from 'react';
import { TextField } from '@mui/material';

export function Memory() {
    return(
        <TextField label='Memory' inputProps={{readOnly: true}} margin='dense' size='small' minRows={24} multiline={true} fullWidth></TextField>
    )
}