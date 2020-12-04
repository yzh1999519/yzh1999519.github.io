var grades = [];
var hours = [];

var $ = function (id) { return document.getElementById(id); };

var addScore = function () {
    var grade = $("grade").value;
    var hour = $("hour").value;
    
    grades[grades.length] = grade;
    hours[hours.length] = hour;
}

var displayResults = function () {
    var sumg = 0;
    var sumh = 0;
    for(var i=0; i<grades.length; i++) {
        sumg = sumg + grades[i];
        }
     for(var j=0; j<hours.length; j++) {
        sumh = sumh + hours[j];
        }

    var average = sumg / sumh;
    
    $("results").innerHTML = "<h2>Results</h2> <p>Average score="+average+"</p>";
}

var displayScores = function () {
    var html = "<h2>Hours</h2><tr><td><b>Grade</b></td><td><b>Hour</b></td></tr>"
    for(var i=0;i<hours.length;i++) {
        html = html + "<tr><td style = \"text-aligen: center\">"+grades[i]+"</td><td>"+hours[i]+"</td></tr>";
    }
    
    $("scores_table").innerHTML = html;
}

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


  