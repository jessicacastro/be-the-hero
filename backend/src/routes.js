const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

/**
 * ONGS ROUTES
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * INCIDENTS ROUTES
 */
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);


module.exports = routes;