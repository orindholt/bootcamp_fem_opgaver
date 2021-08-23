document.addEventListener("DOMContentLoaded", () => {
    
    function skjulElement(element){
        if(element != null){
            element.forEach((element) =>{
                element.style.display = "none";
            });
        }
    }

    function skjulElementViaCssSelector(cssSelector){
        const elementToHide = document.querySelectorAll(cssSelector);
        skjulElement(elementToHide);
    }
    skjulElementViaCssSelector("#txt-container p");

});