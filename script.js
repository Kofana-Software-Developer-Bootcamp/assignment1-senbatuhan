const logs = [];

function logEmail() {
    let e = document.getElementById("email").value;
    if(e==""){
        alert("Lütfen Eposta Adresinizi Girin")
    }
    else{
        logs[0] = e;
    }
  }

function logName() {
    let n = document.getElementById("name").value;
    if(n==""){
        alert("Lütfen Adınızı Girin")
    }
    else{
        logs[1] = n;
    }
  }

  function logSurname() {
      
    let s = document.getElementById("surname").value;
    if(s==""){
        alert("Lütfen Soyadınızı Girin")
    }
    else{
        logs[2] = s;
    }
  }
  function logCity() {
    let c = document.getElementById("city").value;
    if(c=="Seçiniz"){
        alert("Lütfen Şehir Seçin")
    }
    else{
        logs[3] = c;
    }
    
  }

  function logGender() {
    var m = document.getElementById('m');
    var f = document.getElementById('f');
              //console.log(m);
       if(m.checked){
            //console.log(m.value)
            logs[4]=m.value
        }
        else if(f.checked){
            //console.log(f.value)
            logs[4]=f.value
        }
        else{
            alert("Cinsiyet Seçiniz")
        }
  
  }

  function logArray(){
    logEmail();
    logName();
    logSurname();
    logCity();
    logGender();
    return logs;
  }
