/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("cdr_report_div");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(
  am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout,
  pinchZoomX:true
  })
);

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "none"
}));
cursor.lineY.set("visible", false);

// The data
var data = [
  {
    time: "6.00",
    Channel: 1,
    Asterisk: 5,
    Served: 3
  },
  {
    time: "7.00",
    Channel: 1,
    Asterisk: 2,
    Served: 6
  },
  {
    time: "8.30",
    Channel: 2,
    Asterisk: 3,
    Served: 1
  },
  {
    time: "9.00",
    Channel: 3,
    Asterisk: 4,
    Served: 1
  },
  {
    time: "9.30",
    Channel: 5,
    Asterisk: 1,
    Served: 2
  },
  {
    time: "10.00",
    Channel: 3,
    Asterisk: 2,
    Served: 1
  },
  {
    time: "10.30",
    Channel: 1,
    Asterisk: 2,
    Served: 3
  },
  {
    time: "11.00",
    Channel: 2,
    Asterisk: 1,
    Served: 5
  },
  {
    time: "11.30",
    Channel: 3,
    Asterisk: 5,
    Served: 2
  },
  {
    time: "12.00",
    Channel: 4,
    Asterisk: 3,
    Served: 6
  },
  {
    time: "12.30",
    Channel: 1,
    Asterisk: 2,
    Served: 4
  }
];

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, {});
xRenderer.grid.template.set("location", 0.5);
xRenderer.labels.template.setAll({
  location: 0.5,
  multiLocation: 0.5
});

var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "time",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  })
);

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    maxPrecision: 0,
    renderer: am5xy.AxisRendererY.new(root, {
      inversed: false
    })
  })
);

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

function createSeries(name, field) {
  var series = chart.series.push(
    am5xy.LineSeries.new(root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: field,
      categoryXField: "time",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
      })
    })
  );


  series.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        radius: 5,
        fill: series.get("fill")
      })
    });
  });

  // create hover state for series and for mainContainer, so that when series is hovered,
  // the state would be passed down to the strokes which are in mainContainer.
  series.set("setStateOnChildren", true);
  series.states.create("hover", {});

  series.mainContainer.set("setStateOnChildren", true);
  series.mainContainer.states.create("hover", {});

  series.strokes.template.states.create("hover", {
    strokeWidth: 4
  });

  series.data.setAll(data);
  series.appear(1000);
}

createSeries("Channel", "Channel");
createSeries("Asterisk", "Asterisk");
createSeries("Served", "Served");

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal",
  marginBottom: 20
}));

var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  })
);

// Make series change state when legend item is hovered
legend.itemContainers.template.states.create("hover", {});

legend.itemContainers.template.events.on("pointerover", function(e) {
  e.target.dataItem.dataContext.hover();
});
legend.itemContainers.template.events.on("pointerout", function(e) {
  e.target.dataItem.dataContext.unhover();
});

legend.data.setAll(chart.series.values);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);


