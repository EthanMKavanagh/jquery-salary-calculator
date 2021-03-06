$( document ).ready( onReady );

employee = [];

function onReady(){
    // append inputs to DOM
    $( '.form' ).append(`
        <div>
            <input class="employeeFirst" type="text" placeholder="First Name"/>
            <input class="employeeLast" type="text" placeholder="Last Name"/>
            <input class="employeeId" type="number" placeholder="ID"/>
            <input class="employeeTitle" type="text" placeholder="Title"/>
            <input class="employeeSalary" type="number" placeholder="Annual Salary"/>
        </div>
        <button class="button">Submit</button>
    `)
    // add button
    $( 'body' ).on( 'click', '.button', addEmployee );
    // remove button
    $( 'body' ).on( 'click', '.tableRemove', removeButton );
} // end onReady

function addEmployee(){
    console.log( 'in addEmployee' );
    // create new object
    const newEmployeeObj = {
        firstName: $( '.employeeFirst' ).val(),
        lastName: $( '.employeeLast' ).val(),
        id: $( '.employeeId' ).val(),
        title: $( '.employeeTitle' ).val(),
        salary: $( '.employeeSalary' ).val()
    } // end newEmployeeObj
    employee.push( newEmployeeObj );
    console.log( 'employees (employee array):', employee )

    // display inventory
    displayEmployees();
    // calculate total monthly
    totalMonthly();
} // end addEmployee

function displayEmployees(){
    console.log( 'in displayEmployees' );
    // target table body in DOM
    let el = $( '#tBody' );
    // empty el
    el.empty();
    // loop through employee array
    for ( let i = 0; i < employee.length; i++ ){
        // append table rows
        el.append(`
            <tr>
                <td class="tableFirstName">${employee[ i ].firstName}</td>
                <td class="tableLastName">${employee[ i ].lastName}</td>
                <td class="tableId">#${employee[ i ].id}</td>
                <td class="tableTitle">${employee[ i ].title}</td>
                <td class="tableSalary">$${employee[ i ].salary}</td>
                <td class="tableRemove"><button class="removeButton">Delete</button></td>
            </tr>
        `)

    // Clear inputs
    $( '.employeeFirst' ).val( '' );
    $( '.employeeLast' ).val( '' );
    $( '.employeeId' ).val( '' );
    $( '.employeeTitle' ).val( '' );
    $( '.employeeSalary' ).val( '' );
    } // end for
} // end displayEmployees

function totalMonthly(){
    // declare variable
    let totalCosts = 0;
    // loop through array
    for( let i = 0; i < employee.length; i++ ){
        // convert salary to a number
        let annualPay = Number( employee[ i ].salary );
        // divide annual pay to monthly pay
        let monthlyPay = annualPay/12;
        // add monthly pay to variable
        totalCosts += monthlyPay
        // target element
        let el = $( '.totalMonthly' );
        // empty element
        el.empty();
        // append and round the hundredths place
        el.append( ' $', Math.round( totalCosts * 100) / 100 );
    } // end for

    if( totalCosts >= 20000 ){
        $( '.monthlyTotal' ).css( 'background-color', 'red' );
    }
} // end totalMonthly

function removeButton(){
    // Remove employee from table, visit: https://www.geeksforgeeks.org/how-to-dynamically-add-remove-table-rows-using-jquery/
    $(this).closest('tr').remove()
} // end removeButton
