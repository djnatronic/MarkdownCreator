var inquirer = require("inquirer");
var fs = require("fs")
const util = require('util')
const fs_writeFile = util.promisify(fs.writeFile)

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Please type a short description?",
      name: "description"
    },
    {
      type: "input",
      message: "How to Install",
      name: "Installation"
    },
    {
        type: "input",
        message: "How to use it?",
        name: "Usage"
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose which license to use?',
        choices: ['MIT', 'MPL', 'WTF'],
      },
      {
        type: "input",
        message: "Who Contributed to the Application?",
        name: "Contributing"
      },
      {
        type: "input",
        message: "What tests do you run?",
        name: "Tests"
      },
      {
        type: "input",
        message: "Who Contributed to the Application?",
        name: "Questions"
      }
  ])
  .then(function(response) {

    console.log(response)


    const readme = `
 
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  4. [Tests](#Tests)
  4. [Questions](#Questions)
  
  # Title: ${response.title}
  # Description
  ${response.description}
  ## Installation <a name="Installation"></a>
  ${response.Installation}
  ## Usage <a name="Usage"></a>
  ${response.usage}
  ## License <a name="License"></a>
  ${response.license}
  ## Contributing <a name="Contributing"></a>
  ${response.Contributing}
  ## Tests <a name="Tests"></a>
  ${response.Tests}
  ## Questions <a name="Questions"></a>
  ${response.Questions}
   `;
  
  
    fs.writeFile('readme.md', readme, function(err, result) {
      if(err) console.log('error', err);
    });
  });



 