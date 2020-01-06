function createInputs() {
    // create input through js
    var emailInput = document.createElement("INPUT");
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("placeholder", "email");
    emailInput.setAttribute("class", "form-control");

    var passwordInput = document.createElement("INPUT");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "password");
    passwordInput.setAttribute("class", "form-control");

    document.getElementById("emailInput").appendChild(emailInput);
    document.getElementById("passwordInput").appendChild(passwordInput);

}

$(document).ready(function() {
    createInputs();
});