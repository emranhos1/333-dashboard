am5.ready(function(){

am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("service_type_div", am4charts.XYChart);

// Add data
    chart.data = [{
        "category": "Complaints",
        "value": 450
    }, {
        "category": "Imcomplete Complaints",
        "value": 1200
    }, {
        "category": "Queries",
        "value": 1850
    }, {
        "category": "No Response and Disconnected Call",
        "value": 450
    }, {
        "category": "Complaint Customer Experience",
        "value": 1200
    }, {
        "category": "Emergency Assistance",
        "value": 1850
    }, {
        "category": "MODMR",
        "value": 1250
    }];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueX = "value";
series.dataFields.categoryY = "category";

var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{value}";
valueLabel.label.fontSize = 20;
});