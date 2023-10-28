onReady();

function onReady() {
  console.log('Javascript is working!');
}

let totalSalary = 0;

function handleSubmit(event){
    event.preventDefault();
    console.log("This worked"); 
    //pull in each value from form,
    //and set variables.
    let firstName = document.getElementById('first-Name').value;
    let lastName = document.getElementById('last-Name').value;
    let identification = document.getElementById('identification-input').value;
    let title = document.getElementById('title-input').value;
    let annualSalary = document.getElementById('annualSalary-input').value;
   
    //test accessing the inputs of the five input fields
    console.log("console log of the five data entry fields", firstName, lastName, identification, title, annualSalary); 
   
    //input of table item for employee record
    tableBody.innerHTML += 
    `<tr>
    <th>${firstName}</th>
    <th>${lastName}</th>
    <th>${identification}</th>
    <th>${title}</th>
    <th>${annualSalary}</th>
    <th><button onclick="deleteRecord(event)">␡</button></th>
  </tr>`

let totalAnnualSalary = document.getElementById('total-monthly').textContent;
totalSalary = Number(totalAnnualSalary) + Number(annualSalary);
console.log(totalSalary);
document.getElementById('total-monthly').textContent = totalSalary;


  document.getElementById('first-Name').value = '';
  document.getElementById('last-Name').value = '';
  document.getElementById('identification-input').value = '';
  document.getElementById('title-input').value = '';
  document.getElementById('annualSalary-input').value = '';
  
}

function deleteRecord(event){
    event.target.parentElement.parentElement.remove();
}

