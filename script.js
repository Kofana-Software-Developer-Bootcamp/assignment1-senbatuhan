// logs array will be used for keeping the object
const logs = [];
// counter will be used for controlling the inputs and returning the logs into console
var counter = 0;
// gender keeps the male or female
var gender;

var n; // refers name
var s; // refers surname
var c; // refers city
var e; // refers email
var m; // refers male
var f; // refers female

// counter will be increased if the conditions are true but if u increased and some inputs are missing, you have to reset counter again.

// it checks the format of input email is correct or not
function isMail(mail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    mail
  );
}

// it checks email input is empty or not if is not empty, it controls the format of email
function checkEmail() {
  e = document.getElementById("email").value;
  if (e == "") {
    alert("Lütfen Eposta Adresinizi Girin");
  } else {
    if (isMail(e)) {
      counter++;
    } else {
      alert("Hatalı Eposta Adresi Girdiniz");
    }
  }
}
// it checks name input is empty or not
function checkName() {
  n = document.getElementById("name").value;
  if (n == "") {
    alert("Lütfen Adınızı Girin");
  } else {
    counter++;
  }
}
// it checks surname input is empty or not
function checkSurname() {
  s = document.getElementById("surname").value;
  if (s == "") {
    alert("Lütfen Soyadınızı Girin");
  } else {
    counter++;
  }
}
// it checks city input is empty or not
function checkCity() {
  c = document.getElementById("city").value;
  if (c == "Seçiniz") {
    alert("Lütfen Şehir Seçin");
  } else {
    counter++;
  }
}
// it checks gender radio is checked or not
function checkGender() {
  m = document.getElementById("m");
  f = document.getElementById("f");
  if (m.checked) {
    counter++;
    gender = m.value;
  } else if (f.checked) {
    counter++;
    gender = f.value;
  } else {
    alert("Cinsiyet Seçiniz");
  }
}
// it checks all of inputs and some inputs are missing and than we must to reset counter because if u do not make it, the logging console
//is not working correctly.
function controlInputs() {
  checkEmail();
  checkName();
  checkSurname();
  checkCity();
  checkGender();
  if (counter != 5) {
    counter = 0;
  }
}
//it clears all of inputs
function clearInputs() {
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("city").value = "Seçiniz";
  document.getElementById("m").value.checked = false;
  document.getElementById("f").value.checked = false;
  counter = 0;
  m.checked = false;
  f.checked = false;
}

// it controls the inputs firstly, if ok then checks counter if okey then we can create an object and push it into array. Array will also show us
// all logs before
function logArray() {
  controlInputs();
  if (counter == 5) {
    let logObj = {
      name: n,
      surname: s,
      email: e,
      city: c,
      gender: gender,
    };
    logs.push(logObj);
    clearInputs(); //clear the inputs
    alert("Kaydınız Başarı ile Alındı. Teşekkür ederiz :)");
    return logs; // return log array and write it on console
  } else {
    return "Error"; // if an error occurs, return Error
  }
}
