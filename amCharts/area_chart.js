

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("area_chart_div");


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
    pinchZoomX: true
}));


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineX.set("forceHidden", true);
cursor.lineY.set("forceHidden", true);

// Generate random data
var date = new Date();
date.setHours(0, 0, 0, 0);

// var value = 20;
// function generateData() {
//     value = am5.math.round(Math.random() * 150 + 350, 1);
//     am5.time.add(date, "day", 1);
//     return {
//         date: date.getTime(),
//         value: value
//     };
// }


// function generateDatas(count) {
//     var data = [];
//     for (var i = 0; i < count; ++i) {
//         data.push(generateData());
//     }
//     return data;
// }

function generateDatas() {
    return [
        {
            "date": 1685556000000,
            "value": 488.7
          },
          {
            "date": 1685642400000,
            "value": 462
          },
          {
            "date": 1685728800000,
            "value": 388.1
          },
          {
            "date": 1685815200000,
            "value": 456
          },
          {
            "date": 1685901600000,
            "value": 479.7
          },
          {
            "date": 1685988000000,
            "value": 466.2
          },
          {
            "date": 1686074400000,
            "value": 356.9
          },
          {
            "date": 1686160800000,
            "value": 491
          },
          {
            "date": 1686247200000,
            "value": 446
          },
          {
            "date": 1686333600000,
            "value": 356.3
          },
          {
            "date": 1686420000000,
            "value": 388.2
          },
          {
            "date": 1686506400000,
            "value": 447
          },
          {
            "date": 1686592800000,
            "value": 490.7
          },
          {
            "date": 1686679200000,
            "value": 419
          },
          {
            "date": 1686765600000,
            "value": 410.8
          },
          {
            "date": 1686852000000,
            "value": 369
          },
          {
            "date": 1686938400000,
            "value": 359.3
          },
          {
            "date": 1687024800000,
            "value": 354.9
          },
          {
            "date": 1687111200000,
            "value": 382.3
          },
          {
            "date": 1687197600000,
            "value": 484.2
          },
          {
            "date": 1687284000000,
            "value": 444.4
          },
          {
            "date": 1687370400000,
            "value": 383.7
          },
          {
            "date": 1687456800000,
            "value": 445.1
          },
          {
            "date": 1687543200000,
            "value": 381
          },
          {
            "date": 1687629600000,
            "value": 475.2
          },
          {
            "date": 1687716000000,
            "value": 438.8
          },
          {
            "date": 1687802400000,
            "value": 462.4
          },
          {
            "date": 1687888800000,
            "value": 388.8
          },
          {
            "date": 1687975200000,
            "value": 361.3
          },
          {
            "date": 1688061600000,
            "value": 439.7
          },
          {
            "date": 1688148000000,
            "value": 428
          },
          {
            "date": 1688234400000,
            "value": 494.8
          },
          {
            "date": 1688320800000,
            "value": 405.3
          },
          {
            "date": 1688407200000,
            "value": 470.8
          },
          {
            "date": 1688493600000,
            "value": 455.6
          },
          {
            "date": 1688580000000,
            "value": 445.2
          },
          {
            "date": 1688666400000,
            "value": 375.6
          },
          {
            "date": 1688752800000,
            "value": 454.5
          },
          {
            "date": 1688839200000,
            "value": 494.6
          },
          {
            "date": 1688925600000,
            "value": 394.8
          },
          {
            "date": 1689012000000,
            "value": 468.8
          },
          {
            "date": 1689098400000,
            "value": 443.7
          },
          {
            "date": 1689184800000,
            "value": 359.3
          },
          {
            "date": 1689271200000,
            "value": 497.4
          },
          {
            "date": 1689357600000,
            "value": 361.7
          },
          {
            "date": 1689444000000,
            "value": 377
          },
          {
            "date": 1689530400000,
            "value": 397.5
          },
          {
            "date": 1689616800000,
            "value": 378.2
          },
          {
            "date": 1689703200000,
            "value": 473.9
          },
          {
            "date": 1689789600000,
            "value": 439.2
          },
          {
            "date": 1689876000000,
            "value": 433.6
          },
          {
            "date": 1689962400000,
            "value": 432
          },
          {
            "date": 1690048800000,
            "value": 354.8
          },
          {
            "date": 1690135200000,
            "value": 466.5
          },
          {
            "date": 1690221600000,
            "value": 437.8
          },
          {
            "date": 1690308000000,
            "value": 431.7
          },
          {
            "date": 1690394400000,
            "value": 469.2
          },
          {
            "date": 1690480800000,
            "value": 440.5
          },
          {
            "date": 1690567200000,
            "value": 488.2
          },
          {
            "date": 1690653600000,
            "value": 370.8
          },
          {
            "date": 1690740000000,
            "value": 378
          },
          {
            "date": 1690826400000,
            "value": 488.4
          },
          {
            "date": 1690912800000,
            "value": 499.8
          },
          {
            "date": 1690999200000,
            "value": 408.8
          },
          {
            "date": 1691085600000,
            "value": 430.2
          },
          {
            "date": 1691172000000,
            "value": 386.2
          },
          {
            "date": 1691258400000,
            "value": 386.4
          },
          {
            "date": 1691344800000,
            "value": 374.2
          },
          {
            "date": 1691431200000,
            "value": 379
          },
          {
            "date": 1691517600000,
            "value": 420.3
          },
          {
            "date": 1691604000000,
            "value": 373.8
          },
          {
            "date": 1691690400000,
            "value": 370.8
          },
          {
            "date": 1691776800000,
            "value": 458.6
          },
          {
            "date": 1691863200000,
            "value": 395.4
          },
          {
            "date": 1691949600000,
            "value": 370
          },
          {
            "date": 1692036000000,
            "value": 425
          },
          {
            "date": 1692122400000,
            "value": 434.1
          },
          {
            "date": 1692208800000,
            "value": 479.7
          },
          {
            "date": 1692295200000,
            "value": 459.9
          },
          {
            "date": 1692381600000,
            "value": 400.8
          },
          {
            "date": 1692468000000,
            "value": 414.5
          },
          {
            "date": 1692554400000,
            "value": 487.5
          },
          {
            "date": 1692640800000,
            "value": 412.2
          },
          {
            "date": 1692727200000,
            "value": 486.6
          },
          {
            "date": 1692813600000,
            "value": 486.6
          },
          {
            "date": 1692900000000,
            "value": 449.5
          },
          {
            "date": 1692986400000,
            "value": 442
          },
          {
            "date": 1693072800000,
            "value": 444.1
          },
          {
            "date": 1693159200000,
            "value": 471.7
          },
          {
            "date": 1693245600000,
            "value": 362.4
          },
          {
            "date": 1693332000000,
            "value": 465.1
          },
          {
            "date": 1693418400000,
            "value": 464.5
          },
          {
            "date": 1693504800000,
            "value": 363.9
          },
          {
            "date": 1693591200000,
            "value": 357
          },
          {
            "date": 1693677600000,
            "value": 452.8
          },
          {
            "date": 1693764000000,
            "value": 487
          },
          {
            "date": 1693850400000,
            "value": 427
          },
          {
            "date": 1693936800000,
            "value": 447.1
          },
          {
            "date": 1694023200000,
            "value": 402.1
          },
          {
            "date": 1694109600000,
            "value": 454.2
          }


    ];
}


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    baseInterval: {
        timeUnit: "minute",
        count: 15
    },
    renderer: am5xy.AxisRendererX.new(root, {})
}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
    })
}));

series.fills.template.setAll({
    fillOpacity: 0.2,
    visible: true
});


// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
}));




// Set data
var data = generateDatas();
series.data.setAll(data);


var rangeDate = new Date();
am5.time.add(rangeDate, "day", Math.round(series.dataItems.length / 2));
var rangeTime = rangeDate.getTime();

// add series range
var seriesRangeDataItem = yAxis.makeDataItem({ value: 400, endValue: 0 });
var seriesRange = series.createAxisRange(seriesRangeDataItem);
seriesRange.fills.template.setAll({
    visible: true,
    opacity: 0.3
});

seriesRange.fills.template.set("fill", am5.color(0x000000));
seriesRange.strokes.template.set("stroke", am5.color(0x000000));

seriesRangeDataItem.get("grid").setAll({
    strokeOpacity: 1,
    visible: true,
    stroke: am5.color(0x000000),
    strokeDasharray: [2, 2]
})

seriesRangeDataItem.get("label").setAll({
    location: 0,
    visible: true,
    text: "Target",
    inside: true,
    centerX: 0,
    centerY: am5.p100,
    fontWeight: "bold"
})

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);