

var className = document.getElementById("page-title").innerText.substr(11);
var allAssignments = document.getElementsByTagName("tbody")[1];
var arrayAssignments = allAssignments.getElementsByTagName("tr");
var printArray = []

for (var i = 0; i < arrayAssignments.length; i++){
	var tr = arrayAssignments[i].children
	var grade = tr[2].innerText.split("/");
	var assignment_name = tr[1].innerText;
	var date = tr[5].innerText;

	if ( grade[0] ) {
		grade[0] = grade[0].replace(/\s+/g, '');
	}
	if (grade[1] ) {
		grade[1] = grade[1].replace(/\s+/g, '');
	}

	var objectToAdd = { 
		class:className, 
		assignment_name:assignment_name,
		grade_numerator: grade[0],
		grade_denominator: grade[1],
		date: date
	}
	printArray.push(objectToAdd)

}


var saveData = function(data, filename){
    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}

saveData(printArray,className + ".txt")



