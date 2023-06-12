am5.ready(function () {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Increase contrast by taking evey second color
chart.colors.step = 2;

// Add data
chart.data = generateChartData();

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 50;

// Create series
function createAxisAndSeries(field, name, opposite, bullet) {
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = field;
  series.dataFields.dateX = "date";
  series.strokeWidth = 2;
  series.yAxis = valueAxis;
  series.name = name;
  series.tooltipText = "{name}: [bold]{valueY}[/]";
  series.tensionX = 0.8;
  
  var interfaceColors = new am4core.InterfaceColorSet();
  

  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.stroke = interfaceColors.getFor("background");
  bullet.circle.strokeWidth = 2;


  
  valueAxis.renderer.line.strokeOpacity = 1;
  valueAxis.renderer.line.strokeWidth = 2;
  valueAxis.renderer.line.stroke = series.stroke;
  valueAxis.renderer.labels.template.fill = series.stroke;
  valueAxis.renderer.opposite = opposite;
  valueAxis.renderer.grid.template.disabled = true;
}

createAxisAndSeries("targets", "targets", false, "circle");
createAxisAndSeries("offered", "offered", false, "circle");
createAxisAndSeries("answered", "answered", true, "circle");
createAxisAndSeries("agent", "agent", true, "circle");

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();

// generate some random data, quite different range
function generateChartData() {
  var chartData = [];
  var firstDate = new Date();
  firstDate.setDate(firstDate.getDate());
  firstDate.setHours(0, 0, 0, 0);

  var targets = 160;
  var offered = 200
  var answered = 290;
  var agent = 20;

  for (var i = 0; i < 15; i++) {
    // we create date objects here. In your data, you can have date strings
    // and then set format of your dates using chart.dataDateFormat property,
    // however when possible, use date objects, as this will speed up chart rendering.
    var newDate = new Date(firstDate);
    newDate.setDate(newDate.getDate() + i);

    targets += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    offered += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    answered += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    let agent = 0;
    agent += Math.floor(Math.random() * 6) + 15;

    console.log("agent",agent);

    chartData.push({
      date: newDate,
      targets: targets,
      offered: offered,
      answered: answered,
      agent: agent
    });
  }
  return chartData;

}
}); // end am5.ready()