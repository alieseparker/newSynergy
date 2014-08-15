function selectMeUser() {
  document.getElementById('username').focus();
  document.getElementById('username').select();
}

function selectMePass() {
  document.getElementById('password').focus();
  document.getElementById('password').select();
}


var uname = document.getElementById('username');
var pass = document.getElementById('password');

uname.addEventListener('click', selectMeUser, false);
pass.addEventListener('click', selectMePass, false);

