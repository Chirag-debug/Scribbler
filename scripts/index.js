/* Sign Up Modal */
var modalSU = document.getElementById("signUpModal");
var btnSU = document.getElementById("signUp");
var closeSU = document.getElementById("closeSU");

btnSU.onclick = function() {
    modalSU.style.display = "block";
}

closeSU.onclick = function() {
    modalSU.style.display = "none";
}

/* Sign In Modal */
var modalSI = document.getElementById("signInModal");
var btnSI = document.getElementById("signIn");
var closeSI = document.getElementById("closeSI");

btnSI.onclick = function() {
    modalSI.style.display = "block";
}

closeSI.onclick = function() {
    modalSI.style.display = "none";
}

var SUlink = document.getElementById("linkSU");

/* Sign Up Link*/
SUlink.onclick = function() {
    modalSI.style.display = "none";
    modalSU.style.display = "block";
}

/* Create Post Modal */
var modalCP = document.getElementById("createPostModal");
var btnCP = document.getElementById("bodyBtn2");
var closeCP = document.getElementById("closeCP");

btnCP.onclick = function () {
    modalCP.style.display = "block";
}
closeCP.onclick = function () {
    modalCP.style.display = "none";
}