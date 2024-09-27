const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Sisestage enda vanus: ", vanus => {
    rl.question("Sisestage sugu (M, m või N,n): ", sugu => {
      rl.question("Sisestage treeningu tüüp: ", tüüp => {
       if (sugu == "M" || sugu=="m"  ) {
        switch (tüüp) {
          case tüüp:1
            let minPulss = 220-vanus * 0.5;
            let maxPulss = 220-vanus * 0.7;
            console.log(`Pulsisagedus peaks olema vahemikus ${minPulss} - ${maxPulss}`);
            rl.close();
            break;
            case tüüp:2
            let minPulss2 = 220-vanus * 0.7;
            let maxPulss2 = 220-vanus * 0.8;
            console.log(`Pulsisagedus peaks olema vahemikus ${minPulss2} - ${maxPulss2}`);
            rl.close();
            break;
            case tüüp:3
            let minPulss3 = 220-vanus * 0.8;
            let maxPulss3 = 220-vanus * 0.78;
            console.log(`Pulsisagedus peaks olema vahemikus ${minPulss3} - ${maxPulss3}`);
            rl.close();
            break;
        
          default:console.log("Midagi läks valesti");
            break;
        }
        } else if (sugu == "N" || sugu == "n" ){
          switch (tüüp) {
            case tüüp:1
            let minPulss = Math.round(206-(vanus*0.88) * 0.5);
            let maxPulss = Math.round(206-(vanus*0.88) * 0.7);
            console.log(`Pulsisagedus peaks olema vahemikus ${minPulss} - ${maxPulss}`);
            rl.close();
            break;
            case tüüp:2
            let minPulss2 = 206-(vanus*0.88) * 0.7;
            let maxPulss2 = 206-(vanus*0.88);
            console.log(`Pulsisagedus peaks olema vahemikus ${minPulss2} - ${maxPulss2}`);
            rl.close();
            break;
            case tüüp:3
            let minPulss3 = 206-(vanus*0.88) * 0.8;
            let maxPulss3 = 206-(vanus*0.88)* 0.78;
            console.log(`Pulsisagedus peaks olema vahemikus ${minPulss3} - ${maxPulss3}`);
            rl.close();
            break;
        
          
            default:console.log("Midagi läks valesti");
              break;
          }
        } 
      });
    });
});