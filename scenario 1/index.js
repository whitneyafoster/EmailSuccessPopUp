
// On page load pop up appears when mouse leaves window
window.onload = function() {
    let emailState = false;
    let emailModal = document.getElementsByClassName('email-modal') [0];

    let closeButton = document.getElementsByClassName('email-modal__close-btn') [0];

    let emailInput = document.getElementsByClassName('email-modal__input') [0];

    let emailButton = document.getElementsByClassName
    ('email-modal__button') [0];

    let thankContainer = document.getElementsByClassName('email-thank') [0];

   // This validates the email input
    function emailisValid(email) {
        return /\S+@\S+\.\S+/.test(email)
    }

    let showModal = () => {
        if(emailState == false) {
            emailModal.classList.add('email-modal--visible');
            emailState = true
        }   
    }

    let closeModal = () => { emailModal.classList.remove('email-modal--visible');
    }

    // Adds red border on error

    let addErrors = () => {
        document.getElementsByClassName('email-modal__form-group') [0] .classList.add('email-modal__form-group--error')
            document.getElementsByClassName('email-modal__error-message') [0] .classList.add('email-modal__error-message--active')
            alert('This is not a valid email.')
    }

    // Removes red border on error when click box again

    let removeErrors = () => {
        document.getElementsByClassName('email-modal__form-group') [0] .classList.remove('email-modal__form-group--error');
        document.getElementsByClassName('email-modal__error-message') [0] .classList.remove('email-modal__error-message--active');
    }

   let showThankMessage = () => {
       thankContainer.classList.add('email-thank--success');
   }

    emailInput.addEventListener('click', () => {
        removeErrors();
    })

    emailButton.addEventListener('click', () => {
    if(emailisValid(emailInput.value)) {
       showThankMessage();
    } else {
        addErrors();
    }
})

   
closeButton.addEventListener('click', () => {
       closeModal()
    });

document.body.addEventListener ('mouseleave', () => {
        showModal();
    });


  

}