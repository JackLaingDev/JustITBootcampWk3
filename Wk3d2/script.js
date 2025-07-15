// Feed
const feed = document.querySelector('#feed');

// Quote form
const quoteForm = document.querySelector('#quoteForm');
const quoteInput = document.querySelector('#quote');
const quoteSubmit = document.querySelector('#quoteSubmit');

// Image form
const imageForm = document.querySelector('#imgForm');
const imageInput = document.querySelector('#imageInput');
const imageText = document.querySelector('#image_text');
const imageUpload = document.querySelector('#imageUpload');

// Delete and warnings
const deletePost = document.querySelector('#delete');
const deleteWarning = document.querySelector('#warning');

let quoteId = 1;
let imageId = 1;

class QuotePost{

    constructor(quote_text){
        this.quote_text = quote_text;
        this.id = quoteId;
        quoteId++;
    }

    post(){
        const new_div = document.createElement('div');
        const new_h2 = document.createElement('h2');
        const new_p = document.createElement('p');

        new_h2.textContent = `Quote Post: ${this.id}`;
        new_p.textContent = this.quote_text;

        new_div.appendChild(new_h2);
        new_div.appendChild(new_p);

        new_div.classList.add('align-center');
        new_div.classList.add('raised-box');
        new_div.classList.add('post');

        feed.appendChild(new_div);
    }
}

class ImagePost{

    constructor(image, image_text){
        this.image = image;
        this.image_text = image_text;
        this.id = imageId;
        imageId++;
    }

    post(){
        const new_div = document.createElement('div');
        const new_h2 = document.createElement('h2');
        const new_img = document.createElement('img')
        const new_p = document.createElement('p');

        const reader = new FileReader();

        reader.onload = () =>{
            new_h2.textContent = `Image Post: ${this.id}`;
            new_img.src = reader.result;
            new_p.textContent = this.image_text;

            new_div.appendChild(new_h2);
            new_div.appendChild(new_img);
            new_div.appendChild(new_p);
            
            new_div.classList.add('align-center');
            new_div.classList.add('raised-box');
            new_div.classList.add('post');

            feed.appendChild(new_div);
        }

        reader.readAsDataURL(this.image);
    }
}

// Quote submit handling
quoteForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const text = quoteInput.value;

    if(text){
        const post = new QuotePost(text);
        post.post();
    }
})

// Image submit handling
imageForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const file = imageInput.files[0];
    const text = imageText.value;

    if(file){
        const post = new ImagePost(file, text);
        post.post();
    }
})

// Display warning message when user hovers delete button
deletePost.addEventListener('mouseenter', ()=>{
    deleteWarning.hidden = false;
})

deletePost.addEventListener('mouseleave', ()=>{
    deleteWarning.hidden = true;
})

// Delete Last Post
deletePost.addEventListener('click', ()=>{
    
    if(feed.lastElementChild && (feed.lastElementChild != deleteWarning)){            // REQUIRED TO STOP SCRIPT DELETING WARNING MESSAGE!
        feed.removeChild(feed.lastElementChild);
    } else{
        alert("No Posts to Delete");
    }

})

// Press # to go back to Top
document.addEventListener('keydown', (event) => {
    if (event.key === '#') {
        window.location.href = '#top';
    }
});

// Press ] to change the background color
document.addEventListener('keydown', (event) => {
    if (event.key === ']') {
        feed.style.backgroundColor = 'white';
    }
});