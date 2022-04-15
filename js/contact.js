function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function send_Form() {
    let emailValue = document.getElementById("email").value
    let nameValue = document.getElementById("name").value
    let titleValue = document.getElementById("title").value
    let messageValue = document.getElementById("message").value
    let checkName = document.getElementById('div_error_name')
    let checkEmail = document.getElementById('div_error_email')
    let checkTitle = document.getElementById('div_error_title')
    let checkMessage = document.getElementById('div_error_message')



    if (!nameValue.length) {
        checkName.innerHTML = "Please fill out your name."
    } else

    if (nameValue.length > 100) {
        checkName.innerHTML = "Your name should not exceed 100 characters."
    } else checkName.innerHTML = ""


    if (!emailValue.length) {
        checkEmail.innerHTML = "Please enter a email valid"
    } else
    if (emailValue.length > 100) {
        checkEmail.innerHTML = "Your email should not exceed 100 characters."
    } else
    if (!validateEmail(emailValue)) {
        checkEmail.innerHTML = "Your email error structure"
    } else checkEmail.innerHTML = ""
    if (!titleValue.length) {
        checkTitle.innerHTML = "Please fill out your title."
    } else
    if (titleValue.length < 50) {
        checkTitle.innerHTML = "Subject should not shorter than 50 characters."
    } else
    if (titleValue.length > 250) {
        checkTitle.innerHTML = "Subject should not exceed 250 characterss."
    } else {
        checkTitle.innerHTML = ""
    }
    if (!messageValue.length) {
        checkMessage.innerHTML = "Please fill out your message."
    } else
    if (messageValue.length > 500) {
        checkMessage.innerHTML = "Your message should not exceed 500 characters."
    } else {
        checkMessage.innerHTML = ""
    }
}