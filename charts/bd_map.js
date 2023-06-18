am5.ready(function () {

    var root = am5.Root.new("bd_map_div");
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    var chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoMercator(),
        layout: root.horizontalLayout
    }));

    loadGeodata("BD");
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        calculateAggregates: true,
        valueField: "value"
    }));

    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x677935)
    });

    polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0x8ab7ff),
        max: am5.color(0x25529a),
        key: "fill"
    }]);

    polygonSeries.mapPolygons.template.events.on("pointerover", function (ev) {
        heatLegend.showValue(ev.target.dataItem.get("value"));
    });



    // load data function here

    function loadGeodata(country) {

        // Default map
        var defaultMap = "bangladeshLow";
        chart.set("projection", am5map.geoMercator());


        // calculate which map to be used
        var currentMap = defaultMap;
        var title = "";
        if (am5geodata_data_countries2[country] !== undefined) {
            currentMap = am5geodata_data_countries2[country]["maps"][0];
        }

        // am5.net.load("district_wise_final.json").then(function (result) {
        am5.net.load("charts/district_wise.json").then(function (result) {
            var geodata = am5.JSONParser.parse(result.response);
            var data = [];
            for (var i = 0; i < geodata.features.length; i++) {
                data.push({
                    id: geodata.features[i].id,
                    value: Math.round(Math.random() * 10000)
                });
            }
            polygonSeries.set("geoJSON", geodata);
            polygonSeries.data.setAll(data)

            console.log("geoJSON", geodata);
        });

        chart.seriesContainer.children.push(am5.Label.new(root, {
            x: 5,
            y: 5,
            text: title,
            background: am5.RoundedRectangle.new(root, {
                fill: am5.color(0xffffff),
                fillOpacity: 0.2
            })
        }))

    }

    var heatLegend = chart.children.push(
        am5.HeatLegend.new(root, {
            orientation: "vertical",
            startColor: am5.color(0x8ab7ff),
            endColor: am5.color(0x25529a),
            startText: "Lowest",
            endText: "Highest",
            stepCount: 5
        })
    );

    heatLegend.startLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("startColor")
    });

    heatLegend.endLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("endColor")
    });

    // change this to template when possible
    polygonSeries.events.on("datavalidated", function () {
        heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
        heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
    });

}); // end am5.ready()
