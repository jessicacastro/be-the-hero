const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

/**
 * DRIVER: SELECT * FROM users;
 * QUERY BUILDER: table('users').select('*').where(); -- QUALQUER BANCO SQL --> KNEX
 */

app.get('/', (req, res) => {
    return res.json('App works!');
});

app.listen(3333);

