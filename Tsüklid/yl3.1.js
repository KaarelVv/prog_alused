const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta mitu korda äratada: ", (korrad) => {
  for (let i = 0; i < korrad; i++) {
    console.log("Tõuse ja sära");
  }
  rl.close();
});

/* for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  } */
