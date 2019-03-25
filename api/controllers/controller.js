
var MockData = require('../data/mockdata') 

exports.getClassesByPeriod = function(req,res){
	var studentID = req.params.studentID
	var period = req.params.period
	var data = MockData[studentID].grades.sem2[ parseInt(period) - 1 ]
	res.json(data)
}


exports.getAllClasses = function(req,res){
	var studentID = req.params.studentID
	var data = MockData[studentID].classes.sem2
	res.json(data)
}


