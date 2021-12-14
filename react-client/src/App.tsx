import React, { useState, useEffect } from 'react';
import './App.css';
import { Code } from './Components/Code';

function App() {
   const [code, setCode] = useState<string>("");
   const [output, setOutput] = useState<string>("");
   const [text, setText] = useState<string>("code");

   useEffect(() => {
      setCode("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.");
      //console.log(text);
      });

   const textcallback = (t: string):void => {
      setText(t);
      console.log(text);
   }

   import('wasm').then(({ add_two_ints, brainfuck}) => {
      const sumResult = add_two_ints(10, 20);
      setOutput(brainfuck(code,""));
      setSum(sumResult);
  });
   const [sum, setSum] = useState<number>(0);
   return (
      // I cut out the fluff
      // Displaying our sum and fib values that're updated by WASM
      <div className="App" >
         <div>Output: {output}</div>
         <Code texfun = {textcallback}/>
      </div>
   );
}
export default App;
