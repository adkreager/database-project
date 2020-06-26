const Pool = require('pg').Pool
const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'commerce',
    password: 'admindb',
    port: 5432,
})


//CREATE users

//READ a user's information

//UPDATE a user's information

//DELETE a user's information

//LIST all users information
const getUsers = (request, response) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
}