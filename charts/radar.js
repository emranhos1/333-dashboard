am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("radar_chart_div");


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX"
  }));

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
  var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
    behavior: "zoomX"
  }));

  cursor.lineY.set("visible", false);


  // Create axes and their renderers
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
  var xRenderer = am5radar.AxisRendererCircular.new(root, {});
  xRenderer.labels.template.setAll({
    radius: 10
  });

  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0,
    categoryField: "country",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5radar.AxisRendererRadial.new(root, {})
  }));


  // Create series
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
  var series = chart.series.push(am5radar.RadarLineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "litres",
    categoryXField: "country",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueY}"
    })
  }));

  series.strokes.template.setAll({
    strokeWidth: 2
  });

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        radius: 5,
        fill: series.get("fill")
      })
    });
  });


  // Set data
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
  // Set data
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
  var data = [{
    "country": "333-Main Menu",
    "litres": 202
  }, {
    "country": "333-1",
    "litres": 202
  }, {
    "country": "333 - 2",
    "litres": 301
  }, {
    "country": "333 - 3",
    "litres": 266
  }, {
    "country": "333 - 4",
    "litres": 165
  }, {
    "country": "333 - 5",
    "litres": 139
  }, {
    "country": "333 - 6",
    "litres": 336
  }, {
    "country": "333 - 7",
    "litres": 290
  }, {
    "country": "333 - 8",
    "litres": 325
  }, {
    "country": "333 - 9",
    "litres": 40
  }];
  series.data.setAll(data);
  xAxis.data.setAll(data);


  // Animate chart and series in
  // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
  series.appear(1000);
  chart.appear(1000, 100);

}); // end am5.ready()
