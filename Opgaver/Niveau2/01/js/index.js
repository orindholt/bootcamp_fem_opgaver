document.addEventListener("DOMContentLoaded", () => {
    const buttonContainer = document.querySelector("#buttons");
    const buttons = document.querySelectorAll("button");
    
    buttonContainer.addEventListener("click", (event)=>{
        if(event.target.localName == "button"){
            buttons.forEach(btn => btn.removeAttribute("style"));
            event.target.style.backgroundColor = "#7f7";
        }
    });
});