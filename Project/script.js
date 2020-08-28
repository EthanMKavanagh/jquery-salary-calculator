$( document ).ready( onReady );

function onReady(){
    inputField();
    $( 'body' ).on( 'click', '.button', submitButton );
} // end onReady

function submitButton(){
    console.log( 'submit button' );
} // end submitButton

function inputField(){
    $( '.form').append(`
        <h1 class="heading">Salary Calculator</h1>
        <h3>Add Employee</h3>
        <input class="employeeFirst" type="text" placeholder="First Name"/>
        <input class="employeeLast" type="text" placeholder="Last Name"/>
        <input class="employeeId" type="number" placeholder="ID"/>
        <input class="employeeTitle" type="text" placeholder="Title"/>
        <input class="employeeSalary" type="text" placeholder="Annual Salary"/>
        <button class="button">Submit</button>
    `)
} // end inputField