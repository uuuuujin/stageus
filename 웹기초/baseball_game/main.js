// 세 숫자 변수 생성
var var1 = document.getElementById("first");
var var2 = document.getElementById("second");
var var3 = document.getElementById("third");


// 난수생성 function
var number = [];

function getRandom() {
    number[0] = Math.floor(Math.random() * 9) + 1;
    do {
        number[1] = Math.floor(Math.random() * 9) + 1;
    } while(number[1] === number[0])
    do {
        number[2] = Math.floor(Math.random() * 9) + 1;
    } while(number[2]===number[0] || number[2]===number[1])
    console.log(number);

    var1 = null;
    var2 = null;
    var3 = null;
    document.getElementById("first").innerText = null;
    document.getElementById("second").innerText = null;
    document.getElementById("third").innerText = null;

    document.getElementById("strike_cnt").innerText = 0;
    document.getElementById("ball_cnt").innerText = 0;
    document.getElementById("gameStart").innerText = "게임시작!"



}

// 지우기 function
function remove() {
    var1 = null;
    var2 = null;
    var3 = null;
    document.getElementById("first").innerText = null;
    document.getElementById("second").innerText = null;
    document.getElementById("third").innerText = null;
    document.getElementById("strike_cnt").innerText = 0;
    document.getElementById("ball_cnt").innerText = 0;
}

// 게임 플레이 function
function play() {

    var strike = 0;
    var ball = 0;

    var inputNum = [var1, var2, var3];
    for(var m=0 ; m<3; m++){
        if(inputNum[m] == number[m])
        strike++;

        for(var n=0 ; n<3; n++){
            if((m!=n) && (inputNum[m]==number[n])){
                ball++;
            }
        }
    }

    if(strike===3){
        document.getElementById("gameStart").innerText = "게임종료!"
    }

    document.getElementById("strike_cnt").innerText = strike;
    document.getElementById("ball_cnt").innerText = ball;
}


// keypad function
function one() {
    if (var1 === null) {
        document.getElementById("first").innerText = 1;
        var1 = 1;
    } else if ((var2===null) && (var1!=1)) {
        document.getElementById("second").innerText = 1;
        var2 = 1;
    } else if ((var3===null)&&(var1!=1)&&(var2!=1)) {
        document.getElementById("third").innerText = 1;
        var3 = 1;
    }
}

function two() {
    if (var1 === null) {
        document.getElementById("first").innerText = 2;
        var1 = 2;
    } else if ((var2===null) && (var1!=2)) {
        document.getElementById("second").innerText = 2;
        var2 = 2;
    } else if ((var3===null)&&(var1!=2)&&(var2!=2)) {
        document.getElementById("third").innerText = 2;
        var3 = 2;
    }
}

function three() {
    if (var1 === null) {
        document.getElementById("first").innerText = 3;
        var1 = 3;
    } else if ((var2===null) && (var1!=3)) {
        document.getElementById("second").innerText = 3;
        var2 = 3;
    } else if ((var3===null)&&(var1!=3)&&(var2!=3)) {
        document.getElementById("third").innerText = 3;
        var3 = 3;
    }
}

function four() {
    if (var1 === null) {
        document.getElementById("first").innerText = 4;
        var1 = 4;
    } else if ((var2===null) && (var1!=4)) {
        document.getElementById("second").innerText = 4;
        var2 = 4;
    } else if ((var3===null)&&(var1!=4)&&(var2!=4)) {
        document.getElementById("third").innerText = 4;
        var3 = 4;
    }
}

function five() {
    if (var1 === null) {
        document.getElementById("first").innerText = 5;
        var1 = 5;
    } else if ((var2===null) && (var1!=5)) {
        document.getElementById("second").innerText = 5;
        var2 = 5;
    } else if ((var3===null)&&(var1!=5)&&(var2!=5)) {
        document.getElementById("third").innerText = 5;
        var3 = 5;
    }
}

function six() {
    if (var1 === null) {
        document.getElementById("first").innerText = 6;
        var1 = 6;
    } else if ((var2===null) && (var1!=6)) {
        document.getElementById("second").innerText = 6;
        var2 = 6;
    } else if ((var3===null)&&(var1!=6)&&(var2!=6)) {
        document.getElementById("third").innerText = 6;
        var3 = 6;
    }
}

function seven() {
    if (var1 === null) {
        document.getElementById("first").innerText = 7;
        var1 = 7;
    } else if ((var2===null) && (var1!=7)) {
        document.getElementById("second").innerText = 7;
        var2 = 7;
    } else if ((var3===null)&&(var1!=7)&&(var2!=7)){
        document.getElementById("third").innerText = 7;
        var3 = 7;
    }
}

function eight() {
    if (var1 === null) {
        document.getElementById("first").innerText = 8;
        var1 = 8;
    } else if ((var2===null) && (var1!=8)) {
        document.getElementById("second").innerText = 8;
        var2 = 8;
    } else if ((var3===null)&&(var1!=8)&&(var2!=8)){
        document.getElementById("third").innerText = 8;
        var3 = 8;
    }
}

function nine() {
    if (var1 === null) {
        document.getElementById("first").innerText = 9;
        var1 = 9;
    } else if ((var2===null) && (var1!=9)) {
        document.getElementById("second").innerText = 9;
        var2 = 9;
    } else if ((var3===null)&&(var1!=9)&&(var2!=9)){
        document.getElementById("third").innerText = 9;
        var3 = 9;
    }
}

