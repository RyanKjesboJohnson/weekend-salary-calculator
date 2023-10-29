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
    `<tr id='${identification}'>
    <th>${firstName}</th>
    <th>${lastName}</th>
    <th>${identification}</th>
    <th>${title}</th>
    <th id='AnnualSalaryInput'>${annualSalary}</th>
    <th><button onclick="deleteRecord(event)">❌</button></th>
  </tr>`

  //Addition of the rows monthly salary from the total happens here,
  //also this is where we push in the footer class if over budget.
    totalSalary += annualSalary/12;
    console.log("value before round:", totalSalary);
    if(totalSalary > 20000){
        document.getElementById('monthlytotal').textContent = Math.round(totalSalary);
        document.getElementById('footer').classList.add('over-budget')}
    else {document.getElementById('monthlytotal').textContent = Math.round(totalSalary)};

//Remove the values from the total monthly count
  document.getElementById('first-Name').value = '';
  document.getElementById('last-Name').value = '';
  document.getElementById('identification-input').value = '';
  document.getElementById('title-input').value = '';
  document.getElementById('annualSalary-input').value = '';
  
}
//function used to delete a row when clicking the button
function deleteRecord(event){
    // let removedRow = event.target.parentNode.parentNode.id;
    // console.log(removedRow);
    // let rowData = removedRow.querySelectorAll('AnnualSalaryInput');
    // console.log(rowData);
    event.target.parentElement.parentElement.remove();
}
