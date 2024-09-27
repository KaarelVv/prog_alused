const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage ainepunktide arv :", ainepunktid =>{
    rl.question("Sisestage nädalate arv :", nädalad => {
        let ajakulu = ainepunktid * 26;
        let eeldatav = ajakulu / nädalad;
        let ymardus = Math.round(eeldatav);
        console.log(ymardus);
        rl.close();
    });
});

