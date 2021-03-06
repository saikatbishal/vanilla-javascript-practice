const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffet',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry page'
];
//Store listItems
const listItems = [];
let dregStartIndex;
function createList()
{
    [...richestPeople].forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable ="true">
            <p class = "person-name">${person}</p>
            <i class = "fas fa-grip-lines"></i>
        </div>
        `;
        listItems.push(listItem);
        draggable_list.appendChild(list);
    })
    };