import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Code } from './Components/Code';
import { Memory } from './Components/Memory';
import { Output } from './Components/Output';
import Box from '@mui/material/Box';

function App() {
   const [code, setCode] = useState<string>("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.");
   const [output, setOutput] = useState<string>("");
   const [input, setInput] = useState<string>("");
   const [memory, setMemory] = useState<Array<number>>([0, 0, 72, 100, 87, 33, 10]);

   const memoryRef = useRef(memory);

   useEffect(() => {
         import('wasm').then(({brainfuck}) => {
            let bf = brainfuck(code,input);
            setOutput(bf.output);
            setMemory(bf.memory);
            console.log(output);
            console.log(memory);
         });
      },[code, input, memoryRef]);

   const codeCallback = (c: string, i: string):void => {
      setCode(c);
      setInput(i);
   }

   return (
      <Box sx={{
         display: 'grid', 
         gridTemplateColumns: 'repeat(4, 1fr)', 
         gridTemplateRows: '62% 8% 30%', 
         gridTemplateAreas: `"code code code memory" "code code code info" "output output output info"`, 
         height: '100vh',
         backgroundColor: 'white'
      }}>
         <Box sx={{ gridArea: 'code', m: 1}}>
            <Code texfun = {codeCallback}/>
         </Box>
         <Box sx={{ gridArea: 'memory', m: 1}}><Memory/></Box>
         <Box sx={{ gridArea: 'output', m: 1, marginTop: -1}}><Output output={output}/></Box>
         <Box sx={{ gridArea: 'info', m: 1, marginTop: 2, marginBottom: 2, border: 1}}>Info</Box>
      </Box>
   );
}
export default App;
