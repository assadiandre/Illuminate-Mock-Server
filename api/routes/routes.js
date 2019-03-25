
module.exports = function(app) {

	var gradeController = require('../controllers/controller');

	app.route('/periodgrades/:studentID/:period')
		.get(gradeController.getClassesByPeriod)


	app.route('/allclasses/:studentID')
		.get(gradeController.getAllClasses)

		


		
}

