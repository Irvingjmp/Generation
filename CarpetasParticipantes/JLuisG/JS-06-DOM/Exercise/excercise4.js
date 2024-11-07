// Exercise #4

// Select the section with a container id without using querySelector.
const container1 = document.getElementById('container');
console.log(container1);

// Select the section with a container id using querySelector.
const container2 = document.querySelector('#container');

// Select all the items list with a class of "second".
const secondItems = document.getElementsByClassName('second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdItemInOl = document.querySelector('ol .third');

// Give the text "Hello!" to the section with a container id.
container1.textContent = '¡Hello!';

// Add the main class to the div with a footer class.
const footer = document.querySelector('.footer');
footer.classList.add('principal');

// Remove the main class on the div with a footer class.
footer.classList.remove('principal');

// Create a new li element. Give the li the text "four".
const newLi = document.createElement('li');
newLi.textContent = 'four';

// Append the li to the ul element.
const ul = container1.querySelector('ul');
ul.appendChild(newLi);

// Challenge Yourself:
// Add on to Exercise #4: Loop over all the li inside the ol tag and give them a background "green" color.
const olItems = document.querySelectorAll('ol li');
olItems.forEach(item => {
    item.style.backgroundColor = 'green';
});

// Remove the div with a footer class.
footer.remove();
