am5.ready(function () {



  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("agent_hourly_shift_div");

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
      call_call: 1,
      call_targat: 5,
      call_abandonded: 3,
      call_answered: 3
    },
    {
      time: "7.00",
      call_landed: 1,
      call_targat: 2,
      call_abandonded: 6,
      call_answered: 4
    },
    {
      time: "8.30",
      call_landed: 2,
      call_targat: 3,
      call_abandonded: 1,
      call_answered: 5
    },
    {
      time: "9.00",
      call_landed: 3,
      call_targat: 4,
      call_abandonded: 1,
      call_answered: 8
    },
    {
      time: "9.30",
      call_landed: 5,
      call_targat: 1,
      call_abandonded: 2,
      call_answered: 1
    },
    {
      time: "10.00",
      call_landed: 3,
      call_targat: 2,
      call_abandonded: 1,
      call_answered: 6
    },
    {
      time: "10.30",
      call_landed: 1,
      call_targat: 2,
      call_abandonded: 3,
      call_answered: 7
    },
    {
      time: "11.00",
      call_landed: 2,
      call_targat: 1,
      call_abandonded: 5,
      call_answered: 4
    },
    {
      time: "11.30",
      call_landed: 3,
      call_targat: 5,
      call_abandonded: 2,
      call_answered: 2
    },
    {
      time: "12.00",
      call_landed: 4,
      call_targat: 3,
      call_abandonded: 6,
      call_answered: 5
    },
    {
      time: "12.30",
      call_landed: 1,
      call_targat: 2,
      call_abandonded: 4,
      call_answered: 3
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
  
  createSeries("call_landed", "call_landed");
  createSeries("call_targat", "call_targat");
  createSeries("call_abandonded", "call_abandonded");
  createSeries("call_answered", "call_answered");
  
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
  
});