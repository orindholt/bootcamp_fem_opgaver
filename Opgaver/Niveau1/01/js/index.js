document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#my-button");
    const colorArr = ["#eee", "#7f7"];
    let index = 1;
    
    button.addEventListener("click", () => {
        if(index == 0){
            button.style.backgroundColor = colorArr[0];
            index = 1;
        } else if(index == 1){
            button.style.backgroundColor = colorArr[1];
            index = 0;
        }
    });
});