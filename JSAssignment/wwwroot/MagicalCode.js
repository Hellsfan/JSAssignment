// Please have mercy on me. I know this code is very messy, but I struggled for days with this assignment
// I overestimated JS and Front-end. It is really really hard.
// I admit I did use a little bit of help from google, but please spare my life <3

const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const PlayerSpace = document.getElementById("PlayersSpace");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const winnerScreen = document.querySelector(".winner");

const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");

const menu = document.getElementById("menu");
const sizeButton = document.getElementById("size");
const playerButton = document.getElementById("players");
const imageButton = document.getElementById("images");
const variants = document.querySelectorAll(".variants");
const sizeButtons = document.querySelectorAll("#size .variants .btn");
const playerButtons = document.querySelectorAll("#players .variants .btn");
const imageButtons = document.querySelectorAll("#images .variants .btn");
var currColor = "linear-gradient(0deg, rgba(33,97,40,1) 0%, rgba(32,209,69,1) 100%)";

let chosenSize = 0;
let ChosenPlayers = 0;
let ChosenSet = 0;
var width;
var height;
let deck;
let interval;
let firstCard = false;
let secondCard = false;



sizeButton.addEventListener("mouseover", changeColour = () => {
    if (variants[0].classList.contains("hide")) {
        menu.style.background = "linear-gradient(0deg, rgba(97,33,33,1) 0%, rgba(209,32,32,1) 100%)";
    }
});
sizeButton.addEventListener("mouseout", changeColour = () => {
    menu.style.background = currColor;
});
sizeButton.addEventListener("click", () => {

    sizeButton.style.paddingBottom += 100 + "px";
    sizeButton.style.paddingRight += 150 + "px";
    sizeButton.style.paddingLeft += 150 + "px";
    sizeButton.style.cursor = "default";
    if (variants[0].classList.contains("hide")) {
        menu.style.background = "linear-gradient(0deg, rgba(97,33,33,1) 0%, rgba(209,32,32,1) 100%)";
        currColor = "linear-gradient(0deg, rgba(97,33,33,1) 0%, rgba(209,32,32,1) 100%)";
    }
    variants[0].classList.add("active");
    variants[0].classList.remove("hide");

});

startButton.addEventListener("click", () => {

});

playerButton.addEventListener("mouseover", () => {
    if (variants[1].classList.contains("hide")) {
        menu.style.background = "linear-gradient(0deg, rgba(30,49,89,1) 0%, rgba(73,10,227,1) 100%)";
    }
});
playerButton.addEventListener("mouseout", () => {
    menu.style.background = currColor;
});
playerButton.addEventListener("click", () => {

    playerButton.style.paddingBottom += 100 + "px";
    playerButton.style.paddingRight += 250 + "px";
    playerButton.style.paddingLeft += 250 + "px";
    playerButton.style.cursor = "default";
    if (variants[1].classList.contains("hide")) {
        menu.style.background = "linear-gradient(0deg, rgba(30,49,89,1) 0%, rgba(73,10,227,1) 100%)";
        currColor = "linear-gradient(0deg, rgba(30,49,89,1) 0%, rgba(73,10,227,1) 100%)";
    }
    variants[1].classList.add("active");
    variants[1].classList.remove("hide");


});

imageButton.addEventListener("mousemove", () => {
    if (variants[2].classList.contains("hide")) {
        menu.style.background = "linear-gradient(90deg, rgba(134,148,44,1) 0%, rgba(213,198,0,1) 100%)";
    }
});
imageButton.addEventListener("mouseout", () => {
    menu.style.background = currColor;
});
imageButton.addEventListener("click", () => {
    imageButton.style.paddingBottom += 100 + "px";
    imageButton.style.paddingRight += 200 + "px";
    imageButton.style.paddingLeft += 200 + "px";
    imageButton.style.cursor = "default";
    if (variants[2].classList.contains("hide")) {
        menu.style.background = "linear-gradient(90deg, rgba(134,148,44,1) 0%, rgba(213,198,0,1) 100%)";
        currColor = "linear-gradient(90deg, rgba(134,148,44,1) 0%, rgba(213,198,0,1) 100%)";
    }
    variants[2].classList.add("active");
    variants[2].classList.remove("hide");
});

sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (chosenSize) {
            chosenSize.classList.remove("pressed");
            chosenSize = button;
            button.classList.add("pressed");
        }
        else {
            chosenSize = button;
            button.classList.add("pressed");
        }
    });
});
playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (ChosenPlayers) {
            ChosenPlayers.classList.remove("pressed");
            ChosenPlayers = button;
            button.classList.add("pressed");
        }
        else {
            ChosenPlayers = button;
            button.classList.add("pressed");
        }
    });
});
imageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (ChosenSet) {
            ChosenSet.classList.remove("pressed");
            ChosenSet = button;
            button.classList.add("pressed");
            console.log
        }
        else {
            ChosenSet = button;
            button.classList.add("pressed");
        }
    });
});

const Lands = [
    { name: "A1", image: "Art/Lands/A1.jpg" },
    { name: "A2", image: "Art/Lands/A2.jpg" },
    { name: "A3", image: "Art/Lands/A3.jpg" },
    { name: "A4", image: "Art/Lands/A4.jpg" },
    { name: "A5", image: "Art/Lands/A5.jpg" },
    { name: "A6", image: "Art/Lands/A6.jpg" },
    { name: "A7", image: "Art/Lands/A7.jpg" },
    { name: "A8", image: "Art/Lands/A8.jpg" },
    { name: "A9", image: "Art/Lands/A9.jpg" },
    { name: "A10", image: "Art/Lands/A10.jpg" },
];

const Artefacts = [
    { name: "A1", image: "Art/Artefacts/B1.jpg" },
    { name: "A2", image: "Art/Artefacts/B2.jpg" },
    { name: "A3", image: "Art/Artefacts/B3.jpg" },
    { name: "A4", image: "Art/Artefacts/B4.jpg" },
    { name: "A5", image: "Art/Artefacts/B5.jpg" },
    { name: "A6", image: "Art/Artefacts/B6.jpg" },
    { name: "A7", image: "Art/Artefacts/B7.jpg" },
    { name: "A8", image: "Art/Artefacts/B8.jpg" },
    { name: "A9", image: "Art/Artefacts/B9.jpg" },
    { name: "A10", image: "Art/Artefacts/B10.jpg" },
];

const Planeswalkers = [
    { name: "A1", image: "Art/Planeswalkers/C1.jpg" },
    { name: "A2", image: "Art/Planeswalkers/C2.jpg" },
    { name: "A3", image: "Art/Planeswalkers/C3.jpg" },
    { name: "A4", image: "Art/Planeswalkers/C4.jpg" },
    { name: "A5", image: "Art/Planeswalkers/C5.jpg" },
    { name: "A6", image: "Art/Planeswalkers/C6.jpg" },
    { name: "A7", image: "Art/Planeswalkers/C7.jpg" },
    { name: "A8", image: "Art/Planeswalkers/C8.jpg" },
    { name: "A9", image: "Art/Planeswalkers/C9.jpg" },
    { name: "A10", image: "Art/Planeswalkers/C10.jpg" },
];

let seconds = 0,
    minutes = 0;
let movesCount = 0,
    winCount = 0;

const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

const generateRandom = (width, height) => {

    let Set;
    if (ChosenSet.value == 0) {
        Set = [...Lands];
    } else if (ChosenSet.value == 1) {
        Set = [...Artefacts];
    } else if (ChosenSet.value == 2) {
        Set = [...Planeswalkers];
    }

    let cardValues = [];
    size = (width * height) / 2;
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * Set.length);
        cardValues.push(Set[randomIndex]);
        Set.splice(randomIndex, 1);
    }
    return cardValues;
};

const MagicGenerator = (cardValues, width, height) => {
    let currentPlayer = 1;
    let PlayerAmount;
    let Scores;
    if (ChosenPlayers.value == 0) {
        PlayerAmount = 1;
        scores = [0]
    } else if (ChosenPlayers.value == 1) {
        PlayerAmount = 2;
        scores = [0, 0]
    } else if (ChosenPlayers.value == 2) {
        PlayerAmount = 3;
        scores = [0, 0, 0]
    } else if (ChosenPlayers.value == 3) {
        PlayerAmount = 4;
        scores = [0, 0, 0, 0];
    }


    PlayerSpace.innerHTML = `<p class="player">Player: 1</p>`;
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    cardValues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < width * height; i++) {

        gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before"></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image" width="90px" height="90px"/></div>
     </div>
     `;
    }
    gameContainer.style.gridTemplateColumns = `repeat(${width},auto)`;

    deck = document.querySelectorAll(".card-container");
    deck.forEach((card) => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("matched")) {
                card.classList.add("flipped");
                if (!firstCard) {
                    firstCard = card;
                    firstCardValue = card.getAttribute("data-card-value");
                } else {
                    movesCounter();
                    secondCard = card;
                    let secondCardValue = card.getAttribute("data-card-value");
                    if (firstCardValue == secondCardValue) {
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
                        scores[currentPlayer - 1] += 1;
                        firstCard = false;
                        winCount += 1;
                        let bestScore = 0;
                        let winner;
                        if (winCount == Math.floor(cardValues.length / 2)) {
                            for (var i = 0; i < scores.length; i++) {
                                if (scores[i] > bestScore) bestScore = scores[i];
                            }
                            winner = scores.indexOf(bestScore);
                            winnerScreen.innerHTML = `<h2 "">Player: ${winner + 1} WINS GG!!!</h2>
            <h4>Moves: ${movesCount}</h4>`;
                        }
                    } else {
                        let [tempFirst, tempSecond] = [firstCard, secondCard];
                        firstCard = false;
                        secondCard = false;
                        let delay = setTimeout(() => {
                            tempFirst.classList.remove("flipped");
                            tempSecond.classList.remove("flipped");
                            currentPlayer++;
                            if (currentPlayer - 1 == PlayerAmount) {
                                currentPlayer = 1;
                            }
                            var player = document.querySelector(".player");
                            player.innerHTML = `Player: ${currentPlayer}`;
                        }, 900);

                    }
                }
            }
        });
    });
};

startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
    interval = setInterval(timeGenerator, 1000);
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
    initializer();
});

stopButton.addEventListener(
    "click",
    (stopGame = () => {
        controls.classList.remove("hide");
        stopButton.classList.add("hide");
        startButton.classList.remove("hide");
        clearInterval(interval);
    })
);

const initializer = () => {
    if (chosenSize.value == 0) {
        width = 3;
        height = 4;
    } else if (chosenSize.value == 1) {
        width = 4;
        height = 4;
    } else if (chosenSize.value == 2) {
        width = 5;
        height = 4;
    }
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom(width, height);
    console.log(cardValues);
    MagicGenerator(cardValues, width, height);
};