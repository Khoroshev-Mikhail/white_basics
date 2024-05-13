import { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
const data = [
  {
    title: 'Special round',
    value: 6.1,
    "color": am4core.color("#6555C7")
  },
  {
    title: 'Seed',
    value: 2.1,
    "color": am4core.color("#CAFFEF")
  },
  {
    title: 'Presale',
    value: 24,
    "color": am4core.color("#6CA7FF")
  },
  {
    title: 'Team',
    value: 8,
    "color": am4core.color("#53B7C4")
  },
  {
    title: 'Advisors',
    value: 6,
    "color": am4core.color("#41C6FF")
  },
  {
    title: 'Promotional airdrops',
    value: 0.2,
    "color": am4core.color("#9C7AFF")
  },
  {
    title: 'Ecosystem development',
    value: 12,
    "color": am4core.color("#F5B6FF")
  },
  {
    title: 'Influencers',
    value: 10.2,
    "color": am4core.color("#7C81FF")
  },
  {
    title: 'Charity',
    value: 5,
    "color": am4core.color("#56CDAA")
  },
  {
    title: 'Dex liquidity',
    value: 14.4,
    "color": am4core.color("#5151F9")
  },
  {
    title: 'Cex liquidity',
    value: 12,
    "color": am4core.color("#DAC2EF")
  }
];

export default function Pie() {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0;

    chart.data = data

    chart.angle = 30;
    chart.depth = 45;

    chart.innerRadius = am4core.percent(55);
    // chart.legend = new am4charts.Legend(); //для выноски

    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "title";
    series.slices.template.propertyFields.fill = "color";

    chart.hiddenState.properties.opacity = 0

    series.labels.template.text = "{category} {value.title}";
    series.slices.template.tooltipPosition = "pointer";
    series.slices.template.showTooltipOn = 'hover';
    series.slices.template.tooltipText = "{category}: {value.percent.formatNumber('#.0')}%";


    

    if(window.innerWidth <= 767){
        series.slices.template.showTooltipOn = 'hit';
        chart.depth = 30;
        // series.labels.template.disabled = true;
        // series.ticks.template.disabled = true;
        // series.alignLabels = false;
        series.labels.template.text = "{category}";
        series.labels.template.fill = am4core.color("white");
        series.labels.template.fontSize = 10;
        series.alignLabels = false
        series.labels.template.adapter.add("dx", function(dx, target) {
          if (target.dataItem) {
              var index = target.dataItem.index;
              switch (index) {
                  case 0:
                      return 0;
                  case 1:
                    return 10;
                  case 2:
                    return 0;
                  case 3:
                      return 0;
                  case 4:
                      return 20;
                  case 5:
                      return 0;
                  case 6:
                      return 0;
                  case 7:
                      return 10;
                  case 8:
                    return -20;
                  case 9:
                      return -10;
                  case 10:
                      return 0;
                  default:
                      return 0;
              }
          }
          return dx; // Возвращаем исходное значение для всех остальных меток
        });
        series.labels.template.adapter.add("dy", function(dy, target) {
          if (target.dataItem) {
              var index = target.dataItem.index;
              switch (index) {
                  case 0:
                      return -20;
                  case 1:
                    return -10;
                  case 2:
                    return -10;
                  case 3:
                      return 15;
                  case 4:
                      return 25;
                  case 5:
                      return 30;
                  case 6:
                      return 40;
                  case 7:
                      return 20;
                  case 8:
                    return 0;
                  case 9:
                      return -20;
                  case 10:
                      return -15;
                  default:
                      return 0;
              }
          }
          return dy; // Возвращаем исходное значение для всех остальных меток
        });
        series.labels.template.adapter.add("radius", function(radius, target) {
          if (target.dataItem) {
              var index = target.dataItem.index;
              switch (index) {
                  case 0:
                      return 40;
                  case 1:
                    return 20;
                  case 2:
                    return 20;
                  case 3:
                      return 40;
                  case 4:
                      return 50;
                  case 5:
                      return 60;
                  case 6:
                      return 80;
                  case 7:
                      return 60;
                  case 8:
                    return 0;
                  case 9:
                      return 0;
                  case 10:
                      return 20;
                  default:
                      return 0;
              }
          }
          return radius; // Возвращаем исходное значение для всех остальных меток
        });
        
        series.labels.template.adapter.add("fill", function(color, target) {
          return am4core.color("#000");
        });
    }
  }, [])
  
  useEffect(()=>{
      const elementsWithAriaLabelledby = document.querySelectorAll('[aria-labelledby]');
      elementsWithAriaLabelledby.forEach(element => {
        if (element && element.getAttribute('aria-controls') == null){
          element.parentNode?.removeChild(element);
        }
      });
  }, [])

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}
