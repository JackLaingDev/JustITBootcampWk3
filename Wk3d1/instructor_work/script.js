const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const ul = document.querySelector('ul');

h1.textContent = "New text content";
p.style.color = "red";
p.style.backgroundColor = "blue";

ul.style.color = "green";

const newH2 = document.createElement('h2');
newH2.textContent = "This <h2> was created dyanmically with JS";

newH2.classList.add('newHeading');
document.body.appendChild(newH2);


const headingToRemove = document.querySelector('.newHeading');

headingToRemove.classList.remove('newHeading');
headingToRemove.remove(); 


const newImage = document.createElement('img');
newImage.src = 'img.jpg'; 
newImage.alt = 'A 150x150 placeholder image';
document.body.appendChild(newImage);

