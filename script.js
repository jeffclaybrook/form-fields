const form = document.querySelector('form');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const description = document.querySelector('#description');
const togglePasswordBtn = document.querySelector('#toggle-password');
const characterCounter = document.querySelector('#description-character-counter');
const selectControl = document.querySelector('#select-control');
const selectEl = document.querySelector('#select');
const selectDropdown = document.querySelector('#select-items');
const selectItems = [
   'Aldo Herrera',
   'Alex Varela',
   'Andres Garcia',
   'Andres Figueroa',
   'Anne Brown',
   'Anthony Saffier',
   'Arena Edge',
   'Arturo Garcia',
   'Bryan Ellis',
   'Carlos Herrera',
   'Chris Davidson',
   'Christoph Waldburger',
   'Christopher Robison',
   'David Robison',
   'Flor Valverde',
   'Flor Montes',
   'Hansel A',
   'Jairo Campos',
   'Jay Galvan',
   'Jeff Claybrook',
   'John Robison',
   'Jorge Gomez',
   'Joseph Scafidi',
   'Joshua Cranston',
   'Katherine Wolf',
   'Marie Williams',
   'Mary Knight',
   'Micahel Hubbartt',
   'Mitchel Green',
   'Randy Combs',
   'Roberto Zeledon',
   'Rolando Conejo',
   'Sussan Johnson',
   'Taylor Wallace',
   'Todd Bryant'
];

togglePasswordBtn.addEventListener('click', togglePassword);
description.addEventListener('input', countCharacters);

form.addEventListener('submit', e => {
   e.preventDefault();
})

function togglePassword() {
   if (password.type === 'password') {
      password.type = 'text';
      togglePasswordBtn.innerHTML = 'visibility';
   } else {
      password.type = 'password';
      togglePasswordBtn.innerHTML = 'visibility_off';
   }
}

function countCharacters() {
   let characters = description.value.length;
   let counter = characters;
   characterCounter.textContent = `${counter} / 1000`;
}

function addItems(selectedItem) {
   selectDropdown.innerHTML = '';
   selectItems.forEach(selectItem => {
      let isSelected = selectItem == selectedItem ? 'selected' : '';
      let li = `<li onclick="updateText(this)" class="${isSelected}">${selectItem}</li>`;
      selectDropdown.insertAdjacentHTML('beforeend', li);
   })
}

addItems();

function updateText(selectedLi) {
   addItems(selectedLi.innerText);
   selectControl.classList.remove('expanded');
   selectEl.firstElementChild.innerText = selectedLi.innerText;
}

selectEl.addEventListener('click', () => {
   selectControl.classList.toggle('expanded');
})

window.addEventListener('click', e =>
   e.target == selectDropdown ?
   selectDropdown.classList.remove('expanded') :
false);