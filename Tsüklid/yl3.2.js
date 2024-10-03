const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Sisesta ringide arv: ", ringid => {

    let porgandid = 0 ;
    let summa = 0;
    for (let i = 0; i < ringid; i++) {
        // console.log(i);
        if( i % 2 == 0){
            porgandid += 1;
            } 
        summa += porgandid;
        
        
       
    }
    
    rl.close();
    console.log(`Porgandte koguarv on ${summa}`);
});