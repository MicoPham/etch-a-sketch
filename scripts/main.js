const container = document.querySelector('.container');
const body = document.querySelector('body');

const div = document.createElement('div');
window.onload = function () {
    for (i = 0; i < 256; i++) {
      const div = document.createElement('div');
      div.textContent = '';
      container.appendChild(div);
    }
  }

container.addEventListener('mouseover', function (e) {
    e.target.style.background = 'black';
})

function clearcontent(elementID) {
    document.querySelector(elementID).innerHTML = "";
}

