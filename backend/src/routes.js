const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * LOGIN ROUTES 
 */
routes.post('/sessions', SessionController.create);

/**
 * ONGS ROUTES
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * PROFILE ROUTES
 */
routes.get('/profile', ProfileController.index);

/**
 * INCIDENTS ROUTES
 */
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;