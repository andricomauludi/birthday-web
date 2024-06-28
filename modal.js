// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("fade-in");
        document.querySelector(".modal-content").classList.add("slide-in");
    }, 10);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    document.querySelector(".modal-content").classList.remove("slide-in");
    document.querySelector(".modal-content").classList.add("slide-out");
    setTimeout(function() {
        modal.style.display = "none";
        modal.classList.remove("fade-out");
        document.querySelector(".modal-content").classList.remove("slide-out");
    }, 400);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");
        document.querySelector(".modal-content").classList.remove("slide-in");
        document.querySelector(".modal-content").classList.add("slide-out");
        setTimeout(function() {
            modal.style.display = "none";
            modal.classList.remove("fade-out");
            document.querySelector(".modal-content").classList.remove("slide-out");
        }, 400);
    }
}
