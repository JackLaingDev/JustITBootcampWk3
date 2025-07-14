const circle = document.querySelector(".circle");
const main = document.querySelector("main");
const scare = document.getElementById('scare');
const h1 = document.querySelector('h1');

let dark = true;
circle.addEventListener('click', ()=>{
    if(dark){
        circle.classList.remove("circleDark");
        main.classList.remove("mainDark")

        circle.classList.add("circleLight");
        main.classList.add("mainLight")
        dark = false;

        circle.textContent = "Light Mode";
    } else if(!dark){
        circle.classList.remove("circleLight");
        main.classList.remove("mainLight")

        circle.classList.add("circleDark");
        main.classList.add("mainDark");
        dark = true;
        circle.textContent = "Dark Mode";
        
    }
})

scare.addEventListener('click', ()=>{
    h1.hidden = false;
})
