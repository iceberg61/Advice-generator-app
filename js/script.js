let adviceID = document.getElementById('id')
let advice = document.getElementById('result');
let adviceBtn = document.getElementById('getData');

adviceBtn.addEventListener('click', getAdvice);

window.onload = ()=> {
    getAdvice();
}

function getAdvice() {
    let API_URL = "https://api.adviceslip.com/advice";

    fetch(API_URL).then(res => {
        return res.json();
    }).then(data => {
        adviceObject = data.slip;
        console.log(adviceObject);
        adviceID.innerHTML = `<p>Advice # ${adviceObject.id}</p>`
        advice.innerHTML = `<h3> ${adviceObject.advice}</h3>`
    }) 
}