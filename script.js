let icon = document.querySelector(".password-icon i");
let iconTwo = document.querySelector(".icon-password i");
let wrapper = document.querySelector(".login-wrapper");
let loginLink = document.querySelector(".login-link");
let registerLink = document.querySelector(".register-link");
let thepassword = document.querySelector("#password"); 
let thepasswordTwo = document.querySelector("#password-two"); 

registerLink.addEventListener("click" , function () {
    wrapper.classList.add("active");
    document.getElementById("title").innerHTML = "Registration"
})

loginLink.addEventListener("click" , function () {
    wrapper.classList.remove("active");
    document.getElementById("title").innerHTML = "Login"
})


icon.addEventListener("click" , function () {
    if (thepassword.type === "password") {
        thepassword.type = "text";
    }
    else {
        thepassword.type = "password";
    }
    if (icon.classList.contains("fa-eye-slash")) {
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye");
    } else {
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    }
})

iconTwo.addEventListener("click" , function () {
    if (thepasswordTwo.type === "password") {
        thepasswordTwo.type = "text";
    }
    else {
        thepasswordTwo.type = "password";
    }
    if (iconTwo.classList.contains("fa-eye-slash")) {
        iconTwo.classList.remove("fa-eye-slash")
        iconTwo.classList.add("fa-eye");
    } else {
        iconTwo.classList.remove("fa-eye");
        iconTwo.classList.add("fa-eye-slash")
    }
})