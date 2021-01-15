let signbut = document.querySelector('.but_sign')
signbut.onclick = function (event) {
    window.location.href = './login.html'
}

function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';
}




  
