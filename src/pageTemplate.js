function objectUnpack(data) {
	let str = "";
	for (let item of data) {
		let employment = item.getRole();
		let employeeTypeInfo =
			employment === "Manager"
				? ["Office Line", item.getOfficeNumber()]
				: employment === "Intern"
				? ["School", item.getSchool()]
				: [
						"GitHub",
						`<a href="https://www.github.com/${item.getGithub()}" target="_blank">${item.getGithub()}</a>`,
				  ];
		str += `
        <div class="card card-local text-white bg-primary col-6 col-xl-4 my-3 px-0">
            <div class="card-body px-0 pb-0">
                <div class="card-title px-3">
                    <h5>${item.getName()}</h5>
                    <h6>${item.getIcon()} ${employment}</h6>
                </div>
                <ul class="list-group list-group-flush text-dark bg-light">
                    <li class="list-group-item">ID : ${item.getId()}</li>>
                    <li class="list-group-item">Email : <a href="mailto:${item.getEmail()}">${item.getEmail()}</a></li>>
                    <li class="list-group-item">${employeeTypeInfo[0]} : ${employeeTypeInfo[1]}</li>>
                </ul>
            </div>
        </div>`;
	}
	return str;
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
            <div class="container container-local">
                <div class="row row-local">
                    ${objectUnpack(data)}
                </div>
            </div>
        </body>
    </html>
    `;
};
