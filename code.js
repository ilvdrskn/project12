window.onload = function () {
    var form = document.getElementsByClassName("main-action");
    var inputEmail = document.getElementById("textfield");
    function validEmail(email) {
        var em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return em.test(String(email).toLowerCase());
    }

    form[0].onsubmit = function() {
        var emailVal = inputEmail.value;
        if(emailVal === "") {
            inputEmail.classList.add("error");
            return false;
        } else if(!validEmail(emailVal)) {
            inputEmail.classList.add("error");
            return false;
        } else {
            inputEmail.classList.remove("error");
        }
        return true;
    }
}