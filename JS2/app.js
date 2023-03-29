var date = new Date();
var hour = date.getHours();
var bgcolor1 = document.getElementById('color')

if (hour >= 7 && hour <= 12) {
    bgcolor1.style.backgroundColor="blue"
    alert("sabah")
}


else if (hour >= 18 && hour <= 23) {
    bgcolor1.style.backgroundColor="black"
    alert("Axsam")
}
else {
    bgcolor1.style.backgroundColor="yellow"
    alert("Gunorta")
}