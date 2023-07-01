let arr = [0,1,2,3,4,5,6,7,8];
let turn = true;
let msg = document.getElementById("result");
let board = document.getElementById("board");

document.querySelectorAll("td").forEach(e => e.addEventListener("mouseenter",function() {
    if (turn === true) {
        e.style.backgroundColor = "#FFABAB";
        e.style.transition = "0.5s";
    }

    if(turn === false) {
        e.style.backgroundColor = "#8AECFF";
        e.style.transition = "0.5s";
    }
}));

document.querySelectorAll("td").forEach(e => e.addEventListener("mouseleave",function() {
    e.style.backgroundColor = "white";
    e.style.transition = "0.5s";
}));

function play(n) {
    if(turn && typeof arr[n] === "number") {
        arr[n] = "X";
        document.getElementById(n).innerHTML = "<img src=\"cross.svg\" width=\"50px\" height=\"50px\">";
        if (check()) { return; }
        turn = (!turn);
        msg.innerText = "Player 2 Turn";
    }

    if (turn === false && typeof arr[n] === "number") {
        arr[n] = "O";
        document.getElementById(n).innerHTML = "<img src=\"circle.png\" width=\"50px\" height=\"50px\">";
        check();
        if (check()) { return; }
        turn = (!turn);
        msg.innerText = "Player 1 Turn";
    };
}

function check() {
    // check Rows
    for(i=0; i<7; i+=3) {
        if( arr[i] === arr[i+1] && arr[i+1] === arr[i+2] ) {
            if(arr[i] === "X") {msg.innerText = "Player 1 wins !";}
            else {msg.innerText = "Player 2 wins !";}
            board.style.pointerEvents = "none";
            return true;
        }
    }

    // check Columns
    for(i=0; i<3; i++) {
        if( arr[i] === arr[i+3] && arr[i+3] === arr[i+6] ) {
            if(arr[i] === "X") {msg.innerText = "Player 1 wins !";}
            else {msg.innerText = "Player 2 wins !";}
            board.style.pointerEvents = "none";
            return true;
        }
    }

    // check Diagonals
    if( (arr[0] === arr[4] && arr[4] === arr[8]) || (arr[2] === arr[4] && arr[4] === arr[6]) ) {
        if(arr[0] === "X") {msg.innerText = "Player 1 wins !";}
        else {msg.innerText = "Player 2 wins !";}
        board.style.pointerEvents = "none";
        return true;
    }

    // check Tie
    if(arr.every(element => typeof element === "string")) {
        msg.innerText = "It's a Tie !";
        board.style.pointerEvents = "none";
        return true;
    }

    return false;
}

function resetGame() {
    msg.innerText = "Player 1 turn";
    board.style.pointerEvents = "auto";
    turn = true;
    for(i=0;i<9;i++) {
        arr[i] = i;
        document.getElementById(i).innerText = "";
    }
}