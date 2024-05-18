import inquirer from "inquirer";
let currencies = [
    { Pkr: { Usd: 0.0038, Pkr: 1 } },
    { Usd: { Pkr: 278, Usd: 1 } },
];
let answer = await inquirer.prompt([
    {
        message: "Chosse your currency you want to convert",
        name: "from",
        type: "list",
        choices: ["Pkr", "Usd"]
    },
    {
        message: "Enter your currency you want to convert in ",
        name: "in",
        type: "list",
        choices: ["Pkr", "Usd"]
    },
    {
        message: "Enter your amount",
        name: "amount",
        type: "number",
    },
]);
currencies.forEach((element) => {
    if (element[answer.from]) {
        let converTo = element[answer.from][answer.in];
        console.log(converTo * answer.amount);
    }
});
