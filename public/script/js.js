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

var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
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
    value: 8,
    "color": am4core.color("#7C81FF")
  },
  {
    title: 'Charity',
    value: 2.4,
    "color": am4core.color("#56CDAA")
  },
  {
    title: 'Dex liquidity',
    value: 19.2,
    "color": am4core.color("#5151F9")
  },
  {
    title: 'Cex liquidity',
    value: 12,
    "color": am4core.color("#DAC2EF")
  }
];
chart.angle = 30;
chart.depth = 45;

chart.innerRadius = am4core.percent(55);
// chart.legend = new am4charts.Legend();

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "value";
series.dataFields.category = "title";
series.slices.template.propertyFields.fill = "color";

chart.hiddenState.properties.opacity = 0

series.labels.template.text = "{category} {value.title}";
series.slices.template.tooltipPosition = "pointer";
series.slices.template.showTooltipOn = 'hover';

// Add and configure Series

// var container = new am4core.Container();
// container.parent = series;
// container.horizontalCenter = "middle";
// container.verticalCenter = "middle";
// container.width = am4core.percent(40) / Math.sqrt(2);
// container.fill = "white";
// var label = new am4core.Label();
// label.parent = container;
// label.text = "SUM: 123";
// label.horizontalCenter = "middle";
// label.verticalCenter = "middle";
// label.fontSize = 30;

// series.slices.template.tooltipPosition = "fixed";
// series.slices.template.tooltipX = 0;
// series.slices.template.tooltipY = 0;
// series.slices.template.tooltipHTML = `<div style="background-color: #fff; color: #333; border: 1px solid #ccc; border-radius: 5px; padding: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">{category}: {value} ыы</div>`;



if(window.innerWidth <= 767){
    series.slices.template.showTooltipOn = 'hit';
    chart.depth = 30;
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
}