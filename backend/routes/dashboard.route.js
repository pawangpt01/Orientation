const express = require('express');
const DashboardController = require('../controllers/DashboardController');
const JoiningKitController = require('../controllers/JoiningKitController');
const  { apiAuthMiddleware }  = require('../middlewares/auth.middleware');
const dashboardRoute = express.Router();

// Create object
const dashboardController = new DashboardController();
const joiningKitController= new JoiningKitController();

dashboardRoute.get('/pack',apiAuthMiddleware, dashboardController.pack);
dashboardRoute.post('/about',apiAuthMiddleware, dashboardController.setAbout);
dashboardRoute.post('/project', apiAuthMiddleware,dashboardController.setProject)
dashboardRoute.post('/questionnaire', apiAuthMiddleware,dashboardController.setQuestionnaire)

//Joining Kit form
dashboardRoute.post('/wizard',apiAuthMiddleware, joiningKitController.insert);
dashboardRoute.post('/joiningkit/uploaddocument',apiAuthMiddleware, joiningKitController.upload);


module.exports = dashboardRoute;