var isLoggedIn = false;

function selectMeUser() {
  document.getElementById('username').focus();
  document.getElementById('username').select();
}

function selectMePass() {
  document.getElementById('password').focus();
  document.getElementById('password').select();
}

function selectLogin() {
  var uname = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  if(isValid(uname, pass)) {
    document.getElementById('username').type = "hidden";
    document.getElementById('password').type = "hidden";
  }

  var button = document.getElementById('loginsubmit')
  button.parentNode.removeChild(button);
  document.getElementById('welcomebanner').innerHTML="Welcome "+ uname + "!";
}

function isValid(uname, pass) {
  if(uname=='codefellows' && pass=='password') {
    isLoggedIn=true;
    return true;
  }
  else {
    return false;
  }
}

var uname = document.getElementById('username');
var pass = document.getElementById('password');
var logSub = document.getElementById('loginsubmit');

uname.addEventListener('click', selectMeUser, false);
pass.addEventListener('click', selectMePass, false);
logSub.addEventListener('click', selectLogin, false);



