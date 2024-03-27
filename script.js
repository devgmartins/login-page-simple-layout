const password = document.getElementById('password');
const icon = document.getElementById('icon');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.remove('show')
        icon.classList.add('hide');
    } else{
        password.setAttribute('type','password');
        icon.classList.remove('hide');
        icon.classList.add('show');
    }
}