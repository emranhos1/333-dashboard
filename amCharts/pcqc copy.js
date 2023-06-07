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
  
  var chart = am4core.create("scqc_cloud", am4plugins_wordCloud.WordCloud);
  chart.fontFamily = "Courier New";
  var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
  series.randomness = 0.1;
  series.rotationThreshold = 0.5;
  
    series.data = [{
        "tag": "Education",
        "count": "50"
    }, {
        "tag": "Rail Sheba",
        "count": "60"
    }, {
        "tag": "Environment Pollution",
        "count": "70"
    }, {
        "tag": "Food Safety",
        "count": "80"
    }, {
        "tag": "Threat After Raising Complaint",
        "count": "90"
    }, {
        "tag": "Holding Taxes/ Trade License",
        "count": "100"
    }, {
        "tag": "Government Property",
        "count": "110"
    }, {
        "tag": "Waste Management",
        "count": "120"
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