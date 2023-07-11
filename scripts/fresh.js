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
      let carbohydrates = fruits[i].nutritions.carbohydrates;
      let protein = fruits[i].nutritions.protein;
      let fat = fruits[i].nutritions.fat;
      let sugar = fruits[i].nutritions.sugar;
      let calories = fruits[i].nutritions.calories;
      option.setAttribute('value', fruits[i].name);
      option.setAttribute('data-carbo', carbohydrates);
      option.setAttribute('data-pro', protein);
      option.setAttribute('data-fat', fat);
      option.setAttribute('data-sugar', sugar);
      option.setAttribute('data-cal', calories);
      option.textContent = `${fruits[i].name}`;
      choice1.appendChild(option);
    }   
}

function createList2 (fruits) {  
  const choice2 = document.querySelector('select.choice2');
  for (i = 0 ; i< fruits.length; i++) {
    let option = document.createElement('option');
    let carbohydrates = fruits[i].nutritions.carbohydrates;
    let protein = fruits[i].nutritions.protein;
    let fat = fruits[i].nutritions.fat;
    let sugar = fruits[i].nutritions.sugar;
    let calories = fruits[i].nutritions.calories;
    option.setAttribute('value', fruits[i].name);
    option.setAttribute('data-carbo', carbohydrates);
    option.setAttribute('data-pro', protein);
    option.setAttribute('data-fat', fat);
    option.setAttribute('data-sugar', sugar);
    option.setAttribute('data-cal', calories);
    option.textContent = `${fruits[i].name}`;
    choice2.appendChild(option);   
  }      
}

function createList3 (fruits) {  
  const choice3 = document.querySelector('select.choice3');
  for (i = 0 ; i< fruits.length; i++) {
    let option = document.createElement('option');
    let carbohydrates = fruits[i].nutritions.carbohydrates;
    let protein = fruits[i].nutritions.protein;
    let fat = fruits[i].nutritions.fat;
    let sugar = fruits[i].nutritions.sugar;
    let calories = fruits[i].nutritions.calories;
    option.setAttribute('value', fruits[i].name);
    option.setAttribute('data-carbo', carbohydrates);
    option.setAttribute('data-pro', protein);
    option.setAttribute('data-fat', fat);
    option.setAttribute('data-sugar', sugar);
    option.setAttribute('data-cal', calories);
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
  
  const name1 = document.querySelector("#name1").value;
  const mail = document.querySelector("#mail").value;
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
  comment.value = instructions;

  console.log(fr1.value);
  console.log(fr2.value);
  console.log(fr3.value);

  let now = new Date();
  document.getElementById('orderDate').value = `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;

  let list1 = document.getElementById("fruit1").options;
  let list2 = document.getElementById("fruit2").options;
  let list3 = document.getElementById("fruit3").options;

  let index1 = 0;
  while (list1[index1].text != fr1.value ) {
    index1 +=1;
  }
  let index2 = 0;
  while (list2[index2].text != fr2.value ) {
    index2 +=1;
  }
  let index3 = 0;
  while (list3[index3].text != fr3.value ) {
    index3 +=1;
  }

  console.log(index1);
  console.log(index2);
  console.log(index3);

  const amountCarbo = document.querySelector("#amount-carbo");
  const amountPro = document.querySelector("#amount-pro");
  const amountFat = document.querySelector("#amount-fat");
  const amountSugar = document.querySelector("#amount-sugar");
  const amountCal = document.querySelector("#amount-cal");


  amountCarbo.value = (parseFloat(list1[index1].getAttribute('data-carbo')) + parseFloat(list2[index2].getAttribute('data-carbo')) + parseFloat(list3[index3].getAttribute('data-carbo'))).toFixed(2);
  amountPro.value = (parseFloat(list1[index1].getAttribute('data-pro')) + parseFloat(list2[index2].getAttribute('data-pro')) + parseFloat(list3[index3].getAttribute('data-pro'))).toFixed(2);
  amountFat.value = (parseFloat(list1[index1].getAttribute('data-fat')) + parseFloat(list2[index2].getAttribute('data-fat')) + parseFloat(list3[index3].getAttribute('data-fat'))).toFixed(2);
  amountSugar.value = (parseFloat(list1[index1].getAttribute('data-sugar')) + parseFloat(list2[index2].getAttribute('data-sugar')) + parseFloat(list3[index3].getAttribute('data-sugar'))).toFixed(2);
  amountCal.value = (parseFloat(list1[index1].getAttribute('data-cal')) + parseFloat(list2[index2].getAttribute('data-cal')) + parseFloat(list3[index3].getAttribute('data-cal'))).toFixed(2);
  
}


document.querySelector("#subBtn").addEventListener('click', displayResults);


getFruitData(url); 

