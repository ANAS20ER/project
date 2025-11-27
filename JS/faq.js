document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        const p = item.querySelector("p");
        p.style.display = p.style.display === "block" ? "none" : "block";
    });
});
