const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* Liiklusseaduse järgi määratakse suurima lubatud sõidukiiruse ületamise korral hoiatustrahv, mille suurus eurodes saadakse lubatud sõidukiirust ületanud kilomeetrite arvu korrutamisel arvuga 3. Hoiatustrahvi maksimaalmäär on 190 eurot.
Koostada programm, mis

    küsib kasutajalt just sellises järjekorras nime (sõne), lubatud kiiruse (täisarvu) ja tegeliku kiiruse (täisarvu);
    arvutab trahvi vastavalt kasutajalt saadud andmetele ja ülaltoodud reeglitele;
    väljastab nime ja trahvi ekraanile.

Näiteks kui kasutaja sisestab vastustena Jürgen, 50 ja 60, siis väljastatakse Jürgen, kiiruse ületamise eest on teie trahv 30 eurot.

Selleks, et trahvi maksimaalmääraga arvestada saab kasutada funktsiooni min, millega saab leida mitmest väärtusest minimaalse. Näiteks min(190, esialgne_tulemus) väärtuseks on 190, kui muutuja esialgne_tulemus väärtus, mis on varem defineeritud, on suurem kui 190 (või võrdne 190).

Näiteks kui kasutaja sisestab vastustena Sal-Saller, 50 ja 172, siis väljastatakse Sal-Saller, kiiruse ületamise eest on teie trahv 190 eurot. Kiirust ületati 122 võrra ja esialgne arvutus näitab trahviks 366 eurot, aga see on üle maksimaalmäära. (Näide on inspireeritud laulust "Lähme sõidame", kus on "viiekümneses tsoonis meil sada seitsekümmend kaks on sees".)

Näide programmi tööst:

 */

rl.question("Sisestage oma nimi: ", nimi=> {
  rl.question("Sisestage lubatud kiirus: ", lubatud =>{
    rl.question("Sisestage tegelik kiirus", tegelik =>{
        let trahv = (tegelik - lubatud) * 3;
        trahv = Math.min(trahv, 190);
        console.log(`${nimi}, teie trahv on kiiruse ületamise eest ${trahv} eurot`);
        rl.close();
    });
  });
});