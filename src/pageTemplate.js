function objectUnpack(data) {
    let str = ""
    for (let item of data) {
        let employeeInfo = Object.entries(item)
        str += `<h2>${employeeInfo[0][1]}</h2>
<h3>${employeeInfo[4][1]}</h3>
<p>${employeeInfo[1][0].toUpperCase()} : ${employeeInfo[1][1]}</p>
<p>${employeeInfo[2][0]} : ${employeeInfo[2][1]}</p>
<p>${employeeInfo[3][0]} : ${employeeInfo[3][1]}</p>`
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
            <title>Portfolio Demo</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
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