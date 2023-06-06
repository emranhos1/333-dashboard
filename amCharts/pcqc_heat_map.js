am5.ready(function () {
// Create chart instance
var chart = am4core.create("pcqc_heat_map_div", am4charts.XYChart);

// Add data
    chart.data = [{
        "category": "No Responsibility and Disconnected Call",
        "value": 30
    }, {
        "category": "Helpline Info",
        "value": 40
    }, {
        "category": "Queries",
        "value": 50
    }, {
        "category": "Phone",
        "value": 60
    }, {
        "category": "Complaint Customer Experience",
        "value": 70
    }, {
        "category": "Others",
        "value": 80
    }, {
        "category": "(MODMR)",
        "value": 90
    }, {
      "category": "Notifications",
      "value": 100
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