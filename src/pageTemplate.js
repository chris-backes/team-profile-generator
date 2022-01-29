function objectUnpack(data) {
    let str = ""
    for (let item of data) {
        let employment = item.getRole()
        let extra = employment = 'Manager' ? ["Office Line", item.getOfficeNumber()] : employment = 'Intern' ? ['School', item.getSchool()] : ['GitHub', `<a href="https://www.github.com/${item.getGithub()}">${item.getGithub()}</a>`]
        str += `<h2>${employment}</h2>
<h3>${employment}</h3>
<p>Name : ${item.getName()}</p>
<p>ID : ${item.getId()}</p>
<p>Email : <a href="mailto:${item.getEmail()}">${item.getEmail()}</a></p>
<p>${extra[0]} : ${extra[1]}</p>`
    }
}

module.exports = (data) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Employee Info</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./style.css">
        </head>
        <header>
            <h1>My Team</h1>
        </header>
        <body>
${objectUnpack(data)}
        </body>
    </html>
    `;
};