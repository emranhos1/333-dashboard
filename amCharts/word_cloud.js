am5.ready(function() {

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("service_type_word_cloud_div", am4plugins_wordCloud.WordCloud);
chart.fontFamily = "Courier New";
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.randomness = 0.1;
series.rotationThreshold = 0.5;

series.data = [ {
    "tag": "Complaints",
    "count": "5"
}, {
    "tag": "Imcomplete Complaints",
    "count": "2"
}, {
    "tag": "Queries",
    "count": "25"
}, {
    "tag": "No Response and Disconnected Call",
    "count": "30"
}, {
    "tag": "Complaint Customer Experience",
    "count": "02"
}, {
    "tag": "Emergency Assistance",
    "count": "3"
}, {
    "tag": "Ministry of Disaster Management and Relief(modmr)",
    "count": "5"
}];


series.dataFields.word = "tag";
series.dataFields.value = "count";

series.heatRules.push({
 "target": series.labels.template,
 "property": "fill",
 "min": am4core.color("#0000CC"),
 "max": am4core.color("#CC00CC"),
 "dataField": "value"
});

series.labels.template.url = "";
series.labels.template.urlTarget = "_blank";
series.labels.template.tooltipText = "{word}: {value}";

var hoverState = series.labels.template.states.create("hover");
hoverState.properties.fill = am4core.color("#FF0000");

var subtitle = chart.titles.create();

var title = chart.titles.create();
title.fontSize = 20;
title.fontWeight = "800";
});