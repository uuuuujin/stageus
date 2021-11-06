var timeStart;

var box0;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;

var color;

// gamestart버튼 누르면 숫자 0~9까지 랜덤으로 뜨고 스탑워치 시작함
function gameStart() {
    
    document.getElementById("gameEnd").style.display = 'none';
    

    // 시간 재기
    var nowTime = new Date().getTime();

    timeStart = setInterval(function() { //setInterval : 일정한 시간 간격으로 작업을 수행하기 위해서 사용
        var newTime = new Date().getTime();
        var result = new Date(newTime - nowTime); //result : 년도,월,일,시간,분,초,밀리초

        var min = result.getMinutes();
        if (min<10) {
            min = "0" + min;
        }

        var sec = result.getSeconds();
        if (sec<10) {
            sec = "0" + sec;
        }

        var milisec = Math.floor(result.getMilliseconds() / 10); //Math.floor : 반올림
        if (milisec<10) {
            milisec = "0" + milisec;
        }

        document.getElementById("time").innerText = min+":"+sec+":"+milisec;
    }, 100)



    //0~9 숫자 랜덤 생성
    var numbers = [];
    let i = 0;
    while (i < 10) {
        let n= Math.floor(Math.random() * 10);
        if (! sameNum(n)) {
            numbers.push(n);
            i++;
        }
    }
    function sameNum(n) {
        for (var i=0; i<numbers.length; i++) {
            if (n === numbers[i]) {
                return true;
            }
        }
        return false;
    }



    var var0 = document.getElementById("n0");
    var var1 = document.getElementById("n1");
    var var2 = document.getElementById("n2");
    var var3 = document.getElementById("n3");
    var var4 = document.getElementById("n4");
    var var5 = document.getElementById("n5");
    var var6 = document.getElementById("n6");
    var var7 = document.getElementById("n7");
    var var8 = document.getElementById("n8");
    var var9 = document.getElementById("n9");
    
 
    var randomNum;

    var0.innerText = numbers[0];
    var0.value = numbers[0];
    var1.innerText = numbers[1];
    var1.value = numbers[1];
    var2.innerText = numbers[2];
    var2.value = numbers[2];
    var3.innerText = numbers[3];
    var3.value = numbers[3];
    var4.innerText = numbers[4];
    var4.value = numbers[4];
    var5.innerText = numbers[5];
    var5.value = numbers[5];
    var6.innerText = numbers[6];
    var6.value = numbers[6];
    var7.innerText = numbers[7];
    var7.value = numbers[7];
    var8.innerText = numbers[8];
    var8.value = numbers[8];
    var9.innerText = numbers[9];
    var9.value = numbers[9];


    var0.ondragstart = function(event) {
        randomNum = var0.value;
    }
    var1.ondragstart = function(event) {
        randomNum = var1.value;
    }
    var2.ondragstart = function(event) {
        randomNum = var2.value;
    }
    var3.ondragstart = function(event) {
        randomNum = var3.value;
    }
    var4.ondragstart = function(event) {
        randomNum = var4.value;
    }
    var5.ondragstart = function(event) {
        randomNum = var5.value;
    }
    var6.ondragstart = function(event) {
        randomNum = var6.value;
    }
    var7.ondragstart = function(event) {
        randomNum = var7.value;
    }
    var8.ondragstart = function(event) {
        randomNum = var8.value;
    }
    var9.ondragstart = function(event) {
        randomNum = var9.value;
    }

    
    var grayColor = document.getElementById("color");
    var color = window.getComputedStyle(grayColor).backgroundColor;


    box0 = document.getElementById("box0");
    box0.ondragover = function(event) {
        event.preventDefault();
    }
    box0.ondrop = function(event){
        box0.innerText = randomNum;
        box0.value = randomNum;
        event.target.style.backgroundColor = color;
    }

    box1 = document.getElementById("box1");
    box1.ondragover = function(event) {
        event.preventDefault();
    }
    box1.ondrop = function(event){
        box1.innerText = randomNum; 
        box1.value = randomNum;
        event.target.style.backgroundColor = color;
    }

    box2 = document.getElementById("box2");
    box2.ondragover = function(event) {
        event.preventDefault();
    }
    box2.ondrop = function(event){
        box2.innerText = randomNum; 
        box2.value = randomNum;
        event.target.style.backgroundColor = color;
    }
    
    box3 = document.getElementById("box3");
    box3.ondragover = function(event) {
        event.preventDefault();
    }
    box3.ondrop = function(event){
        box3.innerText = randomNum; 
        box3.value = randomNum;
        event.target.style.backgroundColor = color;
    }
    
    box4 = document.getElementById("box4");
    box4.ondragover = function(event) {
        event.preventDefault();
    }
    box4.ondrop = function(event){
        box4.innerText = randomNum; 
        box4.value = randomNum;
        event.target.style.backgroundColor = color;
    }

    box5 = document.getElementById("box5");
    box5.ondragover = function(event) {
        event.preventDefault();
    }
    box5.ondrop = function(event){
        box5.innerText = randomNum; 
        box5.value = randomNum;
        event.target.style.backgroundColor = color;
    }

    box6 = document.getElementById("box6");
    box6.ondragover = function(event) {
        event.preventDefault();
    }
    box6.ondrop = function(event){
        box6.innerText = randomNum; 
        box6.value = randomNum;
        event.target.style.backgroundColor = color;
    }

    box7 = document.getElementById("box7");
    box7.ondragover = function(event) {
        event.preventDefault();
    }
    box7.ondrop = function(event){
        box7.innerText = randomNum; 
        box7.value = randomNum;
        event.target.style.backgroundColor = color;
    }

    box8 = document.getElementById("box8");
    box8.ondragover = function(event) {
        event.preventDefault();
    }
    box8.ondrop = function(event){
        box8.innerText = randomNum; 
        box8.value = randomNum;
        event.target.style.backgroundColor = color;
    }

    box9 = document.getElementById("box9");
    box9.ondragover = function(event) {
        event.preventDefault();
    }
    box9.ondrop = function(event){
        box9.innerText = randomNum; 
        box9.value = randomNum;
        event.target.style.backgroundColor = color;
    }


    function check() {
        if ((box0.value==0)&&(box1.value==1)&&(box2.value==2)&&(box3.value==3)&&(box4.value==4)&&(box5.value==5)&&
            (box6.value==6)&&(box7.value==7)&&(box8.value==8)&&(box9.value==9)) {
            clearInterval(timeStart);
            document.getElementById("gameEnd").style.display = 'block';
        }
    }
    
    function reset() {
        box0.value = null;
        box0.innerText = null;
        box0.style.backgroundColor = null;
        box1.value = null;
        box1.innerText = null;
        box1.style.backgroundColor = null;
        box2.value = null;
        box2.innerText = null;
        box2.style.backgroundColor = null;
        box3.value = null;
        box3.innerText = null;
        box3.style.backgroundColor = null;
        box4.value = null;
        box4.innerText = null;
        box4.style.backgroundColor = null;
        box5.value = null;
        box5.innerText = null;
        box5.style.backgroundColor = null;
        box6.value = null;
        box6.innerText = null;
        box6.style.backgroundColor = null;
        box7.value = null;
        box7.innerText = null;
        box7.style.backgroundColor = null;
        box8.value = null;
        box8.innerText = null;
        box8.style.backgroundColor = null;
        box9.value = null;
        box9.innerText = null;
        box9.style.backgroundColor = null;
    }
    


}


function reset() {
    box0.value = null;
    box0.innerText = null;
    box0.style.backgroundColor = null;
    box1.value = null;
    box1.innerText = null;
    box1.style.backgroundColor = null;
    box2.value = null;
    box2.innerText = null;
    box2.style.backgroundColor = null;
    box3.value = null;
    box3.innerText = null;
    box3.style.backgroundColor = null;
    box4.value = null;
    box4.innerText = null;
    box4.style.backgroundColor = null;
    box5.value = null;
    box5.innerText = null;
    box5.style.backgroundColor = null;
    box6.value = null;
    box6.innerText = null;
    box6.style.backgroundColor = null;
    box7.value = null;
    box7.innerText = null;
    box7.style.backgroundColor = null;
    box8.value = null;
    box8.innerText = null;
    box8.style.backgroundColor = null;
    box9.value = null;
    box9.innerText = null;
    box9.style.backgroundColor = null;
}

function check() {
    if ((box0.value==0)&&(box1.value==1)&&(box2.value==2)&&(box3.value==3)&&(box4.value==4)&&(box5.value==5)&&
        (box6.value==6)&&(box7.value==7)&&(box8.value==8)&&(box9.value==9)) {
        clearInterval(timeStart);
        document.getElementById("gameEnd").style.display = 'block';
    }
}

