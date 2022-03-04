// variables

const difficulty = document.querySelector("#difficulty");

const grid = document.querySelector(".grid")
grid.style.display = "none";
let punteggio = document.querySelector(".punteggio");



//Button
let buttonPlay = document.querySelector("#play");
buttonPlay.addEventListener("click", play);


function play() {
    grid.innerHTML = "";
    grid.style.display = "flex";
    let difficultyValue = difficulty.value;
    let score = 0;
    let NumeriBombe = [];

    //Difficutly of the Game

    switch (difficultyValue) {

        case "Facile":
            score = 0;
            NumeriBombe = generazioneBombe(49);
            console.log(NumeriBombe);

            for (let times = 1; times <= 49; times++) {
                const ElementCell = document.createElement("div");
                ElementCell.classList.add("cell");
                ElementCell.classList.add("small");

                ElementCell.addEventListener("click", function () {

                    if (NumeriBombe.includes(times)) {
                        ElementCell.style.backgroundColor = "red";
                        if (alert("Hai Perso! Ma hai totalizzato" + " " + score + " " + "punti!")) { }

                        else {
                            ElementCell.style.backgroundColor = "red";
                            grid.style.display = "none";

                        }
                    }

                    else {


                        ElementCell.style.backgroundColor = "green";
                        score++;
                        punteggio.innerHTML = score;
                        ElementCell.style.pointerEvents = "none";

                    }


                });

                grid.append(ElementCell);

                ElementCell.innerHTML += times;

                if (punteggio.innerHTML == 49 - NumeriBombe) {
                    console.log(score);
                    alert("Hai vinto! Complimenti!");
                }
            }


            break;

        case "Medio":
            score = 0
            NumeriBombe = generazioneBombe(81);
            console.log(NumeriBombe);

            for (let times = 1; times <= 81; times++) {

                const ElementCell = document.createElement("div");
                ElementCell.classList.add("cell");
                ElementCell.classList.add("medium");

                ElementCell.addEventListener("click", function () {

                    if (NumeriBombe.includes(times)) {
                        ElementCell.style.backgroundColor = "red";
                        if (alert("Hai Perso! Ma hai totalizzato" + " " + score + " " + "punti!")) { }

                        else {
                            ElementCell.style.backgroundColor = "red";
                            grid.style.display = "none";

                        }
                    }

                    else {
                        ElementCell.style.backgroundColor = "green";
                        score++;
                        punteggio.innerHTML = score;
                        ElementCell.style.pointerEvents = "none";
                    }
                });

                grid.append(ElementCell);

                ElementCell.innerHTML += times;


            }

            break;

        case "Difficile":
            score = 0
            NumeriBombe = generazioneBombe(100);
            console.log(NumeriBombe);

            for (let times = 1; times <= 100; times++) {

                const ElementCell = document.createElement("div");
                ElementCell.classList.add("cell");
                ElementCell.classList.add("big");

                ElementCell.addEventListener("click", function () {

                    if (NumeriBombe.includes(times)) {
                        ElementCell.style.backgroundColor = "red";
                        if (alert("Hai Perso! Ma hai totalizzato" + " " + score + " " + "punti!")) {

                        }

                        else {
                            ElementCell.style.backgroundColor = "red";
                            grid.style.display = "none";


                        }
                    }

                    else {
                        ElementCell.style.backgroundColor = "green";
                        score++;
                        punteggio.innerHTML = score;
                        ElementCell.style.pointerEvents = "none";
                    }
                });

                grid.append(ElementCell);

                ElementCell.innerHTML += times;
            }

            break;
    }
}



//RandomNumbers

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Bombs

function generazioneBombe(caselle) {
    let arrBombs = []
    while (arrBombs.length < 16) {

        const numberRandom = randomNumber(1, caselle)

        if (arrBombs[numberRandom] == numberRandom) {

        } else {
            arrBombs.push(numberRandom);
        }
    }
    ;
    return arrBombs;
}
