import inquirer from "inquirer";
var user1Balance = 2000;
// var user2Balance = 18800;
// var user3Balance = 900;
console.log("Any one of these options\n1. Withdraw\n2. Deposit\n3. Bill Payment\n\n");
var option = await inquirer.prompt([
    {
        type: "String",
        name: "ask",
        message: "",
        // choices : ["1. Withdraw \n2. Deposit\n3. Bill Payment"]
    },
]);
if (option.ask == '1') {
    // deposits(user1Balance);
    withdraw(user1Balance);
}
if (option.ask == '2') {
    deposits(user1Balance);
    // withdraw(user1Balance);
}
if (option.ask == '3') {
    // deposits(user1Balance);
    billpayment(user1Balance);
    // withdraw(user1Balance);
}
else {
    console.log("okay thank for using ATM");
}
async function deposits(balance) {
    var deposit = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your deposit amount",
            type: "number"
        }
    ]);
    console.log(`Your balance is ${balance}`);
    balance += deposit.amount;
    console.log(`Your balance after deposit is ${balance}`);
    return balance;
}
async function billpayment(balance) {
    var bill = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your bill amount",
            type: "number"
        }
    ]);
    console.log(`Your balance is ${balance}`);
    balance -= bill.amount;
    console.log("Your bill paid successfully and your balance is " + balance);
    return balance;
}
async function withdraw(balance) {
    var get = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your withdrawal amount",
            type: "number"
        }
    ]);
    console.log(`Your balance is ${balance}`);
    balance -= get.amount;
    console.log("WIithdrawal successfully and your balance is : " + balance);
    return balance;
}
