import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

interface Output {
    output:string;
}

export function Output(props:Output) {
    return(
        <TextField label='Output' InputLabelProps={{shrink: true}} margin='dense' size='small' defaultValue={props.output} fullWidth inputProps={{readOnly: true}} sx={{height: '100%'}} multiline={true} minRows={11}/>
    )
} 