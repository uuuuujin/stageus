
var numbers = []; 
let i = 0;
while (i < 9) {
    let n = Math.ceil(Math.random() * 9);
    if (! sameNum(n)) {
        numbers.push(n);
        i++;
    }
}
function sameNum(n) {
    for (var k=0; k<numbers.length; k++) {
        if (n === numbers[k]) {
            return true;
        }
    }
    return false;
}
for (var k=0; k<numbers.length; k++){
    if (numbers[k]===9){
        numbers[k] = '';
    }
}





