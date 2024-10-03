const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Täringute arv ", kordus => {
    for (let i = 0; i < kordus; i++) {
        let number =  Math.ceil(Math.random() * 6)
        
        console.log(number)
        
    }
    rl.close()
} )