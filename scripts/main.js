const container = document.querySelector('.container');

document.body.style.setProperty('--answer', answer);

var answer = 16;
grids(answer);

function grids (number) {
    for (i = 0; i < number ** 2; i++) {       
        const div = document.createElement('div');
        document.body.style.setProperty('--answer', answer);
        container.appendChild(div);       
    }
}

function clear () {
    container.innerHTML = "";
}

function askNumber () {
    var question = Number(prompt("Enter a number between 4 to 100 for grid size", ""));
    if (question >= 4 && question <= 100) {
        answer = question;
        return answer;
    } else {
        alert('try again');
    }
}

container.addEventListener('mouseover', function (e) {
    e.target.style.background = 'black';
})

const body = document.querySelector('body');
const btn = document.createElement('button');
btn.textContent = `New Grid`;
body.prepend(btn);
btn.addEventListener('click', () => {
    clear();
    grids(askNumber());
})