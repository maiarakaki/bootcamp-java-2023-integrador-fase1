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
