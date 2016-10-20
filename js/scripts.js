//Convert json into array of arrays to pass to google

//first create an empty array
var dataArray =[];

//create an array of headers
var headers= ['Year','Total','Boys','Girls'];

//push headers into dataArray
dataArray.push(headers);

//loop through the json pushing each object to the dataArray as an Array
json.forEach (function (d){
  dataArray.push([d.year.toString(), d.total, d.boys, d.girls]);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var dataTable = [
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]

  ]


  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chartArea:{
      top: 20,
      bottom: 50,
      left: 50,
      right: 100,
    },
    colors: ['#888', '#2c7bb6', '#d7191c'],
    curveType: 'function',
    focusTarget: "category",
    hAxis: {
      title: "Year"
    },
    vAxis: {
      title:"Infant mortality rate"
    },

  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}
