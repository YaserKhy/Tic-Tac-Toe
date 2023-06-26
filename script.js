let arr = [0,1,2,3,4,5,6,7,8];
let turn = true;

function play(n) {
    if(turn && typeof arr[n] === "number") {
        arr[n] = "X";
        document.getElementById(n).style.color = "red";
        document.getElementById(n).innerText = "X";
        if(check()) {
            document.getElementById("board").style.pointerEvents = "none";
            return;
        };
        turn = (!turn);
    }
    if (turn === false && typeof arr[n] === "number") {
        arr[n] = "O";
        document.getElementById(n).style.color = "blue";
        document.getElementById(n).innerText = "O";
        if(check()) {
            document.getElementById("board").style.pointerEvents = "none";
            return;
        };
        turn = (!turn);
    };
}

function check() {
    // check rows
    for(i=0; i<7; i+=3) {
        if( arr[i] === arr[i+1] && arr[i+1] === arr[i+2] ) {
            if(arr[i] === "X") console.log("X wins");
            else {console.log("O wins")}
            return true;
        }
    }

    // check columns
    for(i=0; i<3; i++) {
        if( arr[i] === arr[i+3] && arr[i+3] === arr[i+6] ) {
            if(arr[i] === "X") console.log("X wins");
            else {console.log("O wins")}
            return true;
        }
    }

    // check left diagonal
    if( arr[0] === arr[4] && arr[4] === arr[8]) {
        if(arr[0] === "X") console.log("X wins");
        else {console.log("O wins")}
        return true;
    }

    // check right diagonal
    if( arr[2] === arr[4] && arr[4] === arr[6] ) {
        if(arr[2] === "X") console.log("X wins");
        else {console.log("O wins")}
        return true;
    }

    return false;
}