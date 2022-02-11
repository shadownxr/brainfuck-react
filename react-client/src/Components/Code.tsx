import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface CodeProps {
    texfun(code: string, input: string): void;
}

interface FormElements extends HTMLFormControlsCollection {
    CodeField: HTMLInputElement;
    InputField: HTMLInputElement;
}

interface CodeField extends HTMLFormElement {
   readonly elements: FormElements
}

export function Code(Props: CodeProps) {
    const handleInterpret = (e: React.FormEvent<CodeField>) => {
        e.preventDefault();
        Props.texfun(e.currentTarget.elements.CodeField.value, e.currentTarget.elements.InputField.value);
    }

    const codeDef = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";

    return(
        <form onSubmit={handleInterpret} style={{width: '100%', height: '100%'}}>
            <TextField type="text" label="Code" margin='dense' defaultValue={codeDef} size="small" id="CodeField" fullWidth minRows={24} multiline={true} />
            <TextField type="text" label="Input" margin='dense' size="small" id="InputField" sx={{width: '89%', marginRight: 1}} />
            <Button variant="contained" type="submit" sx={{width: '10%', marginTop: 1, backgroundColor: 'red', color: 'white'}}>Run</Button>
        </form>
    )
}
