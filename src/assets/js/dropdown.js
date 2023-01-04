const menu = document.getElementById('menu');
const table = document.querySelectorAll('table');

for (i=0; i < table.length; i++) {
    table[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

