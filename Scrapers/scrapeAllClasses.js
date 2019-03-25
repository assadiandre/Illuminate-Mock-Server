

var allAssignments = document.getElementsByTagName("tbody")[0];
var arrayAssignments = allAssignments.getElementsByTagName("tr");
var printArray = []


for (var i = 0; i < arrayAssignments.length; i++) {
	var specificClass = arrayAssignments[i].children

	var totalGrade = specificClass[0].innerText;
	var grade = totalGrade.slice(2).replace('%', '');;
	var className = specificClass[1].innerText;
	var teacherName = specificClass[3].innerText;


	var object = { name: className, period:(i + 1), grade: grade}

	printArray.push(object)

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

saveData(printArray, "allclasses.txt")




