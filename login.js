let login = document.getElementById('login');
let pass = document.getElementById('pass');
let but = document.getElementById('but1')
login.oninput = function () {
    if(login.value.length <= 10) {
        login.style.borderColor = "red" ;
        but1.disabled = true;

    }else {
        login.style.borderColor = "green"
        but1.disabled = false;  
    }
}
pass.oninput = function () {
    if(pass.value.length <= 10) {
        pass.style.borderColor = "red" ;
        but1.disabled = true;

    }else {
        pass.style.borderColor = "green"
        but1.disabled = false;  
    }
}