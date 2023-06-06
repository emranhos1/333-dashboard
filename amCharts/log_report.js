am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("log_report_div");


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "none",
    wheelY: "none"
  }));

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xRenderer = am5xy.AxisRendererX.new(root, {
    minGridDistance: 30
  });
  xRenderer.labels.template.setAll({
    rotation: -90,
    centerY: am5.p50,
    centerX: 0,
    paddingRight: 15
  });
  xRenderer.grid.template.set("visible", false);

  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0.3,
    categoryField: "log",
    renderer: xRenderer
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0.3,
    min: 0,
    renderer: am5xy.AxisRendererY.new(root, {})
  }));


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    categoryXField: "log"
  }));

  // Rounded corners for columns
  series.columns.template.setAll({
    cornerRadiusTL: 5,
    cornerRadiusTR: 5,
    strokeOpacity: 0
  });

  // Make each column to be of a different color
  series.columns.template.adapters.add("fill", function (fill, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  series.columns.template.adapters.add("stroke", function (stroke, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  // Add Label bullet
  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      locationY: 1,
      sprite: am5.Label.new(root, {
        text: "{valueYWorking.formatNumber('#.')}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: 0,
        centerX: am5.p50,
        populateText: true
      })
    });
  });


  // Set data
  var data = [{
    log: "Call Landed",
    value: 200
  }, {
    log: "Calls in Queue",
    value: 30
  }, {
    log: "CCA",
    value: 40
  }, {
    log: "CT",
    value: 35
  }];

  xAxis.data.setAll(data);
  series.data.setAll(data);


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

});