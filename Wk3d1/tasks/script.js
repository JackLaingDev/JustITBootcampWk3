const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const ul = document.querySelector('ul');
const btn = document.getElementById('hideImg');
const addPara = document.getElementById('addPara');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counter = document.getElementById('counter');
const main = document.querySelector('main');

const buttons = document.getElementById('buttons');

const colButtons = document.getElementById('colButtons');

const mouseLocation = document.getElementById('mouseLocation');


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

const prevContent = h1.textContent;
let clicked = false;

btn.addEventListener('click', ()=>{
    if(!clicked){
        newImage.hidden = true;
        clicked = true;
    } else if(clicked){
        newImage.hidden = false;
        clicked = false;
    }
})


addPara.addEventListener('click', ()=>{
    const newPara = document.createElement('p');
    newPara.textContent = "TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ";
    document.body.appendChild(newPara);
})

count = 0;
minus.addEventListener('click', ()=>{
    count--;
    counter.textContent = count;
})

plus.addEventListener('click', ()=>{
    count++;
    counter.textContent = count;
})


buttons.addEventListener('click', (event)=>{
    let button = event.target;
    const text = button.textContent;

    switch(text){
        case "say hello": alert("hello"); break;
        case "say goodbye": alert("goodbye"); break;
        case "say welcome": alert("welcome"); break;
    }
})

colButtons.addEventListener('click', (event)=>{
    let button = event.target;
    const text = button.textContent;

    switch(text){
        case "red": colButtons.style.backgroundColor = "blue"; break;
        case "blue": colButtons.style.backgroundColor = "red"; break;
    }
})

mouseLocation.addEventListener('click', (event)=>{
    let x = event.clientX;
    let y = event.clientY;
    console.log(`X: ${x}\nY: ${y}`);
})