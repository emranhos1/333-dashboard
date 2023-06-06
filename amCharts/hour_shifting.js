am5.ready(function () {



  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("agent_hourly_shift_div");

  var data = [{
    "date": "2012-01-01",
    "calls_offered": 227,
    "call_answered": 40.71,
    "abandoned": 408,
    "call_target": 500
  }, {
    "date": "2012-01-02",
    "calls_offered": 371,
    "call_answered": 38.89,
    "abandoned": 482,
    "call_target": 450
  }, {
    "date": "2012-01-03",
    "calls_offered": 433,
    "call_answered": 34.22,
    "abandoned": 562,
    "call_target": 440
  }, {
    "date": "2012-01-04",
    "calls_offered": 345,
    "call_answered": 30.35,
    "abandoned": 379,
    "call_target": 450
  }, {
    "date": "2012-01-05",
    "calls_offered": 480,
    "call_answered": 25.83,
    "abandoned": 501,
    "call_target": 460
  }, {
    "date": "2012-01-06",
    "calls_offered": 386,
    "call_answered": 30.46,
    "abandoned": 443,
    "call_target": 470
  }, {
    "date": "2012-01-07",
    "calls_offered": 348,
    "call_answered": 29.94,
    "abandoned": 405,
    "call_target": 480
  }, {
    "date": "2012-01-08",
    "calls_offered": 238,
    "call_answered": 29.76,
    "abandoned": 309,
    "call_target": 490
  }, {
    "date": "2012-01-09",
    "calls_offered": 218,
    "call_answered": 32.8,
    "abandoned": 287,
    "call_target": 510
  }, {
    "date": "2012-01-10",
    "calls_offered": 349,
    "call_answered": 35.49,
    "abandoned": 485,
    "call_target": 520
  }, {
    "date": "2012-01-11",
    "calls_offered": 603,
    "call_answered": 39.1,
    "abandoned": 890,
    "call_target": 530
  }, {
    "date": "2012-01-12",
    "calls_offered": 534,
    "call_answered": 39.74,
    "abandoned": 810,
    "call_target": 540
  }];


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelY: "none"
  }));

  chart.zoomOutButton.set("forceHidden", true);

  chart.get("colors").set("step", 2);

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    baseInterval: { timeUnit: "day", count: 1 },
    renderer: am5xy.AxisRendererX.new(root, { minGridcalls_offered: 50 }),
    tooltip: am5.Tooltip.new(root, {})
  }));


  var calls_offeredAxisRenderer = am5xy.AxisRendererY.new(root, {});
  calls_offeredAxisRenderer.grid.template.set("forceHidden", true);
  var calls_offeredAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: calls_offeredAxisRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));

  var latitudeAxisRenderer = am5xy.AxisRendererY.new(root, {});
  latitudeAxisRenderer.grid.template.set("forceHidden", true);
  var latitudeAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: latitudeAxisRenderer,
    forceHidden: true
  }));

  var durationAxisRenderer = am5xy.AxisRendererY.new(root, {
    opposite: true
  });
  durationAxisRenderer.grid.template.set("forceHidden", true);
  var durationAxis = chart.yAxes.push(am5xy.DurationAxis.new(root, {
    baseUnit: "minute",
    renderer: durationAxisRenderer,
    extraMax: 0.3
  }));

  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var calls_offeredSeries = chart.series.push(am5xy.ColumnSeries.new(root, {
    xAxis: xAxis,
    yAxis: calls_offeredAxis,
    valueYField: "calls_offered",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "Call Offered: {valueY}"
    })
  }));

  calls_offeredSeries.data.processor = am5.DataProcessor.new(root, {
    dateFields: ["date"],
    dateFormat: "yyyy-MM-dd"
  });

  var latitudeSeries = chart.series.push(am5xy.LineSeries.new(root, {
    xAxis: xAxis,
    yAxis: latitudeAxis,
    valueYField: "call_answered",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "Call Answered: {valueY})"
    })
  }));

  latitudeSeries.strokes.template.setAll({ strokeWidth: 2 });

  // Add circle bullet
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
  latitudeSeries.bullets.push(function () {
    var graphics = am5.Circle.new(root, {
      strokeWidth: 2,
      radius: 5,
      stroke: latitudeSeries.get("stroke"),
      fill: root.interfaceColors.get("background"),
    });

    graphics.adapters.add("radius", function (radius, target) {
      return target.dataItem.dataContext.townSize;
    })

    return am5.Bullet.new(root, {
      sprite: graphics
    });
  });

  var durationSeries = chart.series.push(am5xy.LineSeries.new(root, {
    xAxis: xAxis,
    yAxis: durationAxis,
    valueYField: "abandoned",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "Abandoned Calls: {valueY.formatDuration()}"
    })
  }));

  durationSeries.strokes.template.setAll({ strokeWidth: 2 });

  // Add circle bullet
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
  durationSeries.bullets.push(function () {
    var graphics = am5.Rectangle.new(root, {
      width: 10,
      height: 10,
      centerX: am5.p50,
      centerY: am5.p50,
      fill: durationSeries.get("stroke")
    });

    return am5.Bullet.new(root, {
      sprite: graphics
    });
  });



  // Create the "target" line series
  var targetSeries = chart.series.push(am5xy.LineSeries.new(root, {
    xAxis: xAxis,
    yAxis: calls_offeredAxis,
    valueYField: "call_target",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "Target: {valueY}"
    })
  }));

  targetSeries.strokes.template.setAll({ strokeWidth: 2 });
  targetSeries.strokes.template.set("stroke", am5.color(0xff0000)); 


  targetSeries.bullets.push(function () {
    var graphics = am5.Circle.new(root, {
      strokeWidth: 2,
      radius: 5,
      stroke: targetSeries.get("stroke"),
      fill: root.interfaceColors.get("background"),
    });

    graphics.adapters.add("radius", function (radius, target) {
      return target.dataItem.dataContext.townSize;
    });

    return am5.Bullet.new(root, {
      sprite: graphics
    });
  });

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis,
    yAxis: calls_offeredAxis
  }));


  calls_offeredSeries.data.setAll(data);
  latitudeSeries.data.setAll(data);
  durationSeries.data.setAll(data);
  targetSeries.data.setAll(data);
  xAxis.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  calls_offeredSeries.appear(1000);
  chart.appear(1000, 100);


});