document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#buttons button");

    buttons.forEach(btnElement =>{
        btnElement.addEventListener("click", (event)=>{
            for(let i = 0; i<buttons.length; i++){
                buttons[i].style.backgroundColor = "#eee";
            }
            event.target.style.backgroundColor = "#7f7";
        });

    });
});