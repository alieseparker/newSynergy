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

  if(isValidUser(uname, pass)) {
    document.getElementById('username').type = "hidden";
    document.getElementById('password').type = "hidden";
  }

  var button = document.getElementById('loginsubmit')
  button.parentNode.removeChild(button);
  document.getElementById('welcomebanner').innerHTML="Welcome "+ uname + "!";
}

function isValidUser(uname, pass) {
  if(uname=='codefellows' && pass=='password') {
    isLoggedIn=true;
    return true;
  }
  else {
    return false;
  }
}

function isValidLength() {
  var uname = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  if(uname.length<5) {
    uname.innerHTML="Username is not valid length";
  }
  else {
    uname.innerHTML="";
  }

  if(pass.length<5) {
    pass.innerHTML="Password is not valid length";
  }
  else {
    pass.innerHTML="";
  }
}

var uname = document.getElementById('username');
var pass = document.getElementById('password');
var logSub = document.getElementById('loginsubmit');

uname.addEventListener('click', selectMeUser, false);
pass.addEventListener('click', selectMePass, false);
logSub.addEventListener('click', selectLogin, false);

uname.addEventListener('focus', isValidLength, false);
pass.addEventListener('focus', isValidLength, false);


