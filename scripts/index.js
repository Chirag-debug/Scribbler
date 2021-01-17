
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