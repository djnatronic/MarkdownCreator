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
        message: "What Questions came about from this?",
        name: "Questions"
      }
  ])
  .then(function(response) {

    console.log(response)

    if(response.license == 'MIT'){
    var license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if(response.license == 'MPL'){
    var license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    if(response.license == 'WTF'){
    var license = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    }

    const readme = `
 
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  4. [Tests](#Tests)
  4. [Questions](#Questions)

  # Title
  ${response.title}
  # Description
  ${response.description}
  ## Installation <a name="Installation"></a>
  ${response.Installation}
  ## Usage <a name="Usage"></a>
  ${response.Usage}
  ## License <a name="License"></a>
  ${license}
  ## Contributing <a name="Contributing"></a>
  ${response.Contributing}
  ## Tests <a name="Tests"></a>
  ${response.Tests}
  ## Questions <a name="Questions"></a>
  ${response.Questions}


  #### Created with Nathan's Markdow Creator
   `;
  
  
    fs.writeFile('readme.md', readme, function(err, result) {
      if(err) console.log('error', err);
    });
  });



 