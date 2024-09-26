let astmeAlus = 2;
let astendaja = 4;
let vastus = astmeAlus ** astendaja;
console.log(vastus); 


const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage astme alus: ", astmeAlus => {
  rl.question("Sisestage astendaja: ", astendaja => {
      let tulemus = astmeAlus ** astendaja;
      console.log(tulemus);
      rl.close();
    });
});