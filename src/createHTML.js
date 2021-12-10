const generateManager = (answers) => {
    return `
    <div class="card col-lg-3 mb-3">
        <div class="card-body">
    
 
    <div class="card-header">
      <h2 class="card-title">${answers.name}</h2>
      <h3 class="card-title">Manager</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item"><a href="mailto:${answers.email}" target="_blank">Email</a></li>
      <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
    </ul>
        </div>
  </div>
    `;
}

const generateEngineer = (answers) => {
    return `
    <div class="card col-lg-3 mb-3">
        <div class="card-body">
    
  
    <div class="card-header">
      <h2 class="card-title">${answers.name}</h2>
      <h3 class="card-title">Engineer</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item"><a href="mailto:${answers.email}" target="_blank">Email</a></li>
      <li class="list-group-item"><a href="https://www.github.com/${answers.github}" target="_blank">Github</a></li>
    </ul>
        </div>
    </div>
    
    `;
}

const generateIntern = (answers) => {
    return `
    
    <div class="card col-lg-3 mb-3">
        <div class="card-body">
    <div class="card-header">
      <h2 class="card-title">${answers.name}</h2>
      <h3 class="card-title">Intern</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item"><a href="mailto:${answers.email}" target="_blank">Email</a></li>
      <li class="list-group-item">School: ${answers.school}</li>
    </ul>
 
        </div>
    </div>
    `;
}

const generateCard = data => {
    const managerInfo = data.manager.map(generateManager).join('');
    const engineerInfo = data.engineer.map(generateEngineer).join('');
    const internInfo = data.intern.map(generateIntern).join('');
    
    return managerInfo + engineerInfo + internInfo
};


const generateHtml = (data) => { 
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
     integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>    
    
    <section>
    <div class="container">
        <div class="row">
    ${generateCard(data)}
        </div>
    </div>
    </section>
</body>
</html>
    `;
};

module.exports = generateHtml;