const inquirer = require('inquirer');
const {type} = require('os');
const createHtml = require('./src/create-HTML');
const {writeFile, copyFile} = require('./utils/generateHTML.js');
const Employee = require('./library/Employee');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager');
const { ESRCH } = require('constants');

const teamMembers = {manager: [], engineer: [], intern: []};


const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add any more team members?'
        }
    ])
    .then( ({ addMore }) => {
        if (addMore) {
            createTeam();
        } else {
            writeFile(createHtml(teamMembers));
            copyFile();
        }
    })
};


const promptManager = () => {
    inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Who is the manager of the project?',
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log('Name required');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the manager's employee ID?",
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log('ID required');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email?",
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log('Email required');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the manager's office number?",
                validate: officeNumberInput => {
                    if(officeNumberInput) {
                        return true;
                    } else {
                        console.log('Office number required');
                        return false;
                    }
                }
            },
        ])       
            .then (answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.manager.push(manager);
            createTeam();
        })
};

promptManager()


// create function createTeam() that prompts question if they are engineer or intern
const createTeam = () => {
    console.log('PLEASE ENTER A TEAM MEMBER');
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Engineer', 'Intern']
        }
    ])
    .then (answer => {
        if (answer.role === 'Engineer') {
            getEngineer();
        } else {
            getIntern();
        };
    })
};



const getEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Name required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter engineer's ID number",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('ID required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's e-mail address",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('ID required');
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('github required');
                    return false;
                }
            }  
        }
    ]) 
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.engineer.push(engineer);
        addEmployee()
    })
};


const getIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Name required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter intern's ID number",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('ID required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's e-mail address",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('ID required');
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?" ,
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('school required');
                    return false;
                }
            }  
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.intern.push(intern);
        addEmployee()
    })
};
