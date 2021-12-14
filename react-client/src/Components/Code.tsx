import React, { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface CodeProps {
    texfun(code: string): void;
}

export function Code(Props: CodeProps) {
    const [codearea, setCodearea] = useState("");

    const handleInterpret = () => {
        Props.texfun(codearea);
    }

    const handleCode = (e: ChangeEvent<HTMLInputElement>) => {
        setCodearea(e.currentTarget.value);
    }

    return(
        <div>
            <form>
                <TextField type="text" id="codefield" onChange={handleCode} />
                <Button variant="contained" onClick = {() => handleInterpret()}>Interpret</Button>
            </form>
            Działa
        </div>
    )
}
