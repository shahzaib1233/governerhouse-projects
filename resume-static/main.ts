const toggleButtons = document.querySelectorAll<HTMLButtonElement>(".toggleButton");
const toggleSections = document.querySelectorAll<HTMLDivElement>(".toggleSection");

toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const section = toggleSections[index];
        if (section) {
            const sectionStyle = window.getComputedStyle(section);

            if (sectionStyle.display === "none") {
                section.style.display = "block";
                button.textContent = "Hide Info";
            } else {
                section.style.display = "none";
                button.textContent = "Show Info";
            }
        }
    });
});
