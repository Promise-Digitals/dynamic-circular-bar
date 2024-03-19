let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let inputValue = document.getElementById("input-value");
let submitBtn = document.getElementById("submit-btn");

function count(){
    let progressValue = 0;
    let counting = inputValue.value;
    let progressEndValue = +counting;
    let speed = 60;
    if (counting <= 0  || counting > 100){
        progressValue = "";
    }else{
        let progress = setInterval(() =>{
            progressValue++;
            valueContainer.textContent = `${progressValue}%`;
            progressBar.style.background = `conic-gradient(#4f76f6 ${progressValue* 3.6}deg, #555 ${progressValue * 3.6}deg)`;
            if (progressValue == progressEndValue){
                clearInterval(progress);
            }
        }, speed);
    }
}
