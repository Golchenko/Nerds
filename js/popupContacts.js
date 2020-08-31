var link = document.querySelector(".contact-button");
var popup = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close");
var form = document.querySelector(".contact-form");
var login = popup.querySelector(".user-name");
var email = popup.querySelector(".user-email");
var text = popup.querySelector(".user-text");
var storageName = localStorage.getItem("login");
var storageMail = localStorage.getItem("email");


var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storageName;
        email.focus();
    }
    else {
        login.focus();
    }
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        console.log("You need to type name & email");
        popup.classList.add("modal-error");
    } 
    else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value)
        }
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
