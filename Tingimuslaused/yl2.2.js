const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage nimi :", perenimi => {
    if(perenimi.slice(-2) == "ne"){
        console.log("On abielus");
    }else if(perenimi.slice(-2) == "te"){
        console.log("Ei ole abielus");
    }else if(perenimi.slice(-1) == "e"){
        console.log("Määramata");
    }  else{
        console.log("Ei ole Leedu perenimi");
    } 
    rl.close();
});

