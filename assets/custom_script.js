// (Optional) Active an item if it has the class "is-active"
document.querySelectorAll(".accordion > .accordion-item.is-active").forEach(item => {
    item.querySelector(".accordion-panel").style.display = "block";
});

document.querySelectorAll(".accordion > .accordion-item").forEach(item => {
    item.addEventListener("click", function () {
        // Cancel the siblings
        document.querySelectorAll(".accordion > .accordion-item").forEach(sibling => {
            if (sibling !== this) {
                sibling.classList.remove("is-active");
                sibling.querySelector(".accordion-panel").style.display = "none";
            }
        });
        // Toggle the item
        this.classList.toggle("is-active");
        const panel = this.querySelector(".accordion-panel");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// Disable click of description panel
document.querySelectorAll('.accordion .accordion-panel').forEach(panel => {
    panel.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});
