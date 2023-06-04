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
  var root = am5.Root.new("hourly_shift_heat_map_div");

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
            name: "00.00",
            value: 100
          },
          {
            name: "01.00",
            value: 60
          },
          {
            name: "02.00",
            value: 30
          }
        ]
      },
      {
        name: "Second",
        children: [
          {
            name: "04.00",
            value: 135
          },
          {
            name: "05.00",
            value: 98
          },
          {
            name: "06.00",
            value: 56
          }
        ]
      },
      {
        name: "Third",
        children: [
          {
            name: "07.00",
            value: 335
          },
          {
            name: "08.00",
            value: 148
          },
          {
            name: "09.00",
            value: 126
          },
          {
            name: "10.00",
            value: 26
          }
        ]
      },
      {
        name: "Fourth",
        children: [
          {
            name: "11.00",
            value: 415
          },
          {
            name: "12.00",
            value: 148
          }
        ]
      },
      {
        name: "First",
        children: [
          {
            name: "13.00",
            value: 100
          },
          {
            name: "14.00",
            value: 60
          },
          {
            name: "15.00",
            value: 30
          }
        ]
      },
      {
        name: "Second",
        children: [
          {
            name: "16.00",
            value: 135
          },
          {
            name: "17.00",
            value: 98
          },
          {
            name: "18.00",
            value: 56
          }
        ]
      },
      {
        name: "Third",
        children: [
          {
            name: "19.00",
            value: 335
          },
          {
            name: "20.00",
            value: 148
          },
          {
            name: "21.00",
            value: 126
          },
          {
            name: "22.00",
            value: 26
          }
        ]
      },
      {
        name: "Fourth",
        children: [
          {
            name: "23.00",
            value: 415
          },
          {
            name: "24.00",
            value: 148
          }
        ]
      }
    ]
  };

  series.data.setAll([data]);
  series.set("selectedDataItem", series.dataItems[0]);

  // Make stuff animate on load
  series.appear(1000, 100);
});