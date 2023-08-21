const contactForm = document.getElementById('contact-form');
const formTextArea = document.querySelector('#form-message');
const formMaxChars = 200;

formTextArea.addEventListener("keydown", (e)=>{
    const messageChars = formTextArea.value.length;
    const charCounterSpan = document.querySelector('#char-counter');
    
    if (messageChars > formMaxChars) {
        formTextArea.classList.add("is-invalid");
        // const invalidDiv = document.getElementsByClassName("invalid-feedback")[2];
        const feedbackMessage = document.querySelector('#message-feedback');
        feedbackMessage.style.display="block";

    }

    charCounterSpan.textContent = messageChars;

});

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    var formName = document.getElementById('form-name');
    var formEmail = document.getElementById('form-email');
    var formMessage = document.getElementById('form-message');

    validateInput(formName);
    
});


function validateInput(input){
    let value = input.value;

    if (value.length > 0) {
        input.classList.add("is-valid");
        
    } else{
        input.classList.add("is-invalid");
        input.setCustomValidity("Este campo no puede quedar vacio");
    }
}

function validateEmail(input){

}

function validateMessage(input){

}

