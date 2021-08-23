document.addEventListener("DOMContentLoaded", () => {

    function skjulElement(element){
        if(element != null){
            element.style.display = "none";
        }
    }

    function skjulElementViaCssSelector(cssSelector){
        const elementToHide = document.querySelector(cssSelector);
        skjulElement(elementToHide);
    }
    skjulElementViaCssSelector("#header-container h1");

});