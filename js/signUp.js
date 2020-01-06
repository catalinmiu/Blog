function validateData() {
    var isPasswordValid = isAValidPassword(document.getElementById("password").value);
    if (!isPasswordValid) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parola nu are formatul corect',
            footer: ''
        });
        return;
    }
    var isConfirmPasswordValid = isAValidPassword(document.getElementById("confirm_password").value);
    if (!isConfirmPasswordValid) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Confirmarea Parolei nu are formatul corect',
            footer: ''
        });
        return;
    }
    var isTheSamePassword = document.getElementById("password").value === document.getElementById("confirm_password").value
    if (!isTheSamePassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parolele nu coincid',
            footer: ''
        });
        return;
    }
    var isNameFieldEmpty = document.getElementById("name").value !== "";
    if (!isNameFieldEmpty) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Numele nu trebuie sa fie gol',
            footer: ''
        });
        return;
    }
    var isEmailValid = isAValidEmail(document.getElementById("email").value)
    if (!isEmailValid) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email-ul nu are formatul corect',
            footer: ''
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Datele sunt corecte',
        showConfirmButton: false,
        timer: 5000
    })
}

function isAValidPassword(password) {
    const pattern =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    // (?=.*?[A-Z]) cel putin o litera mare
    // (?=.*?[a-z]) cel putin o litera mica
    // (?=.*?[0-9]) cel putin o cifra
    // (?=.*?[#?!@$%^&*-]) cel putin un caracter special
    // .{8,} cel putin 8 caractere

    if(password.match(pattern)) {
        return true;
    }
    return false;
}

function isAValidEmail(email) {
    const pattern = /\S+@\S+\.\S+/;

    if(email.match(pattern)) {
        return true;
    }
    return false;
}