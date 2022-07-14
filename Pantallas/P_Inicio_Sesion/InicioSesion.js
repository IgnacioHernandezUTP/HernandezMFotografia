let email = document.getElementById("email")
let submitBtn = document.getElementById("submitBtn")
let errorMsg = document.getElementById('errorMsg')

function displayErrorMsg(e) {
    errorMsg.style.display = "block"
    errorMsg.innerHTML = e
    submitBtn.disabled = true
}

function hideErrorMsg() {
    errorMsg.style.display = "none"
    submitBtn.disabled = false
}

// Validate email upon change
email.addEventListener("change", function() {
    // Check if the email is valid using a regular expression (string@string.string)
    if(email.value.match(/^[^@]+@[^@]+\.[^@]+$/))
        hideErrorMsg()
    else
        displayErrorMsg("Invalid email")
});