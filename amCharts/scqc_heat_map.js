am5.ready(function () {
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
  var root = am5.Root.new("scqc_heat_map_div");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  // Create wrapper container
  var container = root.container.children.push(
    am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
  var series = container.children.push(
    am5hierarchy.Treemap.new(root, {
      singleBranchOnly: false,
      downDepth: 1,
      upDepth: -1,
      initialDepth: 2,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      nodePaddingOuter: 0,
      nodePaddingInner: 0
    })
  );

  series.rectangles.template.setAll({
    strokeWidth: 2
  });

  // Generate and set data
  // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
  var maxLevels = 2;
  var maxNodes = 10;
  var maxValue = 100;

  var data = {
    name: "Root",
    children: [
      {
        name: "First",
        children: [
          {
            name: "Education",
            value: 100
          },
          {
            name: "Rail Sheba",
            value: 30
          },
          {
            name: "Environment Pollution",
            value: 40
          },
          {
            name: "Food Safety",
            value: 25
          },
        ]
        
      },
      {
        name: "Second",
      children: [
        {
          name: "Threat After Raising Complaint",
          value: 80
        },
        {
          name: "Holding Taxes/ Trade License",
          value: 40
        },
        {
          name: "Government Property",
          value: 25
        },
        {
          name: "Waste Management",
          value: 20
        },
      ]
      }
    ]
  };

  series.data.setAll([data]);
  series.set("selectedDataItem", series.dataItems[0]);

  // Make stuff animate on load
  series.appear(1000, 100);
});