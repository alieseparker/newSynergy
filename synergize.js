var isLoggedIn = false;

function selectMeUser() {
  document.getElementById('username').select();
}

function selectMePass() {
  document.getElementById('password').select();
}

function selectLogin() {
  var uname = document.getElementById('username').value;
  var pass = document.getElementById('password').value;
  var mess = document.getElementById('messagebar');
  var logsub = document.getElementById('loginsubmit')

  if(isValidUser(uname, pass, mess)) {
    document.getElementById('username').type = "hidden";
    document.getElementById('password').type = "hidden";
    logsub.parentNode.removeChild('logsub');
  }
}

function isValidUser(uname, pass, mess) {
  if(uname=='codefellows' && pass=='password') {
    isLoggedIn=true;
    return true;
  }
  else {
    uname.textContent('Username & or Password is incorrect');
  }
}

function isValidLength(event) {
  var uname = document.getElementById('username').value;
  var pass = document.getElementById('password').value;
  var mess = document.getElementById('messagebar');

  if(uname.length<5) {
    uname.textContent ="Username is not valid length";
  }
  else {
    uname.textContent ="";
  }

  if(pass.length<5) {
    pass.textContent="Password is not valid length";
  }
  else {
    pass.textContent="";
  }
}

var uname = document.getElementById('username');
var pass = document.getElementById('password');
var logSub = document.getElementById('loginsubmit');

uname.addEventListener('focus', selectMeUser, false);
pass.addEventListener('focus', selectMePass, false);
logSub.addEventListener('click', selectLogin, false);

uname.addEventListener('blur', isValidLength, false);
pass.addEventListener('blur', isValidLength, false);



