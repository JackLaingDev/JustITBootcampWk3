
const API_URL = "http://api.quotable.io/random";

const quoteBtn = document.querySelector('#quoteBtn');
const quoteTxt = document.querySelector('#quote');

const getQuote = () =>{
    let quote = "";
    fetch(API_URL).then(response=>{
        return response.json();
    }).then(data =>{

        quote = data.content;
        quoteTxt.textContent = quote;
        return quote;
    }).catch(error =>{
        console.log(`Error: ${error}`);
    })
}

quoteBtn.addEventListener('click', ()=>{
    getQuote();
})