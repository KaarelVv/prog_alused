const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta õhutemperatuur: ", õhutemperatuur =>{
    if( õhutemperatuur > 4){
        let ohutu = "Ei ole jäätumise ohtu!";
        console.log(ohutu);
        } else{
        let ohtlik = "On jäärumise oht"
        console.log(ohtlik);
        } 
    rl.close();
    
});