console.log("Welcome to Tic-Tac-Toe");
let music = new Audio("background.mp3");
let pencil = new Audio("pencil.mp3");
let complete = new Audio("woo_hoo.mp3");
let win = new Audio("yay.mp3");
let turn = "X";
let gameover = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

//FUNCTION TO CHECK FOR A WIN
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 3, 5, 0],
        [3, 4, 5, 3, 15, 0],
        [6, 7, 8, 3, 25, 0],
        [0, 3, 6, -7, 15, 90],
        [1, 4, 7, 3, 15, 90],
        [2, 5, 8, 13, 15, 90],
        [0, 4, 8, 3, 15, 45],
        [2, 4, 6, 2, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won "
            gameover = true;
            win.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "90px"
            document.querySelector(".line").style.width = "25vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            pencil.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Add on-click listener to reset 
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = "";
    });
    turn = "X";
    gameover = false;
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})
