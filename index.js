// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input via Inquirer

inquirer
  .prompt([
    
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the application?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process of the application.',
      },

      {
        type: 'input',
        name: 'usage',
        message: 'Please describe how the installation should be used.',
      },

      {
        type: 'input',
        name: 'contributions',
        message: 'Please describe how other developers can contribute to the application.',
      },

      {
        type: 'input',
        name: 'tests',
        message: 'Please explain how to test the application and provide examples on how to run them.',
      },

      {
        type: 'list',
        message: 'What type of licence would you like to include with your application?',
        name: 'licence',
        choices: ['None', 'MIT', 'Apache 2.0', 'GNU General Public Licence v3.0'],
      },


      {
        type: 'input',
        name: 'gitHubUserName',
        message: 'Please type the github username you want to use for this application.',
      },

      {
        type: 'input',
        name: 'email',
        message: 'Please type the email address other developers can use to contact you about this application.',
      },
      
  ])
  .then((data) => {

    let licenceMarkdown = "";

// Create a function that returns a license badge based on which license is passed in

    function returnlicenceMarkdown() {

        // Create a function that returns the license link
     
     switch (data.licence) {
        case 'MIT':
          licenceMarkdown = "![Static Badge](https://img.shields.io/badge/MIT_Licence-blue)";
          break;
        case 'Apache 2.0':
            licenceMarkdown = "![Static Badge](https://img.shields.io/badge/Apache_2.0_Licence-blue)";
          break;
        case 'GNU General Public Licence v3.0':
            licenceMarkdown = "![Static Badge](https://img.shields.io/badge/GNU_General_Public_Licence_v3.0-blue)";
          break;
        case 'None':
            licenceMarkdown = "![Static Badge](https://img.shields.io/badge/No_Licence-blue)";
          break;
        default:
            licenceMarkdown = "![Static Badge](https://img.shields.io/badge/No_Licence-blue)";
      }
     

      return licenceMarkdown;

    }

    returnlicenceMarkdown();

// Create a function to generate markdown for README

    function generateMarkdown() {
        return `${licenceMarkdown}\n\n #${data.title}\n\n##Installation\n ${data.installation}\n\n##Usage\n ${data.usage}\n\n##Contributions\n ${data.contributions}\n\n##Tests\n ${data.tests}\n\n##Questions\n Please address your questions to ${data.email} or visit my GitHub profile at https://github.com/${data.gitHubUserName} \n\n##Licence\n ${data.licence} 
      `;
      }

// Create a function to write README file

    fs.writeFile("README.md", generateMarkdown(), (err) =>
      err ? console.log(err) : console.log('Your README file was successfully generated.')
    );
  });



