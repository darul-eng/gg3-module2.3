import {generateCustomerId} from "../helper/customer.js";

let customers = [
    {
        customerId: '1234',
        name: 'Jhon Doe',
        email: 'jhon@gmail.com',
        balance: 5000.00
    }
];

function getAllCustomers(){
    return customers
}

function getCustomer(customerId){
    return customers.find((cust) => cust.customerId === customerId);
}

function createCustomer(name, email, initialBalance){
    let customer = {
        customerId: generateCustomerId(),
        name: name,
        email: email,
        balance: initialBalance
    }

    return customer;
}
