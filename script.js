

function myFunction() {
  
  let email = prompt('Enter ur email bruh', '');
 

  if (email == null || email == "") {
    console.log('User cancelled');

  } else {
    console.log(email);
  }

}

var i = 0;
var speed = 100;
var txt = 'choguo';

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("bruh").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

 


function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



//const wasteman = {name:'Eugene', age:17, height:'6ft'};

//alert(wasteman.name + ' is the wasteman')