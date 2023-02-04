const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

 let passwordsOne = document.getElementById("passwordsOne")
 let passwordsTwo = document.getElementById("passwordsTwo")
 let buttonClk = document.getElementById("buttonid")
 let passwordLength = 12

buttonClk.addEventListener("click", function() {
  let passwordOne = '';
  let passwordTwo = '';
  for ( let i=0; i<passwordLength; i++){
    let randomPasswordOne= Math.floor( Math.random() * characters.length)
    let randomPasswordTwo = Math.floor( Math.random() * characters.length)
    passwordOne += characters[randomPasswordOne];
    passwordTwo += characters[randomPasswordTwo];
  }
  passwordsOne.innerHTML = `<span id="passwordOneValue">${passwordOne}</span><button id="copyBtnOne" class="copyBtn">Copy</button>`;
  passwordsTwo.innerHTML = `<span id="passwordTwoValue">${passwordTwo}</span><button id="copyBtnTwo" class="copyBtn">Copy</button>`;
});

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("copyBtn")) {
    let passwordValue = e.target.previousSibling.textContent;
    let tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = passwordValue;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
});



