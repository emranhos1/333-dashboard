am5.ready(function () {
  var chart = am4core.create("scqc_heat_map_div", am4charts.XYChart);

// Add data
    chart.data = [{
        "category": "Education",
        "value": 120
    }, {
        "category": "Rail Sheba",
        "value": 110
    }, {
        "category": "Environment Pollution",
        "value": 100
    }, {
        "category": "Food Safety",
        "value": 90
    }, {
        "category": "Threat After Raising Complaint",
        "value": 80
    }, {
        "category": "Holding Taxes/ Trade Licensethers",
        "value": 70
    }, {
        "category": "Government Property",
        "value": 60
    }, {
      "category": "Waste Management",
      "value": 50
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