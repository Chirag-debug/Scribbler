function deleteCard(card) {
    var delCard = document.getElementById(card);
    var delModal = document.getElementById("delpost");
    var yesButton = document.getElementById("yesBtn");
    var noButton = document.getElementById("noBtn");
    var closeDialog = document.getElementById("close-dialog");
    delModal.style.display = "block";

    yesButton.onclick = function() {
        delCard.parentNode.removeChild(delCard);
        delModal.style.display = "none";
    }

    noButton.onclick = function() {
        delModal.style.display = "none";
    }

    closeDialog.onclick = function() {
        delModal.style.display = "none";
    }
}