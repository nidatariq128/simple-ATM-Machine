#! /usr/bin/evn node
import inquirer from "inquirer";
// initalize user blance and pin code:
let myBlance = 20000; //dollar
let mypin = 2457;
console.log("welcome to code with Nida - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your 4 digit pin code:",
    }
]);
console.log(pinAnswer.pin);
if (pinAnswer.pin === mypin) {
    console.log("pin is correct , login sucessfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an option:",
            choices: ["check blance", "withdraw", "fast cash"],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter the amount to withdraw:",
                type: "number",
            }
        ]);
        if (myBlance > amountAns.amount) {
            myBlance -= amountAns.amount;
            console.log(`your current blance is: ${myBlance}`);
        }
        else {
            console.log("insufficient blance !");
        }
    }
    else if (operationAns.operation === "check blance") {
        console.log(`your current blance is ${myBlance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount pleace:",
                type: "list",
                choices: ["500", "1000", "2000", "2500", "3000", "10000"],
            }
        ]);
        myBlance -= amountAns.amount;
        console.log(`your current blamnce is:${myBlance}`);
    }
}
else {
    console.log("invalid pin number!");
}
