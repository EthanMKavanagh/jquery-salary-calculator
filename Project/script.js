$( document ).ready( onReady );

function onReady(){
    inputLayout();
    tableLayout();
    totalMonthlyLayout();
    $( 'body' ).on( 'click', '.button', submitButton );
} // end onReady

function submitButton(){
    console.log( 'submit button' );

    //Get first name input val
    let firstName = $( '.employeeFirst' ).val();
    //Console.log
    console.log( 'First Name:', firstName );
    //Display first name on DOM
    $( '.tableFirstName' ).append( firstName );

    //Get last name input val
    let lastName = $( '.employeeLast' ).val();
    //Console.log
    console.log( 'Last Name:', lastName );
    //Display last name on DOM
    $( '.tableLastName' ).append( lastName );

    //Get ID input val
    let iD = $( '.employeeId' ).val();
    //Console.log
    console.log( 'ID', iD );
    //Display ID on DOM
    $( '.tableId' ).append( iD );

    //Get title input val
    let title = $( '.employeeTitle' ).val();
    //Console.log
    console.log( 'Title', title );
    //Display title on DOM
    $( '.tableTitle' ).append( title );

    //Get annual salary input val
    let annualSalary = $( '.employeeSalary' ).val();
    //Console.log
    console.log( 'Annual Salary', annualSalary );
    //Display annual salary on DOM
    $( '.tableSalary' ).append( '$', annualSalary );
} // end submitButton

function inputLayout(){
    $( '.form' ).append(`
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
                <td class="tableLastName"></td>
                <td class="tableId"></td>
                <td class="tableTitle"></td>
                <td class="tableSalary"></td>
            </tr>
        </tbody>
    </table>
    `)
} // end tableLayout

function totalMonthlyLayout(){
    $( '.monthlyTotal' ).append(`
        <h2>Total Monthly: $<span class="totalMonthly"></span></h2>
    `)
} // end totalMonthly