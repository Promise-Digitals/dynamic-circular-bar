let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let inputValue = document.getElementById("input-value");
let submitBtn = document.getElementById("submit-btn");

function count(){
    let progressValue = 0;
    let counting = inputValue.value;
    let progressEndValue = +counting; //converting counting string to number...
    let speed = 100;
    if (counting <= 0  || counting > 100){
        progressValue = "";
    }else{
        let progress = setInterval(() =>{
            progressValue++;
            valueContainer.textContent = `${progressValue}%`;
            progressBar.style.background = `conic-gradient(#6660ff ${progressValue * 3.6}deg, #333 ${progressValue * 3.6}deg)`;
            if (progressValue == progressEndValue){
                clearInterval(progress);
            }
        }, speed);
    }
}
