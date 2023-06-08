google.charts.load("current", {packages:["imagesparkline"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        [''],
        [14],
        [18],
        [20],
    ]);
    for (var i = 0; i < 20; i++) {
        var randomValue = Math.floor(Math.random() * 31) + 20; // Random number between 20 and 50
        data.addRow([randomValue]);
    }
    // Generate 30 values between 10 and 15
    for (var i = 0; i < 30; i++) {
        var randomValue = Math.floor(Math.random() * 6) + 10; // Random number between 10 and 15
        data.addRow([randomValue]);
    }

var chart = new google.visualization.ImageSparkLine(document.getElementById('spark_line_dev2'));

chart.draw(data, {width: 120, height: 40, showAxisLines: false,  showValueLabels: false, labelPosition: 'left'});
}