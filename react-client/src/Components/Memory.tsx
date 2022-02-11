import React from 'react';
import { Box } from '@mui/material';

interface Memory {
    memory: Array<number>;
}

export function Memory(props:Memory) {
    function number_display(n:number):string{
        if(n <= 9){
            return "00" + n;
        } else if(n > 9 && n <= 99){
            return "0" + n;
        } else if(n > 99){
            return n.toString();
        } else {
            return "";
        }
    }

    const memory_table = props.memory.map((n, i) => (<Box sx={{ m: 1 }} key={i}>{number_display(n)}</Box>));

    return(
        <Box>
            <Box sx={{borderBottom: 1, paddingBottom: '2px', paddingLeft: '2px', backgroundColor: 'black', color: 'white'}}>Memory</Box>
            <Box sx={{ display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'left' }}>
                {memory_table}  
            </Box>
        </Box>
    )
}