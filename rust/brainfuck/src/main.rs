use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};
mod interpreter;

#[derive(Serialize, Deserialize)]
pub struct InterpretData {
    pub output: String,
    pub memory: Vec<u8>,
}

#[wasm_bindgen]
pub fn main() {
    /*let mut init = interpreter::Interpreter::new();

    let path = String::from("code.txt");
    init.read_code(path);
    init.get_input();
    init.interpret();
    init.debug();*/
}

#[wasm_bindgen]
pub fn brainfuck(code: String, input: String) -> JsValue {
    let mut init = interpreter::Interpreter::new();
    init.read_code(code);
    init.get_input(input);
    let output = init.interpret();
    let memory = init.memory_data();
    let interpretdata = InterpretData {
        output: output,
        memory: memory,
    };
    JsValue::from_serde(&interpretdata).unwrap()
}


