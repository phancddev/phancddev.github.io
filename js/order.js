function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function send_Form() {
    let cakeTypeValue = document.getElementById("caketype").value
    let nameValue = document.getElementById("name").value
    let messageValue = document.getElementById("message").value
    let timeValue = document.getElementById("time").value
    let callValue = document.getElementById("call").checked
    let notCallValue = document.getElementById("notcall").checked
    let toValue = document.getElementById("to").value
    let checkCakeTypeValue = document.getElementById('div_error_caketype')
    let checkNameValue = document.getElementById("div_error_name")
    let checkMessageValue = document.getElementById("div_error_message")
    let checkTimeValue = document.getElementById("div_error_time")
    let checkCallValue = document.getElementById("div_error_call")
    let checkToValue = document.getElementById("div_error_to")




    if (cakeTypeValue == "default") {
        checkCakeTypeValue.innerHTML = "Please select our product."
    } else checkCakeTypeValue.innerHTML = ""

    if (!nameValue) {
        checkNameValue.innerHTML = "Please fill out your name."
    } else
    if (nameValue.length > 100) {
        checkNameValue.innerHTML = "Your name should not exceed 100 characters."
    } else checkCakeTypeValue.innerHTML = ""
    if (!messageValue) {
        checkMessageValue.innerHTML = "Please fill out your message."
    } else
    if (messageValue.length > 30) {
        checkMessageValue.innerHTML = "Message should not exceed 30 characters."
    } else checkMessageValue.innerHTML = ""
    if (!notCallValue && !callValue) {
        checkCallValue.innerHTML = "Please select your option."
    } else checkCallValue.innerHTML = ""
    if (!timeValue) {
        checkTimeValue.innerHTML = "Please fill out the deliver date."
    } else
    if (Date.parse(timeValue) - Date.parse(new Date()) < 0) {
        checkTimeValue.innerHTML = "Date you choose in the past."
    } else checkTimeValue.innerHTML = ""
    if (!toValue) {
        checkToValue.innerHTML = "Please fill out the address."
    } else
    if (messageValue.length > 500) {
        checkToValue.innerHTML = "Address should not exceed 500 characters."
    } else checkToValue.innerHTML = ""
}