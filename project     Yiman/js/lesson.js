// PHONE VALIDATOR
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResoult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResoult.innerHTML = 'Ok'
        phoneResoult.style.color = 'green'
    }else  {
        phoneResoult.innerHTML = 'Not ok'
        phoneResoult.style.color = 'red'
    }
}

