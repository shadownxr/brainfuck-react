pub mod memctrl;

use std::fs;
use std::io;

pub struct Interpreter {
    memory: memctrl::MemCtrl,
    input_buffer: String,
    code: Vec<char>,
    loop_current: usize,
    loop_begin: Vec<usize>,
    pointer: usize,
}

impl Interpreter {
    pub fn new() -> Interpreter {
        Interpreter {
            memory: memctrl::MemCtrl::new(),
            input_buffer: String::new(),
            code: Vec::new(),
            loop_current: 0,
            loop_begin: vec![0],
            pointer: 0,
        }
    }

    /*pub fn read_code(&mut self, path: String) {
        let code_buffer = fs::read_to_string(path).expect("Couldn't read the file!");
        if code_buffer.is_ascii() != true{
            panic!("Non ascii character found!");
        }
        for i in code_buffer.chars() {
            if i ==  '+' || i == '-' || i == '.' || i == ',' || i == '[' || i == ']' || i == '>' || i == '<'  {
                self.code.push(i);
            }
        }
    }*/

    pub fn read_code(&mut self, code: String) {
        if code.is_ascii() != true{
            panic!("Non ascii character found!");
        }
        for i in code.chars() {
            if i ==  '+' || i == '-' || i == '.' || i == ',' || i == '[' || i == ']' || i == '>' || i == '<'  {
                self.code.push(i);
            }
        }
    }

    /*pub fn get_input(&mut self){
        println!("Program input:");
        io::stdin().read_line(&mut self.input_buffer).expect("Unable to read input!");
    }*/

    pub fn get_input(&mut self, input: String){
        self.input_buffer = input;
    }

    pub fn interpret(&mut self) -> String {
        let mut input = self.input_buffer.chars();
        let mut output = String::new();

        while self.code.len() != self.pointer  {
            //println!("{}", self.code[self.pointer]);
            //println!("{}", self.pointer);

            match self.code[self.pointer] {
                '+' => {
                    self.memory.increment_bit();
                }

                '-' => {
                    self.memory.decrement_bit();
                }

                '<' => {
                    self.memory.pointer_shift_left();
                }

                '>' => {
                    self.memory.pointer_shift_right();
                }

                '.' => {
                    self.memory.print_char(&mut output);
                }

                ',' => {
                    match input.next() {
                        Some(input) => {
                            println!("Input: {}", input);
                            self.memory.put_char(input);
                        }
                        None => {
                            panic!("Wrong input value!");
                        }
                    }
                }
                

                '[' => {
                    self.loop_current = self.loop_current + 1;
                    self.loop_begin.push(self.pointer);  
                }

                ']' => {
                    if self.memory.is_zero() != true {
                        self.pointer = self.loop_begin[self.loop_current];
                    } else {
                        self.loop_current = self.loop_current - 1;
                        self.loop_begin.pop();
                    }
                }

                _ => {
                    //panic!("Invalid character found!");
                }
            }
            self.pointer = self.pointer + 1;
        }
        output
    }

    pub fn debug(&self){
        self.memory.debug();
    }
}