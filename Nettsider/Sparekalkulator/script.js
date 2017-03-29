/*
var i = 1

while (i < 101) {
    document.getElementById("demo").innerHTML += i + ". Gabriel Bekkos" +"<br>";
    i++;
};



for (var i = 1; i < 10; i++) {
    document.getElementById("demo").innerHTML += i + ". Gabriel Bekkos" + "<br>";
}

*/

var result = document.getElementById("answer");

function sparing(num1, num2, num3) {
    return num1 * Math.pow((1 + num2/100), num3);
}

document.getElementById("utregning").onclick = function() {
    var num1 = Number(document.getElementById("startbeløp").value);
    var num2 = Number(document.getElementById("renter").value);
    var num3 = Number(document.getElementById("år").value);
    result.innerHTML = sparing(num1, num2, num3);
}

for (var i = "answer"; i < "num3"; i++) {
    document.getElementById("demo").innerHTML += i + ". Gabriel Bekkos" + "<br>";
}