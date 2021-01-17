function deleteCard(card) {
    var delCard = document.getElementById(card);
    var delModal = document.getElementById("delpost");
    var yesButton = document.getElementById("yesBtn");
    var noButton = document.getElementById("noBtn");
    delModal.style.display = "block";

    yesButton.onclick = function() {
        delCard.parentNode.removeChild(delCard);
        delModal.style.display = "none";
    }

    noButton.onclick = function() {
        delModal.style.display = "none";
    }
}