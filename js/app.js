var date = [];
var temperature = [];
var humidity = [];
$.ajax({
    url: 'http://vps512024.ovh.net:3000/value',
    method: 'get',
		dataType: 'json',
    success: function (data) {
      var newdata = [];
      var x = 0;
      data.forEach(function(index){
      for(var i = 0; i < 20; i++){
        newdata[i] = index;
      }
    });
    console.log(newdata);
      newdata.forEach(function(index){
        date[x] = index.dateUnix;
				temperature[x] = index.temperature;
				humidity[x] = index.humidity;
				x++;
      });
      x = 0;
      var truedate = [];
      console.log(truedate);
      console.log(temperature);
			Highcharts.chart('container', {
  chart: {
      type: 'spline'
  },
  title: {
      text: 'Température (Celsius)'
  },
  xAxis: {
      categories: ['15H20', '15H25', '15H30', '15H35', '15H40', '15H45',
            '15H50', '15H55', '16H00', '16H05', '16H10', '16H15', '16H20', '16H25', '16H30', '16H35']
  },
  yAxis: {
      title: {
          text: 'Temperature'
      },
      labels: {
          formatter: function () {
              return this.value + '°';
          }
      }
  },
  tooltip: {
      crosshairs: true,
      shared: true
  },
  plotOptions: {
      spline: {
          marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
          }
      }
  },
  series: [{
      name: 'Temperature',
      marker: {
          symbol: 'square'
      },
      data: [22,22,23,22,23,24,23,22,22,21,22,23, {
            y: 25,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            }
        },24,23,22]
  }]
});

Highcharts.chart('humidity', {
chart: {
type: 'spline'
},
title: {
text: 'Humidité (%)'
},
xAxis: {
categories: ['15H20', '15H25', '15H30', '15H35', '15H40', '15H45',
      '15H50', '15H55', '16H00', '16H05', '16H10', '16H15', '16H20', '16H25', '16H30', '16H35']
},
yAxis: {
title: {
    text: 'Humidité'
},
labels: {
    formatter: function () {
        return this.value + '%';
    }
}
},
tooltip: {
crosshairs: true,
shared: true
},
plotOptions: {
spline: {
    marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
    }
}
},
series: [{
name: 'Humidité',
marker: {
    symbol: 'square'
},
data: [40,41,42,41,41,41,42,41,40,{
            y: 39,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            }
        },40,41,42,41,41]
}]
});
    }
});
