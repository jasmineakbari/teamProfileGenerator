// check for special conditions
const special = teamData => {
    if (teamData.officeNumber) {
        return `Office Number: ${teamData.officeNumber}`
    }
    if (teamData.school) {
        return `Attending: ${teamData.school}`
    }
    if (teamData.github) {
        return `Github: <a href="https://github.com/${teamData.github}">${teamData.github}</a></p>`
    }
};

const getIcon = teamData => {
    if (teamData.role === Manager) {
        return `<span class="oi" data-glyph="people"></span>`
    }
    if (teamData.role === Employee || Engineer) {
        return `<span class="oi" data-glyph="people"></span>`
    }
    if (teamData.role === Intern) {
        return `<span class="oi" data-glyph="spreadsheet"></span>`
    }
}

// creating cards
const generateCards = teamData => {
    if (!teamData) {
        return '';
    }

    return `
        <div class="container-fluid justify-content-center">
            <div class="row justify-content-center">
                <div class="card text-white bg-secondary mb-3 mb-3 employees text-center p-4" style="max-width: 18rem;">
                ${teamData.map((team) => {
            return `
                <h3>${team.getName()}</h3>
                <h5>${team.getIcon()}</h5>
                <p>${team.getId()}</p>
                <p>Email: <a href="mailto:https://${team.getEmail()}">${team.getEmail()}</a></p>
                <p>${special(team)}</p>
            </div>
    `
    }).join('')}
        </div>
    `
}

module.exports = teamData => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic.min.css" />
            <link rel="stylesheet" href="./style.css" />
            <title>My Team</title>
        </head>
        <body>
            <!-- Heading -->
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid justify-content-center">
                <span class="navbar-brand mb-0 h1">My Team</span>
                </div>
            </nav>  
            <main>
                ${generateCards(teamData)}
            </main>
        </body>                   
        </html>
    `;
};