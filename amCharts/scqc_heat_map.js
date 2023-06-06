am5.ready(function () {
  var chart = am4core.create("scqc_heat_map_div", am4charts.XYChart);

// Add data
    chart.data = [{
        "category": "Education",
        "value": 450
    }, {
        "category": "Rail Sheba",
        "value": 500
    }, {
        "category": "Environment Pollution",
        "value": 650
    }, {
        "category": "Food Safety",
        "value": 450
    }, {
        "category": "Threat After Raising Complaint",
        "value": 950
    }, {
        "category": "Holding Taxes/ Trade Licensethers",
        "value": 1150
    }, {
        "category": "Government Property",
        "value": 1100
    }, {
      "category": "Waste Management",
      "value": 1234
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