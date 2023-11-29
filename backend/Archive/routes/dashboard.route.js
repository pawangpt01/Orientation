const express = require('express');
const DashboardController = require('../controllers/DashboardController');
const  { apiAuthMiddleware }  = require('../middlewares/auth.middleware');
const dashboardRoute = express.Router();

// Create object
const dashboardController = new DashboardController();

dashboardRoute.get('/pack', dashboardController.pack);
dashboardRoute.post('/about',apiAuthMiddleware, dashboardController.setAbout);
dashboardRoute.post('/project', apiAuthMiddleware,dashboardController.setProject)
dashboardRoute.post('/questionnaire', apiAuthMiddleware,dashboardController.setQuestionnaire)


module.exports = dashboardRoute;