const togglePassword = () => {
    const password = document.getElementById('password');
    const passwordBtn = document.getElementById('toggle-password');

    if (password.type === 'password') {
        password.type = 'text';
        passwordBtn.innerHTML = 'visibility';
    } else {
        password.type = 'password';
        passwordBtn.innerHTML = 'visibility_off';
    }
}

const countCharacters = () => {
    const description = document.getElementById('description');
    const characterCounter = document.getElementById('description-character-counter');

    let characters = description.value.length;
    let count = characters;

    characterCounter.textContent = `${count} / 1000`;
}

const toggleSelect = () => {
    const selectControl = document.getElementById('select-control');

    selectControl.classList.toggle('expanded');
}

const addSelectItems = (selectedItem) => {
    const selectDropdown = document.getElementById('select-items');
    const selectItems = [
        'Aldo Herrera', 'Alex Varela', 'Andres Garcia', 'Andres Figueroa',
        'Anne Brown', 'Anthony Saffier', 'Arena Edge', 'Arturo Garcia',
        'Bryan Ellis', 'Carlos Herrera', 'Chris Davidson', 'Christoph Waldburger',
        'Christopher Robison', 'David Robison', 'Flor Valverde', 'Flor Montes',
        'Hansel A', 'Jairo Campos', 'Jay Galvan', 'Jeff Claybrook',
        'John Robison', 'Jorge Gomez', 'Joseph Scafidi', 'Joshua Cranston',
        'Katherine Wolf', 'Marie Williams', 'Mary Knight', 'Micahel Hubbartt',
        'Mitchel Green', 'Randy Combs', 'Roberto Zeledon', 'Rolando Conejo',
        'Sussan Johnson', 'Taylor Wallace', 'Todd Bryant', 'Zaphine Dexmy'
    ];

    selectItems.forEach(item => {
        let isSelected = item == selectedItem ? 'selected' : '';
        let liTag = `<li class="${isSelected}" onclick="updateSelect(this)">${item}</li>`;

        selectDropdown.insertAdjacentHTML('beforeend', liTag);
    })
}

addSelectItems();

const updateSelect = (selected) => {
    const selectControl = document.getElementById('select-control');
    const selectElement = document.getElementById('select');

    addSelectItems(selected.innerText);

    selectControl.classList.remove('expanded');
    selectElement.firstElementChild.innerText = selected.innerText;
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
})