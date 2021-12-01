pub struct MemCtrl {
    memory: Vec<u8>,
    pointer: usize,
}

impl MemCtrl {
    pub fn new() -> MemCtrl {
        MemCtrl {
            memory: vec![0 as u8],
            pointer: 0 as usize,
        }
    }

    pub fn pointer_shift_left(&mut self){
        self.pointer = self.pointer - 1;
    }

    pub fn pointer_shift_right(&mut self){
        self.pointer = self.pointer + 1;
        if self.pointer == self.memory.len() {
            self.memory.push(0 as u8);
        }
    }

    pub fn increment_bit(&mut self){
        self.memory[self.pointer] = self.memory[self.pointer] + 1 as u8;
    }

    pub fn decrement_bit(&mut self){
        if self.memory[self.pointer] != 0 {
            self.memory[self.pointer] = self.memory[self.pointer] - 1 as u8;
        }
    }

    pub fn print_char(&self){
        print!("{}",self.memory[self.pointer] as char);
    }

    pub fn put_char(&mut self, buffer: char){
        if buffer.is_ascii() {
            self.memory[self.pointer] = buffer as u8;
        }
    }

    pub fn is_zero(&self) -> bool{
        if self.memory[self.pointer] == 0 {true} else {false}
    }

    pub fn debug(&self){
        println!("Vector = {:?}, Pointer = {}", self.memory, self.pointer);
    }
}


