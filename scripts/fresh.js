
const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
async function getFruitData(url) {
    const response = await fetch(url);
    const fruits = await response.json(); 
    createList1(fruits);
    createList2(fruits);
    createList3(fruits);
  } 

function createList1 (fruits) {  
    const choice1 = document.querySelector('select.choice1');
    for (i = 0 ; i< fruits.length; i++) {
      let option = document.createElement('option');
      option.setAttribute('value', fruits[i].name);
      option.textContent = `${fruits[i].name}`;
      choice1.appendChild(option);
    }   
}

function createList2 (fruits) {  
  const choice2 = document.querySelector('select.choice2');
  for (i = 0 ; i< fruits.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', fruits[i].name);
    option.textContent = `${fruits[i].name}`;
    choice2.appendChild(option);
  }      
}

function createList3 (fruits) {  
  const choice3 = document.querySelector('select.choice3');
  for (i = 0 ; i< fruits.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', fruits[i].name);
    option.textContent = `${fruits[i].name}`;
    choice3.appendChild(option);
  }      
}

function displayResults() {
  const firstName = document.querySelector("#first-name");
  const email = document.querySelector("#email");
  const nbPhone = document.querySelector("#nb-phone");
  const fr1 = document.querySelector("#fr1");
  const fr2 = document.querySelector("#fr2");
  const fr3 = document.querySelector("#fr3");
  const comment = document.querySelector("#comment");
  const name1 = document.getElementById("name1").value;
  const mail = document.getElementById("mail").value;
  const phone = document.querySelector("#phone").value;
  const fruit1 = document.querySelector("#fruit1").value;
  const fruit2 = document.querySelector("#fruit2").value;
  const fruit3 = document.querySelector("#fruit3").value;
  const instructions = document.querySelector("#instructions").value;
  firstName.value = name1;
  email.value = mail;
  nbPhone.value = phone;
  fr1.value = fruit1;
  fr2.value = fruit2;
  fr3.value = fruit3;
  comment.value = `Instructions: ${instructions}`;
}



//document.querySelector("form").addEventListener("submit", displayResults);
document.querySelector("#subBtn").addEventListener('click', displayResults);


getFruitData(url); 

