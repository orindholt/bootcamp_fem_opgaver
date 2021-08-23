document.addEventListener("DOMContentLoaded", () => {
    function skjulElementViaCssSelector(cssSelector){
        const elementToHide = document.querySelector(cssSelector);
        elementToHide.style.display = "none";
    }
    skjulElementViaCssSelector("#header-container h1");
});