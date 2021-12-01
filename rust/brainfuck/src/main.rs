use wasm_bindgen::prelude::*;
mod interpreter;

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
pub fn add_two_ints(a: u32, b: u32) -> u32 {
   a + b
}
