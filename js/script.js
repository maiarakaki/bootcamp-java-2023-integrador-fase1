const contactForm = document.getElementById('contact-form');
const formTextArea = document.querySelector('#form-message');
const formMaxChars = 200;



formTextArea.addEventListener("keydown", (e)=>{
    const messageChars = formTextArea.value.length;
    const charCounterSpan = document.querySelector('#char-counter');
    
    if (messageChars > formMaxChars) {
        formTextArea.classList.add("is-invalid");
        // const invalidDiv = document.getElementsByClassName("invalid-feedback")[2];
        const feedbackMessage = document.querySelector('#invalid-message');
        feedbackMessage.style.display="block";

    }

    charCounterSpan.textContent = messageChars;

});


//Como aplicar EncodeURIComponent() acá???
contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const inputIsValid = (input) =>{
        return input.value.trim().length>0;
    }

    const emailIsValid = (input) =>{
        let value = input.value;
        let regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        return regexp.test(value);
    }
    
    const displayValid = (input)=>{
        input.classList.add("is-valid");
    }
    
    const displayInvalid = (input, id, inputType) => {
        let feedbackDiv = document.getElementById(id);
        input.classList.add("is-invalid");
        input.setCustomValidity(`Por favor ingrese un ${inputType} valido`);
        feedbackDiv.style.display = "block";
    }

    let formName = document.getElementById('form-name');
    let formEmail = document.getElementById('form-email');
    let formMessage = document.getElementById('form-message');

    inputIsValid(formName) ? displayValid(formName) : displayInvalid(formName, "invalid-name", "nombre");
    emailIsValid(formEmail) ? displayValid(formEmail) : displayInvalid(formEmail, "invalid-email", "email");
    
});