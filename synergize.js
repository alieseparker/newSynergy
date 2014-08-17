var isLoggedIn = false;

document.getElementById('isValid').style.visibility = "hidden";

function selectMeUser() {
  document.getElementById('username').select();
}

function selectMePass() {
  document.getElementById('password').select();
}

function selectLogin() {
  var uname = document.getElementById('username').value;
  var pass = document.getElementById('password').value;
  var logsub = document.getElementById('loginsubmit')

  if(isValidUser(uname, pass)) {
    document.getElementById('username').type = "hidden";
    document.getElementById('password').type = "hidden";
    logsub.parentNode.removeChild('logsub');
  }
}

function isValidUser(uname, pass) {
  if(uname=='codefellows' && pass=='password') {
    isLoggedIn=true;
    return isLoggedIn;
  }
  else {
    document.getElementById('isValid').style.visibility = "visible";
  }
}

function isValidLength() {
  var isValid = document.getElementById('isValid');
  var uname = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  if(uname.length < 5 || pass.length < 5) {
    isValid.style.visibility = "visible";
  }
  else {
    isValid.style.visibility = "hidden";
  }
}

var uname = document.getElementById('username');
var pass = document.getElementById('password');
var logSub = document.getElementById('loginsubmit');

uname.addEventListener('click', selectMeUser, false);
pass.addEventListener('click', selectMePass, false);
logSub.addEventListener('click', selectLogin, false);

uname.addEventListener('input', isValidLength, false);
pass.addEventListener('input', isValidLength, false);



