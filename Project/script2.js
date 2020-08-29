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
                <td class="tableId">${employee[ i ].id}</td>
                <td class="tableTitle">${employee[ i ].title}</td>
                <td class="tableSalary">${employee[ i ].salary}</td>
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
