
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

getFruitData(url); 