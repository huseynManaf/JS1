function fun1() {
    var x1 = document.getElementById("inp1").value;
    var x2 = document.getElementById("inp2").value;
    var total = parseInt(x1) + parseInt(x2);
    document.getElementById("result").innerHTML = total;
}
function fun2() {
    var x1 = document.getElementById("inp1").value;
    var x2 = document.getElementById("inp2").value;
    var total = parseInt(x2) - parseInt(x1);
    document.getElementById("result").innerHTML = total;
}
function fun3() {
    var x1 = document.getElementById("inp1").value;
    var x2 = document.getElementById("inp2").value;
    var total = parseInt(x1) * parseInt(x2);
    document.getElementById("result").innerHTML = total;
}
function fun4() {
    var x1 = document.getElementById("inp1").value;
    var x2 = document.getElementById("inp2").value;
    var total = parseInt(x2) / parseInt(x1);
    document.getElementById("result").innerHTML = total;
}
