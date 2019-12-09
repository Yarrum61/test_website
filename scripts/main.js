let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pepe-frog.jpg') {
        myImage.setAttribute ('src','images/pepe-frog2.jpg');
    } else {
        myImage.setAttribute ('src','images/pepe-frog.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        myHeading.innerHTML = 'You have angered Pepe >:(';
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Pepe is ' + myName + "'s friend";
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Pepe is ' + storedName + "'s friend";
  }
  
  myButton.onclick = function() {
    setUserName();
  }