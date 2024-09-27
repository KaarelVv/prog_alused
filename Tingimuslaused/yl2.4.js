const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Kas soovite istekohta valida (\" ise \") või loosida (\" loos \")", vastus => {
    let loos = Math.random();
    if (vastus == "ise") {
        rl.question("Kas soovite istuda akna ääres? ", vastus => {
            if (vastus == "aken") {
                console.log("Valisite ise. Aknakoht");
            }else if(vastus = "loos"){
                
                if (loos <= 0.3) {
                    console.log(`Valisite ise. Aknakoht`)
                }else{
                    console.log(`Valisite ise. Vahekäik`)
                } 
            } rl.close();
        })
    }else if(vastus == "loos"){
        if(loos <= 0.3){
            console.log("Valisite loos. Aknakoht");
        } else {
            console.log("Valisite loos. Vahekoht");
        } 
    } rl.close();
});