var modalSU = document.getElementById("signUpModal");
var btnSU = document.getElementById("signUp");
var closeSU = document.getElementsByClassName("closeSU")[0];

btnSU.onclick = function() {
    modalSU.style.display = "block";
}

closeSU.onclick = function() {
    modalSU.style.display = "none";
}