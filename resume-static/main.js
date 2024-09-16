var toggleButtons = document.querySelectorAll(".toggleButton");
var toggleSections = document.querySelectorAll(".toggleSection");
toggleButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        var section = toggleSections[index];
        if (section) {
            var sectionStyle = window.getComputedStyle(section);
            if (sectionStyle.display === "none") {
                section.style.display = "block";
                button.textContent = "Hide Info";
            }
            else {
                section.style.display = "none";
                button.textContent = "Show Info";
            }
        }
    });
});
