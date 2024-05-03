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


chart.angle = 30;
chart.depth = 50;
chart.data = [
  {
    title: 'Special round',
    value: 6.1,
    "color": am4core.color("#6555C7")
  },
  {
    title: 'Speed',
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

chart.innerRadius = am4core.percent(55);
// chart.legend = new am4charts.Legend();

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "value";
series.dataFields.category = "title";
series.slices.template.propertyFields.fill = "color";

if(window.innerWidth <= 767){
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
}

chart.hiddenState.properties.opacity = 0
series.labels.template.text = "{category} {value.title}";