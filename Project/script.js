$( document ).ready( onReady );

function onReady(){
    inputLayout();
    tableLayout();
    totalMonthly();
    $( 'body' ).on( 'click', '.button', submitButton );
} // end onReady

function submitButton(){
    console.log( 'submit button' );
} // end submitButton

function inputLayout(){
    $( '.form').append(`
        <h1 class="heading">Salary Calculator</h1>
        <h2>Add Employee</h2>
        <input class="employeeFirst" type="text" placeholder="First Name"/>
        <input class="employeeLast" type="text" placeholder="Last Name"/>
        <input class="employeeId" type="number" placeholder="ID"/>
        <input class="employeeTitle" type="text" placeholder="Title"/>
        <input class="employeeSalary" type="text" placeholder="Annual Salary"/>
        <button class="button">Submit</button>
    `)
} // end inputField

function tableLayout(){
    $( '.data' ).append(`
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Title</th>
                <th>Annual Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="tableFirstName"></td>
                <td class="tableFirstName"></td>
                <td class="tableId"></td>
                <td class="tableTitle"></td>
                <td class="tableSalary"></td>
            </tr>
        </tbody>
    </table>
    `)
} // end tableLayout

function totalMonthly(){
    $( '.monthlyTotal' ).append(`
        <h2>Total Monthly: $<span class="totalMonthly"></span></h2>
    `)
} // end totalMonthly