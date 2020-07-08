const btn1 = document.getElementById('button1');
btn1.addEventListener('click', number);
const btn2 = document.getElementById('button2');
btn2.addEventListener('click', year);

const numInput = document.getElementById('numberInput');
const yearInput = document.getElementById('yearInput');
const fact = document.querySelector('#fact');
const factText = document.querySelector('#factText');

numInput.addEventListener('input', getNumFact);
yearInput.addEventListener('input', getYearFact);

function number(e) {
    numInput.style.display = 'block';
    btn2.style.display = 'none';
    btn1.style.display = 'none';

}
function year(e) {
    yearInput.style.display = 'block';
    btn2.style.display = 'none';
    btn1.style.display = 'none';

}

function getNumFact() {
    let number = numInput.value;

    if(number != ''){
        fetch(`http://numbersapi.com/${number}`)
        .then(response => response.text())
        .then(data => {
            fact.style.display = 'block';
            factText.innerHTML = data;
        })
        .catch(err => console.log(err));
    }
}

function getYearFact() {
    let number = yearInput.value;

    if(number != ''){
        fetch(`http://numbersapi.com/${number}/year`)
        .then(response => response.text())
        .then(data => {
            fact.firstElementChild.textContent = 'Year Fact';
            fact.style.display = 'block';
            factText.innerHTML = data;
        })
        .catch(err => console.log(err));
    }
}




