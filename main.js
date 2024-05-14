#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todoQ1",
            type: "Input",
            message: "What do you want to add in your Todos?",
        },
        {
            name: "todoQ2",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true",
        },
    ]);
    todos.push(addTask.todoQ1);
    condition = addTask.todoQ2;
    console.log(todos);
}
