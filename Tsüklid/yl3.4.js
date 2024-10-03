const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mitu põialpoissi tahab õuna: ", poisid => {
    let totalOunad = 14;
    let maxOunad = 0;
    let jääk = 0;

    for (let i = 1; i <= poisid; i++) {
        let arv = Math.ceil(Math.random() * 2);
        console.log(arv)
        maxOunad+= arv;
        
    }
    jääk = totalOunad - maxOunad;
    console.log(`Lumivalgekesele jäi ${jääk}`);
    rl.close(); 

});

