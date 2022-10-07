const inquirer = require('inquirer');
const fs = require('fs');

inquirer.createPromptModule([
    {
        type: 'input',
        message: ""

    }



]).then((answers) => {
    fs.writeFile('index.html', answers., (err, date) =>{
        err ? console.log(err) : console.log("Success");
    } )
})