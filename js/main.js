// variables

const difficulty = document.querySelector("#difficulty");

const grid = document.querySelector(".grid")
grid.style.display = "none";



//Button
let buttonPlay = document.querySelector("#play");
buttonPlay.addEventListener("click", play);


function play() {
    grid.innerHTML = ""
    grid.style.display = "flex";
    let difficultyValue = difficulty.value;
    let score = 0;
    let NumeriBombe = 0;

    //Difficutly of the Game

    switch (difficultyValue) {

        case "Facile":
            score = 0
            NumeriBombe = generazioneBombe(49);
            console.log(NumeriBombe);
            arrCells = [];

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
                        ElementCell.style.pointerEvents = "none";
                    }
                });

                grid.append(ElementCell);

                ElementCell.innerHTML += times;
            }

            break;

        case "Medio":
            score = 0
            NumeriBombe = generazioneBombe(81);
            console.log(NumeriBombe);
            arrCells = [];

            for (let times = 1; times <= 81; times++) {

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
            arrCells = [];

            for (let times = 1; times <= 100; times++) {

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
        console.log(numberRandom)

        if (arrBombs[numberRandom] == numberRandom) {

        } else {
            arrBombs.push(numberRandom);
            console.log(numberRandom);
        }
    }
    return arrBombs;
}