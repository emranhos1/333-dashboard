am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("stacked_area_div");
    
    
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
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true
    }));
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    
    
    // The data
    var data = [{
      "year": "1994",
      "agent": 1587,
      "transferred": 650,
      "phantom": 121
    }, {
      "year": "1995",
      "agent": 1567,
      "transferred": 683,
      "phantom": 146
    }, {
      "year": "1996",
      "agent": 1617,
      "transferred": 691,
      "phantom": 138
    }, {
      "year": "1997",
      "agent": 1630,
      "transferred": 642,
      "phantom": 127
    }, {
      "year": "1998",
      "agent": 1660,
      "transferred": 699,
      "phantom": 105
    }, {
      "year": "1999",
      "agent": 1683,
      "transferred": 721,
      "phantom": 109
    }, {
      "year": "2000",
      "agent": 1691,
      "transferred": 737,
      "phantom": 112
    }, {
      "year": "2001",
      "agent": 1298,
      "transferred": 680,
      "phantom": 101
    }, {
      "year": "2002",
      "agent": 1275,
      "transferred": 664,
      "phantom": 97
    }, {
      "year": "2003",
      "agent": 1246,
      "transferred": 648,
      "phantom": 93
    }, {
      "year": "2004",
      "agent": 1318,
      "transferred": 697,
      "phantom": 111
    }, {
      "year": "2005",
      "agent": 1213,
      "transferred": 633,
      "phantom": 87
    }, {
      "year": "2006",
      "agent": 1199,
      "transferred": 621,
      "phantom": 79
    }, {
      "year": "2007",
      "agent": 1110,
      "transferred": 210,
      "phantom": 81
    }, {
      "year": "2008",
      "agent": 1165,
      "transferred": 232,
      "phantom": 75
    }, {
      "year": "2009",
      "agent": 1145,
      "transferred": 219,
      "phantom": 88
    }, {
      "year": "2010",
      "agent": 1163,
      "transferred": 201,
      "phantom": 82
    }, {
      "year": "2011",
      "agent": 1180,
      "transferred": 285,
      "phantom": 87
    }, {
      "year": "2012",
      "agent": 1159,
      "transferred": 277,
      "phantom": 71
    }];
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      startLocation: 0.5,
      endLocation: 0.5,
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    
    function createSeries(name, field) {
      var series = chart.series.push(am5xy.LineSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        stacked:true,
        valueYField: field,
        categoryXField: "year",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
        })
      }));
    
      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true
      });
    
      series.data.setAll(data);
      series.appear(1000);
    }
    
    createSeries("By Agent", "agent");
    createSeries("transferred Calls", "transferred");
    createSeries("Phantom Calls", "phantom");
    
    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    // Create axis ranges
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/
    var rangeDataItem = xAxis.makeDataItem({
      category: "2001",
      endCategory: "2003"
    });
    
    var range = xAxis.createAxisRange(rangeDataItem);
    
    rangeDataItem.get("grid").setAll({
      stroke: am5.color(0x00ff33),
      strokeOpacity: 0.5,
      strokeDasharray: [3]
    });
    
    rangeDataItem.get("axisFill").setAll({
      fill: am5.color(0x00ff33),
      fillOpacity: 0.1,
      visible:true
    });
    
    rangeDataItem.get("label").setAll({
      inside: true,
      text: "Cyclone Mocha",
      rotation: 90,
      centerX: am5.p100,
      centerY: am5.p100,
      location: 0,
      paddingBottom: 10,
      paddingRight: 15
    });
    
    
    var rangeDataItem2 = xAxis.makeDataItem({
      category: "2007"
    });
    
    var range2 = xAxis.createAxisRange(rangeDataItem2);
    
    rangeDataItem2.get("grid").setAll({
      stroke: am5.color(0x00ff33),
      strokeOpacity: 1,
      strokeDasharray: [3]
    });
    
    rangeDataItem2.get("axisFill").setAll({
      fill: am5.color(0x00ff33),
      fillOpacity: 0.1,
      visible:true
    });
    
    rangeDataItem2.get("label").setAll({
      inside: true,
      text: "Cyclone Biporjoy",
      rotation: 90,
      centerX: am5.p100,
      centerY: am5.p100,
      location: 0,
      paddingBottom: 10,
      paddingRight: 15
    });
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()